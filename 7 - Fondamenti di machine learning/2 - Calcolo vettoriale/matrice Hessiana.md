---
aliases:
  - Hessiana
---
Particolare [[matrice]] [[matrice quadrata|quadrata]] e [[matrice simmetrica|simmetrica]] definita relativa a una [[funzione]] dalla [[regolarità]] di almeno secondo ordine e una [[variabile]], di ordine uguale a quello della [[base canonica]] del [[0 - Generale/dominio|dominio]] della [[funzione]].
$$
\Huge
\hessianOf{\mathbf{x}}
$$

I suoi elementi sono definiti come le $(riga,colonna)$-esime [[derivata parziale|derivate parziali]] della [[funzione]] $f$:
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
