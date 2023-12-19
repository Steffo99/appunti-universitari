---
aliases:
  - big-Theta
  - notazione theta-grande
  - big-Θ
  - tight bound
---
[[notazione asintotica]] per il [[limite bilaterale]].

$$
\def \varAsym {{\color{royalblue} g(n)}}
\def \varFunc {{\color{orangered} f(n)}}
\def \varLess {{\color{lightcoral} c_{less}}}
\def \varMore {{\color{palegreen} c_{more}}}
\def \varBeginning {{\color{turquoise} n_0}}
\Huge 
\Theta(\varAsym)
$$

In linguaggio formale, $\varFunc$ è in $\Theta(\varAsym)$ se:
$$
\Theta(\varAsym)
\Longleftrightarrow
\begin{cases}
	\exists & \varLess > 0\\
	\exists & \varMore > 0\\
	\exists & \varBeginning > 0\\
	\\
	\forall & n \geq \varBeginning\\
	: & 0 \leq (\varLess \cdot \varAsym) \leq \varFunc \leq (\varMore \cdot \varAsym)
\end{cases}
$$
