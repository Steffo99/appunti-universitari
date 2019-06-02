# Lista

Una _lista_ è una sequenza di dati immagazzinata in **blocchi di memoria qualsiasi**.

## Proprietà

Ogni dato ha un **riferimento** alla collocazione di memoria **successiva** (un puntatore): insieme, sono detti un _nodo_.

E' di **natura ricorsiva**: qualsiasi nodo di una lista può essere visto come inizio della lista con sè stesso e i suoi successivi.

## Metodi

```python
class LinkedList:
    def __init__(self, value, next: typing.Optional[Node] = None):
        self.value = value
        self.next: typing.Optional[Node] = next

    def is_empty(self) -> bool: "Restituisce se la lista è vuota o no."
    def is_full(self) -> bool: "Restituisce se la lista è piena o no.
    def append(self, value): "Aggiunge un nuovo elemento in testa alla lista."
    def insert(self, value, index): "Inserisce un elemento dopo il nodo in posizione index."
    def insert_node(self, value, node): "Inserisce un nuovo elemento subito dopo un dato nodo."
    def find(self, node) -> int: "Trova l'indice del nodo."
    def delete(self, value): "Elimina il primo nodo con quel valore dalla lista."
    def delete_node(self, node): "Elimina il nodo dalla lista."
    def forward(self, index) -> Node: "Restituisce il nodo in posizione index."
```

### Costo computazionale

#### `List.forward(index)`

Per raggiungere l'`n`-esimo elemento, bisogna _scorrere tutti gli elementi prima di esso_: è dunque un **accesso sequenziale** in **`O(n)`**.

## Visualizzazione

[visualgo.net](https://visualgo.net/en/list)