---
aliases:
  - traveling salesman problem
  - TSP
  - minimizzazione di circuito hamiltoniano
---

[[problema di minimizzazione]].

Appartiene alla [[classe di problemi NP-difficili]].

## Definizione

Dato un [[grafo completo]] pesato, qual è il [[circuito hamiltoniano]] di costo minimo?

### Verifica

Dato un [[grafo completo]] pesato, e un [[circuito hamiltoniano]], esso è quello di costo minimo?

## [[costo computazionale|Complessità computazionale]] [[classe di problemi NP-difficili|NP-hard]]

Per dimostrare che questo problema è [[classe di problemi NP-difficili|NP-hard]], si può [[riduzione di Karp|ridurre]] un qualsiasi [[classe di problemi NP-completi|problema NP-complete]] ad esso.

In questo caso, usiamo la [[esistenza di circuito hamiltoniano]].

Partendo dal [[grafo]] semplice della [[esistenza di circuito hamiltoniano]], che definiamo così:
$$
\def \varGraphA {{\color{DarkSalmon} Graph_{Hamilton}}}
\def \varEdgesA {{\color{LightSalmon} Edges_{Hamilton}}}
\def \varNodes {{\color{SpringGreen} Nodes_{Shared}}}
\varGraphA = (\varNodes, \varEdgesA)
$$

Vogliamo associare ogni [[istanza]] di esso a un'[[istanza]] di problema del commesso viaggiatore, che però richiede che il grafo sia [[grafo completo|completo]] e pesato:
$$
\def \varGraphB {{\color{Orchid} Graph_{Salesman}}}
\def \varEdgesB {{\color{Thistle} Edges_{Salesman}}}
\varGraphB = (\varNodes, \varEdgesB)
$$

Allora, sfruttiamo i pesi a nostro vantaggio per creare un [[grafo]] in cui gli [[arco di un grafo|archi]] di $\varGraphA$ siano sempre preferiti:
$$
\def \varEdge {{\color{Lavender} edge}}
\forall\ \varEdge \in \varEdgesB : \mathrm{cost}(\varEdge) = \begin{cases}
\textrm{if}\ \varEdge \in \varEdgesA & 0
\\\\
\textrm{if}\ \varEdge \not\in \varEdgesA & 1
\end{cases}
$$

Una volta determinata la soluzione al problema del commesso viaggiatore, giungeremo a conoscenza del [[funzione costo|costo]] [[problema di minimizzazione|minimo]] del [[percorso hamiltoniano]] che attraversa tutti i nodi:
$$
\def \varCost {{\color{MediumPurple} Cost_{Salesman}}}
travelingSalesmanProblem(\varGraphB) = \varCost
$$

In base al costo minimo $\varCost$ risultante, possiamo determinare la risposta al problema di [[esistenza di circuito hamiltoniano]].

Infatti, se una soluzione ad esso esiste, il problema del commesso viaggiatore darà $\varCost = 0$, in quanto tutti gli archi di $\varGraphA$ sono preferiti per via del loro peso minore;
viceversa, se una soluzione ad esso non esiste, l'output sarà $\varCost > 0$, che significa che è necessario aggiungere il dato numero di [[arco di un grafo|archi]] ulteriori per formare un [[ciclo hamiltoniano]]:
$$
\begin{cases}
	\textrm{if}\ \varCost = 0 & \exists\ hamiltonianCycle(\varGraphA)
	\\\\
	\textrm{if}\ \varCost \neq 0 & \not\exists\ hamiltonianCycle(\varGraphA)
\end{cases}
$$

Pertanto, il problema appartiene alla [[classe di problemi NP-difficili]].

## [[algoritmo di approssimazione|Algoritmi di approssimazione]]

- **Sfruttando il [[costo degli archi triangolare]]**
	- [[approssimazione a 2 di problema del commesso viaggiatore con costo degli archi triangolare]]
	- [[algoritmo di Christofides]]
