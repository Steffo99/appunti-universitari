# Insertion sort

E' una soluzione iterativa all'ordinamento.

Considero la sequenza divisa in **due parti**: una **parte ordinata** e una **parte non ordinata**.

Parto dal primo elemento della lista: è sempre ordinato con sè stesso.  
Poi, aggiungo uno alla volta i numeri della parte non ordinata a quella ordinata; prima trovo in quale posizione dovrò andare a mettere il numero, poi faccio slittare tutti i numeri _dopo_ quella posizione avanti di 1, in modo da creare lo spazio in cui infine inserirò il numero.

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

## Costo computazionale

Nel caso peggiore, dobbiamo eseguire `1+2+3+4+5+… = \frac{(n-1)(n)}{2}` confronti: è un tight bound - `Θ(n)`!