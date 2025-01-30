[[metodo di discesa]].

$$
\Large
\mathbf{D}_{iter} 
= 
\frac
{ \mathbf{x}_{iter} - \mathbf{x}_{iter - 1} }
{ \nabla \func \par{ \mathbf{x}_{iter} } - \nabla \func \par{ \mathbf{x}_{iter - 1} } }
$$

Cerca di approssimare l'[[matrice Hessiana|Hessiana]] facendo meno calcoli.

Talvolta viene anche formulato come:
$$
\displaylines{
	{\color{lightcoral} \mathbf{s}_{iter}} = {\color{lightcoral} \mathbf{x}_{iter} - \mathbf{x}_{iter - 1} }\\
	{\color{coral} \mathbf{g}_{iter}} = {\color{coral} \nabla \func \par{ \mathbf{x}_{iter} } - \nabla \func \par{ \mathbf{x}_{iter - 1} } }\\\\
	\Large
	\mathbf{D}_{iter} = \frac{{\color{lightcoral} \mathbf{s}_{iter}}}{{\color{coral} \mathbf{g}_{iter}}}
}
$$

> [!Success] Aspetti positivi
> 
> Calcolare l'iterazione successiva richiede solo il calcolo di un [[gradiente]] e il calcolo dell'[[matrice inversa|inversa]] di $\mathbf{D}^{-1}$.
> 
> Funziona anche per funzioni non in $\continueField{2}$.

> [!Failure] Aspetti negativi
> Converge più lentamente del [[metodo di Newton]].

