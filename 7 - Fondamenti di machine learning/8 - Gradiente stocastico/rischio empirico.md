[[approssimazione]] del [[7 - Fondamenti di machine learning/8 - Gradiente stocastico/rischio|rischio]] utilizzata se non si hanno informazioni sulla [[distribuzione di probabilità in gradiente stocastico|distribuzione di probabilità]].
$$
\Huge
\riske \par{{\color{orange} \func[h]}, {\color{cyan} \mathbf{D}}} : \par{{\color{orange} \fmlHypothesisSpace}, {\color{cyan} \par{\mathbb{X}, \mathbb{Y}}^n}} \to \mathbb{R}
$$

Usa (parte dei) dati del [[training set]] per creare una [[distribuzione di probabilità empirica in gradiente stocastico|distribuzione di probabilità empirica]]:
$$
\Large
\riske \par{{\color{orange} \func[h]}, {\color{cyan} \mathbf{D}}}
=
\frac{1}{\color{cyan} n}
\cdot
\sum_{\par{{\color{darkcyan} \mathbf{x}}, {\color{darkcyan} \mathbf{y}}} \in {\color{cyan} \mathbf{D}}}
\loss \par{
	{\color{darkcyan} \mathbf{y}},\
	{\color{orange} \func[h]} \par{
		{\color{darkcyan} \mathbf{x}}
	}
}
$$
