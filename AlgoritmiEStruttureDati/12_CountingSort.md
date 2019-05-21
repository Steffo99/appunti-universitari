# Counting sort

Il _counting sort_ è un approccio diverso all'ordinamento. Infatti, **non usa il confronto**, ma **conta le ripetizioni** e ordina in base a quelle.

Ha lo svantaggio però di poter essere utilizzato solo su sequenze di numeri interi, e solo se **siamo a conoscenza del minimo e del massimo** dei numeri contenuti nell'array.  

Consideriamo il minimo come zero.  
L'input allora sarà una sequenza di interi `A`, e il valore del massimo `k`, tale che `∀ n ∈ A, 0 \leq n \leq K`.

Esistono due versioni del counting sort: una **instabile** che sovrascrive i dati da ordinare e una **stabile** che invece li sposta.

## Funzionamento

**TODO! Guarda il pseudocodice nel frattempo, è commentato!**

## Costo computazionale

`2 + O(k) + O(n) + O(k + n) -> O(k + n)`

Notiamo che se `k` è costante, l'algoritmo è `O(n)`, estremamente efficiente.

## Pseudocodice

```python
def counting_sort(lista: typing.List[int], k: int):
    """Ordina in-place una lista con il counting sort."""
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

def stable_counting_sorted(lista: typing.List, k):
    """Ordina stabilmente una lista con il counting sort stabile, e restituiscila."""
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
