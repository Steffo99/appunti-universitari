---
aliases:
  - small-o
---
[[notazione asintotica]] per il [[limite inferiore]].

$$
\def \varAsym {{\color{royalblue} g(n)}}
\def \varFunc {{\color{orangered} f(n)}}
\def \varMore {{\color{palegreen} c_{more}}}
\def \varBeginning {{\color{turquoise} n_0}}
\Huge 
o(\varAsym)
$$
In linguaggio formale, $\varFunc$ è in $O(\varAsym)$ se:
$$
o(\varAsym)
\Longleftrightarrow
\begin{cases}
	\forall & \varMore > 0\\
	\\
	: & \begin{cases}
		\exists & \varBeginning > 0\\
		\forall & n \geq \varBeginning\\
		: & 0 \leq \varFunc \leq (\varMore \cdot \varAsym)
	\end{cases}
\end{cases}
$$
