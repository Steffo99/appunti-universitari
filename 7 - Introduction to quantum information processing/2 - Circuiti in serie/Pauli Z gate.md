[[gate quantistico]] che appartiene alla famiglia dei [[Pauli gate]].

$$
\Huge
\qZ = \begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Inverte la fase dello [[stato attivo]] del [[qbit]] a cui è applicato:
$$
\qZ \ket{0} = \ket{0}
$$
$$
\qZ \ket{1} = - \ket{1}
$$
$$
\qZ 
\begin{bmatrix}
	\alpha \\
	\beta
\end{bmatrix}
=
\begin{bmatrix}
	\alpha \\
	-\beta
\end{bmatrix}
$$


## 🌐 Effetto in [[sfera di Bloch]]

Corrisponde a una [[rotazione]] di $\pi$ sull'[[asse Z]], quello dal basso all'alto.

## ✏️ Simbolo in [[IBM Quantum Composer]]

![[Pauli Z gate.png]]
## ⛎ Equivalenze

Due Pauli Z consecutivi si annullano:
$$
\qZ \times \qZ = \qI
$$

Può essere usato insieme al [[Pauli X gate]] per ottenere un [[Pauli Y gate]]:
$$
\axisX{\mathbf{X}} \times \axisZ{\mathbf{Z}} = \i \axisY{\mathbf{Y}}
$$

Può essere usato insieme al [[Pauli Y gate]] per ottenere un [[Pauli X gate]]:
$$
\axisY{\mathbf{Y}} \times \axisZ{\mathbf{Z}} = \i \axisX{\mathbf{X}}
$$
