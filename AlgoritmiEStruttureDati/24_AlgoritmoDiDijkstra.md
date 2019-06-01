# Algoritmo di Dijkstra

L'_Algoritmo di Dijkstra_ è un algoritmo che risolve il problema del **percorso più breve da una sorgente singola** per grafi con pesi **reali positivi** `\mathbb{R}^+`.

L'algoritmo trova tutti i percorsi più brevi per raggiungere qualsiasi nodo del grafo partendo da un dato nodo, assieme al costo richiesto per farlo.

## Funzionamento

L'algoritmo di Dijkstra separa i nodi già visitati da quelli non ancora visitati creando una frontiera

> TODO

## Costo computazionale

`O(nodi + archi) log nodi)`

- Inizializzazione: `O(nodi)`
- Creazione coda priorità: `O(nodi log nodi)`
- Ciclo: `O((nodi + archi) log nodi)`

## Pseudocodice

```python
import math

def dijkstra(graph, start):
    data = [Info() for node in graph.nodes]
    queue = PriorityQueue()
    while queue:
        node = queue.pop()
        # Rilassamento del nodo
        for arc in node.connections:
            # Rilassamento dell'arco
            other = arc.other(node)
            if data[node.number].distance + arc.cost < data[other].distance:
                data[other].distance = data[node.number].distance + arc.cost
                queue.decrease_priority_for(other, data[other].distance)
                data[v].previous = node
    return data
```

## Visualizzazione

[Visualgo](https://visualgo.net/en/sssp)
