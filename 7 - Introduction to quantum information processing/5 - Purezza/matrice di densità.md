---
aliases:
  - density matrix
---
[[Attributo]] di un [[circuito quantistico in parallelo|sistema]].

$$
\Huge
\qD{\Phi} = \ket{\Phi} \times \bra{\Phi} = \ket{\Phi} \bra{\Phi}
$$

> [!Tip]
> Ad esempio, in un [[circuito quantistico in parallelo|sistema]] a due [[qbit]]:
> $$
> \qD{\ket{01}}
> = 
> \ket{01} \times \bra{01}
> =
> \begin{bmatrix}
> 0\\
> 1\\
> 0\\
> 0
> \end{bmatrix}
> \times
> \begin{bmatrix}
> 0 & 1 & 0 & 0
> \end{bmatrix}
> =
> \begin{bmatrix}
> 0 & 0 & 0 & 0\\
> 0 & 1 & 0 & 0\\
> 0 & 0 & 0 & 0\\
> 0 & 0 & 0 & 0
> \end{bmatrix}
> $$
>
> Oppure:
> $$
> \qD{\frac{1}{\sqrt{2}} \ket{00} + \ket{11}}
> =
> \frac{1}{\sqrt{2}} \cdot \par{\ket{00} + \ket{11}} \times \frac{1}{\sqrt{2}} \cdot \par{\bra{00} + \bra{11}}
> =
> \frac{1}{2} \cdot
> \begin{bmatrix}
> 1\\
> 0\\
> 0\\
> 1
> \end{bmatrix}
> \times
> \begin{bmatrix}
> 1 & 0 & 0 & 1
> \end{bmatrix}
> =
> \begin{bmatrix}
> 1 & 0 & 0 & 1\\
> 0 & 0 & 0 & 0\\
> 0 & 0 & 0 & 0\\
> 1 & 0 & 0 & 1\\
> \end{bmatrix}
> $$

> [!Note]
> Un modo diverso, detto "generale", per scrivere la matrice di densità ad esempio in un [[circuito quantistico in parallelo|sistema]] a due [[qbit]] è:
> $$
> \qD{\Phi}
> =
> \begin{bmatrix}
> \braket{00|\Phi} \times \braket{\Phi|00} &&
> \braket{00|\Phi} \times \braket{\Phi|01} &&
> \braket{00|\Phi} \times \braket{\Phi|10} &&
> \braket{00|\Phi} \times \braket{\Phi|11} \\\\
> \braket{01|\Phi} \times \braket{\Phi|00} &&
> \braket{01|\Phi} \times \braket{\Phi|01} &&
> \braket{01|\Phi} \times \braket{\Phi|10} &&
> \braket{01|\Phi} \times \braket{\Phi|11} \\\\
> \braket{10|\Phi} \times \braket{\Phi|00} &&
> \braket{10|\Phi} \times \braket{\Phi|01} &&
> \braket{10|\Phi} \times \braket{\Phi|10} &&
> \braket{10|\Phi} \times \braket{\Phi|11} \\\\
> \braket{11|\Phi} \times \braket{\Phi|00} &&
> \braket{11|\Phi} \times \braket{\Phi|01} &&
> \braket{11|\Phi} \times \braket{\Phi|10} &&
> \braket{11|\Phi} \times \braket{\Phi|11} 
> \end{bmatrix}
> $$
