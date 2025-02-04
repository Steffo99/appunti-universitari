---
aliases:
  - Momentum
---
[[Variante]] per [[metodo di discesa stocastico]].

Ammorbidisce il [[gradiente]] aggiungendoci parte $\color{orange} b$ del gradiente dell'iterazione precedente:
$$
\Large
\displaylines{
	\mathbf{m}_{iter} = {\color{orange} b} \cdot \mathbf{m}_{iter-1} +  \func[d] \par{\mathbf{w}_{iter},\ \mathbf{R}_{iter}}
	\\
	\mathbf{x}_{iter+1}
	=
	\mathbf{x}_{iter}
	+
	{\color{yellow} \alpha}
	\cdot
	\mathbf{m}_{iter}
}
$$

> [!Tip]
> Solitamente $\color{orange} b$ vale $0.9$.
