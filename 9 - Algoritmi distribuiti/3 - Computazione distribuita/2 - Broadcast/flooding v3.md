[[algoritmo]] di [[broadcast problem]] che riduce il [[comunicazione|numero di messaggi]] rispetto al [[flooding v2]].

> [!Summary]
>  Il [[leader]] invia il suo [[messaggio]] iniziale a tutti i vicini, e, se è la prima volta che lo ricevono, loro lo inoltrano a loro volta ai loro vicini ***tranne quello che gliel'ha inviato***.

## [[Comportamento]]

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo [[messaggio]]:
```rust
spontaneously! {
	send!(*, Message {...});
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
		send!(!sender, msg);
		state!(DONE);
	},
}
```

### `DONE`

Non fa niente.

## [[algoritmo corretto|Correttezza]]

Vedi [[flooding v2]].

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

Il costo computazionale è lo stesso del [[flooding v2]], ma con un trasferimento in meno per ogni [[entità]] che non è il [[leader]]:
$$
2 \cdot Channels - (Entities - 1)
$$

In [[notazione asintotica]], è sempre:
$$
\Large O(Channels)
$$

### [[Spazio]]

Un multiplo del [costo di comunicazione](#Comunicazione), sempre [[notazione asintotica|asintotico]] a:
$$
\Large O(Channels)
$$

### [[Tempo]]

Vedi [[flooding v2]].
