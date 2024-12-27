[[operatore misura]] in un [[grafo]] relativa a un nodo.

È il massimo delle distanze tra il nodo scelto e ogni altro nodo del grafo.

$$
\def \destination {{\color{magenta} dst}}
\Large
\max_{\forall \destination \in nodes} \bigg[
	\mathrm{lengths} \big(
		node \to \destination
	\big)
\bigg]
$$