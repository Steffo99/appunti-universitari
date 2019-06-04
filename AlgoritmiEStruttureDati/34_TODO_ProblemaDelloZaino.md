# Problema dello zaino

Sei un ladro, e devi mettere più refurtiva possibile nel tuo zaino per scappare.

## Descrizione

| Input | Output |
|-------|--------|
| `dim`ensione_zaino, `n`umero_oggetti, `oggetto.peso`, `oggetto.valore` | `profitto_massimo` |

## Categorie del problema

### Problema con ripetizione

Puoi prendere tutte le copie che vuoi di un oggetto.

#### Soluzione

`K(dim)` è il valore massimo ottenibile con uno zaino di capacità `dim`.

> Se `i` appartenesse alla soluzione ottima, allora `K(dim) = i.valore + K(dim - i.peso)`...

Possiamo dire che `K(dim) = max(i.valore + K(dim - i.peso))`.

Inoltre, `K(0) = 0`.

Ci salviamo tutte le soluzioni da `K(0)` a `K(dim)`, e le usiamo per calcolare il massimo in seguito.

Calcolare `K(dim)` avrà allora un costo di `O(n * dim)`:
- `n`, perchè trovare il massimo è un'operazione lineare
- `dim`, perchè `dim` sono tutti i casi tra i quali devo andare a provare

Però, `dim` può essere un numero qualsiasi, che potrebbe includere `n!`: allora, la funzione non è polinomiale.

> Perchè?

### Problema senza ripetizione

Si può prendere ogni oggetto una volta sola.
