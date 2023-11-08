[[algoritmo]] di [[spanning tree construction]] che migliora lo [[shout protocol]].

> [!Summary]
> Ciascuna [[entità]] chiede ai propri vicini se può entrare a fare parte dello [[spanning tree]], e loro rispondono sì ***oppure nulla***.

## [[Comportamento]]

Il [[leader]] viene inizializzato a `LEADER`, le altre [[entità]] vengono inizializzate a `IDLE`.

### `LEADER`

Il [[leader]] chiede [[impulso spontaneo|spontaneamente]] alle [[entità]] se possono entrare a fare parte dello [[spanning tree]], poi si attiva in attesa di risposte:
```rust
spontaneously!({
	self.received = 0;
	send!(*, Question);
	state!(ACTIVE);
})
```

### `IDLE`

Un'[[entità]] `IDLE` è in attesa di domande.

Quando ne riceve una, risponde positivamente, poi ripete la domanda e si attiva a sua volta:
```rust
on_receive!(
	Question => {
		self.received = 1;
		self.parent = sender;
		send!(sender, Answer::Yes);
		send!(!sender, Question);
		if self.neighbours.length() > self.received {
			state!(DONE)
		}
		else {
			state!(ACTIVE)
		};
	},
)
```

### `ACTIVE`

Un [[entità]] `ACTIVE` è in attesa di risposte.

Se la risposta è positiva, aggiunge il mittente allo spanning tree: 
```rust
on_receive!(
	Answer::Yes => {
		self.neighbours_in_tree.insert(sender);
	}
)
```

E poi la conteggia:
```rust
on_receive!(
	Answer => {
		self.received += 1
		if self.neighbours.length() > self.received {
			state!(DONE);
		}
	},
)
```

***Invece che rispondere alle domande, esse vengono interpretate come una risposta negativa***:
```rust
on_receive!(
	Question => {
		self.received += 1
		if self.neighbours.length() > self.received {
			state!(DONE);
		}
	}
)
```

### `DONE`

Un [[entità]] `DONE` sa tutte le informazioni possibili sui suoi vicini.

Non fa nient'altro.

## [[algoritmo corretto|Correttezza]]

Dato che:
1. Tutte le [[entità]] tranne il [[leader]] inviano esattamente un `Answer::Yes`.
2. L'invio e la ricezione di `Answer::Yes` [[arco di un grafo|collegano]] le due [[entità]] coinvolte.

Allora, il [[grafo]] risultante è un [[albero]] [[grafo connesso|connesso]].

## [[costo computazionale distribuito|Costo computazionale]]

Questo protocollo è equivalente al [[flooding v3]], ma con le [[entità]] raggiunte che inviano anche una risposta.

### [[Comunicazione]]

#### Singoli scambi di messaggi

Controlliamo che e quanti messaggi attraversano i [[canale di comunicazione|canali]].

##### Scoperta di un nuovo nodo

Un nodo invia `Question`, l'altro risponda con `Answer::Yes`.

Si verifica in:
$$
\color{LightCoral} (2 \cdot (Entities - 1))
$$ 
##### Incontro di due nodi conosciuti

Entrambi i nodi inviano `Question` in tutti i casi che non sono quello precedente:
$$
\color{SpringGreen} (2 \cdot (Channels - (Entities - 1)))
$$

***Non viene inviata una risposta in questo caso.***

##### Costo totale

$$
{\color{LightCoral} (2 \cdot (Entities - 1))}
+
{\color{SpringGreen} (2 \cdot (Channels - (Entities - 1)))}
$$

Espanso:
$$
{\color{LightCoral} 2 \cdot Entities - 2}
+
{\color{SpringGreen} 2 \cdot Channels - 2 \cdot Entities + 2}
$$


Ridotto:
$$
2 \cdot Channels
$$

In [[notazione asintotica]], è sempre:
$$
\Large O(Channels)
$$

## Duale

Il duale di questo algoritmo è la [[leader election su grafo aciclico]].
