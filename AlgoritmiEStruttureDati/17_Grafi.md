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

> //TODO: ripassare qui

#### Breadth First Search

I nodi vicini vengono `yield`ed prima di quelli lontani.
