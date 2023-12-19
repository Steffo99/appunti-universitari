[[algoritmo di approssimazione]] di [[problema del commesso viaggiatore|minimizzazione di circuito hamiltoniano]].

## Restrizioni aggiuntive

- [[costo degli archi triangolare]]

## Funzionamento

> [!Summary]+ Summary ma non troppo
> Si effettuano i seguenti passi:
> 1. si crea un [[minimum spanning tree]] del [[grafo]], e ne si seleziona un [[nodo di un grafo|nodo]] qualsiasi che ne diventi la radice;
> 2. poi, si effettua una [[depth-first search]] sul [[grafo]], aggiungendo in [[pre-visita]] i [[nodo di un grafo|nodi]] a una lista, determinando così un [[percorso hamiltoniano]];
> 3. infine, si connettono primo e ultimo [[nodo di un grafo|nodo]], ottenendo così un [[circuito hamiltoniano]]. 

## [[algoritmo corretto|Correttezza]]

> [!Success]
> L'[[algoritmo]] produce sempre una [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/soluzione|soluzione ammissibile]] in tempo finito.

## [[fattore di approssimazione|Fattore di approssimazione]]

Definiamo la somma dei pesi del [[minimum spanning tree]] utilizzato come:
$$
\def \varTree {{\color{SpringGreen} Tree}}
\large \varTree
$$

---

Effettuando una [[depth-first search]] sul [[minimum spanning tree]] e aggiungendo ad una [[lista]] tutti i [[nodo di un grafo|nodi]] attraversati in [[pre-visita]] e [[post-visita]], otteniamo un [[circuito hamiltoniano]]:
$$
\def \varFullWalk {{\color{Purple} FullWalk}} 
\large \varFullWalk
$$
Esso attraversa tutti gli [[arco di un grafo|archi]] due volte:
$$
\varFullWalk 
= 
2 \cdot \varTree
$$

---

Possiamo usare però la [[costo degli archi triangolare|proprietà triangolare per il costo degli archi]] per rimuovere tutti i [[nodo di un grafo|nodi]] che compaiono due volte, ottenendo un [[circuito hamiltoniano]] più breve:

$$
\def \varApprox {{\color{Magenta} Approx}}
\large \varApprox
$$
Ottenendo che:
$$
\varApprox \leq \varFullWalk 
$$
E quindi che:
$$
\varApprox \leq 2 \cdot \varTree
$$

---

Consideriamo il costo del [[circuito hamiltoniano]] [[soluzione ottima|ottimale]]:
$$
\def \varOptimal {{\color{Gold} Optimal}}
\large \varOptimal
$$
Da esso, possiamo ottenere uno [[spanning tree]] rimuovendo un [[canale di comunicazione|arco]] qualsiasi:
$$
\varTree \leq \varOptimal
$$
Pertanto, abbiamo che:
$$
\frac{1}{2} \cdot \varFullWalk \leq \varOptimal
$$
Portando dall'altra parte:
$$
\varFullWalk \leq 2 \cdot \varOptimal
$$
Quindi:
$$
\varApprox \leq 2 \cdot \varOptimal
$$
Ottenendo così un [[fattore di approssimazione]] di:
$$
\Large 2
$$

## [[costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/spazio]] | $O(Nodes)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | polinomiale |
