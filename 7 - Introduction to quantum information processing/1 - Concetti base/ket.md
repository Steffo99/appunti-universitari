---
aliases:
  - ket 0
  - ket 1
  - ket +
  - ket -
---

Notazione per rappresentare rapidamente [[vettore colonna|vettori colonna]] associati a uno [[stato base di un qubit]]:
$$
\begin{bmatrix}
	1\\
	0
\end{bmatrix} =
{\Huge
	\ket{0}
}
\qquad
\begin{bmatrix}
	0\\
	1
\end{bmatrix} =
{\Huge
	\ket{1}
}
$$

Si può usare anche per rappresentare [[vettore colonna|vettori colonna]] più grandi, a condizione che la loro dimensione sia una [[potenza di 2]]:
$$
\begin{bmatrix}
	1\\
	0\\
	0\\
	0
\end{bmatrix} =
{\Huge
	\ket{00}
}
\qquad
\begin{bmatrix}
	0\\
	1\\
	0\\
	0
\end{bmatrix} =
{\Huge
	\ket{01}
}
\qquad
\begin{bmatrix}
	0\\
	0\\
	1\\
	0
\end{bmatrix} =
{\Huge
	\ket{10}
}
\qquad
\begin{bmatrix}
	0\\
	0\\
	0\\
	1
\end{bmatrix} =
{\Huge
	\ket{11}
}
$$
$$
\begin{bmatrix}
	1\\
	0\\
	0\\
	0\\
	0\\
	0\\
	0\\
	0\\
\end{bmatrix} =
{\Huge
	\ket{000}
}
\qquad
\begin{bmatrix}
	0\\
	0\\
	0\\
	0\\
	0\\
	0\\
	0\\
	1\\
\end{bmatrix} =
{\Huge
	\ket{111}
}
$$

Ket molto grandi si possono rappresentare direttamente con i numeri decimali, aggiungendo a pedice del ket il numero di qbit rappresentati:
$$
{\Huge
	\ket{000} = \ket{0}_3
}
\qquad
{\Huge
	\ket{010} = \ket{2}_3
}
\qquad
{\Huge
	\ket{101} = \ket{5}_3
}
\qquad
{\Huge
	\ket{111} = \ket{7}_3
}
$$
$$
{\Huge
	\ket{00000000} = \ket{0}_8
}
\qquad
{\Huge
	\ket{11111111} = \ket{255}_8
}
$$

Esistono due somme di ket notevoli che hanno un ket dedicato a loro volta:
$$
\Huge \ket{{\color{orangered} +}} = \frac{1}{\sqrt{2}} \left( \ket{0}\ {\color{orangered} +}\ \ket{1} \right)
$$
$$
\Huge \ket{{\color{DodgerBlue} -}} = \frac{1}{\sqrt{2}} \left( \ket{0}\ {\color{DodgerBlue} -}\ \ket{1} \right)
$$

> [!Hint] Typesetting
> In $\TeX$, puoi rappresentare un ket con `\ket{NUMERO}`.
