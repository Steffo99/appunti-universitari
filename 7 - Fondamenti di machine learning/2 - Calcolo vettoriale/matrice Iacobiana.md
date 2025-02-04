---
aliases:
  - iacobiana
---
Particolare [[matrice]] definita relativa a una [[0 - Generale/funzione|funzione]] **a più output**.

$$
\Huge
\iacobianOf{\mathbf{x}}
$$

Corrisponde alla [[operatore trasposto|trasposta]] del [[vettore riga]] risultante come [[gradiente]] di $\mathrm{f}(x)$:
$$
\iacobianOf{x} 
= 
\gradientOf{x}^\dagger
=
\begin{bmatrix}
	\gradientOf[\mathrm{f}_1]{x} &
	\gradientOf[\mathrm{f}_2]{x} &
	\dots &
	\gradientOf[\mathrm{f}_M]{x}
\end{bmatrix}^\dagger
=
\begin{bmatrix}
	\iacobianElement{x}{1}{1} &
	\iacobianElement{x}{1}{2} &
	\dots &
	\iacobianElement{x}{1}{n} \\
	\iacobianElement{x}{2}{1} &
	\iacobianElement{x}{2}{2} &
	\dots &
	\iacobianElement{x}{2}{n} \\
	\vdots &
	\vdots &
	\ddots &
	\vdots \\
	\iacobianElement{x}{M}{1} &
	\iacobianElement{x}{M}{2} &
	\dots &
	\iacobianElement{x}{M}{n} \\
\end{bmatrix}
$$

> [!Tip]
> Analogo al [[gradiente]] per una [[funzione a valore vettoriale]].
