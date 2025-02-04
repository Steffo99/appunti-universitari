[[funzione]] [[perdita]] parametrica.
$$
\Large
\loss \par{ {\color{darkcyan} \mathbf{y}}, {\color{darkcyan} \mathbf{x}}, {\color{orange} \mathbf{w}} }
=
\begin{cases}
	\frac{1}{2} 
	- 
	\par
	{
		{\color{darkcyan} \mathbf{y}}
		\times
		{\color{darkcyan} \mathbf{x}}^\dagger
		\times
		{\color{orange} \mathbf{w}}
	}
	&&
	\mathrm{if}\ 
	{\color{darkcyan} \mathbf{y}}
	\times
	{\color{darkcyan} \mathbf{x}}^\dagger
	\times
	{\color{orange} \mathbf{w}} \leq 0
	\\\\
	\frac{1}{2} 
	- 
	\par
	{
		{\color{darkcyan} \mathbf{y}}
		\times
		{\color{darkcyan} \mathbf{x}}^\dagger
		\times
		{\color{orange} \mathbf{w}}
	}^2
	&&
	\mathrm{if}\ 
	0 <
	{\color{darkcyan} \mathbf{y}}
	\times
	{\color{darkcyan} \mathbf{x}}^\dagger
	\times
	{\color{orange} \mathbf{w}} < 1
	\\\\
	0
	&&
	\mathrm{if}\ 
	1 \leq
	{\color{darkcyan} \mathbf{y}}
	\times
	{\color{darkcyan} \mathbf{x}}^\dagger
	\times
	{\color{orange} \mathbf{w}} 
	
\end{cases}
$$

Il suo [[gradiente]] è:
$$
\nabla_{\color{orange} \mathbf{w}}
\ 
\loss \par{ {\color{darkcyan} \mathbf{y}}, {\color{darkcyan} \mathbf{x}}, {\color{orange} \mathbf{w}} }
=
\begin{cases}
-
{\color{darkcyan} \mathbf{y}}
\times
{\color{darkcyan} \mathbf{x}}^\dagger
&&
\mathrm{if}\ 
{\color{darkcyan} \mathbf{y}}
\times
{\color{darkcyan} \mathbf{x}}^\dagger
\times
{\color{orange} \mathbf{w}} \leq 0
\\\\
- \par{
	1 -
	{\color{darkcyan} \mathbf{y}}
	\times
	{\color{darkcyan} \mathbf{x}}^\dagger
	\times
	{\color{orange} \mathbf{w}}
}
\cdot
\par{
	{\color{darkcyan} \mathbf{y}}
	\times
	{\color{darkcyan} \mathbf{x}}^\dagger
}
&&
\mathrm{if}\ 
0 <
{\color{darkcyan} \mathbf{y}}
\times
{\color{darkcyan} \mathbf{x}}^\dagger
\times
{\color{orange} \mathbf{w}} < 1
\\\\
0
&&
\mathrm{if}\ 
1 \leq
{\color{darkcyan} \mathbf{y}}
\times
{\color{darkcyan} \mathbf{x}}^\dagger
\times
{\color{orange} \mathbf{w}}
\\\\
\end{cases}
$$
