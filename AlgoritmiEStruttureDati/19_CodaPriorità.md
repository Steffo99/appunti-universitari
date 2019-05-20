# Coda con priorità

Una coda normale, ma invece che avere solo l'elemento si ha una coppia (elemento, priorità).

La priorità viene usata per determinare l'ordine dei valori della coda.

E' una struttura di dati astratta: non sappiamo l'implementazione.

Ne esistono di due tipi: uno in cui si dà priorità al valore di priorità più basso e uno in cui invece si dà priorità al valore più alto.

```python
class PriorityQueue:
    def __init__(): ...
    def insert(new_elem: Element): ...
    def minimum() -> Element: ...
    def pop() -> Element: ...
    def decrease_priority_for(elem: Element, priority: int): ...
```

## Implementazione con lista

Implementando la coda con priorità con una lista...

- `insert()` costa `O(1)`
- `minimum()` costa `O(n)`
- `pop()` costa `O(n)`
- `decrease_priority_for()` costa `O(n)`

## Implementazione con lista ordinata

Implementando la coda con priorità con una lista ordinata...

- `insert()` costa `O(n)`
- `minimum()` costa `O(1)`
- `pop()` costa `O(1)`
- `decrease_priority_for()` costa `O(n)`
