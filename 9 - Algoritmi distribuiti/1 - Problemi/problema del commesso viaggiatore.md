---
aliases:
  - traveling salesman problem
  - TSP
---
[[problema di ottimizzazione]] appartenente alla [[classe di problemi NP-difficili]].
## Enunciato

Dato un [[grafo completo]] pesato, qual è il [[ciclo hamiltoniano]] di costo minimo?

### Verifica

Dato un [[grafo completo]] pesato, e un [[ciclo hamiltoniano]], esso è quello di costo minimo?

## Dimostrazione della [[classe di problemi NP-difficili]]

Si può fare uso della [[ricerca di ciclo hamiltoniano]] per dimostrare la classe di appartenenza di questo problema.
$$
\def \varGraphA {{\color{DarkSalmon} Graph_{Hamilton}}}
\def \varEdgesA {{\color{LightSalmon} Edges_{Hamilton}}}
\def \varGraphB {{\color{Orchid} Graph_{Salesman}}}
\def \varEdgesB {{\color{Thistle} Edges_{Salesman}}}
\def \varCost {{\color{MediumPurple} Cost_{Salesman}}}
\def \varNodes {{\color{SpringGreen} Nodes_{Shared}}}

\tiny\color{Gray} [Definizione\ variabili\ \TeX\ qui]
$$

Partiamo dal [[grafo]] semplice della [[ricerca di ciclo hamiltoniano]], che definiamo così:
$$
\varGraphA = (\varNodes, \varEdgesA)
$$

Vogliamo associare ogni [[istanza]] di esso a un'[[istanza]] di problema del commesso viaggiatore, che però richiede che il grafo sia [[grafo completo|completo]] e pesato:
$$
\varGraphB = (\varNodes, \varEdgesB)
$$

Allora, sfruttiamo i pesi a nostro vantaggio per creare un grafo in cui gli archi di $\varGraphA$ siano sempre preferiti nella scelta del percorso:
$$
\forall\ edge \in \varEdgesB : cost(edge) = \begin{cases}
\textrm{if}\ edge \in \varEdgesA & 0
\\\\
\textrm{else} & 1
\end{cases}
$$
Una volta determinata la soluzione del problema del commesso viaggiatore, giungeremo a conoscenza del costo minimo del percorso che attraversa tutti i nodi:
$$
travelingSalesmanProblem(\varGraphB) = \varCost
$$

In base al costo minimo $\varCost$ risultante, possiamo determinare la risposta al problema di [[ricerca di ciclo hamiltoniano]].

Infatti, se una soluzione ad esso esiste, il problema del commesso viaggiatore darà $\varCost = 0$, in quanto tutti gli archi di $\varGraphA$ sono preferiti per via del loro peso minore; viceversa, se una soluzione ad esso non esiste, l'output sarà $\varCost > 0$, che significa che è necessario aggiungere il dato numero di archi ulteriori per formare un [[ciclo hamiltoniano]]:
$$
\begin{cases}
	\textrm{if}\ \varCost = 0 & \exists\ hamiltonianCycle(\varGraphA)
	\\\\
	\textrm{else} & \not\exists\ hamiltonianCycle(\varGraphA)
\end{cases}
$$
