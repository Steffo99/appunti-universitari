# Divide et impera

Un modo efficace per risolvere un problema è di usare il metodo _divide et impera (et combina)_.

- _Divide_: Divido il problema in **tanti sottoproblemi**.
- _Impera_: **Risolvo indipendentemente dal resto** ciascuno dei sottoproblemi.
- _Combina_: **Combino** i risultati dei sottoproblemi per **risolvere il problema principale**.

__SONO ARRIVATO QUI, IL RESTO E' TODO__

## Ricorsione

### Note rilevanti

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
