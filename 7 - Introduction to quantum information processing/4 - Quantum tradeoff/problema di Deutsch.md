---
aliases:
  - problema di Deutsch-Jozsa
---

[[problema decisionale]] in cui è apparente il [[quantum tradeoff]].

Data una [[0 - Generale/funzione|funzione]] $\func : [0, 1] \to [0, 1]$, si vuole determinare se la funzione è **costante** (restituisce sempre $0$ o $1$) o **bilanciata** (restituisce l'input o il suo inverso).

## algoritmo [[modello di calcolo classico|classico]]

È necessario valutare la funzione $2$ volte:
$$
\Large
\func(0) \qquad \func(1)
$$

Poi vedere se i risultati sono uguali o diversi.

## algoritmo [[modello di calcolo quantistico|quantistico]]

Esiste sicuramente un [[universal gate]] che implementa $\func$:
$$
\Large \ket{x} \ket{y \oplus \func( y ) }= \mathbf{U}_{\func} \ket{x} \ket{y}
$$

Consideriamo tutte le possibili implementazioni di $\mathbf{U}_{\func}$:

| Output per $\ket{0}$ | Output per $\ket{1}$ | Gate                       |
| -------------------- | -------------------- | -------------------------- |
| $0$                  | $0$                  | $\qI[0]$                   |
| $0$                  | $1$                  | $\qCX{1}{0}$               |
| $1$                  | $0$                  | $\qCX{1}{0} \times \qX[0]$ |
| $1$                  | $1$                  | $\qX[0]$                   |

Circondiamo ora $\mathbf{U}_{\func}$ con degli [[Hadamard gate]], creando una [[superposizione uniformemente pesata]] durante l'esecuzione di $\func$, e poi collassandola:
$$
\Large \qH[1] \qH[0] \mathbf{U}_{\func} \qH[0] \qH[1] \ket{x} \ket{y}
$$

Scegliamo di usare come stato iniziale $\ket{1} \ket{0}$:
$$
\Large \qH[1] \qH[0] \mathbf{U}_{\func} \qH[0] \qH[1] \ket{1} \ket{0}
$$


Ora, se usiamo $\ket{1} \ket{0}$ come stato iniziale del circuito, con una singola [[misura|misura]] dell'output, otteniamo che:

| Gate                       | Gate circondato            | Output per $\ket{0}$ | Output per $\ket{1}$ |
| -------------------------- | -------------------------- | -------------------- | -------------------- |
| $\qI[0]$                   | $\qI$                      | $0$                  | $0$ · Costante       |
| $\qCX{1}{0}$               | $\qCX{0}{1}$               | $0$                  | $1$ · Bilanciata     |
| $\qCX{1}{0} \times \qX[0]$ | $\qCX{0}{1} \times \qZ[0]$ | $0$                  | $1$ · Bilanciata     |
| $\qX[0]$                   | $\qZ[0]$                   | $0$                  | $0$ · Costante       |
