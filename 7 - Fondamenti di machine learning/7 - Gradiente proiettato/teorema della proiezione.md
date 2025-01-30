Dato:
- un [[insieme convesso]] e [[insieme chiuso|chiuso]] $\Omega$ ==uhh, uno spazio?==
- la [[modulo vettoriale|norma]] come [[prodotto scalare]] $\cdot$

Allora:
- la [[proiezione su insieme convesso]] è [[unicità|unica]]
- la [[proiezione su insieme convesso]] è il [[punto]] nell'insieme a [[modulo vettoriale|distanza]] [[7 - Fondamenti di machine learning/6 - Ottimizzazione vincolata/minimo vincolato|minore di tutti gli altri]] dal punto proiettato
- l'[[proiezione su insieme convesso|operatore di proiezione]] è [[operatore continuo|continuo]]
- l'[[proiezione su insieme convesso|operatore di proiezione]] è [[operatore non-espansivo|non-espansivo]]

> [!Note]
> In notazione matematica orribile, il secondo risultato si può scrivere come:
> $$
> \def \varX {{\color{orange} \mathbf{x}}}
> 
> \forall\ \mathbf{p} \in \Omega :
> \par{\mathbf{p} - \fmlProjection{\varX}}^\dagger \times \par{\varX - \fmlProjection{\varX}} \leq 0
> $$
