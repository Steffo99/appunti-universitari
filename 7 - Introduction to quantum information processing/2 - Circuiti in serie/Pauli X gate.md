---
aliases:
  - quantum NOT
  - X gate
  - quantum X gate
---
[[gate quantistico]] che appartiene alla famiglia dei [[Pauli gate]].

$$
\Huge
\mathbf{X} = \begin{bmatrix}
	0 & 1 \\
	1 & 0
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Inverte i due [[stato quantistico|stati]] del [[qbit]] a cui è applicato:
$$
\mathbf{X} \ket{0} = \ket{1}
$$
$$
\mathbf{X} \ket{1} = \ket{0}
$$
$$
\mathbf{X} 
\begin{bmatrix}
	\alpha \\
	\beta
\end{bmatrix}
=
\begin{bmatrix}
	\beta \\
	\alpha
\end{bmatrix}
$$

## 🌐 Effetto in [[sfera di Bloch]]

Corrisponde a una [[rotazione]] di $\pi$ sull'[[asse X]], quello da sinistra a destra.

## ✏️ Simbolo per [[circuito quantistico]]

![[Pauli X gate.png]]
## ⛎ Utilizzo

Può essere usato insieme al [[Pauli Y gate]] per ottenere un [[Pauli Z gate]]:
$$
\axisX{\mathbf{X}} \times \axisY{\mathbf{Y}} = \i \axisZ{\mathbf{Z}}
$$

Può essere usato insieme al [[Pauli Z gate]] per ottenere un [[Pauli Y gate]]:
$$
\axisX{\mathbf{X}} \times \axisZ{\mathbf{Z}} = \i \axisY{\mathbf{Y}}
$$
