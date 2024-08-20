---
aliases:
  - loss
---
[[funzione]] in un [[problema di supervised learning]] che misura quanto si allontana il [[modello di supervised learning|modello]] dal risultato desiderato.

$$
\Large
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

Considera sia l'[[errore]] che il modello commette generalizzando, sia la sua [[complessità del modello|complessità]], e bilancia tra le due cose attraverso il [[parametro]] $\lambda$.