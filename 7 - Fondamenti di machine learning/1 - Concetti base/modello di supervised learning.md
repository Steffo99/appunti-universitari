---
aliases:
  - modello
---
[[modello matematico]].

[[funzione]] che [[problema di minimizzazione|minimizza]] la [[perdita]] in un [[problema di supervised learning]]:

$$
\Large
f^* 
=
\min_{f \in \mathcal{H}}
\ 
\sum_{(\mathbf{X},\ y) \in D}
	\left(\ 
		V(y, f(\mathbf{X}))
		+
		\lambda
		\left\lVert
			f
		\right\rVert
		^2
	\ \right)
$$
