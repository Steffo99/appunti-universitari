# Grafo

Un _grafo_ è una struttura dati che rappresenta elementi interconnessi tra loro.

Esistono due tipi di grafi: _orientati_ e _non orientati_.

Per semplicità, consideriamo i nostri nodi numerati da 1 a `n`.

## Proprietà

- Gli elementi sono rappresentati tramite _nodi_.
    - Il loro _grado_ è dato dal **numero degli archi** che vi incidono.
        - Se il grafo è orientato, hanno anche un _in-degree_ (**numero di archi entranti**) e un _out-degree_ (**numero di archi uscenti**).
- Le connessioni tra elementi sono rappresentate tramite _archi_.
    - Un arco _incide_ esattamente su **due nodi**.
        - Se il grafo è orientato, sono _uscenti_ da uno dei due nodi ed _entranti_ nell'altro.
    - Sono matematicamente meno del **quadrato dei nodi**.

## Grafi particolari

### Catena

Una _catena_ è un **grafo non orientato** composto da una **sequenza di nodi** aventi un **grado massimo di 2** tutti collegati tra loro.

### Cammino

Un _cammino_ è un **grafo orientato** composto da una **sequenza di nodi** aventi un **in-degree** e un **out-degree** **massimo di 1**, collegati tra loro in modo che partendo dal primo e seguendo gli archi sia possibile arrivare all'ultimo.

### Cricca

Una _cricca_ è un grafo in cui **tutti i nodi sono collegati tra loro**.

Se il grafo è **non orientato**, la cricca ha `((n-1)n)/2` archi.

Se il grafo è **orientato**, ha per ogni coppia un arco in entrambe le direzioni, quindi ha `(n-1)n` archi.

### Direct Acyclic Graph

Un _DAG_ è un grafo diretto che non contiene nessun ciclo.

Su di esso possiamo effettuare un ordinamento, detto _linearizzazione_, tra i nodi: otteniamo l'_ordine topologico_.

I primi elementi dei DAG sono detti _Source_ (_Sorgente_), mentre gli ultimi sono detti _Sink_ (_Pozzo_).

#### Albero

Un **albero** può essere considerato un DAG con una **sorgente singola** e le **foglie come pozzi**.

### Grafo fortemente connesso

Un insieme di nodi `V` di un **grafo diretto** `G` si dice una _componente fortemente connessa_ se:

1. Per ogni coppia di nodi `∀ u, v ∈ V' : ∃ un cammino u->v in G'`
2. Massimale (non può diventare più grande)

> Praticamente una componente fortemente connessa è un gruppo di nodi tra i quali si può viaggiare liberamente da e a qualsiasi nodo al suo interno.

Un grafo si dice _fortemente connesso_ se l'insieme `V` coincide con l'insieme dei nodi del grafo `G`.

> Se partendo da qualsiasi nodo di un grafo riesco ad arrivare a qualsiasi altro nodo, allora il grafo è fortemente connesso.

Inoltre, se creiamo un nuovo grafo, in cui **ogni nodo rappresenta una componente fortemente connessa** del nostro grafo iniziale, **otteniamo un DAG**, perchè tutti i cicli sono stati integrati nella componente.

### Trasposto di un grafo

Il _trasposto_ di un **grafo diretto** `G` è il grafo stesso con gli archi che però vanno nella **direzione opposta**.

### Grafo pesato

Un _grafo pesato_ è un particolare grafo che associa a ciascun arco un **costo** per attraversarlo.

#### Costi negativi

I costi possono anche essere negativi: rappresenteranno allora un **guadagno** ottenuto attraversando il nodo.

### Minimum spanning tree

Un _minimum spanning tree_ è il **sottoinsieme degli archi** di un **grafo non diretto** che **connettono tutti i nodi** con il **minor costo possibile**.

I MST hanno [molte proprietà](https://en.wikipedia.org/wiki/Minimum_spanning_tree#Properties); sono troppe da scrivere qui, e probabilmente non ci interesseranno nemmeno.

## Implementazione tramite matrice di adiacenza

Possiamo implementare un grafo creando una **matrice di `bool` di dimensione `n * n`** in cui le **caselle collegate sono vere** e le caselle non collegate sono false.

> Ad esempio, possiamo implementare un grafo non orientato in questo modo (`█` indica l'esistenza di un collegamento e ` ` indica la sua assenza):
>
> | |1|2|3|
> |-|-|-|-|
> |1|░|░|░|
> |2|█|░|░|
> |3|█| |░|
>
> Esistono gli archi `1-2` e `1-3`, ma non esiste un collegamento `2-3`.

> Un grafo orientato invece si può implementare così:
>
> | |1|2|3|
> |-|-|-|-|
> |1|░|█| |
> |2|█|░| |
> |3|█| |░|
>
> Esistono gli archi `1->2`, `2->1` e `3->1`, ma non ci sono collegamenti `2->3`, `1->3` e `3->2`.

### Costo computazionale

#### Tempo

Le matrici di adiacenza portano alla realizzazione di algoritmi molto veloci: verificare l'esistenza di un arco è in `O(1)`!

Abbiamo però penalità significative quando vogliamo effettuare operazioni sugli archi: ad esempio, trovare il trasposto di un grafo implementato con una matrice di adiacenza è in `O(nodi²)`.

#### Memoria

E' poco efficiente in quanto a memoria: l'upper bound è in `O(n^2)`. 

## Implementazione tramite liste di adiacenza

Un'alternativa alla matrice di adiacenza è quella di creare un'**array di liste**, le quali contengono i **vicini di ciascun nodo**.

> |Posizione|Lista|
> |-|-|
> |1|[2, 3]|
> |2|[]|
> |3|[1]|
>
> Esistono gli archi `1->2`, `1->3`, e `3->1`, ma non esistono `2->1`, `2->3` e `3->2`.

### Costo computazionale

#### Tempo

Utilizzando le liste di adiacenza, il tempo richiesto per verificare l'esistenza di un arco sale a `O(max-out-degree)`.

E' efficace però quando il problema che vogliamo risolvere riguarda operazioni su archi: trovare la trasposta è in `O(archi)`.

#### Memoria 

La memoria richiesta dalle liste di adiacenza è minore di quella delle matrici: l'upper bound è in `O(nodi + archi)`.

## Visualizzazione

[visualgo.net](https://visualgo.net/en/graphds)
