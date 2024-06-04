# Counting sort

Il _counting sort_ è un approccio diverso all'ordinamento: **non usa il confronto**!

## Requisiti

Il counting sort può essere utilizzato solo su **sequenze di numeri interi**, e solo se **siamo a conoscenza del minimo e del massimo** dei numeri contenuti nell'array, ed essi non sono troppo distanti uno dall'altro.  
(La memoria occupata dal counting sort aumenta linearmente con la differenza tra minimo e massimo!)

Per semplicità, consideriamo il **minimo `0`**.  
L'input allora sarà una sequenza di interi `A`, e il valore del **massimo `k`**, tale che `∀ n ∈ A, 0 \leq n \leq K`.

## Funzionamento

Il counting sort **conta le ripetizioni** delle chiavi nella sequenza originale e in seguito **sovrascrive i valori** della sequenza con i valori ordinati ripetuti il numero di volte che sono stati individuati nella sequenza.

> ```
> 1 4 5 3 4 1 4 2 5 1
> ```
>
> L'`1` appare 3 volte, il `2` 1 volta, il `3` 1 volta, il `4` tre volte e il `5` due volte.
>
> La sequenza viene quindi così sovrascritta:
> ```
> 1 1 1 3 4 1 4 2 5 1  # Sovrascriviamo la sequenza con 1 ripetuto 3 volte
> 1 1 1 2 3 4 4 4 5 1  # Sovrascriviamo la sequenza con 2, 3, 4 ripetuti rispettivamente 1 1 e 3 volte
> 1 1 1 2 3 4 4 4 5 5  # Sovrascriviamo la sequenza con 5 ripetuto 2 volte: abbiamo finito!
> ```  

Esiste anche una **versione stabile** del counting sort che, invece che sovrascrivere, **sposta i valori**, mantenendo le informazioni aggiuntive nel caso invece che interi fossero altri tipi di dati.

## Costo computazionale

| Categoria | Upper bound | Lower bound | Tight bound |
|-----------|-------------|-------------|-------------|
| Tempo | `O(k + n)` | `Ω(k + n)` | **`θ(k + n)`** |

L'algoritmo è composto da quattro parti:
- Ricerca del minimo e massimo (in `θ(n)`)
- Inizializzazione dell'indice (in `θ(k)`)
- Conteggio dei numeri (in `θ(n)`)
- Sovrascrittura dei numeri (in `θ(k + n)`)

`2 + O(k) + O(n) + O(k + n) -> O(k + n)`

Notiamo che `k` è costante, l'algoritmo è `O(n)`, estremamente efficiente.

## Pseudocodice

```python
def counting_sort(lista: typing.List[int]):
    """Ordina in-place una lista con il counting sort."""
    # Trovo la dimensione della lista
    dim = len(lista)
    # Trovo il massimo e il minimo all'interno della lista
    minimo = min(lista)
    massimo = max(lista)
    # Creo l'indice dei numeri, in modo che sia lungo k e pieno di 0
    indice = [0 for _ in range(minimo, massimo+1)]
    # Conto i numeri presenti, scorrendo su lista e aggiungendo 1 al numero corrispondente
    for i in range(dim):
        indice[lista[i]] += 1
    # Sovrascrivo i numeri nella lista
    count = 0
    for pos, val in enumerate(indice):
        for _ in range(val):
            indice[count] = pos
            count += 1

def stable_counting_sorted(lista: typing.List[int], k: int) -> typing.List[int]:
    """Ordina stabilmente una lista con il counting sort stabile, e restituiscila."""
    # Trovo la dimensione della lista
    dim = len(lista)
    # Trovo il massimo e il minimo all'interno della lista
    minimo = min(lista)
    massimo = max(lista)
    # Creo l'indice dei numeri, in modo che sia lungo k e pieno di 0
    indice = [0 for _ in range(minimo, massimo+1)]
    # Conto i numeri presenti, scorrendo su lista e aggiungendo 1 al numero corrispondente
    for i in range(dim):
        indice[lista[i]] += 1
    # Faccio diventare l'indice "il numero di numeri \leq i"
    for i in range(len(indice)):
        if i == 0:
            continue
        indice[i] += indice[i-1]
    assert indice[-1] == dim
    # Creo una nuova lista, che sarà quella che verrà restituita
    nuova = [None for _ in range(dim)]
    # Inizio a posizionare i numeri, al contrario
    for i in range(0, dim, -1):
        nuova[indice[lista[i]]] = lista[i]
        indice[lista[i]] -= 1
    return nuova
```
