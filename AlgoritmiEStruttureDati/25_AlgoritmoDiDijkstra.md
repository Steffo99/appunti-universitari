# Algoritmo di Dijkstra

L'_Algoritmo di [Dijkstra](https://upload.wikimedia.org/wikipedia/commons/8/85/Dijkstra.ogg)_ è un algoritmo che risolve il problema del **percorso più breve da una sorgente singola** per grafi con pesi **reali positivi** `\mathbb{R}^+`.

L'algoritmo trova tutti i percorsi più brevi per raggiungere qualsiasi nodo del grafo partendo da un dato nodo, assieme al costo richiesto per farlo.

## Funzionamento

1. Separiamo tutti i nodi del grafo in due gruppi: **visitati** e **non visitati**.  
    - Tutti i nodi partono da **non visitati**.
2. Per ogni nodo, manteniamo un valore "**costo richiesto per raggiungerlo**", che verrà cambiato man mano che l'algoritmo avanza.
    - Il costo di partenza è `+∞`.
    - Il costo sarà **definitivo per i nodi visitati**, e **provvisorio per i non visitati**.
3. Creiamo un insieme detto _frontiera_ che conterrà tutti i **nodi non visitati adiacenti** a quelli visitati.
4. Prendiamo il nodo iniziale, che avrà un **costo di `0`**, e definiamolo il nodo _attuale_.
5. Finchè ci sono dei nodi non sono stati visitati, ripetiamo il seguente ciclo:
    1. Aggiungiamo i nodi adiacenti al nodo attuale alla frontiera.
        - Il costo per raggiungerli sarà il **costo per il nodo attuale sommato al costo dell'arco** che li connette al nodo attuale.  
          Se questo **costo** risulta essere **minore del costo provvisorio** precedente, esso **diventerà il nuovo costo**.
        - Questa operazione è detta _rilassamento dell'arco_.
    2. Facciamo diventare **visitato** il nodo attuale.
        - Il percorso che abbiamo fatto per raggiungerlo è obbligatoriamente il più breve.
    3. Il prossimo nodo attuale sarà il nodo di frontiera con un costo più basso.
        - Per questo, è possibile definire l'algoritmo di Dijkstra come un **algoritmo greedy**.

### Non funziona se...

L'algoritmo smette di funzionare nel caso in cui siano presenti **costi negativi** e il grafo non sia **aciclico**, in quanto non saremmo mai in grado di rendere visitato un nodo.

## Costo computazionale

| Categoria | Upper bound |
|-----------|-------------|
| Tempo | `O(nodi + archi) log nodi)` |

### Scomposizione

- Inizializzazione: `O(nodi)`
- Creazione coda priorità: `O(nodi log nodi)`
- Ciclo: `O((nodi + archi) log nodi)`

## Pseudocodice

```python
import math

class Info:
    def __init__(self, distance=math.inf, previous=None):
        self.distance = distance
        self.previous = previous

def dijkstra(graph, start):
    data = [Info() for node in graph.nodes]
    queue = PriorityQueue([start])
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

## Visualizzazione

[Visualgo](https://visualgo.net/en/sssp)
