---
aliases:
  - big-Omega
  - notazione omega-grande
  - big-Ω
  - lower bound
---
[[notazione asintotica]] per il [[limite inferiore]].

$$
\def \varAsym {{\color{royalblue} g(n)}}
\def \varFunc {{\color{orangered} f(n)}}
\def \varLess {{\color{lightcoral} c_{less}}}
\def \varMore {{\color{palegreen} c_{more}}}
\def \varBeginning {{\color{turquoise} n_0}}
\Huge
\Omega(\varAsym)
$$

In linguaggio formale, $\varFunc$ è in $\Omega(\varAsym)$ se:
$$
\Omega(\varAsym)
\Longleftrightarrow
\begin{cases}
	\exists & \varLess > 0\\
	\exists & \varBeginning > 0\\
	\\
	\forall & n \geq \varBeginning\\
	: & 0 \leq (\varLess \cdot \varAsym) \leq \varFunc 
\end{cases}
$$
