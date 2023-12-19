[[algoritmo di approssimazione]] di [[problema del commesso viaggiatore]].

## Funzionamento

> [!Summary]
> Il [[grafo]] viene diviso in più [[sottografo|sottografi]], di cui si cercano i rispettivi [[circuito hamiltoniano|circuiti hamiltoniani]] [[problema di minimizzazione|minimi]].

### [[branch-and-bound|Branch]]

Si seleziona un [[nodo di un grafo|nodo]]:
- se questa è la prima iterazione, se ne seleziona uno qualsiasi;
- altrimenti, uno che ha grado $\geq 3$ nell'[[1-tree]];
- se non ce ne sono, abbiamo trovato il [[circuito hamiltoniano]] [[minimo locale]].

Per ciascuna selezione possibile di due [[arco di un grafo|archi]] incidenti su di esso, si crea un nuovo [[branch-and-bound|branch]] che esclude tutti gli altri.

> [!Example]-
> 
> #### 1-tree con nodi selezionabili evidenziati
> 
> ![[Branch 1.svg]]
> 
> #### Tre dei sei branch risultanti
> 
> ![[Branch 1A.svg]]
> 
> ![[Branch 1B.svg]]
> 
> ![[Branch 1C.svg]]


### [[branch-and-bound|Bound]]

Per ciascun [[branch-and-bound|branch]]:
1. si crea un [[sottografo]] escludendo il [[nodo di un grafo|nodo]] in questione tutti gli [[arco di un grafo|archi]] incidenti su esso
2. si determina il [[minimum spanning tree]] del grafo
3. si selezionano i due [[arco di un grafo|archi]] pertinenti al [[branch-and-bound|branch]] in questione
4. si [[unione|uniscono]] [[minimum spanning tree]] e due [[arco di un grafo|archi]], formando un **[[1-tree]]**
5. si usa come valore di bounding il [[funzione costo|costo]] dell'[[1-tree]]

> [!Example]-
> 
> #### Grafo pesato iniziale
> ![[Grafo pesato iniziale.svg]]
> 
> #### Selezionato il nodo 1
> ![[Bound 1.svg]]

> [!Success] Correttezza
> 
> Il [[funzione costo|costo]] di un [[circuito hamiltoniano]] può essere visto come la somma di:
> - il [[funzione costo|costo]] di un [[percorso di un grafo|percorso]] che collega i [[nodo di un grafo|nodi]] del [[sottografo]] del [[branch-and-bound|branch]] (uno [[spanning tree]])
> - il [[funzione costo|costo]] dei due [[arco di un grafo|archi]] che collegano il [[nodo di un grafo|nodo]] escluso e il [[sottografo]]
> 
> Nell'effettuare il [[branch-and-bound|bounding]], non siamo sicuri che il [[minimum spanning tree]] determinato sia anche un [[circuito hamiltoniano]], ma sappiamo che qualsiasi altra selezione di archi avrà sicuramente un costo maggiore.

### [[branch-and-bound|Pruning]]

Vengono eliminati i [[branch-and-bound|branch]]:
- con un [[entità|nodo]] di [[grado di un nodo|grado]] $\leq 1$
- senza un [[grafo connesso]]
