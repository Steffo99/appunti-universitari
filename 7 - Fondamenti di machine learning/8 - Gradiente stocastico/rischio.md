[[funzione obiettivo]] in un [[problema di supervised learning stocastico]].
$$
\Huge
\risk \par{ \color{orange} \func[h] } : \fmlHypothesisSpace \to \mathbb{R}
$$

Se la [[distribuzione di probabilità in gradiente stocastico|distribuzione di probabilità]] è conosciuta, esso può essere calcolato attraverso l'[[integrale definito]] su tutto il campo $\mathbb{X} \otimes \mathbb{Y}$ della [[perdita]] rispetto ad [[distribuzione di probabilità in gradiente stocastico|essa]]:
$$
\Large
\risk \par{ \color{orange} \func[h] } 
= 
\int_{\mathbb{X} \otimes \mathbb{Y}}
	\ 
	\loss \par{
		\mathbf{y},\ 
		{\color{orange} \func[h]} \par{
			\mathbf{x}
		}
	}
	\quad
	\func[d]
	\ 
	\prob{\mathbf{x} \otimes \mathbf{y}}
$$
