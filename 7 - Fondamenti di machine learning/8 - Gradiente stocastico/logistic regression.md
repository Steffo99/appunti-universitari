[[funzione]] [[perdita]] parametrica.
$$
\Large
\loss \par{ {\color{darkcyan} \mathbf{y}}, {\color{darkcyan} \mathbf{x}}, {\color{orange} \mathbf{w}} }
=
\log \par{
	1
	+
	e^{
		-
		{\color{darkcyan} \mathbf{y}}
		\times
		{\color{darkcyan} \mathbf{x}}^\dagger
		\times
		{\color{orange} \mathbf{w}}
	}
}
$$

Il suo [[gradiente]] è:
$$
\nabla_{\color{orange} \mathbf{w}}
\ 
\loss \par{ {\color{darkcyan} \mathbf{y}}, {\color{darkcyan} \mathbf{x}}, {\color{orange} \mathbf{w}} }
=
\frac
{
	e^{
		-
		{\color{darkcyan} \mathbf{y}}
		\times
		{\color{darkcyan} \mathbf{x}}^\dagger
		\times
		{\color{orange} \mathbf{w}}
	}
	\cdot
	\par{
		-
		{\color{darkcyan} \mathbf{y}}
		\times
		{\color{darkcyan} \mathbf{x}}^\dagger		
	}
}
{
	1
	+
	e^{
		-
		{\color{darkcyan} \mathbf{y}}
		\times
		{\color{darkcyan} \mathbf{x}}^\dagger
		\times
		{\color{orange} \mathbf{w}}
	}
}
$$
