# Divide et impera

Un modo efficace per risolvere un problema è di usare il metodo _divide et impera (et combina)_.

- _Divide_: Divido il problema in **tanti sottoproblemi**.
- _Impera_: **Risolvo indipendentemente dal resto** ciascuno dei sottoproblemi.
- _Combina_: **Combino** i risultati dei sottoproblemi per **risolvere il problema principale**.

## Ricorsione

Un algoritmo (o funzione) si dice _ricorsivo_ quando durante l'esecuzione **richiama sè stesso**.

Dato che tutti gli algoritmi devono avere termine entro un tempo finito, se scriviamo una funzione ricorsiva è fondamentale  finire con un **caso base**, che non chiami ulteriormente la ricorsione.

Se esiste una funzione ricorsiva, allora esiste _sempre_ una _funzione iterativa_ che darà lo stesso risultato.

> Sul pratico, una funzione ricorsiva tipicamente è **più costosa** del suo equivalente iterativo: se possibile, quindi, la ricorsione andrebbe evitata.

#### Pseudocodice di esempio

```python
def fattoriale(n):
    # Caso base; la ricorsione finisce e dà un risultato fisso
    if n <= 1:
        return 1
    # Caso ricorsivo; la funzione restituisce il risultato di sè stessa (ma con parametri diversi)
    else:
        return n * fattoriale(n - 1)
```
