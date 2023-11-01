[[algoritmo]] di [[broadcast problem]] che risolve l'incorrettezza del [[flooding v1]].

## Funzionamento

Il [[leader]] invia il suo messaggio iniziale a tutti i vicini, e, ***se è la prima volta che lo ricevono***, loro lo inoltrano a loro volta ai loro vicini.

## [[Comportamento]]

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo messaggio:
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

Se riceve il messaggio, lo inoltra a tutti i suoi vicini, poi passa allo stato `DONE`:
```rust
on_receive! {
	_ => {
		send!(*, msg);
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

Per via dell'ipotesi di [[grafo connesso]], tutte le [[entità]] riceveranno eventualmente il [[messaggio]] inviato.

Con la ricezione del [[messaggio]], eventualmente tutte le [[entità]] diventeranno `DONE`, raggiungendo [[terminazione locale]].

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

Attraverso ogni [[canale di comunicazione|canale]] passeranno al massimo due [[messaggio|messaggi]]:
- $0$, se l'algoritmo termina prima che il [[canale di comunicazione|canale]] sia esplorato
- $1$, se l'[[entità]] di destinazione non è ancora stata scoperta
- $2$, se entrambe le [[entità]] connesse sono scoperte contemporaneamente

Dunque, i [[messaggio|messaggi]] trasferiti saranno:
$$
2 \cdot Channels
$$

Che, in [[notazione asintotica]], è:
$$
\Large O(Channels)
$$

### [[Spazio]]

Un multiplo del [costo di comunicazione](#Comunicazione), sempre [[notazione asintotica|asintotico]] a:
$$
\Large O(Channels)
$$

### [[Tempo]]

Coincide con il lower bound del [[broadcast problem]].
