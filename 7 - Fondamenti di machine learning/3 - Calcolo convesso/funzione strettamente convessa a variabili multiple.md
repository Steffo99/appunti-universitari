Estensione della definizione di [[funzione strettamente convessa]] per [[funzione a variabili multiple]], che fa uso del [[gradiente]] per ottenere più elegantemente lo stesso concetto.

## In $\continueField{1}$

$$
\Large
\begin{matrix}
	\exists & \Omega \subset \mathbb{R}^n \\
	\exists & \func \in \continueField{1} : \Omega \to \mathbb{R} \\
	\forall & \mathbf{x} \in \Omega \\
	\forall & \mathbf{y} \in \Omega \\
	: & 
	\func \par{\mathbf{y}} > \func \par{\mathbf{x}} + \par{\nabla\ \func \par{\mathbf{x}}}^\dagger \times \par{\mathbf{y} - \mathbf{x}}
\end{matrix}
$$

## In $\continueField{2}$

Possiamo confermare che una funzione è strettamente convessa se $\nabla^2\ \func \par{\mathbf{x}}$ è [[matrice definita|definita]] [[matrice positiva|positiva]] per ogni $\mathbf{x} \in \Omega$, ma non dare per certo che non lo sia se questo non si verifica.

> [!Example]
> $$
> \func \par{x} = x^4
> $$
