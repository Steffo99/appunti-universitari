# Visitare un grafo

Come per gli alberi radicati, esistono due modi per visitare un grafo: _depth-first search_ e _breadth-first search_.

In entrambi i casi, non visito mai due volte lo stesso nodo, e come risultato ottengo **molteplici alberi**, il cui insieme viene detto _foresta di copertura_.

Se il grafo che vogliamo visitare è diretto, allora dobbiamo **considerare come vicini solo gli archi uscenti**

## Depth-first search

La DFS ci può risultare utile per **identificare le componenti connesse** di un grafo e **identificare eventuali cicli**.

### Funzionamento

Posso utilizzare la DFS per classificare gli archi di un grafo in quattro categorie:

- _Tree_, archi che ci fanno **scoprire un nuovo nodo**
- _Forward_, archi che ci portano a un **discendente**
- _Back_, archi che ci portano ad un **antenato**
- _Cross_, archi che **connettono due sottoalberi** diversi

Usiamo due array inizializzati a 0 chiamati `pre` e `post`, grandi quanto il numero di archi del grafo, che ci indicano rispettivamente quando un nodo è stato scoperto e quando è terminata la visita.  
Inoltre, creiamo una variabile `clock` che avanza ad ogni evento.  
Alla scoperta di un nuovo nodo, mettiamo il valore attuale di `clock` all'interno di `pre[n]`.  
Alla fine della visita di un nodo invece mettiamo il valore di `clock` in `post[n]`.

**Durante la visita**, gli archi avranno i seguenti valori:
- _Tree_: `pre[dst] == 0`
- _Forward_: `pre[src] < pre[dst] && post[dst] > 0`
- _Back_: `pre[dst] < pre[src] && post[dst] == 0`
- _Cross_: Tutti gli altri (`post[dst] < pre[src]`)

**A fine visita**, gli archi avranno i seguenti valori:
- _Tree_: `pre[dst] < pre[dst] < post[dst] < pre[src]`
- _Forward_: `pre[dst] < pre[dst] < post[dst] < pre[src]`
- _Back_: `pre[src] < pre[dst] < post[dst] < post[src]`
- _Cross_: `pre[dst] < post[dst] < pre[src] < post[src]`

Se un **grafo non diretto** contiene degli **archi Back**, allora esso **conterrà un ciclo**.

#### DFS nel grafo trasposto

Se effettuo una DFS sul trasposto di un grafo, posso **scoprire i nodi che hanno un cammino verso l'origine**.

#### DFS nella componente fortemente connessa

Se effettuo una DFS in una componente fortemente connessa e nella sua trasposta, il **`post` della trasposta sarà sempre minore** del `post` della componente originale.

### Costo computazionale

| Categoria | Upper bound | Lower bound | Tight bound |
|-----------|-------------|-------------|-------------|
| Tempo | `O(nodi + archi)` | `Ω(nodi + archi)` | **`θ(nodi + archi)`** |
| Memoria | `O(nodi)` | `Ω(nodi)` | **`θ(nodi)`** |

### Visualizzazione

[visualgo.net](https://visualgo.net/en/dfsbfs)

## Breadth-first search

La BFS ci può risultare utile per **trovare tutti i nodi a una certa distanza** da un'origine.

### Costo computazionale

| Categoria | Upper bound | Lower bound | Tight bound |
|-----------|-------------|-------------|-------------|
| Tempo | `O(nodi + archi)` | `Ω(nodi + archi)` | **`θ(nodi + archi)`** |
| Memoria | `O(nodi + archi)` | `Ω(nodi + archi)` | **`θ(nodi + archi)`** |

### Pseudocodice

Come per gli alberi, la implementiamo in modo **iterativo**:

```python
queue = [starting_node]
parents = [None for node in graph.nodes]
distance = [-1 for node in graph.nodes]

# TODO: controllami quando sei più sveglio

while queue:
    node, source, distance = queue.pop(0)
    parents[node.number] = source
    distance[node.number] = distance
    for neighbour in node.neighbours:
        queue.append((neighbour, node, distance+1))
```

> Nella coda, la distanza massima tra un nodo e l'altro è 1.

### Visualizzazione

[visualgo.net](https://visualgo.net/en/dfsbfs)