[[Operazione]] tra due [[tensore|tensori]] che risulta in un [[tensore]] di [[ordine]] superiore.

$$\Huge \otimes$$

Può essere vista come l'applicazione di un "pattern" moltiplicato:
$$
\left[ \begin{matrix} 
	{\color{Gray} In} & {\color{Gray} Out_{\ket{0}}} & {\color{Gray} Out_{\ket{1}}} \\
	{\color{Gray} \ket{0}} & 0 & 1 \\ 
	{\color{Gray} \ket{1}} & 1 & 0 \\ 
\end{matrix} \right]
\otimes
\left[ \begin{matrix} 
	{\color{Gray} In} & {\color{Gray} Out_{\ket{0}}} & {\color{Gray} Out_{\ket{1}}} \\
	{\color{Gray} \ket{0}} & {\color{blue} 0} & {\color{green} 1} \\
	{\color{Gray} \ket{1}} & {\color{red} 2} & {\color{orange} 3} \\
\end{matrix} \right] 
= \\
\quad \\ \left[ \begin{matrix} {\color{Gray} In} & {\color{Gray} Out_{\ket{00}}} & {\color{Gray} Out_{\ket{01}}} & {\color{Gray} Out_{\ket{10}}} & {\color{Gray} Out_{\ket{11}}} \\ {\color{Gray} \ket{00}} & {\color{blue} 0} & {\color{blue} 0} & {\color{green} 0} & {\color{green} 1} \\ {\color{Gray} \ket{01}} & {\color{blue} 0} & {\color{blue} 0} & {\color{green} 1} & {\color{green} 0} \\ {\color{Gray} \ket{10}} & {\color{red} 0} & {\color{red} 2} & {\color{orange} 0} & {\color{orange} 3} \\ {\color{Gray} \ket{11}} & {\color{red} 2} & {\color{red} 0} & {\color{orange} 3} & {\color{orange} 0} \\ \end{matrix} \right]$$
