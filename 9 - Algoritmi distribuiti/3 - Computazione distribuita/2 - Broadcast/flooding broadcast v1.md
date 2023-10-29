[[Algoritmo]] ***incorretto*** di [[broadcast]].

Ogni [[entità]] manda l'informazione a tutti i suoi vicini.

## [[Stato]]

- `INITIATOR`: quello che manda il messaggio
- `SLEEPING`: quelli che non mandano il messaggio

## [[comportamento]]

### `INITIATOR`

Se ricevo il messaggio non faccio niente.

### `SLEEPING`

Se ricevo il messaggio lo propago ai miei vicini.

## Incorrettezza

L'algoritmo molto probabilmente non terminerà!
