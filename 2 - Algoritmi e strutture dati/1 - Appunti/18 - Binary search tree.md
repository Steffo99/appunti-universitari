# Albero binario di ricerca

## Proprietà

- Albero **binario**
- Chiavi appartenenti ad un **insieme totalmente ordinato** (N, Q, R, ma non C)
<!---->
- Per ogni nodo con valore `x`, se un valore `v` è nel sottoalbero di sinistra allora `v ≤ x`, mentre se è nel sottoalbero di destra allora `v > x`.

## Costo computazionale

- Trovare un valore: `O(h)`
- Ordinare i valori: `O(n)`
- Trovare il minimo: `O(h)`
- Trovare il massimo: `O(h)`
- Inserire un elemento: `O(h)`
- Cancellare un elemento: `O(h)`

`h` vale `log n` in un albero perfettamente bilanciato, e più l'albero diventa sbilanciato, più si avvicina a `n`, raggiungendola nel caso l'albero sia una lista.

## Pseudocodice

### Cancellazione ricorsiva

```python
def delete(tree, key):
    if tree is not None:
        # Se ho trovato il nodo che cercavo...
        if tree.key == key:
            # E c'è una sola diramazione...
            # Semplicemente stacca il nodo come in una lista.
            if tree.left is None:
                return tree.right
            if tree.right is None:
                return tree.left
            # Altrimenti, diventa il minimo dell'albero di destra
            tree.key = tree.right.min()
            # Ed eliminalo dal sottoalbero
            tree.right = delete(tree.right, tree.key)
        # Se la chiave attuale è diversa da quella che cerchiamo, continuo a navigare l'albero
        elif tree.key < key:
            tree.left = delete(tree.left, key)
        else:
            tree.right = delete(tree.right, key)
    return tree
```

## Visualizzazione

[visualgo.net](https://visualgo.net/en/bst)

## Approfondimenti

Esistono alberi più avanzati che mantengono le proprietà degli alberi binari di ricerca, ma che si autobilanciano, come il [Red Black Tree](https://it.wikipedia.org/wiki/RB-Albero).
