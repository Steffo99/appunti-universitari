[[algoritmo]] di [[spanning tree construction]].

## [[comportamento]]

> [!Summary]
> Le [[entità]] del grafo vengono visitate sequenzialmente attraverso una [[depth-first search]].
> 
> In ogni momento, a solo una [[entità]] è permesso eseguire codice, e questo permesso è tracciato attraverso un [[token metaforico]].

Il [[leader]] viene inizializzato a `LEADER`, le altre [[entità]] vengono inizializzate a `IDLE`.

### `LEADER`

Inizia possedendo il [[token metaforico]].

Inizia la visita inviando il [[token metaforico|token]] al primo [[vicini di un'entità|vicino]] non visitato con il tag `Forward`, diventando `VISITED`.

### `IDLE`

In attesa di ricevere il [[token metaforico]].

Quando riceve il token `Forward`:
1. memorizza il mittente come genitore;
2. procede con la visita inviando il [[token metaforico|token]] al primo suo [[vicini di un'entità|vicino]] non visitato con il tag `Forward`;
3. diventa `VISITED`.

### `VISITED`

Ha già ricevuto il [[token metaforico]] in precedenza.

Se lo riceve con il tag `Forward`, lo rimanda al mittente con il tag `AlreadyVisited`.

Se lo riceve con il tag `AlreadyVisited`, invia il [[token metaforico|token]] al prossimo [[vicini di un'entità|vicino]] non visitato con il tag `Forward`.

Se lo riceve con il tag `Backward`, aggiunge all'[[albero]] il mittente, e poi invia il [[token metaforico|token]] al prossimo [[vicini di un'entità|vicino]] non visitato con il tag `Forward`.

Se riceve nuovamente il [[token metaforico|token]], e non ha altri vicini da visitare, restituisce il [[token metaforico|token]] al genitore, poi diventa `DONE`.

### `DONE`

Non fa nient'altro.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> 
> Dato che:
> 1. Tutte le [[entità]] tranne il [[leader]] inviano `Finished` una sola volta.
> 2. Un `Forward` e un `Backward`  [[arco di un grafo|collegano]] le due [[entità]] coinvolte.
> 
> Allora, il [[grafo]] risultante è un [[albero]] [[grafo connesso|connesso]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Channels)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Channels)$ |

### [[comunicazione]]

Tutti i [[canale di comunicazione|canali]] vengono visitati due volte, uno da `Token::Forward`, e uno da `Token::BackEdge` o `Token::Finished`:
$$
2 \cdot Channels
$$

In [[notazione asintotica]], è:
$$
\Large O(Channels)
$$

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

Essendo la visita del grafo sequenziale, il tempo richiesto coincide con il costo di comunicazione:
$$
2 \cdot Channels
$$

In [[notazione asintotica]], è:
$$
\Large O(Channels)
$$
