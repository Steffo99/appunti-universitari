---
aliases:
  - big-O
---
[[notazione asintotica]] per il [[limite inferiore]].

$$
\def \varAsym {{\color{royalblue} g(n)}}
\def \varFunc {{\color{orangered} f(n)}}
\def \varMore {{\color{palegreen} c_{more}}}
\def \varBeginning {{\color{turquoise} n_0}}
\Huge 
O(\varAsym)
$$
In linguaggio formale, $\varFunc$ è in $O(\varAsym)$ se:
$$
O(\varAsym)
\Longleftrightarrow
\begin{cases}
	\exists & \varMore > 0\\
	\exists & \varBeginning > 0\\
	\\
	\forall & n \geq \varBeginning\\
	: & 0 \leq \varFunc \leq (\varMore \cdot \varAsym)
\end{cases}
$$
