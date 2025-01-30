---
aliases:
  - modello
---
[[modello matematico]].

[[0 - Generale/funzione|funzione]] che [[problema di minimizzazione|minimizza]] la [[perdita]] in un [[problema di supervised learning]]:
$$
\Large
\min_{\fmlClassifier \in \fmlHypothesisSpace}
\ 
\sum_{(\fmlInput{\fmlDatasetIndex},\ \fmlOutput{\fmlDatasetIndex}) \in D}
	\par{
		\loss \par{
			\fmlOutput{\fmlDatasetIndex},\ \fmlClassifier(\fmlInput{\fmlDatasetIndex})
		}
		+
		\par{
			\fmlComplexityCoefficient
			\cdot
			\func[cmplx] \par{\fmlClassifier}
		}
	}
$$
