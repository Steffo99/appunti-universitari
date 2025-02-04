[[8 - Sviluppo di software sicuro/1 - Terminologia/rischio|rischio]] quando si fa uso di un [[predittore parametrico]].
$$
\Huge
\risk[{\color{hotpink} \mathrm{h}}] \par{ \color{orange} \mathbf{w} } : {\color{orange} \mathbb{W}} \to \mathbb{R}
$$

Se la [[distribuzione di probabilità in gradiente stocastico|distribuzione di probabilità]] è conosciuta, esso può essere calcolato attraverso l'[[integrale definito]] su tutto il campo $\mathbb{X} \otimes \mathbb{Y}$ della [[perdita]] rispetto ad [[distribuzione di probabilità in gradiente stocastico|essa]]:
$$
\Large
\risk[{\color{hotpink} \mathrm{h}}]
\par{ \color{orange} \mathbf{w} }
= 
\int_{\mathbb{X} \otimes \mathbb{Y}}
	\ 
	\loss \par{
		\mathbf{y},\ 
		{\color{hotpink} \mathrm{h}} \par{
			\mathbf{x},
			{\color{orange} \mathbf{w}}
		}
	}
	\quad
	\func[d]
	\ 
	\prob{\mathbf{x} \otimes \mathbf{y}}
$$
