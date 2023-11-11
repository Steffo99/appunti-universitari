[[algoritmo]] di [[routing]] che sfrutta la [[breadth-first search]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di topologia|Topologia]]**
	- [[canale di comunicazione|canali]] a [[costo]] ***unitario***

## [[Comportamento]]

> [!Summary]
> Ad ogni iterazione:
> 1. il [[leader]] invia un [[broadcast]];
> 2. le [[foglia di un albero|foglie]] che lo ricevono chiedono ai loro [[vicini di un'entità|vicini]] se sono già nell'albero;
> 3. i [[vicini di un'entità|vicini]] che rispondono di no oppure con un altra domanda diventano le nuove [[foglia di un albero|foglie]], notificando il loro nuovo genitore della cosa;
> 4. ogni [[router]] attende che tutti i suoi figli abbiano completato l'operazione, poi notifica il genitore, fino ad arrivare alla radice.


## [[algoritmo corretto|Correttezza]]

> [!Success]
> Essendo tutti i [[router]] a distanza finita dal [[leader]], eventualmente saranno aggiunti tutti allo [[spanning tree]], terminando cosí l'algoritmo.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione di routing]] | $O(Entities^2 + Channels)$ |
| [[tempo]] | ... |

### [[Comunicazione di routing]]

#### Singola iterazione

1. Il [[broadcast problem|broadcast]] iniziale costa, nel caso peggiore:
   $$Entities$$
2. L'esplorazione costa, nel caso peggiore:
   $$\mathrm{neighbours}(Entity)$$
3. Le risposte all'esplorazione costano, nel caso peggiore:
   $$\mathrm{neighbours}(Entity)$$
4. Il [[messaggio]] di termine iterazione costa, nel caso peggiore:
   $$Entities$$

Per un totale di:
$$
(Entities)
+
(\mathrm{neighbours}(Entity))
+
(\mathrm{neighbours}(Entity))
+
(Entities)
$$

Ovvero:
$$
2 \cdot Entities + 2 \cdot \mathrm{neighbours}(Entity)
$$

#### Totale

Il numero totale di iterazione dipende dal [[diametro di un grafo|diametro]] della [[rete di comunicazione]], cioè:
$$
\sum_{Iteration}^{\mathrm{diameter}} (2 \cdot Entities + 2 \cdot \mathrm{neighbours}(Entity))
$$

Visto che ogni [[canale di comunicazione|canale]] avrà esattamente una *andata-e-ritorno* di esplorazione, possiamo portarlo fuori dalla sommatoria, sostituendolo con $2 \cdot Channels$:
$$
4 \cdot Channels + \sum_{Iteration}^{\mathrm{diameter}} (2 \cdot Entities)
$$

Nel caso peggiore, il [[diametro di un grafo]] è pari al numero totale di [[router]], quindi:
$$
4 \cdot Channels + 2 Entities^2
$$

In [[notazione asintotica]]:
$$
\Large O(Entities^2 + Channels)
$$
