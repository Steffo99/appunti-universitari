[[algoritmo]] di [[broadcast problem]] che riduce il [[comunicazione|numero di messaggi]] rispetto al [[flooding v2]].

## [[comportamento]]

> [!Summary]
>  Il [[leader]] invia il suo [[messaggio]] iniziale a tutti i vicini, e, se è la prima volta che lo ricevono, loro lo inoltrano a loro volta ai loro vicini ***tranne quello che gliel'ha inviato***.

Il [[leader]] è inizializzato allo stato `LEADER`, mentre tutti gli altri sono inizializzati allo stato `SLEEPING`.

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo [[messaggio]] a tutti i vicini, poi passa allo stato `DONE`***.

### `SLEEPING`

Se riceve il [[messaggio]] del `LEADER`, lo inoltra a tutti i vicini ***tranne quello che gliel'ha inviato***, poi passa allo stato `DONE`.

### `DONE`

Non fa niente.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> 
> Per via dell'ipotesi di [[grafo connesso]], tutte le [[entità]] eventualmente riceveranno e inoltreranno il [[messaggio]] del [[leader]], diventando `DONE`.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] |
|-|-|
| [[comunicazione]] | $O(Channels)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Channels)$ |

### [[comunicazione]]

Il costo computazionale è lo stesso del [[flooding v2]], ma ***con un trasferimento in meno per ogni [[entità]] che non è il [[leader]]***:
$$
2 \cdot Channels - (Entities - 1)
$$

In [[notazione asintotica]], è sempre:
$$
\Large O(Channels)
$$

> [!Note]
> 
> ***Coincide con il lower bound del [[broadcast problem]].***

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

Il [[grafo]] potrebbe essere un [[cammino di un grafo]], che richiederebbe che ogni arco venisse attraversato, quindi sicuramente:
$$
\Large O(Channels)
$$

> [!Note]
>Coincide con il lower bound del [[broadcast problem]].
