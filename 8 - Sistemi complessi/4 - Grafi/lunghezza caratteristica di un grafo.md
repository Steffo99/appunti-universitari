[[misura]] in un [[grafo]].

È la [[mediana]] della [[media]] delle [[distanza tra nodi di un grafo|distanze]] tra ogni nodo.
$$
\def \source {{\color{cyan} src}}
\def \destination {{\color{magenta} dst}}
\Large
\underset{\forall \source \in nodes}{\mathrm{median}} \bigg[
	\underset{\forall \destination \in nodes}{\mathrm{average}} \bigg[
		\mathrm{lengths} \big(
			\source \to \destination
		\big)
	\bigg]
\bigg]
$$
