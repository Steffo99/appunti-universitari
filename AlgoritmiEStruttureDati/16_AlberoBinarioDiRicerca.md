# Albero binario di ricerca

## Proprietà

- **Insieme totalmente ordinato** (N, Q, R, ma non C)
- Albero **binario**
- Per ogni nodo con valore `x`, se un valore `v` è nel sottoalbero di sinistra allora `v ≤ x`, mentre se è nel sottoalbero di destra allora `v > x`.  
  Posso, quindi, trovare i valori desiderati in `Theta(h)`.
- Posso stampare tutti i valori in ordine crescente in `O(n)`.
- Trovare il valore minimo è in `Theta(h)`, e uguale il valore massimo.
- L'inserimento di una nuova chiave è in `Theta(h)`.
- L'altezza cambia in base a quanto l'albero è bilanciato: più è bilanciato, più tende a `log n`; più è sbilanciato, più tende a `n`.
- Cancellare una foglia è molto semplice ed è in `Theta(h)`.
- Cancellare un ramo... è un po' complesso. E' comunque in `Theta(h)`.

## Cancellazione ricorsiva

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

# Alberi avanzati

Esistono alberi più avanzati che mantengono le proprietà degli alberi binari di ricerca, ma che si autobilanciano.

> Come il [Red Black Tree](https://it.wikipedia.org/wiki/RB-Albero).