[[metodo di discesa]].
$$
\Huge
\mathbf{D}^{-1} \times \par{
	\mathbf{x}_{iter} - \mathbf{x}_{iter - 1}
}
=
\par{
	\nabla \mathbf{x}_{iter} - \nabla \mathbf{x}_{iter - 1}
}
$$

==Come funziona?==

> [!Success] Aspetti positivi
> 
> Calcolare l'iterazione successiva richiede solo il calcolo di un [[gradiente]] e il calcolo dell'[[matrice inversa|inversa]] di $\mathbf{D}^{-1}$.

> [!Failure] Aspetti negativi
> Calcolare l'iterazione successiva richiede il calcolo di un [[gradiente]], il calcolo della relativa [[matrice Hessiana|Hessiana]], e la soluzione del risultante [[sistema lineare]], che è in $O \par{n^3}$.
