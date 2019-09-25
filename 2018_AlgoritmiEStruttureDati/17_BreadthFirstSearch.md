#### Breadth-first search (BFS)

La _breadth-first search_ è un algoritmo che visita **ogni livello** dell'albero in ordine, dal più basso al più alto.

## Funzionamento

> 1. __Visita radice__
> 2. __Visita figli__
> 3. __Visita nipoti__
> 4. __Visita pronipoti__

Si può implementare con una coda, in cui verranno inseriti i figli del nodo visitato da visitare ed estratti dopo avere completato la visita del livello attuale.

## Pseudocodice 

```python
def bfs(radice):
    c = Queue()
    c.enqueue(radice)
    while not c.is_empty():
        nodo = c.dequeue()
        print(nodo)
        for figlio in nodo.figli:
            nodo.enqueue(figlio)
```
