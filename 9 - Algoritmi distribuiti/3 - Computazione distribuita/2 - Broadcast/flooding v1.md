[[algoritmo]] ***[[algoritmo corretto|incorretto]]*** di [[broadcast problem]].

## Funzionamento

Il [[leader]] invia il suo messaggio iniziale a tutti i vicini, e loro lo inoltrano a loro volta ai loro vicini.
## [[Comportamento]]

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo messaggio:
```rust
spontaneously! {
	send!(*, Message {...});
}
```

Se lo riceve indietro, non fa niente:
```rust
on_receive! {
	_ => {},
}
```

### `SLEEPING`

Se riceve il messaggio, lo inoltra a tutti i suoi vicini:
```rust
on_receive! {
	_ => send!(*, msg)
}
```

## [[algoritmo corretto|Correttezza]]

> [!DANGER] Algoritmo incorretto
> 
> Questo algoritmo non termina mai!  
> È riportato qui solo come base per le due versioni successive.
