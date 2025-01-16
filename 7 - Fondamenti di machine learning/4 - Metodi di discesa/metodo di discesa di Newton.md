[[metodo di discesa]] che equivale [[metodo delle approssimazioni incrementali di Newton]] applicato a [[funzione a variabili multiple|variabili multiple]].
$$
\Huge
\mathbf{D} = \nabla^2\ \func[P]_2 \par{\mathbf{x}_{iter}}^{-1}
$$

È equivalente al [[metodo di discesa ripida]], ma fa uso di un polinomio di secondo [[grado]] invece che limitarsi a uno di primo.

> [!Success] Aspetti positivi
> 
> Converge velocemente.

> [!Failure] Aspetti negativi
>
> Calcolare l'iterazione successiva richiede il calcolo di un [[gradiente]], il calcolo della relativa [[matrice Hessiana|Hessiana]], e la soluzione del risultante [[sistema lineare]], che è in $O \par{n^3}$.

## Perchè funziona?

Approssima la funzione $\func$ con il suo [[polinomio di Taylor a più variabili#Di secondo grado]] $\func[P]_2$:
$$
\func[P]_2 \par{\mathbf{x}}
=
\frac{ \func \par{\mathbf{x}_{iter}} }{1}
+
\frac{ \nabla\ \func \par{\mathbf{x}_{iter}}^\dagger \times \par{\mathbf{x} - \mathbf{x_{iter}}} }{1}
+
\frac{ \par{\mathbf{x} - \mathbf{x_{iter}}}^\dagger \times \nabla^2\ \func \par{\mathbf{x}_{iter}} \times \par{\mathbf{x} - \mathbf{x_{iter}}} }{2}
$$

==Perchè?== Vogliamo trovare il [[minimo globale]] di $\func[P]_2$, che si trova in:
$$
\nabla^2\ \func \par{\mathbf{x}_{iter}} \times \par{\mathbf{x} - \mathbf{x_{iter}}} + \nabla\ \func \par{\mathbf{x}_{iter}} = 0
$$

==Perchè?==
$$
\mathbf{y}_{iter} - \mathbf{x}_{iter} = 
$$