[[problema di minimizzazione]] [[classe di problemi NP-difficili|NP-hard]].

Dato un [[grafo]] non diretto e non pesato, vogliamo trovare il [[vertex cover]] di [[cardinalità]] [[problema di minimizzazione|minima]].

## #TODO Con un [[algoritmo greedy]]

1. Finchè rimangono degli archi:
	2. Scelgo un arco a caso
	3. Aggiungo i due estremi al cover
	4. Cancello tutti gli archi incidenti ai due nodi

È polinomiale perchè il numero di iterazioni massime è il numero di archi nel grafo, quindi tempo in $O(n)$.

Fattore di approssimazione $2$. C'è una dimostrazione facile, ma ho troppo sonno, ha a che fare con il fatto che gli archi dell'algoritmo greedy sono disgiunti

