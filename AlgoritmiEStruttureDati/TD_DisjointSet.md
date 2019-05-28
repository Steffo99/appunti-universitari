# Disjoint set

Il _disjoint set_ è una struttura dati che mantiene una collezione di elementi in **sottoinsiemi disgiunti**.

Ogni insieme ha un elemento **rappresentante**: il primo elemento che è stato aggiunto.

```python
class DisjointSet:
    def create_set(element): "Crea un sottoinsieme con un solo elemento."
    def union(element_a, element_b): "Unisce i sottoinsiemi che contengono `element_a` e `element_b`."
    def find_set(element): "Trova l'insieme che contiene l'elemento."
```

## Implementazione tramite array

Possiamo implementare il disjoint set tramite due array: uno per il **puntatore al rappresentante** e uno per il **rango** dell'insieme.

Un singoletto avrà allora sè stesso come rappresentante e rango `0`.


### Costo computazionale

- *create_set()*: `O(1)`
- *find_set()*: `O()`
- *union()*: `O()`

### Pseudocodice

```python
class DisjointSet:
    def union(self, x, y):
        if x.parent.rank > y.parent.rank:
            y.parent = x.parent
        else.
            x.parent = y.parent


```