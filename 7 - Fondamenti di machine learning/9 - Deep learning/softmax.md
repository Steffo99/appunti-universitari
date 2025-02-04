---
aliases:
  - softargmax
  - normalized exponential
---
[[0 - Generale/funzione|funzione]] che vincola i valori di un [[array|vettore]] a [[numero reale|numeri reali]] tra $0.0$ e $1.0$.

$$
\Large
\func[softmax] \par{
	\mathbf{x}
}
=
\begin{bmatrix}
	\frac {e^{x_1}}	{\sum_{x \in \mathbf{x}} e^{x}} \\
	\frac {e^{x_2}}	{\sum_{x \in \mathbf{x}} e^{x}} \\
	\vdots \\
	\frac {e^{x_n}}	{\sum_{x \in \mathbf{x}} e^{x}}
\end{bmatrix}
$$

Solitamente usata per normalizzare gli output di una [[rete neurale multilivello]].