Si vuole creare un [[Hardy state]] su due [[qbit]] nello stato neutro applicandovi due [[gate quantistico universale|gate quantistici universali]].

## Obiettivo

Si vogliono quindi trovare i valori di $\mathbf{T}$ e $\mathbf{U}$ per cui:
$$
\def \kzero {{\color{darkgreen} 3}}
\def \kone {{\color{forestgreen} 1}}
\def \ktwo {{\color{limegreen} 1}}
\def \kthree {{\color{lightgreen} -1}}

\large
{\color{mediumpurple} \mathbf{T}}
{\color{mediumorchid} \mathbf{U}}
\ket{00} 
= 
\frac{
	\kzero \cdot \ket{00} +
	\kone \cdot \ket{01} +
	\ktwo \cdot \ket{10} +
	\kthree \cdot \ket{11}
}{\sqrt{12}}
$$

Ovvero:
$$
{\color{mediumpurple} \mathbf{T}}
\times
{\color{mediumorchid} \mathbf{U}}
\times
{
	\begin{bmatrix}
		1\\
		0\\
		0\\
		0
	\end{bmatrix}
}
=
\frac{1}{\sqrt{12}}
\cdot
{
	\begin{bmatrix}
		\kzero\\
		\kone\\
		\ktwo\\
		\kthree
	\end{bmatrix}
}
$$

## Separazione e raccolta nell'[[Hardy state]]

Ricordando che è possibile separare i [[qbit]]:
$$
\def \noteA {{\color{orangered} \Leftarrow}}
\def \noteB {{\color{dodgerblue} \Rightarrow}}
   
\displaylines{
	\ket{00} = \ket{0}_\noteA \otimes \ket{0}_\noteB \\
	\ket{01} = \ket{0}_\noteA \otimes \ket{1}_\noteB \\
	\ket{10} = \ket{1}_\noteA \otimes \ket{0}_\noteB \\
	\ket{11} = \ket{1}_\noteA \otimes \ket{1}_\noteB
}
$$

Possiamo separare i [[qbit]] dell'[[Hardy state]] in:   
$$
	\frac{1}{\sqrt{12}} 
	\cdot 
	\left\{
		\begin{matrix}
			\kzero & \cdot & (\ket{0}_\noteA \otimes \ket{0}_\noteB) \\
			& + \\
			\kone & \cdot & (\ket{0}_\noteA \otimes \ket{1}_\noteB) \\
			& + \\
			\ktwo & \cdot & (\ket{1}_\noteA \otimes \ket{0}_\noteB) \\
			& + \\
			\kthree & \cdot & (\ket{1}_\noteA \otimes \ket{1}_\noteB)
		\end{matrix}
	\right\}
$$

Poi, possiamo raccogliere lo stato di uno dei due [[qbit]], per esempio $\noteB$, ottenendo:
$$
\frac{1}{\sqrt{12}}
\cdot
\left\{
	\begin{matrix}
	(\ \kzero \cdot \ket{0}_\noteA + \ktwo \cdot \ket{1}_\noteA\ ) & \otimes & \ket{0}_\noteB \\
	& + \\
	(\ \kone \cdot \ket{0}_\noteA + \kthree \cdot \ket{1}_\noteA\ ) & \otimes & \ket{1}_\noteB
	\end{matrix}
\right\}
$$

## Determinare gli elementi di ${\color{mediumorchid}\mathbf{U}}$

==TODO==
