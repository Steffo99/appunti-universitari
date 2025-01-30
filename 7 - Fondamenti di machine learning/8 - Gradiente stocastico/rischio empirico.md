[[approssimazione]] del [[7 - Fondamenti di machine learning/8 - Gradiente stocastico/rischio|rischio]] utilizzata se non si hanno informazioni sulla [[distribuzione di probabilità in gradiente stocastico|distribuzione di probabilità]].
$$
\Huge
\riske \par{\color{orange} \func[h]} : \fmlHypothesisSpace \to \mathbb{R}
$$

Usa i dati del [[training set]] per creare una [[distribuzione di probabilità empirica in gradiente stocastico|distribuzione di probabilità empirica]]:
$$
\Large
\riske \par{\color{orange} \func[h]}
=
\frac{1}{n}
\cdot
\sum_{\par{\mathbf{x}, \mathbf{y}} \in \mathbf{D}}
\loss \par{
	\mathbf{y},\
	{\color{orange} \func[h]} \par{
		\mathbf{x}
	}
}
$$
