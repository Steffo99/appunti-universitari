# Divide et impera

Un modo efficace per risolvere un problema è di usare il metodo "divide et impera (et combina)".

- **Divide**: Divido il problema in tanti _sottoproblemi_.
- **Impera**: Risolvo ciascuno dei sottoproblemi indipendentemente dal resto.
- **Combina**: Combino i risultati dei sottoproblemi per risolvere il problema principale.

## Ricorsione

#### Note rilevanti

Quando scriviamo una **funzione ricorsiva**, dobbiamo sempre prima o poi finire a un _caso base_.

Utilizzare una funzione ricorsiva tipicamente è _estremamente costoso_, e quindi se possibile va evitata (sul pratico).

Se esiste una funzione ricorsiva, allora esiste _sempre_ una _funzione iterativa_ che darà lo stesso risultato.

#### Pseudocodice di esempio

```python
def fattoriale(n):
    # Caso base; la ricorsione finisce e dà un risultato fisso
    if n == 1:
        return 1
    # Caso ricorsivo; la funzione restituisce il risultato di sè stessa (ma con parametri diversi)
    else:
        return n * fattoriale(n - 1)
```

## Altro

Bisogna ricordare che se l'input è `O(log n)`, allora una funzione in `O(n)` cresce esponenzialmente rispetto alla dimensione dell'input.
