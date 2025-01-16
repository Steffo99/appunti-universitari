[[metodo di discesa]].
$$
\Huge
\mathbf{D} 
= 
\nabla^2\ \func \par{
	\mathbf{x}_{iter\ \mathrm{mod}\ m}
}^{-1}
$$

==Ri-utilizza ogni [[matrice Hessiana|Hessiana]] per $m$ iterazioni.==

> [!Success] Aspetti positivi
> 
> Richiede la computazione di molte meno [[matrice Hessiana|Hessiane]] rispetto al [[metodo di discesa di Newton]].

> [!Failure] Aspetti negativi
> 
> Calcolare le $m$ iterazioni successive richiede il calcolo di un [[gradiente]], il calcolo della relativa [[matrice Hessiana|Hessiana]], la soluzione del risultante [[sistema lineare]], che è in $O \par{n^3}$.
