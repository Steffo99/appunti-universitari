Quando più [[gate quantistico]] vengono messi in serie, per convenzione essi vengono applicati da destra verso sinistra.

$$
\Large
\mathbf{U_3}\ \mathbf{U_2}\ \mathbf{U_1}\ \ket{\psi}
\quad=\quad
\par{
	\mathbf{U_3} \times 
	\par{
		\mathbf{U_2} \times 
		\par{
			\mathbf{U_1} \times 
			\ket{\psi}
		}
	}
}
$$


> [!Example]
> Essendo il [[prodotto vettoriale]] [[proprietà associativa|associativo]], è possibile combinare più gate in uno singolo prima di applicarli al [[qbit]]:
> 
> $$
> \displaylines{
> 	\mathbf{Y} \times \mathbf{Z}
> 	=\\\\
> 	\begin{bmatrix}
> 		0 & -\i\\
> 		\i & 0
> 	\end{bmatrix}
> 	\times
> 	\begin{bmatrix}
> 		1 & 0\\
> 		0 & -1
> 	\end{bmatrix}
> 	=\\\\
> 	\begin{bmatrix}
> 		(0 \cdot 1) + (-\i \cdot 0) & (0 \cdot 0) + (-\i \cdot -1)\\
> 		(\i \cdot 1) + (0 \cdot 0) & (\i \cdot 0) + (-1 \cdot 0)
> 	\end{bmatrix}
> 	=\\\\
> 	\begin{bmatrix}
> 		0 & \i\\
> 		\i & 0
> 	\end{bmatrix}
> 	=\\\\
> 	\i \cdot
> 	\begin{bmatrix}
> 		0 & 1\\
> 		1 & 0
> 	\end{bmatrix}
> 	=\\\\
> 	\i \cdot \mathbf{X}
> }
> $$

> 