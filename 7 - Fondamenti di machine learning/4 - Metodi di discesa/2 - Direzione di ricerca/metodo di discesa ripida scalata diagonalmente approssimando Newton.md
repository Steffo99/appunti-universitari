[[metodo di discesa ripida scalata diagonalmente]].

$$
\Huge
\mathbf{D}_{iter} = \backslash \begin{bmatrix} 
	\func''_{s_1,s_1} \par{\mathbf{x}_{iter}}\\
	\func''_{s_2,s_2} \par{\mathbf{x}_{iter}}\\ 
	\vdots \\
	\func''_{s_n,s_n} \par{\mathbf{x}_{iter}}\\
\end{bmatrix}^{-1}
$$

Approssima il [[metodo di Newton]] calcolando solo gli elementi della diagonale dell'[[matrice Hessiana|Hessiana]].

> [!Success] Aspetti positivi
> 
> Calcolare l'iterazione successiva richiede il calcolo di un [[gradiente]], l'applicazione della [[matrice diagonale]], e il calcolo della diagonale dell'[[matrice Hessiana|Hessiana]], che è sempre meno di quanto richiede il [[metodo di Newton]].

> [!Failure] Aspetti negativi
> È piuttosto lento a convergere, in quanto considera la curvatura solo nelle direzioni della [[base canonica]].
