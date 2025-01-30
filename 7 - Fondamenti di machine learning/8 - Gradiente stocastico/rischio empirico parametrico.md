[[rischio empirico]] quando si fa uso di un [[predittore parametrico]]:
$$
\Huge
\riske[\color{hotpink} \mathrm{h}] \par{\color{orange} \mathbf{w}} : \fmlHypothesisSpace \to \mathbb{R}
$$

Usa i dati del [[training set]] per creare una [[distribuzione di probabilità empirica in gradiente stocastico|distribuzione di probabilità empirica]]:
$$
\Large
\riske[\color{hotpink} \mathrm{h}] \par{\color{orange} \mathbf{w}}
=
\frac{1}{n}
\cdot
\sum_{\par{\mathbf{x}, \mathbf{y}} \in \mathbf{D}}
\loss \par{
	\mathbf{y},\
	{\color{hotpink} \func[h]} \par{
		\mathbf{x, {\color{orange} \mathbf{w}}}
	}
}
$$
