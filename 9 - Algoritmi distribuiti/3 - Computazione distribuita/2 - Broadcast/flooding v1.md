[[algoritmo]] di [[broadcast problem]].

## [[Comportamento]]

> [!Summary]
> Il [[leader]] invia il suo messaggio iniziale a tutti i vicini, e loro lo inoltrano a loro volta ai loro vicini.

Il [[leader]] è inizializzato allo stato `LEADER`, mentre tutti gli altri sono inizializzati allo stato `SLEEPING`.

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo [[messaggio]] a tutti i vicini.

Ignora qualsiasi altra cosa riceva.

### `SLEEPING`

Se riceve il [[messaggio]] del `LEADER`, lo inoltra a tutti i vicini.

## [[algoritmo corretto|Correttezza]]

> [!Failure]
> 
> Questo algoritmo potrebbe non terminare mai, in quanto due [[entità]] potrebbero inoltrarsi il [[messaggio]] del [[#`LEADER`]] all'infinito.
