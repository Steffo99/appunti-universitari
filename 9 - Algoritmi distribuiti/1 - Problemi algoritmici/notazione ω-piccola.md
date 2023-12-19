---
aliases:
  - omega-piccola
  - small-ω
  - small-omega
---
[[notazione asintotica]] per il [[limite inferiore]].

$$
\def \varAsym {{\color{royalblue} g(n)}}
\def \varFunc {{\color{orangered} f(n)}}
\def \varLess {{\color{lightcoral} c_{less}}}
\def \varBeginning {{\color{turquoise} n_0}}
\Huge 
\omega(\varAsym)
$$
In linguaggio formale, $\varFunc$ è in $\omega(\varAsym)$ se:
$$
\omega(\varAsym)
\Longleftrightarrow
\begin{cases}
	\forall & \varLess > 0\\
	\\
	: & \begin{cases}
		\exists & \varBeginning > 0\\
		\forall & n \geq \varBeginning\\
		: & 0 \leq (\varLess \cdot \varAsym) \leq \varFunc
	\end{cases}
\end{cases}
$$
