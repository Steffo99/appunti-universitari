[[algoritmo]] di [[spanning tree construction]] che migliora il [[traversal protocol]].

> [!Summary]
> Le [[entità]] del grafo vengono visitate sequenzialmente attraverso una [[depth-first search]].
> 
> In ogni momento, a solo una [[entità]] è permesso ***visitarne altre***, e questo permesso è tracciato attraverso un [[token metaforico]].

## [[Comportamento]]

L'[[entità]] [[iniziatore singolo|iniziatrice]] viene inizializzata a `LEADER`, mentre le altre vengono inizializzate a `IDLE`.

==Questo modello è brutto e sbagliato nel caso ci sia un grafo di un nodo solo...==

### `visit_next(self)`

Definiamo una funzione che si ripeterà più volte che invia il token al primo nodo non visitato dal nodo attuale, e quando non rimangono più token, notifica il nodo genitore.
```rust
impl Entity {
	fn visit_next(self) {
		if self.unvisited.length() > 0 {
			state!(VISITED);
			let entity = self.unvisited.pop();
			send!(entity, Token::Forward);
		}
		else {
			if(self.parent) {
				send!(self.parent, Token::Finished);
			}
			state!(DONE);
		}
	}
}
```

### `LEADER`

L'[[entità]] `LEADER` ***notifica tutti i suoi vicini che è stata visitata***:
```rust
spontaneously!({
	self.unacknowledged = self.neighbours.clone();
	self.unvisited = self.neighbours.clone();
	self.parent = null;
	self.children = vec![];
	send!(self.unvisited, Visited::Sender);
})
```

***Quando tutti i vicini hanno risposto, inizia la visita:***
```rust
on_receive!(
	Visited::Receiver => {
		self.unacknowledged.remove(sender);
		if self.unacknowledged.length() == 0 {
			state!(VISITED);
			self.visit_next();
		}
	}
)
```

### `IDLE`

Una [[entità]] `IDLE` è in attesa di ricevere il [[token metaforico]].  
***Quando lo riceve, notifica tutti i vicini della cosa, come fatto dal leader***:
```rust
spontaneously!({
	self.unacknowledged = self.neighbours.clone();
	self.unvisited = self.neighbours.clone();
	self.children = vec![];
})

on_receive!(
	Token::Forward => {
		self.parent = sender;
		self.unvisited.remove(sender);
		send!(self.unvisited, Visited::Sender);
	}

	Visited::Receiver => {
		self.unacknowledged.remove(sender);
		if self.unacknowledged.length() == 0 {
			state!(VISITED);
			self.visit_next();
		}		
	}

	Visited::Sender => {
		self.unvisited.remove(sender);
		send!(sender, Visited::Receiver);
	}
)
```

### `VISITED`

Una [[entità]] `VISITED` ha già ricevuto il [[token metaforico]] in precedenza.

Può ricevere ***solo*** un `Token::Finished`, che indica che l'[[entità]] mittente ha terminato l'elaborazione; essa viene aggiunta all'albero, e poi la visita continua:
```rust
on_receive!(
	Token::Finished => {
		self.children.push(sender);
		self.visit_next();
	}
)
```

***Non è possibile che riceva `Visited::Sender`, in quanto è già stata rimossa da `self.unvisited`.***

***Per lo stesso motivo, `Token::BackEdge` sono stati rimossi dall'algoritmo.***

### `DONE`

Un [[entità]] `DONE` sa tutte le informazioni possibili sui suoi vicini.

Non fa nient'altro.

## [[algoritmo corretto|Correttezza]]

==...==

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

Tutti i [[canale di comunicazione|canali]] vengono visitati due volte, uno da `Visited::Sender`, e uno da `Visited::Receiver`:
$$
\color{LightCoral} 2 \cdot Channels
$$

In più, tutti i nodi tranne il [[leader]] invieranno almeno una volta `Token::Forward` e `Token::Finished`. 

$$
\color{SpringGreen} 2 \cdot (Entities - 1)
$$

Dunque, il numero di messaggi inviati sarà:
$$
{\color{LightCoral} 2 \cdot Channels}
+
{\color{SpringGreen} 2 \cdot (Entities - 1)}
$$

Essendo il grafo connesso, $(Entities - 1)$ è obbligatoriamente minore di $Channels$, quindi possiamo riscrivere la riga precedente come:
$$
{\color{LightCoral} 2 \cdot Channels}
+
{\color{SpringGreen} 2 \cdot Channels}
=
4 \cdot Channels
$$

In [[notazione asintotica]], è:
$$
\Large O(Channels)
$$

> [!Note]
> Coincide ***asintoticamente*** con il lower bound.

### [[Tempo]]

L'invio di `Visited::Sender` e `Visited::Receiver` corrisponde al tempo di attraversamento di un [[albero]]:
$$
\color{SkyBlue} 2 \cdot (Entities - 1)
$$

In più, tutte le [[entità]] devono inviare sequenzialmente `Token::Forward` e `Token::Finished`:
$$
\color{Lavender} 2 \cdot Entities
$$

Dunque, il tempo necessario sarà:
$$
{\color{SkyBlue} 2 \cdot (Entities - 1)}
+
{\color{Lavender} 2 \cdot Entities}
=
4 \cdot Entities - 2
$$

In [[notazione asintotica]], è:
$$
\Large O(Entities)
$$

> [!Note]
> ***Coincide asintoticamente*** con il lower bound.
