[[metodo per la direzione di ricerca]].

$$
\Huge
\mathbf{D}_{iter} = \backslash \begin{bmatrix}
a\\ b\\ c\\ \vdots
\end{bmatrix}
$$

È come il [[metodo di discesa ripida]], ma scala arbitrariamente l'impatto che certe dimensioni hanno sulla selezione della [[passo di un metodo di discesa|direzione di discesa]].

> [!Success] Aspetti positivi
> 
> Calcolare l'iterazione successiva richiede solo il calcolo di un [[gradiente]] e l'applicazione della [[matrice diagonale]].

> [!Failure] Aspetti negativi
> È lento a convergere.
