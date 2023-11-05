[[algoritmo]] di [[spanning tree construction]].

> [!Summary]
> Le [[entità]] del grafo vengono visitate sequenzialmente attraverso una [[depth-first search]].
> 
> In ogni momento, a solo una [[entità]] è permesso eseguire codice, e questo permesso è tracciato attraverso un [[token metaforico]].

## [[Comportamento]]

L'[[entità]] [[iniziatore singolo|iniziatrice]] viene inizializzata a `LEADER`, mentre le altre vengono inizializzate a `IDLE`.

==Questo modello è brutto...==

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

L'[[entità]] `LEADER` inizia la visita:
```rust
spontaneously!({
	self.unvisited = self.neighbours.clone();
	self.parent = null;
	self.children = vec![];
	state!(VISITED);
	self.visit_next();
})
```

### `IDLE`

Una [[entità]] `IDLE` è in attesa di ricevere il [[token metaforico]]:
```rust
on_receive!(
	Token::Forward => {
		self.parent = sender;
		self.unvisited.remove(sender);
		state!(VISITED);
		self.visit_next();
	}
)
```

### `VISITED`

Una [[entità]] `VISITED` ha già ricevuto il [[token metaforico]] in precedenza, e se lo riceve, lo rifiuta con `Token::BackEdge`, che porta a una nuova visita da parte del mittente:
```rust
on_receive!(
	Token::Forward => {
		self.unvisited.remove(sender);
		send!(sender, Token::BackEdge);
	}
	Token::BackEdge => {
		self.visit_next();
	}
)
```

Può anche ricevere un `Token::Finished`, che indica che l'[[entità]] mittente ha terminato l'elaborazione; essa viene aggiunta all'albero, e poi la visita continua:
```rust
on_receive!(
	Token::Finished => {
		self.children.push(sender);
		self.visit_next();
	}
)
```

### `DONE`

Un [[entità]] `DONE` sa tutte le informazioni possibili sui suoi vicini.

Non fa nient'altro.

## [[algoritmo corretto|Correttezza]]

==...==

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

Tutti i [[canale di comunicazione|canali]] vengono visitati due volte, uno da `Token::Forward`, e uno da `Token::BackEdge` o `Token::Finished`:
$$
2 \cdot Channels
$$

In [[notazione asintotica]], è:
$$
\Large O(Channels)
$$

> [!Note]
> Coincide strettamente con il lower bound.

### [[Tempo]]

Essendo la visita del grafo sequenziale, il tempo richiesto coincide con il costo di comunicazione:
$$
2 \cdot Channels
$$

In [[notazione asintotica]], è:
$$
\Large O(Channels)
$$

> [!Warning]
> Non coincide con il lower bound!
