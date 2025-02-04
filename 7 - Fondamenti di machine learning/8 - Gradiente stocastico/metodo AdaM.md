---
aliases:
  - AdaM
  - metodo Adaptive Momentum estimation
---
[[Variante]] per [[metodo di discesa stocastico]] che estende il [[metodo Momentum]].

Ammorbidisce meglio il [[gradiente]], controllandone [[media]], [[varianza]], e [[passo di un metodo di discesa|lunghezza di passo]]:
- $\mathbf{m}_{iter}$ rappresenta la [[media]], e la sua persistenza è regolata da $\color{orange} b$
- $\mathbf{v}_{iter}$ rappresenta la [[varianza]], e la sua persistenza è regolata da $\color{orangered} c$
- $\epsilon$ è un [[infinitesimo]], utilizzato per evitare divisioni per zero
$$
\Large
\displaylines{
	\mathbf{m}_{iter} = {\color{orange} b} \cdot \mathbf{m}_{iter-1} + {\color{orange} \par{1 - b}} \cdot \func[d] \par{\mathbf{w}_{iter},\ \mathbf{R}_{iter}}
	\\
	\mathbf{v}_{iter} = {\color{orangered} c} \cdot \mathbf{v}_{iter-1} + {\color{orangered} \par{1 - c}} \cdot \func[d] \par{\mathbf{w}_{iter},\ \mathbf{R}_{iter}} {}^2
	\\
	a_{iter} = {\color{yellow} \alpha} \cdot \frac{\sqrt{1 - {\color{orangered} c}^{iter}}}{\par{1 - {\color{orange} b}^{iter}}}
	\\
	\mathbf{x}_{iter+1}
	=
	\mathbf{x}_{iter}
	+
	a_{iter}
	\cdot
	\frac{\mathbf{m}_{iter}}{\sqrt{\mathbf{v}_{iter}} + \epsilon}
}
$$


> [!Tip]
> Solitamente $\color{orange} b$ vale $0.9$, e $\color{orangered} c$ vale $0.999$.

> [!Caution]
> Non converge sempre, ma quando funziona è molto performante.

