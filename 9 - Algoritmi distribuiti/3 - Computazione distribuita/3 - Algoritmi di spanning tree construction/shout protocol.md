[[algoritmo]] di [[spanning tree construction]], basato sul [[flooding v3]].

## [[comportamento]]

> [!Summary]
> Ciascuna [[entità]] chiede ai propri vicini se può entrare a fare parte dello [[spanning tree]], e loro ***rispondono di sì oppure di no***.

Il [[leader]] viene inizializzato a `LEADER`, le altre [[entità]] vengono inizializzate a `IDLE`.

### `LEADER`

[[messaggio|Chiede]] [[impulso spontaneo|spontaneamente]] ai suoi [[vicini di un'entità|vicini]] se possono entrare a fare parte dello [[spanning tree]] con `Question`, poi diventa `ACTIVE`.

### `IDLE`

In attesa di ricevere `Question`.

Quando ne riceve una, risponde `Yes`, poi ripete `Question` ai propri [[vicini di un'entità|vicini]] (tranne il mittente) e diventa `ACTIVE`.

### `ACTIVE`

In attesa di risposte `Yes` o `No`.

Se la risposta è `Yes`, aggiunge il mittente allo [[spanning tree]].

Inoltre, [[contatore|conta]] tutte le risposte che ha ricevuto, passando a `DONE` quando sono tante quante i vicini a cui ha inviato la domanda.

Essendo già parte dello [[spanning tree]], risponde alle `Question` con `No`.

### `DONE`

Non fa nient'altro.


## [[algoritmo corretto|Correttezza]]

> [!Success]
> 
> Dato che:
> 1. Tutte le [[entità]] tranne il [[leader]] rispondono affermativamente una sola volta.
> 2. Una domanda e una risposta affermativa [[arco di un grafo|collegano]] le due [[entità]] coinvolte.
> 
> Allora, il [[grafo]] risultante è un [[albero]] [[grafo connesso|connesso]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Channels)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Channels)$ |

### [[comunicazione]]

Si osserva che questo [[algoritmo]] è simile al [[flooding v3]], ma con le ***[[entità]] raggiunte che inviano anche una risposta***.

#### Singoli scambi di [[messaggio|messaggi]]

Controlliamo che e quanti messaggi attraversano i [[canale di comunicazione|canali]].

##### Scoperta di una nuova [[entità]]

Un'[[entità]] invia `Question`, l'altra risponde con `Yes`:
$$
\color{LightCoral} (2 \cdot (Entities - 1))
$$ 
##### Incontro di due [[entità]] conosciute

Entrambe inviano `Question` in tutti i casi che non sono quello precedente:
$$
\color{SpringGreen} (2 \cdot (Channels - (Entities - 1)))
$$

Entrambe poi rispondono `Answer::No`:
$$
\color{SkyBlue} (2 \cdot (Channels - (Entities - 1)))
$$

#### Costo totale

Il costo computazionale quindi è:
$$
{\color{LightCoral} (2 \cdot (Entities - 1)}
+
{\color{SpringGreen} (2 \cdot (Channels - (Entities - 1)))}
+
{\color{SkyBlue} (2 \cdot (Channels - (Entities - 1)))}
$$

Espanso:
$$
{\color{LightCoral} 2 \cdot Entities - 2}
+
{\color{SpringGreen} 2 \cdot Channels - 2 \cdot Entities + 2}
+
{\color{SkyBlue} 2 \cdot Channels - 2 \cdot Entities + 2}
$$

Ridotto:
$$
4 \cdot Channels - 2 \cdot Entities + 2
$$

Infine, raccogliendo, si nota che è esattamente il doppio del [[flooding v3]]:
$$
2 \cdot (2 \cdot Channels - (Entities - 1))
$$

In [[notazione asintotica]], è sempre:
$$
\Large O(Channels)
$$

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

Il [[grafo]] potrebbe essere un [[cammino di un grafo]], che richiederebbe che ogni arco venisse attraversato, quindi sicuramente:
$$
\Large O(Channels)
$$

