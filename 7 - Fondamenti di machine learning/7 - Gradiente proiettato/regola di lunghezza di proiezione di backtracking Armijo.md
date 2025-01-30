[[metodo di lunghezza di proiezione]], analogo alla [[metodo di lunghezza di passo di backtracking Armijo]].

$$
\Large
\func \par{
	\mathbf{x}_{iter}
	+
	\lambda
	\cdot 
	\mathbf{d}_{iter}
}
\leq
\func \par{
	\mathbf{x}_{iter}
}
+
{\color{yellow}
	{\color{orange} \sigma}
	\cdot
	\lambda
	\cdot
	\nabla\ 
	\func \par{
		\mathbf{x}_{iter}
	}^\dagger
	\times
	\mathbf{d}_{iter}
}
$$