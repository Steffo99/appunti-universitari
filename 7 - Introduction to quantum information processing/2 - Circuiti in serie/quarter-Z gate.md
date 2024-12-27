---
aliases:
  - T gate
---

[[gate quantistico]] corrispondente alla [[radice quadrata]] dell'[[half-Z gate]].

$$
\Huge
\mathbf{T} 
=
\sqrt{\mathbf{S}} 
= 
\sqrt{\sqrt{Z}}
=
\begin{bmatrix}
1 & 0 \\
0 & e^{\i \frac{\pi}{4}}
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Si comporta come un quarto di [[Pauli Z gate]]:
$$
\mathbf{T} \ket{0} = \ket{0}
$$
$$
\mathbf{T} \ket{1} = e^{\i \frac{\pi}{4}} \cdot \ket{1}
$$$$
\mathbf{T}\ \mathbf{T} \ket{1} = \mathbf{S} \ket{1}
$$
$$
\mathbf{T}\ \mathbf{T}\ \mathbf{T}\ \mathbf{T} \ket{1} = \mathbf{Z} \ket{1}
$$
$$
\mathbf{T}
\begin{bmatrix}
	\alpha \\
	\beta
\end{bmatrix}
=
\begin{bmatrix}
	\alpha \\
	e^{\i \frac{\pi}{4}} \cdot \beta
\end{bmatrix}
$$

## 🌐 Effetto in [[sfera di Bloch]]

Corrisponde a una [[rotazione]] di $\frac{\pi}{2}$ sull'[[asse Z]], quello dal basso all'alto.

## ✏️ Simbolo per [[circuito quantistico]]

![[T gate.png]]

## ⛎ Utilizzo

==Per cosa viene usato questo gate?==
