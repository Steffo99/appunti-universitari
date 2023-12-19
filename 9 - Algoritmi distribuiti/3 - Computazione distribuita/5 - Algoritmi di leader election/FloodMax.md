---
aliases:
  - FloodMin
  - leader election su grafo di diametro noto
---

[[algoritmo]] di [[leader election]] per [[grafo]] qualsiasi di [[diametro di un grafo|diametro]] noto.

> [!Summary]
> 
> Effettua tante iterazioni quante il [[diametro di un grafo|diametro del grafo]], in cui ogni [[entità]] invia ai suoi vicini l'[[identificatore]] minimo visto fino a quel momento, propagando così gli identificatori ovunque.

## [[algoritmo corretto|Correttezza]]

Dopo l'ultima iterazione, tutte le [[entità]] avranno ricevuto e identificato uno stesso minimo, permettendo di determinare quale eleggere [[leader]].

## [[costo computazionale distribuito|Costo computazionale]]

### [[comunicazione]]

Ad ogni iterazione, ogni [[entità]] manda un [[messaggio]] ad ogni vicino, per un totale di:
$$
2 \cdot Channels
$$
Essendo le iterazioni dipendenti dal [[diametro di un grafo|diametro del grafo]], possiamo dire che i messaggi inviati siano:
$$
Diameter \cdot 2 \cdot Channels
$$
Ovvero:
$$
\Large O(Diameter \cdot Channels)
$$

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

Considerando che ogni iterazione dura un'unità di tempo, l'algoritmo terminerà dopo tanto tempo quanto il [[diametro di un grafo|diametro del grafo]]:
$$
Diameter
$$

Ovvero:
$$
\Large O(Diameter)
$$