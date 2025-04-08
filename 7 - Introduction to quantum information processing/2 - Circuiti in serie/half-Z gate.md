---
aliases:
  - S gate
---

[[gate quantistico]] corrispondente alla [[radice quadrata]] del [[Pauli Z gate]].

$$
\Huge
\qS 
=
\sqrt{\qZ} 
= 
\begin{bmatrix}
1 & 0 \\
0 & i
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Si comporta come mezzo [[Pauli Z gate]]:
$$
\qS \ket{0} = \ket{0}
$$
$$
\qS \ket{1} = \i \cdot \ket{1}
$$
$$
\qS
\begin{bmatrix}
	\alpha \\
	\beta
\end{bmatrix}
=
\begin{bmatrix}
	\alpha \\
	\i \cdot \beta
\end{bmatrix}
$$

## 🌐 Effetto in [[sfera di Bloch]]

Corrisponde a una [[rotazione]] di $\frac{\pi}{2}$ sull'[[asse Z]], quello dal basso all'alto.

## ✏️ Simbolo per [[circuito quantistico]]

![[half-Z gate.png]]

## ⛎ Equivalenze

Due half-Z diventano un [[Pauli Z gate]]:
$$
\qS \times \qS = \qZ
$$

Quattro half-Z consecutivi si annullano:
$$
\qS \times \qS \times \qS \times \qS = \qI
$$
