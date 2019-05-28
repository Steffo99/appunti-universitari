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

#### Memoria 

La memoria richiesta dalle liste di adiacenza è minore di quella delle matrici: l'upper bound è in `O(nodi + archi)`.

>TODO

## Componenti fortemente connesse (in grafi diretti)

1. Per ogni coppia di nodi `∀ u, v ∈ V' : ∃ un cammino u->v in G'`
2. Massimale (non può diventare più grande)

Se un grafo è **una sola** _componente fortemente connessa_ allora si dice che l'intero grafo è _fortemente connesso_.

> Praticamente una componente fortemente connessa è un gruppo di nodi tra i quali si può viaggiare liberamente da e a qualsiasi nodo al suo interno.

## Trasposto

In un grafo diretto, il **trasposto** di un grafo G è G con gli archi che vanno nella direzione opposta.

Facendo una **DFS nel trasposto** scopro i nodi che hanno un cammino verso di me.

Ogni albero della visita in profondità della trasposta è una _componente fortemente connessa_.

## Grafo delle componenti fortemente connesse

Il grafo delle componenti fortemente connesse è sempre un **DAG**, in quanto se ci fossero dei cicli, allora le componenti con il ciclo si unirebbero.

## Relazioni tra `post`

In una componente fortemente connessa, il `post` massimo è sempre maggiore del `post` della componente trasposta.

## Costo algoritmo

1. DFS(G) -> `O(nodi+archi)`
2. Calcolo G^T -> `O(archi)` con liste di adiacenza, `O(n^2)` con matrice
3. DFS(G^T) -> `O(nodi+archi)`

Risultato: `O(nodi+archi)` o `O(n^2)`

## Breadth-first search 

Possiamo usare una **Breadth-first search** per determinare i nodi raggiungibili con un cammino lungo `X`, oppure per determinare tutti i cammini più brevi per raggiungere un certo nodo nel mio grafo.
