# Algoritmo di Prim

L'_Algoritmo di Prim_ è un altro algoritmo **greedy** che **trova il minimum spanning tree** di un grafo.

## Funzionamento

Creo una **coda con priorità** in cui inserisco tutti gli archi visibili dal mio albero, in cui la chiave è il **costo dell'arco**.

Per trovare l'arco con costo più piccolo posso **estrarre un arco** dalla coda: la priorità ci garantisce che esso è l'**arco meno costoso**.

Aggiungo allora un nuovo nodo all'albero, e con esso, **aggiungo alla coda** tutti gli **archi che scoprono un nuovo nodo**.

## Costo computazionale

| Categoria | Upper bound |
|-----------|-------------|
| Tempo | `O(archi + nodi log nodi)` |

## Pseudocodice

```python
import math

def minimum_spanning_tree_prim(graph, cost_array, start_node):
    # E' un Array di bool: se l'indice corrispondente al nodo è uguale a true, vuol dire che il (nodo è contenuto nell'albero.
    contains = [False for _ in range(len(graph))]
    # Contiene il precedente di ogni nodo 
    prev = [None for _ in range(len(graph))]
    # Contiene il costo per arrivare a quel nodo
    cost = [math.inf for _ in range(len(graph))]
    # Creo la priority queue
    pq = PriorityQueue(graph.arcs, key=lambda arc: arc.cost)
    # Parto dal nodo `start_index`
    # Il costo dell'origine è 0.
    cost[start_node.index] = 0
    contains[start_node.index] = True
    
    while not pq.is_empty():
        new_node = pq.pop()
        contains[new_node.index] = True
        for arc in new_node.connections:
            other_node = arc.other(new_node)
            if not contains[other_node.index] and cost[other_node.index] > arc.cost:
                cost[other_node.index] = arc.cost
                prev[other_node.index] = new_node
                pq.decrease_priority_for(other_node, arc.cost)
    # L'array di prev rappresenta un albero.
    return prev
```_