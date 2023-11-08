[[algoritmo]] di [[broadcast problem]] che risolve l'incorrettezza del [[flooding v1]].

## [[Comportamento]]

> [!Summary]
> Il [[leader]] invia il suo messaggio iniziale a tutti i vicini, e, ***se è la prima volta che lo ricevono***, loro lo inoltrano a loro volta ai loro vicini.

Il [[leader]] è inizializzato allo stato `LEADER`, mentre tutti gli altri sono inizializzati allo stato `SLEEPING`.

### `LEADER`

All'[[impulso spontaneo|inizio dell'algoritmo]], invia il suo [[messaggio]] a tutti i vicini, ***poi passa allo stato `DONE`***.

### `SLEEPING`

Se riceve il [[messaggio]] del `LEADER`, lo inoltra a tutti i vicini, ***poi passa allo stato `DONE`***.

### ***`DONE`***

***Ignora qualsiasi cosa riceva.***

## [[algoritmo corretto|Correttezza]]

> [!Success]
> 
> Per via dell'ipotesi di [[grafo connesso]], tutte le [[entità]] eventualmente riceveranno e inoltreranno il [[messaggio]] del [[leader]], diventando `DONE`.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Channels)$ |
| [[tempo]] | $O(Channels)$ |

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

### [[Tempo]]

Il [[grafo]] potrebbe essere un [[cammino]], che richiederebbe che ogni arco venisse attraversato, quindi sicuramente:
$$
\Large O(Channels)
$$

> [!Note]
> Coincide con il lower bound del [[broadcast problem]].
