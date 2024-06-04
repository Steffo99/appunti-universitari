# Algoritmo di Bellman-Ford

L'_Algoritmo di Bellman-Ford_ è un algoritmo che, come l'Algoritmo di Dijkstra, risolve il problema del **percorso più breve da una sorgente singola**, però, a differenza da quest'ultimo, l'Algoritmo di Bellman-Ford accetta in input anche grafi con pesi **reali** `\mathbb{R}` (sia positivi, sia negativi).

## Funzionamento

L'approccio dell'algoritmo è simile a quello di Dijkstra: entrambi usano il **rilassamento** degli archi per ottenere un costo provvisorio per il raggiungimento di un nodo, ma invece che rilassare solo l'arco con costo inferiore, questo algoritmo **rilassa tutti gli archi** ripetutamente, eliminando la frontiera e il problema dei nodi negativi.

L'operazione di rilassamento è ripetuta `nodi - 1` volte, ovvero la **lunghezza massima** di un cammino aciclico all'interno di un grafo.

Possiamo individuare dopo i rilassamenti se è presente un nodo con un **ciclo negativo**: ci basta controllare se esiste un arco che connette due nodi con una distanza incompatibile: se `a.distanza + arco.costo < b.distanza`, allora è presente un ciclo negativo.

## Costo computazionale

| Categoria | Upper bound |
|-----------|-------------|
| Tempo | `O(nodi * archi)` |

## Pseudocodice

> TODO

## Visualizzazione

[Visualgo](https://visualgo.net/en/sssp)
