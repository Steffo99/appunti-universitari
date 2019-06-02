# Insertion sort

L'_insertion sort_ è una soluzione **iterativa** all'ordinamento per confronto.

## Funzionamento

Considero la sequenza divisa in **due parti**: una parte **ordinata** e una parte **non ordinata**.

Parto dal primo elemento della lista: è sempre ordinato con sè stesso.  
Poi, aggiungo uno alla volta i numeri della parte non ordinata a quella ordinata; prima trovo in quale posizione dovrò andare a mettere il numero, poi **faccio slittare tutti i numeri dopo quella posizione** avanti di 1, in modo da **creare lo spazio** in cui infine **inserirò** il numero.

## Costo computazionale

| Categoria | Upper bound | Lower bound | Tight bound |
|-----------|-------------|-------------|-------------|
| Tempo | `O(n²)` | `Ω(n)` | - |

Nel _caso migliore_ (**lista già ordinata**), il numero da inserire è già nella posizione giusta, quindi non devo effettuare altri confronti oltre il primo, rendendo il lower bound dell'algoritmo `Ω(n)`.

Nel _caso peggiore_ (**lista nell'ordine inverso**), dobbiamo confrontare il numero da inserire con tutti gli altri nella parte ordinata: dobbiamo allora eseguire `1+2+3+4+5+… = \frac{(n-1)(n)}{2}` confronti; ciò significa che l'upper bound è `O(n²)`!

## Pseudocodice

```python
def insertion_sorted(lista):
    # Itero su tutti i numeri della lista, dal primo all'ultimo.
    for divisore_ord in range(len(lista)):
        # Partendo dalla posizione attuale, creo l'indice di divisione numeri ordinati maggiori e minori
        divisore_magg = divisore_ord
        # Faccio slittare avanti i numeri maggiori di quello che stiamo inserendo
        # Se l'indice divisore_magg raggiunge 0, vuol dire che tutti i numeri della lista sono maggiori del numero attuale 
        while divisore_magg >= 0 and lista[divisore_magg-1] > lista[divisore_magg]:
            # Scambio la posizione dei due elementi con gli indici specificati
            # Funzione inventata 
            lista[divisore_magg], lista[divisore_magg-1] = lista[divisore_magg-1], lista[divisore_magg]
            # Diminuisco il separatore di 1
            divisore_magg -= 1
```

## Visualizzazione

[visualgo.net](https://visualgo.net/bn/sorting)
