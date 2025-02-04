[[metodo di discesa]] che equivale [[metodo delle approssimazioni incrementali di Newton]] applicato a [[funzione a variabili multiple|variabili multiple]].
$$
\Huge
\mathbf{D} = \nabla^2\ \func \par{\mathbf{x}_{iter}}^{-1}
$$

È equivalente al [[metodo di discesa ripida]], ma fa uso di un polinomio di secondo [[grado]] invece che limitarsi a uno di primo.

Richiede che:
- la funzione abbia [[regolarità]] di ordine $2$: $\func \in \continueField{2}$
- la funzione abbia [[matrice Hessiana|Hessiana]] [[matrice definita|definita]] positiva

> [!Success] Aspetti positivi
> 
> Converge velocemente.

> [!Failure] Aspetti negativi
>
> Calcolare l'iterazione successiva richiede il calcolo di un [[gradiente]], il calcolo della relativa [[matrice Hessiana|Hessiana]], e la soluzione del risultante [[sistema lineare]], che è in $O \par{n^3}$.

## Dimostrazione

Approssima la funzione $\func$ con il suo [[polinomio di Taylor a più variabili#Di secondo grado]] $\func[P]_2$:
$$
\func[P]_2 \par{{\color{cyan} \mathbf{x}}}
=
\frac{ \func \par{\mathbf{x}_{iter}} }{1}
+
\frac{ \nabla\ \func \par{\mathbf{x}_{iter}}^\dagger \times \par{{\color{cyan} \mathbf{x}} - \mathbf{x_{iter}}} }{1}
+
\frac{ \par{{\color{cyan} \mathbf{x}} - \mathbf{x_{iter}}}^\dagger \times \nabla^2\ \func \par{\mathbf{x}_{iter}} \times \par{{\color{cyan} \mathbf{x}} - \mathbf{x_{iter}}} }{2}
$$

Vogliamo trovare il [[minimo globale]] di $\func[P]_2$, che è il punto $\mathbf{x}$ in cui il [[gradiente]] è nullo:
$$
\nabla^2\ \func \par{\mathbf{x}_{iter}} \times \par{{\color{cyan} \mathbf{x}} - \mathbf{x}_{iter}} + \nabla\ \func \par{\mathbf{x}_{iter}} = \mathbf{0}
$$

Isoliamo ${\color{cyan} \mathbf{x}} - \mathbf{x}_{iter}$, ovvero il [[vettore]] che va da $\mathbf{x}_{iter}$ al [[minimo globale]] della funzione approssimata ${\color{cyan} \mathbf{x}}$:
$$
{\color{cyan} \mathbf{x}} - \mathbf{x}_{iter} = - \frac{ \nabla\ \func \par{\mathbf{x}_{iter}} }{\nabla^2\ \func \par{\mathbf{x}_{iter}} }
$$

Essendo un vettore diretto verso il minimo, esso è una [[direzione di discesa]] per $\func[P]_2$; decidiamo quindi di usarlo anche per $\func$, e quindi diciamo che:
$$
\mathbf{d}_{iter} = {\color{cyan} \mathbf{x}} - \mathbf{x}_{iter}
$$

Vogliamo però averlo sotto forma di [[metodo per la direzione di ricerca]] $\mathbf{D}_{iter}$, quindi:
$$
\mathbf{D}_{iter}
=
\frac
{\mathbf{d}_{iter}}
{\nabla\ \func \par{\mathbf{x}_{iter}}}
$$

Sostituendo:
$$
\mathbf{D}_{iter}
=
\frac
{{\color{cyan} \mathbf{x}} - \mathbf{x}_{iter}}
{\nabla\ \func \par{\mathbf{x}_{iter}}}
$$

Sostituendo:
$$
\mathbf{D}_{iter}
=
- \frac
{- \frac{ \nabla\ \func \par{\mathbf{x}_{iter}} }{\nabla^2\ \func \par{\mathbf{x}_{iter}} }}
{\nabla\ \func \par{\mathbf{x}_{iter}}}
=
\frac{ 1 }{ \nabla^2\ \func \par{\mathbf{x}_{iter}} }
=
\nabla^2\ \func \par{\mathbf{x}_{iter}}^{-1}
$$
