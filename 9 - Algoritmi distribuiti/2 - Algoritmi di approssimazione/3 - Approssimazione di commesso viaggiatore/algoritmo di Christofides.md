[[algoritmo di approssimazione]] di [[problema del commesso viaggiatore|minimizzazione di circuito hamiltoniano]], che migliora la [[approssimazione a 2 di problema del commesso viaggiatore con costo degli archi triangolare]].

## Restrizioni aggiuntive

- [[costo degli archi triangolare]]

## Funzionamento

> [!Summary]+ Summary ma non troppo
> Si effettuano i seguenti passi:
> 1. si crea un [[minimum spanning tree]] del [[grafo]];
> 2. da esso, si crea un [[sottografo]] [[induzione di sottografo|indotto]] dai [[nodo di un grafo|nodi]] che nel [[minimum spanning tree]] hanno [[grado di un nodo|grado]] dispari;
> 3. si determina l'[[abbinamento perfetto]] di [[funzione costo|costo]] [[problema di minimizzazione|minimo]] del sottografo;
> 4. si [[unione|uniscono]] [[minimum spanning tree]] e [[abbinamento perfetto]] [[problema di minimizzazione|minimo]] per creare un [[grafo]] temporaneo su cui effettuare i calcoli;
> 5. si usa l'[[algoritmo di Fleury per circuito euleriano]] per trovare un [[circuito euleriano]] sul [[grafo]] temporaneo;
> 6. grazie al [[costo degli archi triangolare]] si rimuovono tutte le visite ripetute ai [[nodo di un grafo|nodi]], ottenendo un [[circuito hamiltoniano]].

## [[algoritmo corretto|Correttezza]]

> [!Success] ==Sì==

## [[fattore di approssimazione|Fattore di approssimazione]]

Esiste un [[circuito hamiltoniano]] [[soluzione ottima|ottimale]] di costo:
$$
\def \varOptimal {{\color{Gold} Optimal}}
\large \varOptimal
$$

---

Si [[induzione di sottografo|induce]] un [[sottografo]] da tutti i [[nodo di un grafo|nodi]] con [[grado di un nodo|grado]] dispari nel [[minimum spanning tree]].

Essendo il [[grafo]] originale [[grafo completo|completo]], anche il [[sottografo]] lo sarà, pertanto, dovrà sicuramente esistere in esso un [[circuito hamiltoniano]] [[problema di minimizzazione|minimo]] di peso:
$$
\def \varSubHamilton {{\color{DarkKhaki} SubHamilton}}
\large \varSubHamilton
$$
Avendo tolto dei [[nodo di un grafo|nodi]] dal [[grafo]] iniziale, per la [[costo degli archi triangolare|proprietà triangolare per il costo degli archi]] possiamo dire che:
$$
\varSubHamilton \leq \varOptimal
$$

---

Dividiamo gli [[arco di un grafo|archi]] del sotto-[[circuito hamiltoniano]] [[problema di minimizzazione|minimo]] in due [[insieme|insiemi]], visitandoli e alternandoli uno ad uno nel primo e nel secondo insieme, ottenendo così due [[abbinamento perfetto|abbinamenti perfetti]] (non minimi) di [[funzione costo|costo]]:
$$
\def \varMatchingA {{\color{Lime} Matching_A}}
\def \varMatchingB {{\color{LawnGreen} Matching_B}}
\large \varMatchingA \qquad \varMatchingB
$$

Li mettiamo a confronto con l'[[abbinamento perfetto]] di [[funzione costo|costo]] [[problema di minimizzazione|minimo]] realizzato dall'algoritmo:
$$
\def \varMatchingOpt {{\color{PaleGreen} Matching}}
\large \varMatchingOpt
$$

Essendo l'[[abbinamento]] [[problema di minimizzazione|minimo]] ed il [[grafo]] [[grafo completo|completo]], abbiamo che:
$$
\varMatchingOpt \leq \varMatchingA
$$
$$
\varMatchingOpt \leq \varMatchingB
$$
E quindi:
$$
2 \cdot \varMatchingOpt \leq \varMatchingA + \varMatchingB
$$
Dato che i due [[abbinamento perfetto|abbinamenti perfetti]] contengono tutti gli [[arco di un grafo|archi]] del sotto-[[circuito hamiltoniano]] [[problema di minimizzazione|minimo]]:
$$
2 \cdot \varMatchingOpt \leq \varSubHamilton
$$
E quindi:
$$
2 \cdot \varMatchingOpt \leq \varOptimal
$$
Cioè:
$$
\varMatchingOpt \leq \frac{1}{2} \cdot \varOptimal
$$

---

Definiamo la somma dei pesi del [[minimum spanning tree]] utilizzato inizialmente come:
$$
\def \varTree {{\color{SpringGreen} Tree}}
\large \varTree
$$
Dato che possiamo anche ottenerlo rimuovendo un singolo [[canale di comunicazione|arco]] qualsiasi dal [[circuito hamiltoniano]] [[soluzione ottima|ottimale]]:
$$
\varTree \leq \varOptimal
$$

---

Il [[circuito euleriano]] restituito dall'[[algoritmo di Fleury per circuito euleriano|algoritmo di Fleury]] ha un peso totale di:
$$
\def \varFleury {{\color{Purple} Fleury}} 
\large \varFleury
$$
Dato che esso attraversa tutti gli [[arco di un grafo|archi]] del [[minimum spanning tree]] e dell'[[abbinamento perfetto]], possiamo dire che:
$$
\varFleury = \varTree + \varMatchingOpt
$$

---

Possiamo usare però la [[costo degli archi triangolare|proprietà triangolare per il costo degli archi]] per rimuovere tutti i [[nodo di un grafo|nodi]] che compaiono due volte, ottenendo così un [[circuito hamiltoniano]], che sarà sicuramente più breve del [[circuito euleriano]]:
$$
\def \varApprox {{\color{Magenta} Approx}}
\large \varApprox
$$
Ottenendo che:
$$
\varApprox \leq \varFleury 
$$
E quindi che:
$$
\varApprox \leq \varTree + \varMatchingOpt
$$
Continuando a sostituire:
$$
\varApprox \leq \varOptimal + \frac{1}{2} \cdot \varOptimal
$$
Ovvero:
$$
\varApprox \leq \frac{3}{2} \cdot \varOptimal
$$

Il [[fattore di approssimazione]] quindi è:
$$
\Large \frac{3}{2}
$$


## Altre fonti

> [!Quote]- Di Snowy
> ![[Pasted image 20231209021058.png]]
