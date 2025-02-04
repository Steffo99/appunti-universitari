[[funzione]] [[perdita]] parametrica.
$$
\Large
\loss \par{ {\color{darkcyan} \mathbf{y}}, {\color{darkcyan} \mathbf{x}}, {\color{orange} \mathbf{w}} }
=
\par{
	1
	-
	\par{
		{\color{darkcyan} \mathbf{y}}
		\times
		{\color{darkcyan} \mathbf{x}}^\dagger
		\times
		{\color{orange} \mathbf{w}}
	}^2
}
$$

Il suo [[gradiente]] è:
$$
\nabla_{\color{orange} \mathbf{w}}
\ 
\loss \par{ {\color{darkcyan} \mathbf{y}}, {\color{darkcyan} \mathbf{x}}, {\color{orange} \mathbf{w}} }
=
-
2
\cdot
\par{
	1
	-
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
$$
