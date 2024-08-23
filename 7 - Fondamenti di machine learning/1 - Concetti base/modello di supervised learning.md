---
aliases:
  - modello
---
[[modello matematico]].
$$
\Huge
\fmlModel
$$

[[funzione]] che [[problema di minimizzazione|minimizza]] la [[perdita]] in un [[problema di supervised learning]]:

$$
\Large
\fmlModel
=
\min_{\fmlClassifier \in \fmlHypothesisSpace}
\ 
\sum_{(\fmlInput,\ \fmlOutput) \in D}
	\par{
		V(\fmlOutput, \fmlClassifier(\fmlInput)))
		+
		\fmlComplexity
		\cdot
		\abs{f}^2
	}
$$
