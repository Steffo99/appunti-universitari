$$
\def \uFirst {{\color{mediumpurple} \mathbf{A}}}
\def \uSecond {{\color{mediumorchid} \mathbf{B}}}
\def \uThird {{\color{violet} \mathbf{C}}}

\newcommand {\uFirstEl}[2] {{\color{mediumpurple} \mathbf{a_{{#1}\to{#2}}}}}
\newcommand {\uSecondEl}[2] {{\color{mediumorchid} \mathbf{b_{{#1}\to{#2}}}}}
\newcommand {\uThirdEl}[2] {{\color{violet} \mathbf{c_{{#1}\to{#2}}}}}

\Tiny
\color{grey}
\text{don't mind me, just defining}\ \TeX\ \text{variables}
$$

Si vuole costruire un [[Hardy state]] su due [[qbit]] utilizzando tre gate.

## Equazione generale

Scritto come equazione, questo sarebbe:
$$
\Large
\uFirst\ \uSecond\ \uThird\ \ket{00} = \frac{3 \cdot \ket{00} + 1 \cdot \ket{01} + 1 \cdot \ket{10} - 1 \cdot \ket{11}}{\sqrt{12}}
$$

Ovvero, in forma matriciale:
$$
\tiny
\begin{bmatrix}
	\uFirstEl{00}{00} & \uFirstEl{01}{00} & \uFirstEl{10}{00} & \uFirstEl{11}{00}\\
	\uFirstEl{00}{00} & \uFirstEl{01}{01} & \uFirstEl{10}{01} & \uFirstEl{11}{01}\\
	\uFirstEl{00}{00} & \uFirstEl{01}{10} & \uFirstEl{10}{10} & \uFirstEl{11}{10}\\
	\uFirstEl{00}{00} & \uFirstEl{01}{11} & \uFirstEl{10}{11} & \uFirstEl{11}{11}\\
\end{bmatrix}
\times
\begin{bmatrix}
	\uSecondEl{00}{00} & \uSecondEl{01}{00} & \uSecondEl{10}{00} & \uSecondEl{11}{00}\\
	\uSecondEl{00}{00} & \uSecondEl{01}{01} & \uSecondEl{10}{01} & \uSecondEl{11}{01}\\
	\uSecondEl{00}{00} & \uSecondEl{01}{10} & \uSecondEl{10}{10} & \uSecondEl{11}{10}\\
	\uSecondEl{00}{00} & \uSecondEl{01}{11} & \uSecondEl{10}{11} & \uSecondEl{11}{11}\\
\end{bmatrix}
\times
\begin{bmatrix}
	\uThirdEl{00}{00} & \uThirdEl{01}{00} & \uThirdEl{10}{00} & \uThirdEl{11}{00}\\
	\uThirdEl{00}{00} & \uThirdEl{01}{01} & \uThirdEl{10}{01} & \uThirdEl{11}{01}\\
	\uThirdEl{00}{00} & \uThirdEl{01}{10} & \uThirdEl{10}{10} & \uThirdEl{11}{10}\\
	\uThirdEl{00}{00} & \uThirdEl{01}{11} & \uThirdEl{10}{11} & \uThirdEl{11}{11}\\
\end{bmatrix}
\times
\begin{bmatrix}
	1\\
	0\\
	0\\
	0\\
\end{bmatrix}
=
\frac{1}{\sqrt{12}}
\begin{bmatrix}
	3\\
	1\\
	1\\
	-1\\
\end{bmatrix}
$$

È di fatto un enorme sistema lineare.

## Equazione non-controlled

Vogliamo, per minimizzare i costi, usare due [[universal gate]] da un [[qbit]] ciascuno e un solo [[universal controlled gate]] da due. 

Decidiamo che gli universal gate saranno $\uSecond$ e $\uThird$, con il primo che opera sul primo [[qbit]] $\ket{0\_}$, e il secondo che opera sul secondo [[qbit]] $\ket{\_0}$.

La forma matriciale diventa quindi:
$$
\tiny
\begin{bmatrix}
	1 & 0 & 0 & 0\\
	0 & 1 & 0 & 0\\
	0 & 0 & \uFirstEl{10}{10} & \uFirstEl{11}{10}\\
	0 & 0 & \uFirstEl{10}{11} & \uFirstEl{11}{11}\\
\end{bmatrix}
\times
\begin{bmatrix}
	\uSecondEl{0}{0} & \uSecondEl{0}{0} & \uSecondEl{1}{0} & \uSecondEl{1}{0}\\	\uSecondEl{0}{0} & \uSecondEl{0}{0} & \uSecondEl{1}{0} & \uSecondEl{1}{0}\\
	\uSecondEl{0}{1} & \uSecondEl{0}{1} & \uSecondEl{1}{1} & \uSecondEl{1}{1}\\
	\uSecondEl{0}{1} & \uSecondEl{0}{1} & \uSecondEl{1}{1} & \uSecondEl{1}{1}\\
\end{bmatrix}
\times
\begin{bmatrix}
	\uThirdEl{0}{0} & \uThirdEl{1}{0} & \uThirdEl{0}{0} & \uThirdEl{1}{0}\\
	\uThirdEl{0}{1} & \uThirdEl{1}{1} & \uThirdEl{0}{1} & \uThirdEl{1}{1}\\
	\uThirdEl{0}{0} & \uThirdEl{1}{0} & \uThirdEl{0}{0} & \uThirdEl{1}{0}\\
	\uThirdEl{0}{1} & \uThirdEl{1}{1} & \uThirdEl{0}{1} & \uThirdEl{1}{1}\\
\end{bmatrix}
\times
\begin{bmatrix}
	1\\
	0\\
	0\\
	0\\
\end{bmatrix}
=
\frac{1}{\sqrt{12}}
\begin{bmatrix}
	3\\
	1\\
	1\\
	-1\\
\end{bmatrix}
$$
