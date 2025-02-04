---
aliases:
  - condizioni sufficienti di ottimalità del secondo ordine
---

Un [[punto]] nella [[regione ammissibile]] è una [[soluzione ottima]] per $\func \in \continueField{2}$ in $\Omega$ se soddisfa le seguenti condizioni:
$$
\def \varX {{\color{orange} \mathbf{x}}}
\def \varU {{\color{aquamarine} \mathbf{u}}}
\def \varV {{\color{cadetblue} \mathbf{v}}}
\def \varY {{\color{cyan} \mathbf{y}}}

\Large
\begin{cases}
	\forall\ \varY\\
	\exists\ \varU\\
	\exists\ \varV\\
	\varY^\dagger \times \nabla^2 \func[L] \par{ \varX, \varU, \varV } \times \varY & {\color{yellow} >{} } 0 \\
	\varY & \neq \mathbf{0}\\
	\nabla \func[h] \par{ \varX } {}^\dagger \times \varY & = 0\\
	\nabla \func[g_{active}] \par{ \varX } {}^\dagger \times \varY & = 0\\		
	\nabla \func[L] \par{ \varX, \varU, \varV } & = \mathbf{0}\\
	\func[h] \par{ \varX } & = \mathbf{0}\\
	\func[g] \par{ \varX } & \leq \mathbf{0}\\
	\func[g] \par{ \varX } {}^\dagger \times \varV & = 0\\
	\varV & {\color{yellow} >{}} \mathbf{0}\\
\end{cases}
$$
