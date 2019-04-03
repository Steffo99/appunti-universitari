# Quick sort

## Sviluppo

#### Divide

Scelgo un indice qualsiasi all'interno della lista. Metto alla sua sinistra tutti i numeri minori e alla sua destra tutti i numeri maggiori.

#### Impera

Eseguo un merge sort prima sulla sottolista dei numeri minori, poi sulla sottolista dei numeri maggiori.

#### Combina

Ho già una lista ordinata.

## Analisi

### Pseudocodice
 
```python
def partition(lista, inizio, fine):
    cs = inizio
    for ce in range(inizio, fine):
        if lista[ce] <= lista[fine]:
            lista[cs], lista[ce] = lista[ce], lista[cs]
            cs += 1
    lista[fine], lista[ce] = lista[ce], lista[fine]
    return cs
```

### Costo

Il costo della funzione è dato dalla somma dei costi per realizzare il _Quick sort_ dei due sottoinsiemi, più il costo di partition, `\theta(n)`.

```latex
T(n)\\
=\\
\theta(1) \qquad per\ n = 1
T(q) + T(dim_lista - pivot - 1) + \theta(n) \qquad per\ n > 1
```

Se la partizione è bilanciata, ovvero `q ~ \frac{n}{2},` ~~in qualche modo~~ otteniamo
```latex
T(n) = 2 T(\frac{n}{2}) + \theta(n)
```

> Non date da mangiare sequenze ordinate al Quicksort, gli è indigesta.

Se la partizione è sbilanciata, ovvero abbiamo una delle due sottoliste sempre vuota e i numeri sono già ordinati, allora:
```latex
T(n) = T(n-1) + \theta(n)\\
= T(n-2) + \theta(n-1) + \theta(n)\\
= T(n-3) + \theta(n-2) + \theta(n-1) + \theta(n)\\
= \dots
\in \theta(n^2)
```

Possiamo dimostrare che le partizioni bilanciate sono più quelle delle sbilanciate; dunque, in media, il costo del _Quick sort_ tenda a `O(n log n)`.

#### Selezione del pivot

Selezionando diversamente il pivot (non prendendolo sempre alla fine) ci avviciniamo sempre di più a `O(n log n)`: ad esempio, scegliendolo casualmente.

## Esempio

### Partizione bilanciata

```
|¦ [2] 8 7 1 3 5 6 {4}
2 |¦ [8] 7 1 3 5 6 {4}
2 |8 ¦ [7] 1 3 5 6 {4}
2 |8 ¦ [7] 1 3 5 6 {4}
2 |8 7 ¦ [1] 3 5 6 {4}
2 1 |7 8 ¦ [3] 5 6 {4}
2 1 3 |7 8 ¦ [5] 6 {4}
2 1 3 |7 8 5 ¦ [6] {4}
2 1 3 |7 8 5 6 ¦ [{4}]
[2 1 3] {4} [8 5 6 7]
```

### Partizione sbilanciata

```
|¦ [4] 7 3 {1}
4 |¦ [7] 3 {1}
4 7 |¦ [3] {1}
4 7 3 |¦ [{1}]
[] {1} [4 7 3]
```