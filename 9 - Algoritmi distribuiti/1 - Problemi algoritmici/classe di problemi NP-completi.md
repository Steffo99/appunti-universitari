---
aliases:
  - classe NP-complete
  - NP-complete
  - problema NP-complete
---
[[Insieme]] di [[problema decisionale|problemi decisionali]] equivalenti tra loro.

Tutti i problemi della [[classe di problemi NP]] possono essere [[riduzione di Karp|ridotti]] ad essi:
$$
\def \varProblemA {{\color{DarkOrchid} Problem_{A}}}
\def \varProblemB {{\color{SlateBlue} Problem_{B}}}
\Huge
\begin{cases}
	\varProblemA \in NP
	\\\\
	\forall \varProblemB \in NP : \varProblemB \leq_p \varProblemA
\end{cases}
$$

> Per dimostrare che un problema è NP-completo, basta dimostrare che un problema [[NP]] sia riducibile a uno NP-completo.

Il primo problema NP-completo scoperto è stato [[satisfability|SAT]]; è stato poi utilizzato come [[bootstrap]] per tutti gli altri.

Hanno una particolare rilevanza per il [[problema P e NP]].
