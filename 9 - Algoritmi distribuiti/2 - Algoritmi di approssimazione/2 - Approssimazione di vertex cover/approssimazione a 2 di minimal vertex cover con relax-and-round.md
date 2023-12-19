[[algoritmo di approssimazione]] di [[minimal vertex cover problem]] che fa uso di [[relax-and-round]].

## Funzionamento

> [!Summary]
> Si converte il problema da [[campo degli interi|intero]] a [[continuo]], lo si risolve con un algoritmo di [[programmazione lineare]], e poi si arrotonda la soluzione in direzione opposta a quella dell'ottimizzazione che si sta effettuando.

### Definizione

Si chiede di assegnare una variabile booleana $Optimal_{Node}$ a ciascun [[nodo di un grafo|nodo]]:
- $0$ se il [[nodo di un grafo|nodo]] non è parte della [[soluzione ottima]]
- $1$ se lo è

Si stabilisce un vincolo per descrivere un [[vertex cover]]:

$$
\def \varNodeA {{\color{LightCoral} Node_A}}
\def \varNodeB {{\color{Coral} Node_B}}

\forall\ (\varNodeA, \varNodeB) \in Edges :
\begin{cases}
	\\
	Optimal_{\varNodeA} + Optimal_{\varNodeB} \geq 1
	\\\ 
\end{cases}
$$

> [!Tip]- Significato del vincolo
> "Per ogni [[arco di un grafo|arco]], scegli almeno uno dei due [[nodo di un grafo|nodi]] ai suoi estremi.

Infine, si definisce la [[funzione obiettivo]] come:
$$
\min \sum_{Node}^{Nodes} Optimal_{Node}
$$

### [[relax-and-round|Rilassamento]]

Invece di richiedere di assegnare variabili [[numero booleano|booleane]], richiediamo al risolutore di [[programmazione lineare]] di assegnare variabili [[numero reale|reali]]:
$$
0 \leq Relaxed_{Node} \leq 1
$$

### [[relax-and-round|Arrotondamento]]

Si selezionano tutti i [[nodo di un grafo|nodi]] tali che:
$$
\frac{1}{2} \leq Relaxed_{Node}
$$

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Si forma un [[vertex cover]] valido.

## [[fattore di approssimazione|Fattore di approssimazione]]

Possiamo notare che, da come abbiamo effettuato l'arrotondamento:
$$
Relaxed_{Node} \leq \frac{1}{2} \cdot Optimal_{Node}
$$
Portando dall'altra parte:
$$
2 \cdot Relaxed_{Node} \leq Optimal_{Node}
$$

Allora, questa disuguaglianza sarà applicabile anche alla [[funzione costo]]:
$$
2 \cdot \sum_{Node}^{Nodes} Relaxed_{Node} \leq \sum_{Node}^{Nodes} Optimal_{Node}
$$

Questo significa che il [[funzione costo|costo]] della versione rilassata è al massimo il doppio di quella [[soluzione ottima|ottimale]], e che quindi il [[fattore di approssimazione]] è:
$$
\Large 2
$$
