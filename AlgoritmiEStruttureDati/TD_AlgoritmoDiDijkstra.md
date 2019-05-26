> TODO: Reformat.

# Shortest paths single source

Data una sorgente all'interno di un grafo pesato, voglio determinare tutti i cammini più brevi per raggiungere ad altri nodi.

#### Grafo pesato

Un grafo pesato è un prticolare tipo di grafo che ha associato agli archi un costo da attraversarli.

##### Con pesi negativi

Un grafo con pesi negativi potrebbe essere usato per modellare perdite e guadagni.  
Nullifica però l'algoritmo di Dijkstra, perchè si formerebbero dei cicli.

## Algoritmo di Dijkstra

### Requisiti

- Grafo senza pesi negativi

### Costo

- Inizializzazione: `O(n)`
- Creazione coda priorità: `O(n log n)`
- Ciclo: `O((n + m) log n)`

#### Considerando la queue come una lista

- Inizializzazione: `O(n)`
- Creazione lista: `O(1)`
- Ciclo: `O(m * n)` (credo)

### Implementazione

```python
import math

class Info:
    def __init__(self):
        self.distance = math.inf
        self.previous = None

class Arc:
    def __init__(self, start, end, cost):
        self.start = start
        self.end = end
        self.cost = cost

    def other(self, node):
        return self.end if self.start == node else self.start


class Node:
    def __init__(self, number):
        self.number = number

    @property
    def connections(self): ...


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

### Visualizzazione

[Visualgo](https://visualgo.net/en/sssp)

## Algoritmo con pesi negativi

### Requisiti

- Il nostro grafo deve essere un _DAG_: lo dobbiamo linearizzare.
- L'inizio può essere solo il primo nodo del grafo linearizzato.

### Implementazione

```python
def search(graph):
    # Assumo che il grafo sia già stato linearizzato
    # Rilasso tutti i nodi in ordine, perchè so che per ogni nodo, tutti i nodi precedenti sono già stati visitati.
    for node in graph.nodes:
        for arc in node.connections:
            # Rilassamento dell'arco
            other = arc.other(node)
            if data[node.number].distance + arc.cost < data[other].distance:
                data[other].distance = data[node.number].distance + arc.cost
                queue.decrease_priority_for(other, data[other].distance)
                data[v].previous = node
    return data
```

## Algoritmo di Bellman-Ford

L'algoritmo di Bellman-Ford rilassa tutti i nodi tante volte quanto la lunghezza del cammino più lungo possibile all'interno del grafo (`nodi - 1`).

### Implementazione

```python
def bellmanford(graph):
    for i in range(len(graph.nodes) - 1):
        for arc in graph.arcs:
            # TL;DR rilassa l'arco
            arc.relax()
    for arc in graph.arcs:
        if arc.relax():
            raise Exception("Negative loop detected")
    return graph
```

### Visualizzazione

[Visualgo](https://visualgo.net/en/sssp)
