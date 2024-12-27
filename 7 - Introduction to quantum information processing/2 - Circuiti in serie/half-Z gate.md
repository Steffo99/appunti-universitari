---
aliases:
  - S gate
---

[[gate quantistico]] corrispondente alla [[radice quadrata]] del [[Pauli Z gate]].

$$
\Huge
\mathbf{S} 
=
\sqrt{\mathbf{Z}} 
= 
\begin{bmatrix}
1 & 0 \\
0 & i
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Si comporta come mezzo [[Pauli Z gate]]:
$$
\mathbf{S} \ket{0} = \ket{0}
$$
$$
\mathbf{S} \ket{1} = i \cdot \ket{1}
$$$$
\mathbf{S}\ \mathbf{S} \ket{1} = \mathbf{Z} \ket{1}
$$
$$
\mathbf{S}
\begin{bmatrix}
	\alpha \\
	\beta
\end{bmatrix}
=
\begin{bmatrix}
	\alpha \\
	i \cdot \beta
\end{bmatrix}
$$

## 🌐 Effetto in [[sfera di Bloch]]

Corrisponde a una [[rotazione]] di $\frac{\pi}{2}$ sull'[[asse Z]], quello dal basso all'alto.

## ✏️ Simbolo per [[circuito quantistico]]

![[S gate.png]]

## ⛎ Utilizzo

==Per cosa viene usato questo gate?==
