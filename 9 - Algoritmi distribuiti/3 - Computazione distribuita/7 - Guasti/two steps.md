[[algoritmo]] di [[consenso con fallimenti su grafo completo]], che estende [[one step]].

## Funzionamento

 Il [[leader]] invia il suo [[messaggio]] iniziale ad alcuni nodi, e questi, se lo ricevono direttamente da esso, lo inoltrano a loro volta a tutti i loro vicini, che però non lo inoltreranno.

## [[Comportamento]]

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo [[messaggio]]:
```rust
spontaneously! {
	send!(0..MAX_FAULTS, Message {leader: true});
	state!(DONE);
}
```

Se lo riceve indietro, non fa niente:
```rust
on_receive! {
	_ => {},
}
```

### `SLEEPING`

Se riceve il [[messaggio]], lo inoltra a tutti i suoi vicini, poi passa allo stato `DONE`:
```rust
on_receive! {
	_ => {
		send!(!sender, Message {leader: false});
		state!(DONE);
	},
}
```

### `DONE`

Non fa niente:
```rust
on_receive! {
	_ => {},
}
```

## [[algoritmo corretto|Correttezza]]

==...==

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

==...==
### [[Spazio]]

==...==
### [[Tempo]]

==...==