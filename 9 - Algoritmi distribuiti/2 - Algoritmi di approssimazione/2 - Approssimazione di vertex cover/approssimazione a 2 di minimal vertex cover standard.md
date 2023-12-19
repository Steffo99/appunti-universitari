[[algoritmo di approssimazione]] di [[minimal vertex cover problem]].

## Funzionamento

> [!Summary]
> Finchè ci sono [[arco di un grafo|archi]] nel [[grafo]]:
> 1. seleziona un [[arco di un grafo|arco]] qualsiasi 
> 2. aggiungi i due [[nodo di un grafo|nodi]] che lo collegano al [[vertex cover]]
> 3. rimuovi dal [[grafo]] tutti gli [[arco di un grafo|archi]] adiacenti ai [[nodo di un grafo|nodi]] aggiunti

Gli [[arco di un grafo|archi]] selezionati formano un [[abbinamento massimale]].

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Dato che l'algoritmo termina solo quando tutti gli [[arco di un grafo|archi]] sono stati aggiunti, il risultato è sicuramente un [[vertex cover]].
> 
> Si ha sicuramente terminazione, perchè ogni iterazione aggiunge almeno un [[arco di un grafo|arco]] al [[vertex cover]].

## [[fattore di approssimazione|Fattore di approssimazione]]

Il [[vertex cover]] [[soluzione ottima|ottimale]] deve toccare tutti gli [[arco di un grafo|archi]], inclusi quelli selezionati dall'algoritmo.

Perchè ciò avvenga, almeno uno dei due [[nodo di un grafo|nodi]] che essi connettono devono essere selezionati dall'[[soluzione ottima]].

Pertanto, il [[fattore di approssimazione]] è:
$$
\Huge 2
$$

## [[costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/spazio]] | ... |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Edges)$ |

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo|Tempo]]

Nel caso peggiore, il numero di iterazioni effettuate è pari alla metà del numero degli [[arco di un grafo|archi]], cioè:
$$
\frac
{Edges}
{2}
$$

In [[notazione asintotica]]:
$$
\Large O(Edges)
$$
