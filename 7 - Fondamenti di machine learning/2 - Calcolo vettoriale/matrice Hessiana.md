---
aliases:
  - Hessiana
---
Particolare [[matrice]] [[matrice quadrata|quadrata]] e [[matrice simmetrica|simmetrica]] definita relativa a una [[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] **a singolo output** dalla [[regolarità]] di almeno secondo ordine e una [[variabile]], di ordine uguale a quello della [[base canonica]] del [[0 - Generale/dominio|dominio]] della [[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]].
$$
\Huge
\hessianOf{\mathbf{x}}
$$

I suoi elementi sono definiti come le $(riga,colonna)$-esime [[derivata parziale|derivate parziali]] della [[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] $f$:
$$
\Large
\hessianOf{x}
=
\begin{bmatrix}
	\hessianElement
		{x}
		{1}
		{1} &
	\hessianElement
		{x}
		{1}
		{2} &
	\dots &
	\hessianElement
		{x}
		{1}
		{N} \\
	\hessianElement
		{x}
		{2}
		{1} &
	\hessianElement
		{x}
		{2}
		{2} &
	\dots &
	\hessianElement
		{x}
		{2}
		{N} \\
	\vdots &
	\vdots &
	\ddots &
	\vdots \\
	\hessianElement
		{x}
		{N}
		{1} &
	\hessianElement
		{x}
		{N}
		{2} &
	\dots &
	\hessianElement
		{x}
		{N}
		{N}
\end{bmatrix}
$$

> [!Tip]
> Analogo alla [[derivata seconda]].

==Dovrebbe dare informazioni sulla curvatura... Immagino c'entri il determinante?==
