---
aliases:
  - controlled controlled Pauli X gate
  - quantum AND gate
  - quantum controlled controlled NOT gate
---
[[gate quantistico complesso]] con la proprietà di [[universalità]]:

$$
\Huge
\qTX{0}{1}{2}
=
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 1 & 0
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Applica l'effetto di un [[Pauli X gate]] all'ultimo [[qbit]] in base ai primi due.

## ✏️ Simbolo in [[IBM Quantum Composer]]

![[Toffoli gate.png]]

## ⛎ Equivalenze

### Universal controlled controlled gate

Sfruttando lo stesso principio della [[universal controlled gate#⛎ Equivalenze|costruzione dell'universal controlled gate]], possiamo costruire anche un *universal controlled controlled gate*:
1. Applichiamo un $\qCU{0}{2}$ iniziale.
2. Applichiamo un $\qCX{0}{1}$, che funzioni come [[XNOR gate]] tra i [[qbit]] $0$ e $1$.
3. Applichiamo un ${\color{brown} \mathbf{C}_{{\mathbf{U}^\dagger_{1 \Rightarrow 2}}}}$, che si attiverà quando i [[qbit]] $0$ e $1$ sono uguali, annullando in quel caso l'effetto del $\qCU{0}{2}$ iniziale.
4. Applichiamo un $\qCX{0}{1}$, che annulli l'effetto del secondo gate.
5. Applichiamo ancora $\qCU{1}{2}$.

I casi possibili risultanti sono:

| Qbit $1$ | Qbit $0$ | Gates attivati                               | Risultato  |
| -------- | -------- | -------------------------------------------- | ---------- |
| $0$      | $0$      | $\qI[2] \times \qI[2] \times \qI[2]$         | $\qI[2]$   |
| $0$      | $1$      | $\qU[2] \times \qU[2]^\dagger \times \qI[2]$ | $\qI[2]$   |
| $1$      | $0$      | $\qI[2] \times \qU[2]^\dagger \times \qU[2]$ | $\qI[2]$   |
| $1$      | $1$      | $\qU[2] \times \qI[2] \times \qU[2]$         | $\qU[2]^2$ |

### Mezzo X

Ora dobbiamo trovare un gate che applichi $\sqrt{\qX}$ da usare come $\qU$.

Pensando alle [[Pauli Z gate#⛎ Equivalenze|equivalenze del Pauli Z gate]], abbiamo che:
$$
\qX = \qH \qZ \qH
$$

Ricordandoci dell'esistenza dell'[[half-Z gate]], questo diventa:
$$
\qX = \qH \qS \qS \qH
$$

Se circondiamo il circuito dell'*universal controlled controlled gate* con due [[Hadamard gate]], possiamo allora usare l'[[half-Z gate]] $\qS$ come $\qU$ (e internamente agli [[universal controlled gate]] verranno usati [[quarter-Z gate]] $\qT$).

![[Toffoli gate from qS.png]]
