---
aliases:
  - stato di Bell
  - Bell state
---
Particolari [[stato quantistico|stati]] di due [[qbit]].
$$
\Huge
\qBoo
\qquad
\qBoi
\qquad
\qBio
\qquad
\qBii
$$
Corrispondono ai seguenti stati in [[base canonica]]:
$$
\Large
\begin{matrix}
\qBoo = \frac{1}{\sqrt{2}} \cdot \par{\ket{00} + \ket{11}}\\\\
\qBoi = \frac{1}{\sqrt{2}} \cdot \par{\ket{01} + \ket{10}}\\\\
\qBio = \frac{1}{\sqrt{2}} \cdot \par{\ket{00} - \ket{11}}\\\\
\qBii = \frac{1}{\sqrt{2}} \cdot \par{\ket{01} - \ket{10}}
\end{matrix}
$$

Formano una [[base vettoriale]] alternativa per un [[circuito quantistico in parallelo]] a due [[qbit]].

## Conversioni da-a [[base canonica]]

### Matematicamente

Possiamo convertire da [[base canonica]] a stati di Bell in questo modo:
$$
\Large
\begin{matrix}
	\alpha_{00} \ket{00}\\
	+\\
	\alpha_{01} \ket{01}\\
	+\\
	\alpha_{10} \ket{10}\\
	+\\
	\alpha_{11} \ket{11}
\end{matrix}
\quad=\quad
\frac{1}{\sqrt{2}}
\cdot
\par{
	\begin{matrix}
		\par{
			\alpha_{00} + \alpha_{11}
		} \cdot \qBoo\\
		+\\
		\par{
			\alpha_{01} + \alpha_{10}
		} \cdot \qBoi\\
		+\\
		\par{
			\alpha_{00} - \alpha_{11}
		} \cdot \qBio\\
		+\\
		\par{
			\alpha_{01} - \alpha_{10}
		} \cdot \qBii	
	\end{matrix}
}
$$

### Attraverso [[gate quantistico|quantum gate]]

Si possono ottenere stati di Bell a partire da [[qbit]] in [[base canonica]] con un [[controlled Pauli X gate]] e un [[Hadamard gate]]:
$$
\Large
\qCX{1}{0} \ \qH[1] \ \ket{x_1 \ x_0} = \ket{\psi_{x_1\ x_0}}
$$

O, viceversa:
$$
\Large
\ket{x_1 \ x_0} = \qH[1] \ \qCX{1}{0} \ \ket{\psi_{x_1\ x_0}}
$$

## Particolarità

Applicare un gate a un singolo qbit ruota il Bell state in uno [[stato quantistico|stato]] ad esso ortogonale:
$$
\Large
\braket{\psi_{00} | \qX[1] \otimes \qI[0] | \psi_{00}} = 0
$$
$$
\Large
\braket{\psi_{00} | \qY[1] \otimes \qI[0] | \psi_{00}} = 0
$$
$$
\Large
\braket{\psi_{00} | \qZ[1] \otimes \qI[0] | \psi_{00}} = 0
$$

Stessa cosa se applicati all'altro [[qbit]]:
$$
\Large
\braket{\psi_{00} | \qI[1] \otimes \qX[0] | \psi_{00}} = 0
$$
$$
\Large
\braket{\psi_{00} | \qI[1] \otimes \qY[0] | \psi_{00}} = 0
$$
$$
\Large
\braket{\psi_{00} | \qI[1] \otimes \qZ[0] | \psi_{00}} = 0
$$

E per tutti gli altri stati di Bell:
$$
\Large
\braket{\psi_{01} | \qX[1] \otimes \qI[0] | \psi_{01}} = 0
$$
$$
\Large
\braket{\psi_{10} | \qY[1] \otimes \qI[0] | \psi_{10}} = 0
$$
$$
\Large
\braket{\psi_{11} | \qZ[1] \otimes \qI[0] | \psi_{11}} = 0
$$

Se invece applichiamo un gate a entrambi i [[qbit]], lo stato rimane uguale:
$$
\Large
\braket{\psi_{00} | \qX[1] \otimes \qX[0] | \psi_{00}} = 1
$$
$$
\Large
\braket{\psi_{00} | \qY[1] \otimes \qY[0] | \psi_{00}} = {\color{orange} -1}
$$
$$
\Large
\braket{\psi_{00} | \qZ[1] \otimes \qZ[0] | \psi_{00}} = 1
$$
