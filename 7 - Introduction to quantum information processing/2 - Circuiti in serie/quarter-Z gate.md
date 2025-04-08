---
aliases:
  - T gate
---

[[gate quantistico]] corrispondente alla [[radice quadrata]] dell'[[half-Z gate]].

$$
\Huge
\qT
=
\sqrt{\qS} 
= 
\sqrt{\sqrt{\qZ}}
=
\begin{bmatrix}
1 & 0 \\
0 & e^{\i \frac{\pi}{4}}
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Si comporta come un quarto di [[Pauli Z gate]]:
$$
\qT \ket{0} = \ket{0}
$$
$$
\qT \ket{1} = e^{\i \frac{\pi}{4}} \cdot \ket{1}
$$
$$
\qT
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

![[quarter-Z gate.png]]

## ⛎ Equivalenze

Due quarter-Z consecutivi diventano un [[half-Z gate]]:
$$
\qT \times \qT = \qS
$$

Quattro quarter-Z consecutivi diventano un [[Pauli Z gate]]:
$$
\qT \times \qT \times \qT \times \qT = \qZ
$$

Otto quarter-Z consecutivi si annullano:
$$
\qT \times \qT \times \qT \times \qT \times \qT \times \qT \times \qT \times \qT = \qI
$$
