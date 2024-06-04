# Depth-First Search

La _depth-first search_ è un algoritmo che visita **tutti i sottoalberi di un figlio** prima di passare ad un altro sfruttando la natura ricorsiva degli alberi.

## Funzionamento

Ci sono diverse versioni della depth-first search: ognuna visita la radice in un momento diverso.

### DFS previsita (pre-order)

La _DFS pre-visita_ visita la **radice per prima**, poi tutti i sottoalberi formati dai figli uno dopo l'altro.

> 1. __Visita radice__
> 2. dfs_pre_order(figlio1)
> 3. dfs_pre_order(figlio2)

### Postvisita (post-order)

La _DFS postvisita_ visita prima tutti i sottoalberi dei figli, e **alla fine la radice**.

> 1. dfs_post_order(figlio1)
> 2. dfs_post_order(figlio2)
> 3. __Visita radice__

### Invisita (in-order)

La _DFS invisita_ visita **un certo numero di figli**, poi la radice, e infine i figli restanti.

> 1. dfs_in_order(figlio1, 1)
> 2. __Visita radice__
> 3. dfs_in_order(figlio2, 1)
