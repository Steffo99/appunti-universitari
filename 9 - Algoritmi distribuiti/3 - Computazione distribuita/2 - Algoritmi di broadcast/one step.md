[[algoritmo]] di [[broadcast problem su grafo completo]].

## Funzionamento

 Il [[leader]] invia il suo [[messaggio]] a tutti i vicini.

## [[comportamento]]

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo [[messaggio]]:
```rust
spontaneously! {
	send!(0..MAX_FAULTS, Message {leader: true});
	state!(DONE);
}
```

### `SLEEPING`

Non fa niente:
```rust
on_receive! {
	_ => {},
}
```

## [[algoritmo corretto|Correttezza]]

==...==

## [[costo computazionale distribuito|Costo computazionale]]

### [[comunicazione]]

==...==
### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/spazio]]

==...==
### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

==...==