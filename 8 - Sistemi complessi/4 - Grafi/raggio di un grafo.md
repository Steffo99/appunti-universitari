[[Misura]] di un [[grafo]].

L'[[eccentricità di un nodo|eccentricità]] minima tra tutti i [[nodo di un grafo|nodi]].
$$
\def \source {{\color{cyan} src}}
\def \destination {{\color{magenta} dst}}
\Large
\min_{\forall \source \in nodes} \bigg[
	\max_{\forall \destination \in nodes} \bigg[
		\mathrm{lengths} \big(
			\source \to \destination
		\big)
	\bigg]
\bigg]
$$
