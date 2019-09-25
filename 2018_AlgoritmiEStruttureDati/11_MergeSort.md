# Merge sort

Il _merge sort_ è una soluzione **ricorsiva** all'ordinamento per confronto.

## Funzionamento

Per questo algoritmo, utilizziamo la tecnica del **divide et impera**.

1. _Divide_: Divido A in **due parti**.
2. _Impera_: Metto **separatamente in ordine** le parti.
3. _Unisci_: **Unisco** le due parti.

Consideriamo come **caso base** della ricorsione una parte composta da un numero, che ovviamente è già ordinata con sè stessa.

### Merge

Per **unire le due parti** usiamo una funzione detta `merge()`.

Costruiamo una nuova sequenza uguale alla sequenza 1, ma **aggiungiamo alla fine un valore sentinella** sempre maggiore di tutti gli elementi contenuti.

> ```
> | 1 | 3 | 7 | 8 | ∞ |
> ```

Facciamo **la stessa cosa** per la sequenza due.

> ```
> | 2 | 4 | 5 | 6 | ∞ |
> ```

Prendo i primi numeri delle due sequenze e **metto il più piccolo nella sequenza iniziale**.

> ```
> | 1 | 2 | 3 |   |   |   |   |   |  
> |   |   | 7 | 8 | ∞ |  
> |   | 4 | 5 | 6 | ∞ |  
> ```

**Continuo** finchè non ho messo tutti i numeri; **grazie alla sentinella non usciremo mai dalla sequenza**, in quanto essa è sempre maggiore di tutti gli altri numeri.

> ```
> | 1 | 2 | 3 | 4 | 5 | 6 |   |   |  
> |   |   | 7 | 8 | ∞ |  
> |   |   |   |   | ∞ |
> ```

Quando **rimangono solo le sentinelle** significa che abbiamo aggiunto tutti gli elementi, e quindi abbiamo finito.

> ```
> | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |  
> |   |   |   |   | ∞ |  
> |   |   |   |   | ∞ | 
> ```


## Costo computazionale

| Categoria | Upper bound | Lower bound | Tight bound |
|-----------|-------------|-------------|-------------|
| Tempo | `O(n log n)` | `Ω(n log n)` | **`θ(n log n)`** |

Il merge sort è un algoritmo ricorsivo con un **caso base in tempo costante** e che **richiama sè stesso 2 volte**.

```latex
T(n) =\\
\\
Θ(1) \qquad n=1\\
2 T(\frac{n}{2}) + Θ(n) \qquad n \neq 1
```

Applicando il **caso particolare del Master Theorem**, otteniamo:

```latex
T(n) =\\
\\
Θ(1) \qquad n=1\\
Θ(n log n) \qquad n \neq 1
```

## Pseudocodice

```python
def merge_sorted(part):
    # Caso base
    if len(part) == 1:
        return part
    # Divide
    middle = len(part) // 2
    part_a = part[:middle]
    part_b = part[middle:]
    # Impera
    sort_a = merge_sorted(part_a)
    sort_b = merge_sorted(part_b)
    # Combina
    return merge(sort_a, sort_b)
```

## Visualizzazione

[hackerearth.com](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)

[visualgo.net](https://visualgo.net/bn/sorting) (Nota: visualizza solo la fase _Unisci_ del sort)