# Counting sort

## Sviluppo

### Requisiti

L'algoritmo può essere applicato solo sui numeri interi e se siamo a conoscenza del più grande dei numeri contenuti nell'array.  
L'input, quindi, deve essere una **sequenza di interi** `A`, e un valore `k` tale che `∀ n ∈ A, 0 \leq n \leq K`.

### Pseudocodice

```python
def counting_sort(lista: typing.List[int], k: int):
    # Trovo la dimensione della lista
    dim = len(lista)
    # Creo l'indice dei numeri, in modo che sia lungo k e pieno di 0
    indice = [0 for _ in range(dim)]
    # Conto i numeri presenti, scorrendo su lista e aggiungendo 1 al numero corrispondente
    for i in range(dim):
        indice[lista[i]] += 1
    # Sovrascrivo i numeri nella lista
    count = 0
    for pos, val in enumerate(indice):
        for _ in range(val):
            indice[count] = pos
            count += 1
```

### Costo computazionale

`2 + O(k) + O(n) + O(k + n) -> O(k + n)`

Notiamo che se `k` è costante, l'algoritmo è `O(n)`, estremamente efficiente.

# Stabilizzando il sort

Vogliamo realizzare un counting sort che però sposti gli elementi invece che sovrascriverli.

### Pseudocodice

```python
def counting_sorted(lista: typing.List, k):
    # Trovo la dimensione della lista
    dim = len(lista)
    # Creo l'indice dei numeri, in modo che sia lungo k e pieno di 0
    indice = [0 for _ in range(dim)]
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