# Disjoint set

Il _disjoint set_ è una struttura dati che rappresenta elementi di un insieme raggruppati in **sottoinsiemi disgiunti**.

## Metodi

```python
class DisjointNode:
    def __init__(self): ...
    def find_set(self): "Trova il rappresentante dell'elemento."
    def union(self, other): "Unisce i sottoinsiemi che contengono questo nodo e `other`."
```

## Implementazione tramite array

Possiamo implementare il disjoint set con due array: uno per l'**indice del rappresentante** e uno per il **rango dell'insieme**.

Un singoletto avrà **sè stesso come rappresentante** e **rango `0`**.

### Costo computazionale

- *create_set()*: `O(1)`
- *find_set()*: `O(h)`
- *union()*: `O(h)`

### Pseudocodice

```python
class DisjointNode:
    def __init__(self):
        self.parent = self
        self.rank = 0

    def find_set(self):
        element = self
        while self.parent != element:
            element = self.parent
        return element

    def union(self, other):
        repres_self = self.find_set()
        repres_other = other.find_set()
        if repres_self == repres_other:
            return
        if repres_self.rank < repres_other.rank:
            repres_greater = repres_other
            repres_lesser = repres_self
        else:
            repres_greater = repres_self
            repres_lesser = repres_other
        repres_lesser.parent = repres_greater
        if repres_greater.rank == repres_lesser.rank:
            repres_greater.rank += 1
```

### Visualizzazione

[cs.usfca.edu](https://www.cs.usfca.edu/~galles/JavascriptVisual/DisjointSets.html)
