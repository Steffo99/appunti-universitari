---
aliases:
  - CNOT gate
  - quantum controlled NOT gate
  - Feynman gate
---
[[gate quantistico complesso]], un [[Pauli X gate]] che opera [[controlled gate|condizionalmente]] su un [[qbit]] in base allo stato di un altro [[qbit]]:

$$
\Huge
\qCX{0}{1}
=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{bmatrix}
$$
## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Applica l'effetto di un [[Pauli X gate]] all'ultimo [[qbit]] in base a quanto è attivo il primo.

## ✏️ Simbolo in [[IBM Quantum Composer]]

![[controlled Pauli X gate.png]]

## ⛎ Equivalenze

Circondare un [[controlled Pauli X gate]] con degli [[Hadamard gate]] inverte bit di controllo e bit controllato:
$$
\qH[0] \times \qH[1] \times \qCX{0}{1} \times \qH[1] \times \qH[0] = \qCX{1}{0}
$$

Qualsiasi [[universal gate]] può essere trasformato in un [[universal controlled gate]] sfruttando il [[controlled Pauli X gate]], vedi [[universal controlled gate#⛎ Equivalenze|alla relativa pagina]].
