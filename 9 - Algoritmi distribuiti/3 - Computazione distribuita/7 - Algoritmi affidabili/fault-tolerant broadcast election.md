---
aliases:
  - ft-broad-election
  - fault-tolerant broad election
  - ft-broadcast-election
---

[[algoritmo]] di [[leader election edge-fault-tolerant su grafo completo]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di affidabilità|Affidabilità]]**
	- numero di [[guasti]] noto

## [[comportamento]]

> [!Summary]
> Ogni [[entità]] fa un [[broadcast affidabile su grafo completo|broadcast affidabile]] del suo identificatore, e avendo tutte le informazioni, determina se è il [[leader]] oppure no.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Tutte le [[entità]] ricevono tutte le informazioni per determinare il risultato appena il [[broadcast affidabile su grafo completo|broadcast affidabile]] termina.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities^2 \cdot Fallible)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | ... |

### [[comunicazione]]

Vengono effettuati tanti [[two-steps broadcast]] quante le [[entità]] del [[sistema distribuito]]:
$$
{\color{Gold} Entities} \cdot (Fallible + 1) \cdot (Entities - 2)
$$

In [[notazione asintotica]]:
$$
\Large O(Entities^{\color{Gold} 2} \cdot Fallible)
$$
