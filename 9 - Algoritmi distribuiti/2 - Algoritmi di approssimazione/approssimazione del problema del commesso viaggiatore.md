[[algoritmo di approssimazione]] per il [[problema del commesso viaggiatore]].

Per questo problema, il [[fattore di approssimazione]] $\alpha$ può essere costante solo se [[P=NP]].

> L'algoritmo di approssimazione a fattore costante è riducibile alla [[ricerca di ciclo hamiltoniano]].

## Sfruttando la [[proprietà triangolare per il costo degli archi]]

### Algoritmo

#### $Tree$

Si può trovare il [[albero di copertura minimo]] di $Graph$ in tempo [[polinomiale]].

#### $2 \cdot Tree$

Si [[raddoppiamento di arco|raddoppiano]] gli archi di $Tree$.

#### $Euler$

Si trova il [[ciclo euleriano]] per $2 \cdot Tree$. 

#### $Hamilton$

Si trova il [[ciclo hamiltoniano]] per $Tree$, usando *shortcut*:

- Si selezionano i nodi di $Euler$ mantenendoli nello stesso ordine, ma scartando quelli che vi appaiono due volte, e poi connettendo l'ultimo al primo.

$Hamilton$ è la soluzione approssimata, con [[fattore di approssimazione]] $2$.

### Dimostrazione

#### $cost(Hamilton) \leq cost(Euler)$

Per la [[proprietà triangolare per il costo degli archi]].

#### $cost(Euler) = 2 \cdot cost(Tree)$

Per via del [[raddoppiamento di arco|raddoppiamento di archi]].

#### $2 \cdot cost(Tree) \leq 2 \cdot cost(Optimal)$

Togliendo un arco qualsiasi, $Optimal$ diventa un [[albero di copertura]].

$Tree$ è un altro [[albero di copertura]], ma [[albero di copertura minimo|minimo]].

### [[Tightness]]

#TODO was busy fixing the rest of the notes

## Algoritmo di Christofides

#### $Tree$

Si può trovare il [[albero di copertura minimo]] di $Graph$ in tempo [[polinomiale]].

#### $Perfect$

Si trova il [[minimum perfect matching]] dei nodi di [[grado di un nodo|grado]] dispari di $Tree$.

#### $Merged$

Si uniscono gli archi di $Perfect$ a $Tree$.

#### $Euler$

Si trova il [[ciclo euleriano]] per $Merged$. 

#### $Hamilton$

Si trova il [[ciclo hamiltoniano]] per $Tree$, usando *shortcut*:

- Si selezionano i nodi di $Euler$ mantenendoli nello stesso ordine, ma scartando quelli che vi appaiono due volte, e poi connettendo l'ultimo al primo.

$Hamilton$ è la soluzione approssimata, con [[fattore di approssimazione]] $2$.
