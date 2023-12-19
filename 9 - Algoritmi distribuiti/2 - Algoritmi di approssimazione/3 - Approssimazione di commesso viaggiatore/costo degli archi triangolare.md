---
aliases:
  - proprietà triangolare per il costo degli archi
---


[[Caratteristica]] di alcuni [[grafo|grafi]].

Si ha quando il costo di due [[arco di un grafo|archi]] consecutivi è **sempre maggiore** del costo di un [[arco di un grafo|arco]] singolo.

Ovvero, ogni volta che nel [[grafo]] si verificano le seguenti connessioni:
$$
\def \varStart {{\color{LimeGreen} Start}}
\def \varMiddle {{\color{DarkKhaki} Middle}}
\def \varEnd {{\color{IndianRed} End}}

\begin{cases}
	\varStart \to \varMiddle \to \varEnd
	\\\\
	\varStart \to \varEnd
\end{cases}
$$
I relativi costi devono essere:
$$
\mathrm{cost}(\varStart \to \varEnd)
\leq
\mathrm{cost}(\varStart \to \varMiddle \to \varEnd)
$$
