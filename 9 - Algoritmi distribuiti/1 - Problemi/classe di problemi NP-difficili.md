---
aliases:
  - classe NP-hard
  - NP-hard
  - problema NP-hard
---
[[Insieme]] di [[problema di ottimizzazione|problemi di ottimizzazione]], di difficoltà uguale o maggiore rispetto alla [[classe di problemi NP]].

Perchè un problema sia considerato NP-difficile, si deve dimostrare che qualsiasi problema [[classe di problemi NP|NP]] possa essere [[riduzione di Karp|ridotto]] ad esso: 
$$
\def \varProblemA {{\color{DarkOrchid} Problem_{A}}}
\def \varProblemB {{\color{SlateBlue} Problem_{B}}}
\Huge
\begin{cases}
\varProblemA \in NP_{Hard}
\\\\
\forall \varProblemB \in NP : \varProblemB \leq_p \varProblemA
\end{cases}
$$

