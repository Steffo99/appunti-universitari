# Coda con priorità

La _coda con priorità_ è una struttura dati dal funzionamento molto simile a quello di una coda, ma invece che restituire il primo elemento inserito, essa restituisce l'**elemento con il valore di priorità minore**.

## Proprietà

- Ogni elemento è una coppia costituita da **valore** e **priorità** (un numero intero).
- Nuovi elementi possono essere aggiunti solo tramite il **metodo `insert()`**
- Gli elementi possono essere estratti solo tramite il **metodo `pop()`**
    - Verranno restituiti i valori inseriti secondo la strategia **Lower Priority** (l'elemento con la priorità minore sarà il primo ad essere restituito).
- E' possibile diminuire la priorità di un elemento (e quindi anticipare la sua estrazione)

## Metodi

```python
class PriorityQueue:
    def __init__(self): ...
    def insert(self, new_elem: Element): ...
    def minimum(self) -> Element: ...
    def pop(self) -> Element: ...
    def decrease_priority_for(self, elem: Element, priority: int): ...
```

## Implementazione con lista

E' possibile implementare la coda con priorità tramite una **lista**: l'inserimento di nuovi valori diventerà molto efficiente, ma tutte le altre operazioni saranno linearmente lente.

### Costo computazionale

- *insert()*: `O(1)`
- *minimum()*: `O(n)`
- *pop()*: `O(n)`
- *decrease_priority_for()*: `O(n)`

## Implementazione con lista ordinata

Implementando la coda con priorità con una **lista ordinata** si avrà un costo di ordinamento elevato negli inserimenti e modifiche alla priorità, ma costi costanti nell'estrazione di un elemento.

### Costo computazionale

- *insert()*: `O(n)`
- *minimum()*: `O(1)`
- *pop()*: `O(1)`
- *decrease_priority_for()*: `O(n)`

## Implementazione con heap

La **soluzione migliore** è quella di implementare la coda con priorità tramite un **heap**: tutti i costi saranno logaritmici, eccetto l'inserimento che sarà costante.

- `insert()` costa `O(1)`
- `minimum()` costa `O(log n)`
- `pop()` costa `O(log n)`
- `decrease_priority_for()` costa `O(log n)`

## Approfondimenti

Esistono code con priorità che restituiscono **l'elemento con priorità maggiore**, invece che quello minore.
