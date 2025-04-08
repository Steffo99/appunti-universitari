---
aliases:
  - reduced density matrix
---
[[Attributo]] di un [[circuito quantistico in parallelo|sistema]] relativo a un singolo [[qbit]].

$$
\Large
\qD[n]{\Phi}
=
\begin{bmatrix}
\braket{0|\phi_n} \times \braket{\phi_n|0} && 
\braket{0|\phi_n} \times \braket{\phi_n|1} \\\\
\braket{1|\phi_n} \times \braket{\phi_n|0} && 
\braket{1|\phi_n} \times \braket{\phi_n|1} 
\end{bmatrix}
$$

> [!Note]
> Ciascun [[elemento]] può essere determinato facendo una [[operatore traccia|traccia]] della [[sottomatrice]] ottenuta dalla [[matrice di densità]] dagli elementi aventi il qbit $n$ nello stato della posizione in questione:
> $$
> \braket{0|\phi_1} \times \braket{\phi_1|1}
> =
> \trace{
> 	\begin{bmatrix}
> 	\braket{00|\phi_1} \times \braket{\phi_1|10} &&
> 	\braket{00|\phi_1} \times \braket{\phi_1|11} \\\\
> 	\braket{01|\phi_1} \times \braket{\phi_1|10} &&
> 	\braket{01|\phi_1} \times \braket{\phi_1|11}
> 	\end{bmatrix}
> }
> $$

