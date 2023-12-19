Un [[problema decisionale]] $A$ può essere trasformato in un altro [[problema decisionale]] $B$ attraverso una *riduzione di Karp* se:
- la trasformazione è un'operazione in tempo [[polinomiale]]
- ogni [[istanza positiva]] del primo problema rimane un'[[istanza positiva]] dopo essere stata trasformata
- ogni [[istanza negativa]] del primo problema rimane un'[[istanza negativa]] dopo essere stata trasformata

$$
\def \varProblemA {{\color{DarkOrchid} Problem_{A}}}
\def \varProblemB {{\color{SlateBlue} Problem_{B}}}
\def \varProblemC {{\color{DarkOliveGreen} Problem_{C}}}
\def \karp {\leq_p}
\Huge
\varProblemA \karp \varProblemB
$$

## Corollari

Se un problema è [[polinomiale]], e un altro può essere ridotto ad esso, anche l'altro è [[polinomiale]]:
$$
\large
\begin{cases}
	\varProblemA \karp \varProblemB
	\\\\
	\varProblemB \in P
\end{cases}
\implies
\begin{cases}
	\\
	\varProblemA \in P
	\\\quad
\end{cases}
$$

---

Se un problema non è [[polinomiale]], e può essere ridotto ad un altro, anche l'altro non è [[polinomiale]]:
$$
\large
\begin{cases}
	\varProblemA \karp \varProblemB
	\\\\
	\varProblemA \not\in P
\end{cases}
\implies 
\begin{cases}
	\\
	\varProblemB \not\in P
	\\\quad
\end{cases}
$$

---

Infine, se due problemi possono ridursi a vicenda uno all'altro, essi sono [[problemi equivalenti|equivalenti]]:
$$
\large
\begin{cases}
	\varProblemA \karp \varProblemB
	\\\\
	\varProblemB \karp \varProblemA
\end{cases}
\implies
\begin{cases}
	\\
	\varProblemA \equiv_P \varProblemB
	\\\quad
\end{cases}
$$

## Proprietà

La [[riduzione di Karp]] è [[transitività|transitiva]]:
$$
\large
\begin{cases}
	\varProblemA \karp \varProblemB
	\\\\
	\varProblemB \karp \varProblemC 
\end{cases}
\implies
\varProblemA \karp \varProblemC
$$
