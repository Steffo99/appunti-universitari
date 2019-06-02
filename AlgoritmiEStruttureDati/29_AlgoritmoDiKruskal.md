# Algoritmo di Kruskal

L'_Algoritmo di Kruskal_ è un algoritmo **greedy** che **trova il minimum spanning tree** di un grafo.

## Funzionamento

1. Ripetiamo questa procedura finchè tutti i nodi non sono connessi:
    1. Prendiamo ad ogni passo **l'arco meno costoso** del grafo non ancora aggiunto all'insieme.
    2. Assicuriamoci che **non si creino cicli**: se non se ne verrebbero a creare, possiamo **aggiungere l'arco all'insieme**.
        - Gli archi devono quindi connettere nodi in **componenti connesse diverse**.
            - Possiamo rappresentare le componenti connesse con un **Disjoint Set**.

## Costo computazionale

| Categoria | Upper bound |
|-----------|-------------|
| Tempo | `O(archi²)` |

### Scomposizione

- DisjointSet.__init__(): `O(archi)`
- Per ogni ciclo: `O(archi²)`
    - DisjointSet.find_set(): `O(1)`
    - DisjointSet.union(): `O(archi)`

## Pseudocodice

```python
def minimum_spanning_tree_kruskal(graph):
    ds = DisjointSet()
    for node in graph.nodes:
        ds.create_set(node)
    arcs = []
    sorted_arcs = sorted(graph.arcs, key=lambda arc: arc.cost)
    for arc in sorted_arcs:
        if ds.find_set(node.start) != ds.find_set(node.end):
            arcs.append(arc)
            ds.union(node.start, node.end)
    return arcs
```