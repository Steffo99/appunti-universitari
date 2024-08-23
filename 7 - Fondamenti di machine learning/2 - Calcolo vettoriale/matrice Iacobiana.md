---
aliases:
  - iacobiana
---
Particolare [[matrice]] definita relativa a una [[funzione]] i cui [[output]] sono [[array|vettori]].

$$
\Huge
\iacobianSimple{x}
$$

==Controllare che sia giusto.== I suoi elementi sono definiti come le $colonna$-esime [[derivata parziale|derivate parziali]] della funzione $f$ rispetto all'elemento $riga$-esimo in output:
$$
\Large
\iacobianSimple{x}
=
\begin{bmatrix}
	\derivativePartialOutput{x}{1}{1} &
	\derivativePartialOutput{x}{1}{2} &
	\dots &
	\derivativePartialOutput{x}{1}{n} \\
	\derivativePartialOutput{x}{2}{1} &
	\derivativePartialOutput{x}{2}{2} &
	\dots &
	\derivativePartialOutput{x}{2}{n} \\
	\vdots &
	\vdots &
	\ddots &
	\vdots \\
	\derivativePartialOutput{x}{M}{1} &
	\derivativePartialOutput{x}{M}{2} &
	\dots &
	\derivativePartialOutput{x}{M}{n} \\
\end{bmatrix}
$$

In particolare, abbiamo che:
$$
\Large
\iacobianSimple{x}
= 
\derivativeGradientSimple{x}'
$$
