[[gate quantistico]].
$$
\Huge
\qH = \begin{bmatrix}
1 & 1 \\
1 & -1
\end{bmatrix}
$$


## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Introduce il tipo più semplice di [[superposizione]] nello [[stato quantistico|stato]], dividendolo in due parti uguali:
- di [[fase di uno stato quantistico|fase]] concorde se applicato a $\ket{0}$ 
- di [[fase di uno stato quantistico|fase]] discorde se applicato a $\ket{1}$

$$
\qH \ket{0} = {}+ \frac{1}{\sqrt{2}} \cdot \ket{0} + \frac{1}{\sqrt{2}} \cdot \ket{1}
$$
$$
\qH \ket{1} = {}+ \frac{1}{\sqrt{2}} \cdot \ket{0} - \frac{1}{\sqrt{2}} \cdot \ket{1}
$$


O, viceversa, unendo due parti in una sola:
- due [[stato quantistico|stati]] concordi in $\ket{0}$
- due [[stato quantistico|stati]] discordi in $\ket{1}$

$$
\qH \par{ {}+ \frac{1}{\sqrt{2}} \cdot \ket{0} + \frac{1}{\sqrt{2}} \cdot \ket{1} } = \ket{0}
$$
$$
\qH \par{ {}+ \frac{1}{\sqrt{2}} \cdot \ket{0} - \frac{1}{\sqrt{2}} \cdot \ket{1} } = \ket{1}
$$

### [[circuito quantistico in parallelo]]

Un array di Hadamard gate crea la seguente [[superposizione]]:
$$
\Large
\prod_{p=0}^n  \qH[p] \ket{x}_n = \sum_{s=0}^{2^n - 1} (-1)^{x \odot s} \ket{s}_n
$$
Dove $\odot$ è il [[modulo-2 bitwise inner product]].

In particolare, se $\ket{x}_n = \ket{0}_n$, crea una [[superposizione uniformemente pesata|equal superposition]].

## 🌐 Effetto in [[sfera di Bloch]]

Corrisponde a una [[rotazione]] di $\pi$ sull'[[asse]] diagonale altodestra-bassosinistra.

## ✏️ Simbolo in [[IBM Quantum Composer]]

![[Hadamard gate.png]]

## ⛎ Equivalenze

Due Hadamard consecutivi si annullano:
$$
\qH \times \qH = \qI
$$

Un Hadamard è formato da metà [[Pauli X gate]] più metà [[Pauli Z gate]]:
$$
\qH = \frac{1}{\sqrt{2}} \cdot \par{\qX + \qZ}
$$

Circondare un [[Pauli X gate]] con degli [[Hadamard gate]] lo trasforma in un [[Pauli Z gate]]:
$$
\qH \times \qX \times \qH = \qZ
$$

Circondare un [[Pauli Z gate]] con degli [[Hadamard gate]] lo trasforma in un [[Pauli X gate]]:
$$
\qH \times \qZ \times \qH = \qX
$$

Circondare un [[controlled Pauli X gate]] con degli [[Hadamard gate]] inverte bit di controllo e bit controllato:
$$
\qH[0] \times \qH[1] \times \qCX{0}{1} \times \qH[1] \times \qH[0] = \qCX{1}{0}
$$
