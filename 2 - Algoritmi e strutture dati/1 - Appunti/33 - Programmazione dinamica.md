# Programmazione dinamica

La _programmazione dinamica_ è una **tecnica** di programmazione che prevede l'**estensione di una soluzione ottima precedente**.

Tutti i problemi in cui si può applicare si possono risolvere anche con la **ricorsione**, ma a differenza della ricorsione, questa tecnica riesce ad evitare di ricalcolare la soluzione per ogni chiamata ricorsiva, ottenendo quindi tempi molto migliori.

Si può applicare solo se un problema ha una **sottostruttura ottimale**, ovvero se la soluzione ottima di un sottoproblema è inclusa nella soluzione ottima del problema. 

## Esempi

- _Problema dello zaino_
- ...

> Il cammino minimo per raggiungere un nodo in un DAG è dato da `arco.costo + arco.primo_nodo.costo_cammino_minimo()`.
>
> ```python
> def SPD_PD(graph, start):
>     distance = [float(inf) for node in graph.nodes]:
>     distance[start] = 0
>     # I nodi devono essere in ordine di linearizzazione
>     for node in graph.nodes:
>         distance[node] = min([(arc.cost + distance[arc.other(node)] for arc in node.connections])
> ```

> Ho una sequenza di interi da `a_1` a `a_n`. Voglio trovare la sottosequenza crescente più lunga.
>
> 5 2 3 4 7 3 6 3 1 6
>
> Trovo tutte le sequenze lunghe 1, e le rendo nodi di un grafo diretto.
>
> Da ogni nodo, creo una connessione verso i suoi maggiori.
>
> Infine, cerco i cammini massimi del grafo. 
> 
> Essi saranno la soluzione del problema.

> Trova la lunghezza della sottosequenza più lunga che termina con `j`.
>
> `L[j]` = lunghezza della sottosequenza più lunga che termina in `j`
> 
> ```python
> L[j] = max([1 + L[node] for arc in node.connections)]
> ```
>
> Esempio:
> ```python
> L[9] = max([1+L[8], 1+L[3], 1+L[6]])
> ```
