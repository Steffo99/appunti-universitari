# Merge sort

Vogliamo sviluppare un algoritmo che, dati n valori, li ordini, in modo da averli ordinati e non decrescenti.

## Specifiche

- **Input:** A[n]
- **Output:** B, \forall i < n, A[i] \leq A[i+1]

## Sviluppo

Vogliamo provare a risolvere questo problema con la tecnica del _divide et impera_.

Prendiamo due pezzi della sequenza, entrambi già ordinati. Come li metto in ordine tra loro?

#### Divide

Divido A in **due parti**.

#### Impera

Metto in ordine entrambe le parti.

#### Combina

Unisco le due metà.

#### Caso base

La parte è composta da un numero.

### Pseudocodice

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

# Merge

## Specifiche

- **Input:** Due sequenze di numeri ordinate
- **Output:** Una sequenza di numeri ordinata

## Sviluppo

Costruiamo una nuova sequenza uguale alla sequenza 1, ma aggiungiamo alla fine un valore **sentinella** sempre maggiore di tutti gli elementi contenuti.

> | 1 | 3 | 7 | 8 | ∞ |

Facciamo la stessa cosa per la sequenza due.

> | 2 | 4 | 5 | 6 | ∞ |

Prendo poi man mano il numero più piccolo che vedo attualmente, e lo vado a mettere nella sequenza iniziale.

> | 1 | 2 | 3 |   |   |   |   |   |  
> |   |   | 7 | 8 | ∞ |  
> |   | 4 | 5 | 6 | ∞ |  

Continuo finchè non ho messo tutti i numeri; la _sentinella_ ci garantisce che non usciremo mai dalla sequenza, in quanto essa è sempre maggiore di tutti gli altri numeri.

> | 1 | 2 | 3 | 4 | 5 | 6 |   |   |
> |   |   | 7 | 8 | ∞ |
> |   |   |   |   | ∞ |

Quando rimangono solo le _sentinelle_ significa che abbiamo aggiunto tutti gli elementi, e quindi abbiamo finito.

> | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
> |   |   |   |   | ∞ |
> |   |   |   |   | ∞ | 

# Mergesort+merge

## Costo computazionale

```latex
T(n) =\\
\\
\theta(1) \qquad n=1
2 T(\frac{n}{2}) + \theta(n) \qquad n \neq 1
```

Applicando il Master Theorem, otteniamo:

```latex
T(n) =\\
\\
\theta(1) \qquad n=1
O(n log n) \qquad n \neq 1
```

# Lower bound dell'ordinamento per confronto

Per calcolare il lower bound del problema, dobbiamo pensare a tutte le possibili permutazioni della sequenza: esse sono `n!`.

Ogni nuovo confronto riduce l'insieme delle permutazioni "compatibili", fino ad avere una sola possibilità.

Il caso peggiore è quando le permutazioni compatibili (insieme A) `A \geq \frac{n!}{2}`.

Concatenando tutti i casi peggiori, abbiamo la sequenza ordinata dopo `i` passi.

```latex
n! \leq (\frac{n}{2})^\frac{n}{2}\\
```

Applichiamo un logaritmo da entrambi i lati.

```latex
\log(n!) \leq \log((\frac{n}{2})^\frac{n}{2})\\
```

```latex
\log(n!) \leq \frac{n}{2} \log \frac{n}{2}\\
```

Da qui, continuare a casa come esercizio per arrivare a `Omega(n log n)`.
