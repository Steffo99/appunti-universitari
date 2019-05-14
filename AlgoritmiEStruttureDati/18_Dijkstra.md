# Shortest paths single source

Data una sorgente all'interno di un grafo pesato, voglio determinare tutti i cammini più brevi per raggiungere ad altri nodi.

#### Grafo pesato

Un grafo pesato è un prticolare tipo di grafo che ha associato agli archi un costo da attraversarli.

## Algoritmo di Dijkstra

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
    ...

def dijkstra(graph, start):
    data = [Info() for node in graph.nodes]
    queue = PriorityQueue()
    while queue:
        node = queue.pop()
        for arc in node.connections:
            other = arc.other(node)
            if data[node].distance + arc.cost < data[other].distance:
                data[other].distance = data[node].distance + arc.cost
                queue.decrease_priority_for(other, data[other].distance)
                data[v].previous = node
    return data
```