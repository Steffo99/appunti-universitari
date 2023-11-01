[[algoritmo]] [[iterativo]] di [[routing]] che sfrutta la visita [[breadth-first]].

## Funzionamento

### Distanze a relazione

Consideriamo due [[entità]] vicine nel [[sistema distribuito]]:
$$
\def \varSource {{\color{LimeGreen} Source}}
\def \varA {{\color{DarkGoldenrod} Entity_A}}
\def \varB {{\color{Goldenrod} Entity_B}}
\Large
\varA\ \textrm{neighbours}\ \varB
$$

Misuriamo la [[distanza]] di $\varA$ dalla sorgente $\varSource$:
$$
\Large
\textrm{Distance}_{\varSource}(\varA)
$$

Confrontiamola con la [[distanza]] di $\varB$, notando che ci si può trovare in tre casi:
$$
\Large
\textrm{Distance}_{\varSource}(\varA) = \begin{cases}
\textrm{Distance}_{\varSource}(\varB)-1\\
\textrm{Distance}_{\varSource}(\varB)\\
\textrm{Distance}_{\varSource}(\varB)+1
\end{cases}
$$

### Albero parziale

Definiamo un *albero parziale*, che ad ogni iterazione conterrà i nodi a distanza $Iterazione - 1$, e poi esploriamo i nodi vicini fino a raggiungere i nodi a distanza $Iterazione$.

## [[stato di un'entità|Stati]]

- `SOURCE`: il [[leader]]
- `UNKNOWN`: una [[entità]] non parte dell'albero parziale
- `EXPLORED`: una [[entità]] parte dell'albero parziale

## [[Comportamento]]

### `SOURCE`

==...==

### `UNKNOWN`

==...==

### `EXPLORED`

==...==
## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

==...==
### [[Spazio]]

==...==
### [[Tempo]]

==...==