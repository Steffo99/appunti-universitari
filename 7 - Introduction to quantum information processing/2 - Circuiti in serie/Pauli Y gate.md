[[gate quantistico]] che appartiene alla famiglia dei [[Pauli gate]].

$$
\Huge
\qY = \begin{bmatrix}
	0 & -\i \\
	\i & 0
\end{bmatrix}
$$

## 🌐 Effetto in [[sfera di Bloch]]

Corrisponde a una [[rotazione]] di $\pi$ sull'[[asse Y]], quello da sinistra a destra.

## ✏️ Simbolo in [[IBM Quantum Composer]]

![[Pauli Y gate.png]]
## ⛎ Equivalenze

Due Pauli-Y consecutivi si annullano:
$$
\qY \times \qY = \qI
$$

Può essere usato insieme al [[Pauli X gate]] per ottenere un [[Pauli Z gate]]:
$$
\axisX{\mathbf{X}} \times \axisY{\mathbf{Y}} = \i \axisZ{\mathbf{Z}}
$$

Può essere usato insieme al [[Pauli Z gate]] per ottenere un [[Pauli X gate]]:
$$
\axisY{\mathbf{Y}} \times \axisZ{\mathbf{Z}} = \i \axisX{\mathbf{X}}
$$
