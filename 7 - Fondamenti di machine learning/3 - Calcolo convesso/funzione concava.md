[[caratteristica]] di una [[0 - Generale/funzione|funzione]], definita rispetto un dato [[insieme convesso]].

## Definizione

### Con [[disequazione]]

Se, scegliendo due [[punti]] qualsiasi $\mathbf{x}$ e $\mathbf{y}$ all'interno del relativo [[insieme convesso]] $\Omega$, tutti i punti del [[segmento]] che li congiunge sono minori o uguali al valore risultante dalla funzione in quel punto, la funzione è concava.
$$
\Large
\begin{matrix}
	\exists & \Omega \subset \mathbb{R} \\
	\exists & \func : \Omega \to \mathbb{R} \\
	\forall & x \in \Omega \\
	\forall & y \in \Omega \\
	\forall & \alpha \in [0, 1] \\
	: & 
		\par{\alpha} \cdot \func \par{x} + \par{1 - \alpha} \cdot \func \par{y}
	& {\color{orange} \leq} &
		\func \par{\par{\alpha} \cdot x + \par{1 - \alpha} \cdot y}
\end{matrix}
$$

### Con l'[[ipografico]]

Se l'[[ipografico]] di una [[0 - Generale/funzione|funzione]] è un [[insieme convesso]], allora la funzione è concava.
