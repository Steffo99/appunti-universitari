[[modello di supervised learning stocastico]] che fa uso di un [[predittore parametrico]].

[[array|vettore]] che [[problema di minimizzazione|minimizza]] il [[7 - Fondamenti di machine learning/8 - Gradiente stocastico/rischio parametrico|rischio parametrico]] in un [[problema di supervised learning stocastico]]:
$$
\Large
{\color{gold} \mathbf{w}^{\star}} = 
\min_{{ \color{orange} \mathbf{w} } \in \mathbb{W}} 
\par{
	\risk[{\color{hotpink} \func[h]}] \par{ \color{orange} \mathbf{w} }
	+
	\par{
		\lambda 
		\cdot
		\func[cmplx]_{\color{hotpink} \func[h]} \par{
			\color{orange} \mathbf{w}
		}
	}
}
$$

## Requisiti

Perchè il modello converga a un ==unico== [[minimo globale]], devono essere soddisfatti vari requisiti.

### [[Regolarità]]

==Perchè il modello funzioni==, dobbiamo assumere che il [[rischio parametrico]] sia [[regolarità|differenziabile con continuità]].

### [[continuità di Lipschitz]]

==Perchè il modello funzioni==, dobbiamo assumere che il [[gradiente]] del [[rischio parametrico]] abbia [[continuità di Lipschitz]].

### [[funzione fortemente convessa|Convessità forte]]

==Perchè il modello funzioni==, dobbiamo assumere che il [[rischio parametrico]] sia una [[funzione fortemente convessa]].
