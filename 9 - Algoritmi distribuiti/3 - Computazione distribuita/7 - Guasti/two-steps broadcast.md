[[algoritmo]] di [[broadcast affidabile su grafo completo]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di affidabilità|Affidabilità]]**
	- numero di [[guasti]] noto

## [[Comportamento]]

> [!Summary]
> Il [[leader]] invia il [[messaggio]] ad un numero sufficiente di [[vicini di un'entità|vicini]] per garantire che arrivi ad almeno a uno, poi essi lo inoltrano a tutti i vicini.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Per la [[edge-broadcast-possibility]], ci sono sempre [[canale di comunicazione|canali]] sufficienti a consegnare il [[messaggio]] a tutte le [[entità]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities \cdot Fallible)$ |
| [[tempo]] | $O(1)$ |

### [[Comunicazione]]

Durante il primo step, vengono inviati dal [[leader]]:
$$
Fallible + 1
$$

Durante il secondo step, vengono inviati da ogni [[entità]] ricevitrice a tutti gli altri che non sono lei stessa o il [[leader]]:
$$
\sum_{Entity}^{Fallible + 1} Entities - 2
$$
Ovvero:
$$
(Fallible + 1) \cdot (Entities - 2)
$$

In [[notazione asintotica]]:
$$
\Large O(Entities \cdot Fallible)
$$

### [[Tempo]]

Vengono effettuati sempre $2$ passi, che in [[notazione asintotica]] è:
$$
\Large O(1)
$$