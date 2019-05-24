# Algoritmo di Kruskal

## Funzionamento

**Ordino in modo non decrescente gli archi** e li aggiungo uno ad uno all'albero, assicurandomi che non si creino cicli.

Per assicurarmi che non si creino cicli, devo verificare che i nodi si trovino in componenti connesse diverse.

## Costo computazionale

- DisjointSet.__init__(): `O(n)`
- Per ogni ciclo: `O(n²)`
    - DisjointSet.find_set(): `O(1)`
    - DisjointSet.union(): `O(n)`

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