---
aliases:
  - teorema di Wolfe
---
[[problema duale]] del [[problema di ottimizzazione vincolata]].

$$
\begin{cases}
	\min \func \par{ \mathbf{x} }\\\\
	\quad \func[g] \par{ \mathbf{x} } \leq 0\\
	\quad	
\end{cases}
\quad = \quad
\begin{cases}
	\max \func[L] \par{ \mathbf{x}, \mu, \_ }\\\\
	\quad \nabla \func[L] \par{ \mathbf{x}, \mu } = 0\\
	\quad\mu \geq 0
\end{cases}
$$

Mette in relazione la [[funzione obiettivo]] con la [[funzione Lagrangiana]].
