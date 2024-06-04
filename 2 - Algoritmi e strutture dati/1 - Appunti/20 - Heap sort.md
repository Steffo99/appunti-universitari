# Heap sort

L'_heap sort_ è un algoritmo di ordinamento per confronto **iterativo**.

## Funzionamento

Per effettuare un heap sort, creiamo un **heap massimo** in cui inseriamo tutti i valori che vogliamo ordinare.

Una volta applicate le proprietà dell'heap, chiamiamo una versione particolare di `heap.pop()` che invece che rimuovere dall'array i valori estratti li posiziona nello spazio creatosi in fondo.

## Costo computazionale

| Categoria | Upper bound | Lower bound | Tight bound |
|-----------|-------------|-------------|-------------|
| Tempo | `O(n log n)` | `Ω(n log n)` | **`θ(n log n)`** |


