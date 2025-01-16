Estensione della definizione di [[funzione convessa]] per [[funzione a variabili multiple]], che fa uso del [[gradiente]] per ottenere più elegantemente lo stesso concetto.

## In $\continueField{1}$

$$
\Large
\begin{matrix}
	\exists & \Omega \subset \mathbb{R}^n \\
	\exists & \func \in \continueField{1} : \Omega \to \mathbb{R} \\
	\forall & \mathbf{x} \in \Omega \\
	\forall & \mathbf{y} \in \Omega \\
	: & 
	\func \par{\mathbf{y}}\ {\color{orange} \geq}\ \func \par{\mathbf{x}} + \par{\nabla\ \func \par{\mathbf{x}}}^\dagger \times \par{\mathbf{y} - \mathbf{x}}
\end{matrix}
$$

> [!Tip]
> Il punto finale $\func \par{\mathbf{y}}$ della funzione deve essere più in "alto" $\geq$ del punto iniziale $\func \par{\mathbf{x}}$ più la pendenza che si ha nel punto iniziale verso il punto finale $\nabla\ \func \par{\mathbf{x}}$ prolungata per l'intera distanza tra i due punti $\mathbf{y} - \mathbf{x}$.
> 
> ![[funzione convessa scribble.png]]

## In $\continueField{2}$

Una funzione è convessa se $\nabla^2\ \func \par{x}$ è [[matrice semidefinita|semidefinita]] [[matrice positiva|positiva]].
