# Grafi

Sono strutture dati che rappresentano le connessioni tra elementi.

Sono composti da:
- **Vertexes** o nodi
- **Edges** o archi
    - Orientati / diretti
    - Non orientati / non diretti

## Proprietà

### Nodi

- Il loro _grado_ è dato dal **numero degli archi** che vi incidono.
    - Se sono orientati, si hanno anche l'_in-degree_ e l'_out-degree_.

### Archi

- Connettono due nodi.
    - Se non sono orientati, sono _incidenti_ sui due nodi.
    - Se sono orientati, sono _uscenti_ da un nodo ed _entranti_ nell'altro.
- Sono sempre meno del **quadrato dei nodi**.

### Catena

Una catena è una sequenza di nodi collegati tra di loro da archi non orientati.

### Cammino

Un cammino è una sequenza di nodi collegati da archi orientati nella stessa direzione.

### Grafo completo (cricca, clique)

Il grafo completo è un grafo in cui è presente un arco per ogni coppia di nodi.  
Ha `((n-1)n)/2` archi.

Se è orientato, deve avere un arco in entrambe le direzioni per ogni coppia.  
Di conseguenza, ha `(n-1)n` archi.

## Rappresentazione

Per semplicità, consideriamo i nostri nodi numerati da 1 a `n`.

### Matrice di adiacenza

Matrice di dimensione `n * n` in cui vengono marcate le caselle collegate.

> ##### Grafo non orientato
> | |1|2|3|
> |-|-|-|-|
> |1|░|░|░|
> |2|█|░|░|
> |3|█| |░|
>
> Esistono gli archi 1-2 e 1-3, ma non 2-3.

> ##### Grafo orientato
> | |1|2|3|
> |-|-|-|-|
> |1|░|█| |
> |2|█|░| |
> |3|█| |░|
>
> Esistono gli archi 1->2, 2->1 e 3->1, ma non 2->3, 1->3 e 3->2.

E' poco efficiente come spazio; richiede `O(n^2)` memoria!

### Liste di adiacenza

Array di liste di dimensione indefinita, le quali contengono i puntatori ai nodi dei vicini di 1.

> |Posizione|Lista|
> |-|-|
> |1|[2, 3]|
> |2|[1]|
> |3|[1]|
>
> Esistono gli archi 1->2, 1->3, 2->1 e 3->1, ma non gli altri.

E' meno efficente come tempo se devo verificare l'esistenza di un arco (`O(max-out-degree)`), ma impiego meno memoria e lo stesso tempo o migliore se devo effettuare operazioni sui vicini.

### Visite

Esistono due modalità di visita per i grafi, le stesse che esistono per gli alberi:

- DFS
- BFS

In entrambi i casi, non visito mai due volte lo stesso nodo, e ottengo degli _alberi_, il cui insieme viene detto **foresta di copertura**.

#### Depth First Search

I nodi lontani vengono `yield`ed prima di quelli vicini.

L'algoritmo è `O(n * numero-di-archi)`. 

Ci può essere utile per capire quali nodi appartengono a quali alberi e se il grafo contiene o no un ciclo.

##### Grafi diretti

Posso fare la stessa DFS dei grafi indiretti, ma devo considerare solo gli archi uscenti.

Non funziona però l'algoritmo usato per individuare i cicli.

Abbiamo quattro tipi di archi:
- _Tree_, archi che ci fanno **scoprire un nuovo nodo**
- _Forward_, archi che ci portano a un **discendente**
- _Back_, archi che ci portano ad un **antenato**
- _Cross_, archi che **connettono due sottoalberi** diversi

Per determinare se un grafo diretto ha un ciclo, possiamo fare una visita in profondità e **cercare gli archi _Back_**. 

Usiamo due array inizializzati a 0 chiamati `pre` e `post`, che ci indica se un nodo è stato scoperto e se è terminata la visita.  
Inoltre, creiamo una variabile `clock` che avanza ad ogni evento.  
Alla scoperta di un nuovo nodo, mettiamo il valore attuale di `clock` all'interno di `pre[n]`.
Alla fine della visita di un nodo invece mettiamo il valore di `clock` in `post[n]`.

Possiamo identificare gli archi in questo modo _durante la visita_:
- _Tree_: `pre[dst] == 0`
- _Forward_: `pre[src] < pre[dst] && post[dst] > 0`
- _Back_: `pre[dst] < pre[src] && post[dst] == 0`
- _Cross_: Tutti gli altri (`post[dst] < pre[src]`)

Possiamo identificare gli archi in questo modo _a fine visita_:
- _Tree_: `pre[dst] < pre[dst] < post[dst] < pre[src]`
- _Forward_: `pre[dst] < pre[dst] < post[dst] < pre[src]`
- _Back_: `pre[src] < pre[dst] < post[dst] < post[src]`
- _Cross_: `pre[dst] < post[dst] < pre[src] < post[src]`

#### Breadth First Search

I nodi vicini vengono `yield`ed prima di quelli lontani.

## DAG (Direct Acyclic Graph)

E' un grafo diretto senza cicli.

Possiamo effettuare un ordinamento tra i nodi, detto **ordine topologico**: effettuiamo una procedura di _linearizzazione_.

I primi elementi dei DAG sono detti _Source_ (_Sorgente_), mentre gli ultimi sono detti _Sink_ (_Pozzo_).

## Componenti fortemente connesse (in grafi diretti)

1. Per ogni coppia di nodi `∀ u, v ∈ V' : ∃ un cammino u->v in G'`
2. Massimale (non può diventare più grande)

Se un grafo è **una sola** _componente fortemente connessa_ allora si dice che l'intero grafo è _fortemente connesso_.

> Praticamente una componente fortemente connessa è un gruppo di nodi tra i quali si può viaggiare liberamente da e a qualsiasi nodo al suo interno.
