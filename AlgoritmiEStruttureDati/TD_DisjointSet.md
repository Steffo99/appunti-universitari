# Disjoint set

Il _disjoint set_ è una struttura dati che mantiene una collezione di elementi in **sottoinsiemi disgiunti**.

Ogni insieme ha un elemento **rappresentante**: il primo elemento che è stato aggiunto.

```python
class DisjointSet:
    def create_set(element): "Crea un sottoinsieme con un solo elemento."
    def union(element_a, element_b): "Unisce i sottoinsiemi che contengono `element_a` e `element_b`."
    def find_set(element): "Trova l'insieme che contiene l'elemento."
```