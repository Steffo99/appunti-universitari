[[algoritmo]] di [[routing]].

> [!Tip]
> Simile a [[FloodMax]]!

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di topologia|Topologia]]**
	- [[diametro di un grafo|diametro]] noto

## [[comportamento]]

> [!Summary]
> Ogni [[router]] crea una [[routing table]] con solo i suoi vicini.
> 
> Ad ogni iterazione, la invia a tutti i suoi [[vicini di un'entità|vicini]], e riceve contemporaneamente le loro, con cui aggiorna la propria.


## [[algoritmo corretto|Correttezza]]

> [!Success]
> Dopo tante iterazioni quante il [[diametro di un grafo|diametro]] della [[rete di comunicazione]], tutti i [[router]] avranno aggregato le routing table di tutti gli altri, terminando cosí l'algoritmo.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione del routing]] | $O(Entities \cdot Channels)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | ... |

### [[comunicazione del routing]]

> [!Note]
> È un costo diverso dal solito di comunicazione!

Ogni [[router]] scambia informazioni con i suoi [[vicini di un'entità|vicini]]:
$$
\color{LightCoral} 2 \cdot Entities
$$

Ad ogni iterazione, ogni [[router]] invia la sua [[routing table]] ai suoi [[vicini di un'entità|vicini]]:
$$
\sum_{Entity}^{Entities} \sum_{RoutingEntry}^{RoutingEntries} \mathrm{neighbours}(Entity)
$$
Cioè:
$$
Entities \cdot 2 \cdot Channels
$$
Riscritto meglio:
$$
\color{SpringGreen} 2 \cdot Entities \cdot Channels
$$

In totale:
$$
{\color{LightCoral} 2 \cdot Entities}
+
{\color{SpringGreen} 2 \cdot Entities \cdot Channels}
$$
In [[notazione asintotica]]:
$$
\Large O(Entities \cdot Channels)
$$
