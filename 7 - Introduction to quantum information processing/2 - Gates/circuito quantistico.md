Combinazione di più [[gate quantistico|gate quantistici]].

In notazione matematica, i [[gate quantistico|gate]] vengono eseguiti da destra verso sinistra:

$$
\Huge
\mathbf{4\ 3\ 2\ 1} \ket{\psi} = (\ \mathbf{4} (\ \mathbf{3} (\ \mathbf {2} (\ \mathbf{1} \ket{\psi}\ )\ )\ )\ )
$$

Nei diagrammi di circuito, vengono eseguiti da sinistra verso destra.

## Combinazione di [[gate quantistico|gate]]

Più [[gate quantistico|gate]] si possono combinare in serie, o in parallelo.[^1]

### Serie: [[prodotto matriciale]]

I [[gate quantistico|gate]] vengono applicati consecutivamente uno all'altro:

$$
\displaylines{
	\mathbf{Y} \times \mathbf{Z}
	=\\\\
	\begin{bmatrix}
		0 & -i\\
		i & 0
	\end{bmatrix}
	\times
	\begin{bmatrix}
		1 & 0\\
		0 & -1
	\end{bmatrix}
	=\\\\
	\begin{bmatrix}
		(0 \cdot 1) + (-i \cdot 0) & (0 \cdot 0) + (-i \cdot -1)\\
		(i \cdot 1) + (0 \cdot 0) & (i \cdot 0) + (-1 \cdot 0)
	\end{bmatrix}
	=\\\\
	\begin{bmatrix}
		0 & i\\
		i & 0
	\end{bmatrix}
	=\\\\
	i \cdot
	\begin{bmatrix}
		0 & 1\\
		1 & 0
	\end{bmatrix}
	=\\\\
	i \cdot \mathbf{X}
}
$$

![[circuito quantistico in serie.png]]
### Parallelo: [[prodotto tensoriale]]

I [[gate quantistico|gate]] vengono richiusi in una [[scatola nera]] come se fossero uno solo:
$$
\displaylines{
	\mathbf{Y} \otimes \mathbf{Z}
	=\\\\
	\begin{bmatrix}
		0 & -i\\
		i & 0
	\end{bmatrix}
	\otimes
	\begin{bmatrix}
		1 & 0\\
		0 & -1
	\end{bmatrix}
	=\\\\
	\begin{bmatrix}
		0 \cdot 1 & -i \cdot 1 & 0 \cdot 0 & -i \cdot 0 \\
		i \cdot 1 & 0 \cdot 1 & i \cdot 0 & 0 \cdot 0 \\
		0 \cdot 0 & -i \cdot 0 & 0 \cdot -1 & -i \cdot -1 \\
		i \cdot 0 & 0 \cdot 0 & i \cdot -1 & 0 \cdot -1
	\end{bmatrix}
	=\\\\
	\begin{bmatrix}
		0 & -i & 0 & 0 \\
		i & 0 & 0 & 0 \\
		0 & 0 & 0 & i \\
		0 & 0 & -i & 0
	\end{bmatrix}
}
$$

![[circuito quantistico in parallelo.png]]



[^1]: https://en.wikipedia.org/wiki/Quantum_logic_gate#Circuit_composition