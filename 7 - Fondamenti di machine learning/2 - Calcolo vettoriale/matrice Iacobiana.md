---
aliases:
  - iacobiana
---
Particolare [[matrice]] definita relativa a una [[funzione]] i cui [[output]] sono [[array|vettori]].

$$
\Huge
\iacobianOf{\mathbf{x}}
$$

Corrisponde alla [[trasposta]] del [[vettore riga]] risultante come [[gradiente]] di $\mathrm{f}(x)$:
$$
\Large
\iacobianOf{x} 
= 
\gradientOf{x}
=
\begin{bmatrix}
	\gradientOf[\mathrm{f}_1]{x} &
	\gradientOf[\mathrm{f}_2]{x} &
	\dots &
	\gradientOf[\mathrm{f}_M]{x}
\end{bmatrix}
$$

I suoi elementi sono definiti come le $colonna$-esime [[derivata parziale|derivate parziali]] della funzione $f$ rispetto all'elemento $riga$-esimo in output:
$$
\Large
\iacobianOf{x}
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

