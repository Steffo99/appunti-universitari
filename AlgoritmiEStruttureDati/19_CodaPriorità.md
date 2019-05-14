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