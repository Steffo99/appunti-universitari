---
aliases:
  - prodotto di Kronecker
  - prodotto matriciale diretto
---


[[Operazione]] tra due [[matrice|matrici]] che risulta in una matrice più grande:
$$
\Huge \otimes
$$

==Si calcola nel seguente modo:==

$$
\begin{bmatrix}
	{\color{navy} 0} & {\color{blue} 1} \\
	{\color{dodgerblue} 2} & {\color{deepskyblue} 3} \\
\end{bmatrix}
\otimes
\begin{bmatrix}
	{\color{darkred} 4} & {\color{red} 5}\\
	{\color{firebrick} 6} & {\color{indianred} 7}
\end{bmatrix}
=
\begin{bmatrix}
	{\color{navy} 0} \cdot {\color{darkred} 4}
	& 
	{\color{blue} 1} \cdot {\color{darkred} 4}
	&
	{\color{navy} 0} \cdot {\color{red} 5}
	& 
	{\color{blue} 1} \cdot {\color{red} 5}
	\\
	{\color{dodgerblue} 2} \cdot {\color{darkred} 4}
	&
	{\color{deepskyblue} 3} \cdot {\color{darkred} 4}
	&
	{\color{dodgerblue} 2} \cdot {\color{red} 5}
	&
	{\color{deepskyblue} 3} \cdot {\color{red} 5}
	\\
	{\color{navy} 0} \cdot {\color{firebrick} 6}
	& 
	{\color{blue} 1} \cdot {\color{firebrick} 6}
	&
	{\color{navy} 0} \cdot {\color{indianred} 7}
	& 
	{\color{blue} 1} \cdot {\color{indianred} 7}
	\\
	{\color{dodgerblue} 2} \cdot {\color{firebrick} 6}
	&
	{\color{deepskyblue} 3} \cdot {\color{firebrick} 6}
	&
	{\color{dodgerblue} 2} \cdot {\color{indianred} 7}
	&
	{\color{deepskyblue} 3} \cdot {\color{indianred} 7}
	\\
\end{bmatrix}
=
\begin{bmatrix}
	0 & 4 & 0 & 5 \\
	8 & 12 & 10 & 15 \\
	0 & 6 & 0 & 7 \\
	12 & 18 & 14 & 21
\end{bmatrix}
$$

==Rappresenta la combinazione di due o più [[qbit]].==
$$
\ket{0} \otimes \ket{1} 
= 
\ket{01}
= 
\begin{bmatrix}
1 \\ 0
\end{bmatrix}
\otimes
\begin{bmatrix}
0 \\ 1
\end{bmatrix}
=
\begin{bmatrix}
0 \cdot 0 \\ 1 \cdot 1 \\ 0 \cdot 1 \\ 0 \cdot 1
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 1 \\ 0 \\ 0
\end{bmatrix}
$$
