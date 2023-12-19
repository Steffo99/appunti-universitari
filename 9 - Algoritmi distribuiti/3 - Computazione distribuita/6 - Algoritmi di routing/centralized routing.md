---
aliases:
  - "Djikstra distribuito"
---


[[algoritmo]] di [[routing]] che sfrutta l'[[algoritmo di Dijkstra]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di topologia|Topologia]]**
	- [[canale di comunicazione|canali]] con [[funzione costo|costo]] ***non-negativo***

## [[comportamento]]

> [!Summary]
> Fintanto che non sono rimasti [[router]] fuori dallo [[spanning tree]], ad ogni iterazione:
> 1. il [[leader]] usa la [[tecnica di saturazione per alberi]] all'interno dello [[spanning tree]] costruito fino a quel momento per determinare il [[canale di comunicazione|canale]] che raggiunge l'[[entità]] fuori dall'albero con [[funzione costo|costo]] minimo;
> 2. il [[leader]] aggiunge allo [[spanning tree]] quel [[canale di comunicazione|canale]] e il relativo [[router]], notificandolo della cosa attraverso la route conosciuta;
> 3. il [[router]] aggiunto notifica i [[vicini di un'entità|vicini]] della sua aggiunta all'albero, aspettando che tutti i vicini confermino l'operazione;
> 4. il [[router]] notifica il [[leader]] della aggiunta completata.

> [!Tip]
> Per ciascun [[router]], il genitore nell'albero diventa il [[default gateway]]!

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Deriva dalla [[algoritmo corretto|correttezza]] dell'[[algoritmo di Dijkstra]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione del routing]] | $O(Entities^2) |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | ... |

### [[Comunicazione del routing]]

> [!Note]
> È un costo diverso dal solito di comunicazione!

#### Inizio

Ciascuna [[entità]] scambia informazioni con i propri vicini:
$$
\color{LightCoral} 2 \cdot Channels
$$

#### Iterazione singola

1. La [[tecnica di saturazione per alberi]] costa:
   $$4 \cdot Entities - 4$$
2. L'*andata* della notifica di aggiunta costa:
   $$Entities$$
3. La notifica ai [[vicini di un'entità|vicini]] costa:
   $$\mathrm{neighbours}(Entity)$$
4. Il *ritorno* della notifica di aggiunta costa:
   $$Entities$$

Sommando per tutte le iterazioni, abbiamo:
$$
\sum_{Entity}^{Entities}
(4 \cdot Entities - 4)
+
(Entities)
+
(\mathrm{neighbours}(Entity))
+
(Entities)
$$

Considerando che i [[vicini di un'entità|vicini]] di una [[entità]] non possono essere più dei [[router]] totali:
$$
\sum_{Entity}^{Entities}
(4 \cdot Entities - 4)
+
(Entities)
+
(Entities)
+
(Entities)
$$

#### Totale

In totale, dunque, avremo una [[notazione asintotica]] di:
$$
O(Entities^2)
$$
