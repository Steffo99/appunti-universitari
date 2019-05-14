# Shortest paths single source

Data una sorgente all'interno di un grafo pesato, voglio determinare tutti i cammini più brevi per raggiungere ad altri nodi.

#### Grafo pesato

Un grafo pesato è un prticolare tipo di grafo che ha associato agli archi un costo da attraversarli.

##### Con pesi negativi

Un grafo con pesi negativi potrebbe essere usato per modellare perdite e guadagni.  
Nullifica però l'algoritmo di Dijkstra, perchè si formerebbero dei cicli.

## Algoritmo di Dijkstra

### Costo

- Inizializzazione: `O(n)`
- Creazione coda priorità: `O(queue.__init__)`
- Ciclo: `O(n * queue.pop + m * queue.decrease_priority_for)`

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
    data = [Info() for node in
    def connections(self): ...


def dijkstra(graph, start):
    data = [Info() for node in graph.nodes]
    queue = PriorityQueue()
    while queue:
        node = queue.pop()
        for arc in node.connections:
            other = arc.other(node)
            if data[node.number].distance + arc.cost < data[other].distance:
                data[other].distance = data[node.number].distance + arc.cost
                queue.decrease_priority_for(other, data[other].distance)
                data[v].previous = node
    return data
```