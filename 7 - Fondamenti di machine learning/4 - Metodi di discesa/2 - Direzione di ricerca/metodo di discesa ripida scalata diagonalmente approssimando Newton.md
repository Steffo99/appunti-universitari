[[metodo di discesa ripida scalata diagonalmente]].

$$
\Huge
\mathbf{D}_{iter} = \backslash \begin{bmatrix} 
	\func'' \par{\mathbf{x}_{iter}; \mathbf{s}_{1}}\\
	\func'' \par{\mathbf{x}_{iter}; \mathbf{s}_{2}}\\ 
	\func'' \par{\mathbf{x}_{iter}; \mathbf{s}_{3}}\\
	\vdots
\end{bmatrix}^{-1}
$$

==Controllare formula.==

Approssima il [[metodo di Newton]] calcolando solo gli elementi della diagonale dell'[[matrice Hessiana|Hessiana]].

> [!Success] Aspetti positivi
> 
> Calcolare l'iterazione successiva richiede il calcolo di un [[gradiente]], l'applicazione della [[matrice diagonale]], e il calcolo della diagonale dell'[[matrice Hessiana|Hessiana]], che è sempre meno di quanto richiede il [[metodo di Newton]].

> [!Failure] Aspetti negativi
> È piuttosto lento a convergere, in quanto considera la curvatura solo nelle direzioni della [[base canonica]].
