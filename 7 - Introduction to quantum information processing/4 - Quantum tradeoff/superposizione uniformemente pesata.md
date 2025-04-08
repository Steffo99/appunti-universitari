---
aliases:
  - equal superposition
  - uniformly weighted superposition
---
Particolare [[superposizione]] usato per computare in parallelo tanti possibili [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/parametro|input]] a un problema.

Dato uno stato iniziale di $\ket{0}_n$, essa si ottiene applicando $\qH$ a tutti i [[qbit]]:
$$
\Huge \ket{E}_n
= 
\sum_{p \in n} \qH[p] \ket{0_{p}} 
= 
\frac
{\sum_{\psi} \ket{\psi}}
{\sqrt{2^n}}
$$
