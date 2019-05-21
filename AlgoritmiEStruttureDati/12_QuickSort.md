# Quick sort

Il _quick sort_ è un altro approccio **ricorsivo** all'ordinamento per confronto.

## Funzionamento

Anche qui, applichiamo il **divide et impera**.

1. _Divide_: Scelgo un **pivot** qualsiasi all'interno della lista. Metto alla sua **sinistra tutti i numeri minori** e alla sua **destra tutti i numeri maggiori**.
2. _Impera_: Eseguo un **quick sort su entrambe le sottoliste**.

### Esempi

#### Iterazione con partizioni bilanciate

Osserviamo come si formi una partizione con tre elementi e una con quattro. 

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

#### Iterazione con partizioni sbilanciate

Osserviamo come si formi una partizione con **zero elementi** e una con tre.

```
|¦ [4] 7 3 {1}
4 |¦ [7] 3 {1}
4 7 |¦ [3] {1}
4 7 3 |¦ [{1}]
[] {1} [4 7 3]
```



## Costo computazionale

Il costo della funzione è dato dalla **somma dei costi** per realizzare il **Quick sort dei due sottoinsiemi**, più il costo per **dividere in partizioni**.

Possiamo applicare allora il **Master Theorem**:

```latex
T(n)\\
=\\
Θ(1) \qquad per\ n = 1
T(q) + T(dim_lista - pivot - 1) + Θ(n) \qquad per\ n > 1
```

Se la partizione è _bilanciata_, ovvero `q ~ \frac{n}{2},` ~~in qualche modo~~ otteniamo
```latex
T(n) = 2 T(\frac{n}{2}) + Θ(n)
```

Se la partizione è _sbilanciata_, ovvero abbiamo **una delle due sottoliste sempre vuota** e i numeri già ordinati, allora:
```latex
T(n) = T(n-1) + Θ(n)\\
= T(n-2) + Θ(n-1) + Θ(n)\\
= T(n-3) + Θ(n-2) + Θ(n-1) + Θ(n)\\
= …
∈ Θ(n^2)
```

> "Non date da mangiare sequenze ordinate al Quicksort, gli sono indigeste."

Possiamo dimostrare che le partizioni bilanciate sono più quelle delle sbilanciate; dunque, in media, il costo del _Quick sort_ tenda a `O(n log n)`.

### Selezione del pivot

Selezionando diversamente il pivot (non prendendolo sempre alla fine) cambiano le sequenze per le quali ci avviciniamo a `O(n log n)`: ad esempio, scegliendolo casualmente.

## Pseudocodice
 
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


## Note per l'esame

> La domanda che fa sempre è **"Qual è la sequenza di pivot utilizzata?"**

> Elementi da soli _non_ vengono presi come pivot!
