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
2 1 3 |8 7 ¦ [5] 6 {4}
2 1 3 |8 7 5 ¦ [6] {4}
2 1 3 |8 7 5 6 ¦ [{4}]
[2 1 3] {4} [8 5 6 7]
```

#### Iterazione con partizioni sbilanciate

Osserviamo come si formi una partizione con **zero elementi** e una con tre.

```
|¦ [4] 7 3 {1}
|4 ¦ [7] 3 {1}
|4 7 |¦ [3] {1}
|4 7 3 |¦ [{1}]
[] {1} [4 7 3]
```

## Costo computazionale

| Categoria | Upper bound | Lower bound | Tight bound |
|-----------|-------------|-------------|-------------|
| Tempo | `O(n²)` | `Ω(n log n)` | - |

Il costo della funzione è dato dalla somma del costo per **dividere in due partizioni** con il costo per realizzare il **Quick sort delle due sottopartizioni**

Possiamo applicare allora il **Master Theorem generale**:

```latex
T(n)\\
=\\
Θ(1) \qquad per\ n = 1\\
T(q) + T(dim_lista - pivot - 1) + Θ(n) \qquad per\ n > 1
```

### Il caso migliore

Se il pivot `q` è la **mediana della partizione** che stiamo ordinando, si vengono a creare due _sottopartizioni bilanciate_, e sostituendo otteniamo:

```latex
T(n)\\
=\\
Θ(1) \qquad per\ n = 1\\
2 T(\frac{n}{2}) + Θ(n) \qquad per\ n > 1
``` 

Possiamo allora applicare il **Master Theorem particolare**:

```latex
T(n)\\
=\\
Θ(1) \qquad per\ n = 1\\
Θ(n log n) \qquad per\ n > 1
```

### Il caso peggiore

Se il pivot è uno degli **estremi dell'array**, si creano due _partizioni sbilanciate_: una delle due sottoliste è sempre vuota!  
Allora:

```latex
T(n) = T(n-1) + Θ(n)\\
= T(n-2) + Θ(n-1) + Θ(n)\\
= T(n-3) + Θ(n-2) + Θ(n-1) + Θ(n)\\
= …
∈ Θ(n^2)
```

> "Non date da mangiare sequenze ordinate al Quicksort, gli sono indigeste."

## Pseudocodice
 
```python
def partition(partizione, inizio, fine):
    """Dividi una partizione in due, usando l'ultimo elemento come pivot.
    
    Note utili:
        partizione[fine] è il pivot
        partizione[maggiori] è il primo numero dei maggiori
        partizione[non_iterati] è l'elemento su cui si sta iterando al momento"""
    # Crea il primo separatore (la | pipe nell'esempio)
    maggiori = inizio
    # Crea il secondo separatore (la ¦ broken pipe nell'esempio)
    non_iterati = inizio
    # Itera su ogni numero tra inizio e fine (escluso!)
    while non_iterati < fine:
        # Se l'elemento su cui stiamo iterando è minore del pivot
        if partizione[non_iterati] <= partizione[fine]:
            # Mettilo nell'insieme dei minori, scambiandolo con il primo numero dei maggiori e incrementando il primo separatore
            partizione[maggiori], partizione[non_iterati] = partizione[non_iterati], partizione[maggiori]
            maggiori += 1
        # Incrementa sempre il secondo separatore
        non_iterati += 1
    # Inserisci il pivot tra le due sottopartizioni create, 
    partizione[fine], partizione[non_iterati] = partizione[non_iterati], partizione[fine]
    return maggiori
```

## Visualizzazione

[visualgo.net](https://visualgo.net/bn/sorting) (Nota: invece che prendere l'ultimo numero come pivot prende il primo, cambiando leggermente l'algoritmo.)

## Note per l'esame

> La domanda che fa sempre è **"Qual è la sequenza di pivot utilizzata?"**

> Elementi da soli _non_ vengono presi come pivot!
