---
aliases:
  - teorema di Karush-Kuhn-Tucker
  - condizioni necessarie di ottimalità del secondo ordine
---

Dato:
- un [[punto regolare dei vincoli]] $\varX$ che è anche [[7 - Fondamenti di machine learning/6 - Ottimizzazione vincolata/minimo vincolato|minimo vincolato]] per $\func \in \continueField{1}$ in $\Omega$

Allora esistono $\varU$ e $\varV$ che soddisfano la seguente serie di condizioni:
- Il [[gradiente]] della [[funzione Lagrangiana|Lagrangiana]] $\nabla \func[L]$ è $0$
- I [[vincoli di uguaglianza]] $\func[h]$ sono tutti soddisfatti $= 0$
- I [[vincoli di disuguaglianza]] $\func[g]$ sono tutti soddisfatti $\leq 0$
- Uno dei due tra i [[vincoli di disuguaglianza]] $\func[g]$ e il loro moltiplicatore $\varV$ deve essere $= 0$
- Il moltiplicatore dei [[vincoli di disuguaglianza]] $\varV$ è [[non-negatività|non-negativo]] $\geq 0$

$$
\def \varX {{\color{orange} \mathbf{x}}}
\def \varU {{\color{aquamarine} \mathbf{u}}}
\def \varV {{\color{cadetblue} \mathbf{v}}}

\Large
\displaylines{
	\exists\ \varU, \exists\ \varV :
	\begin{cases}
		\nabla \func[L] \par{ \varX, \varU, \varV } & = \mathbf{0}\\
		\func[h] \par{ \varX } & = \mathbf{0}\\
		\func[g] \par{ \varX } & \leq \mathbf{0}\\
		\func[g] \par{ \varX } {}^\dagger \times \varV & = 0\\
		\varV & \geq \mathbf{0}\\
	\end{cases}
}
$$

Scrivendo il [[gradiente]] della [[funzione Lagrangiana|Lagrangiana]] in forma estesa, otteniamo:
$$
\def \varX {{\color{orange} \mathbf{x}^\star}}
\def \varU {{\color{aquamarine} \mathbf{u}^\star}}
\def \varV {{\color{cadetblue} \mathbf{v}^\star}}

\displaylines{
\exists\ \varU, \exists\ \varV :
\begin{cases}
	\nabla \func \par{\varX} + \par { \nabla \func[h] \par{\varX} {}^\dagger \times \varU } + \par{ \nabla \func[g] \par{\varX} {}^\dagger \times \varV } & = 0\\
	\func[h] \par{ \varX } & = \mathbf{0}\\
	\func[g] \par{ \varX } & \leq \mathbf{0}\\
	\func[g] \par{ \varX } {}^\dagger \times \varV & = 0\\
	\varV & \geq \mathbf{0}\\
\end{cases}
}
$$

==Perchè nelle slide invertiamo le moltiplicazioni?==

> [!Tip]
> Se queste condizioni sono soddisfatte per una data soluzione $\varX$, allora essa è la [[soluzione ottima]].

> [!Tip]
> Se un [[punto regolare dei vincoli|punto regolare]] è di [[7 - Fondamenti di machine learning/6 - Ottimizzazione vincolata/minimo vincolato|minimo vincolato]], allora il suo [[opposto|anti]]-[[gradiente]] è:
> $$
> - \nabla \func \par {\varX} = \par { \varU^\dagger \times \nabla \func[h] \par{\varX} } + \par{ \varV^\dagger \times \nabla \func[g] \par{\varX} }
> $$

> [!Tip]
> Se non ci sono [[vincoli di uguaglianza]], possiamo trovare un [[punto stazionario vincolato]] semplicemente risolvendo il sistema di equazioni.

