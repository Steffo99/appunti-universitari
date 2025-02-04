[[rischio empirico]] quando si fa uso di un [[predittore parametrico]]:
$$
\Huge
\riske[\color{hotpink} \mathrm{h}] \par{{\color{orange} \mathbf{w}}, \color{cyan} \mathbf{D}} : \par{{\color{orange} \mathbb{W}}, {\color{cyan} \par{\mathbb{X}, \mathbb{Y}}^n}} \to \mathbb{R}
$$

Usa (parte dei) dati del [[training set]] per creare una [[distribuzione di probabilità empirica in gradiente stocastico|distribuzione di probabilità empirica]]:
$$
\Large
\riske[\color{hotpink} \mathrm{h}] \par{\color{orange} \mathbf{w}, \color{cyan} \mathbf{D}}
=
\frac{1}{\color{cyan} n}
\cdot
\sum_{\par{{\color{darkcyan} \mathbf{x}}, {\color{darkcyan} \mathbf{y}}} \in \color{cyan} \mathbf{D}}
\loss \par{
	{\color{darkcyan} \mathbf{y}},\
	{\color{hotpink} \func[h]} \par{
		{\color{darkcyan} \mathbf{x}}, {\color{orange} \mathbf{w}}
	}
}
$$

## Requisiti

Vedi [[rischio empirico]].