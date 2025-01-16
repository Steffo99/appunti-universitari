[[caratteristica]] di una [[0 - Generale/funzione|funzione]], definita rispetto un dato [[insieme convesso]].

$$
\Large
\begin{matrix}
	\exists & \Omega \subset \mathbb{R}^n \\
	\exists & \func \in \continueField{1} : \Omega \to \mathbb{R} \\
	\forall & \mathbf{x} \in \Omega \\
	\forall & \mathbf{y} \in \Omega \\
	: & 
	\par{\nabla\ \func \par{\mathbf{x}}}^\dagger \times \par{\mathbf{y} - \mathbf{x}}\ {\color{cyan} \geq 0}\\
	{\color{darkcyan} \implies} & \func \par{\mathbf{y}} \geq \func \par{\mathbf{x}}
\end{matrix}
$$

> [!Tip]
> Presa una qualsiasi coppia di punti dell'insieme $\Omega$, tali per cui il gradiente $\nabla\ \func\par{\mathbf{x}}$ dal punto iniziale $\mathbf{x}$ in direzione del punto finale $\mathbf{y}$ sia positivo, il valore della funzione deve essere maggiore o uguale $\geq$ nel punto finale $\func \par{\mathbf{y}}$ rispetto al punto iniziale $\func \par{\mathbf{x}}$.

> [!Example]
> $$
> \func \par{x} = x + x^3
> $$

Qualsiasi [[funzione convessa a variabili multiple]] è anche pseudo-convessa a variabili multiple.
