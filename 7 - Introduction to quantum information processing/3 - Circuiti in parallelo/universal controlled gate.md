---
aliases:
  - controlled universal gate
---

[[gate quantistico]] che effettua una rotazione arbitraria [[controlled gate|in modo controllato]].
$$
\def \varX {{\color{coral} a}}
\def \varY {{\color{cornflowerblue} b}}
\def \varZ {{\color{yellowgreen} c}}
\def \varI {{\color{hotpink} i}}

\Large
\qCU{0}{1} (\varX, \varY, \varZ)
=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & e^{\varI \varY} \sin \left( \frac{\varX}{2} \right) & e^{\varI \varY + \varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
0 & 0 & \cos \left( \frac{\varX}{2} \right) &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)
\end{bmatrix}
$$

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

Ruota lo stato del [[qbit]] a cui è applicato di $\varX$ sull'[[asse X in quantum computing|asse X]], $\varY$ sull'[[asse Y]], e $\varZ$ sull'[[asse Z]] proporzionalmente allo [[stato quantistico|stato]] del [[qbit]] di controllo.

## ✏️ Simbolo in [[IBM Quantum Composer]]

![[universal controlled gate.png]]

## ⛎ Equivalenze

Qualsiasi [[universal gate]] può essere trasformato in un [[universal controlled gate]] sfruttando il [[controlled Pauli X gate]][^addingcontrol].

Innanzitutto, dobbiamo dividere l'[[universal gate]] $\qU$ in due gate separati $\sqrt{\qU}$ attraverso la [[radice quadrata di matrice]].

Poi, dobbiamo determinare la [[operatore coniugato|coniugata]] di $\sqrt{\qU}$, ottenendo così il gate $\sqrt{\qU}^\dagger$.

Ora possiamo creare il circuito:
1. Applichiamo $\sqrt{\qU[1]}$, svolgendo "metà" del gate.
2. Applichiamo $\qCX{0}{1}$, invertendo lo stato del gate.
3. Applichiamo $\sqrt{\qU[1]}^{\dagger}$, svolgendo la restante "metà" del gate, ma in direzione opposta alla prima, completando lo svolgimento dell'opposto del gate.
	- Se il gate controllato si è attivato, questo è l'equivalente di aver applicato $\qX[1] \times \sqrt{\qU[1]}^\dagger \times \sqrt{\qU[1]}^\dagger$, ovvero $\qX[1] \times \qU[1]$.
	- Se il gate controllato non si è attivato, questo è l'equivalente di aver applicato $\sqrt{\qU[1]} \times \sqrt{\qU[1]}^\dagger$, ovvero $\qI[1]$.
4. Applichiamo di nuovo $\qCX{0}{1}$, annullando l'$\qX[1]$ che abbiamo aggiunto.
	- Se il gate controllato si è attivato, abbiamo ottenuto $\qU[1]$.
	- Se il gate controllato non si è attivato, abbiamo ottenuto $\qI[1]$.
5. Abbiamo così ottenuto $\qCU{0}{1}$!

![[universal controlled gate from cX.png]]

Se applichiamo questo concetto due volte, ci possiamo risparmiare di mettere il secondo $\qCX{0}{1}$, in quanto si annullerebbe da solo.

[^addingcontrol]: https://pyqml.substack.com/p/adding-a-control-to-a-quantum-gate
