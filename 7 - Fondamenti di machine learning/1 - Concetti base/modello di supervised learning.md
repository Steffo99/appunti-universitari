---
aliases:
  - modello
---
[[modello matematico]].
$$
\Huge
\fmlModel
$$

[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] che [[problema di minimizzazione|minimizza]] la [[perdita]] in un [[problema di supervised learning]]:

$$
\Large
\fmlModel
=
\min_{\fmlClassifier \in \fmlHypothesisSpace}
\ 
\sum_{(\fmlInput{\fmlDatasetIndex},\ \fmlOutput{\fmlDatasetIndex}) \in D}
	\par{
		\fmlLoss \par{
			\fmlOutput{\fmlDatasetIndex},\ \fmlClassifier(\fmlInput{\fmlDatasetIndex})
		}
		+
		\par{
			\fmlComplexityCoefficient
			\cdot
			\abs{\fmlClassifier}^2
		}
	}
$$
