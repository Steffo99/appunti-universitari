---
aliases:
  - Lagrangiana
---
[[funzione]] che unisce una [[funzione obiettivo]], un insieme di [[vincolo di uguaglianza|vincoli di uguaglianza]], e un insieme di [[vincolo di disuguaglianza|vincoli di disuguaglianza]].

$$
\def \varX {{\color{orange} \mathbf{x}}}
\def \varU {{\color{aquamarine} \mathbf{u}}}
\def \varV {{\color{cadetblue} \mathbf{v}}}

\Large
\func[L] \par{\varX, \varU, \varV} = 
\par{
	\func \par{\varX}
}
+
\par {
	\varU^\dagger \times \func[h] \par{\varX} 
}
+ 
\par{
	\varV^\dagger \times \func[g] \par{\varX}
}
$$
