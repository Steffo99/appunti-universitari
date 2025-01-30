---
aliases:
  - condizioni necessarie di ottimalità del secondo ordine
---

Dato:
- un [[punto regolare dei vincoli]] $\varX$ che è anche [[7 - Fondamenti di machine learning/6 - Ottimizzazione vincolata/minimo vincolato|minimo vincolato]] per $\func \in \continueField{2}$ in $\Omega$

Allora esistono $\varU$ e $\varV$ che soddisfano la seguente serie di condizioni:
- L'[[matrice Hessiana|Hessiana]] della [[funzione Lagrangiana|Lagrangiana]] ==cosa?==
- Uno dei due tra il [[gradiente]] dei [[vincoli di uguaglianza]] $\func[h]$ e $\varY$ deve essere $= 0$
- Uno dei due tra il [[gradiente]] dei [[vincolo attivo|vincoli attivi]] $\func[g]_{active}$ e $\varY$ deve essere $= 0$
- Il [[gradiente]] della [[funzione Lagrangiana|Lagrangiana]] $\nabla \func[L]$ è $0$
- I [[vincoli di uguaglianza]] $\func[h]$ sono tutti soddisfatti $= 0$
- I [[vincoli di disuguaglianza]] $\func[g]$ sono tutti soddisfatti $\leq 0$
- Uno dei due tra i [[vincoli di disuguaglianza]] $\func[g]$ e il loro moltiplicatore $\varV$ deve essere $= 0$
- Il moltiplicatore dei [[vincoli di disuguaglianza]] $\varV$ è [[non-negatività|non-negativo]] $\geq 0$

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
	\varY^\dagger \times \nabla^2 \func[L] \par{ \varX, \varU, \varV } \times \varY & \geq 0 \\
	\nabla \func[h] \par{ \varX } {}^\dagger \times \varY & = 0\\
	\nabla \func[g_{active}] \par{ \varX } {}^\dagger \times \varY & = 0\\		\nabla \func[L] \par{ \varX, \varU, \varV } & = \mathbf{0}\\
	\func[h] \par{ \varX } & = \mathbf{0}\\
	\func[g] \par{ \varX } & \leq \mathbf{0}\\
	\func[g] \par{ \varX } {}^\dagger \times \varV & = 0\\
	\varV & \geq \mathbf{0}\\
\end{cases}
$$
