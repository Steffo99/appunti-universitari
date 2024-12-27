---
aliases:
  - regola di Born
---

[[Operazione]] [[algoritmo non-deterministico|non-deterministica]] che fa collassare un dato [[qbit]] a un [[bit]] classico.

$$
\Huge \mathrm{measure} (qbit,\ axis)
$$

Il risultato è determinato dalla ***regola di Born***, secondo la quale la [[probabilità]] che l'operazione risulti in un [[valore]] anzichè l'altro corrisponde all'[[intensità di uno stato quantistico|intensità]] che il [[qbit]] ha rispetto alle due [[verso|versi]] dell'[[asse geometrico]] dato.

Quando l'[[asse geometrico]] non è specificato, si assume che esso sia quello dello [[stato quantistico base]].

> [!Example] Esempio: [[stato base passivo]]
> $\mathrm{measure} \par{\ket{0}}$ risulta sempre in $0$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base passivo]] è $1$.

> [!Example] Esempio: [[stato base attivo]]
> $\mathrm{measure} \par{\ket{1}}$ risulta sempre in $1$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base attivo]] è $1$.

> [!Example] Esempio: [[stato Hadamard passivo]]
> $\mathrm{measure} \par{\ket{+}}$ risulta metà delle volte in $0$ e metà delle volte in $1$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base passivo]] è $0.5$, e l'[[intensità di uno stato quantistico|intensità]] nello [[stato base attivo]] è $0.5$.

> [!Example] Esempio: [[stato Hadamard attivo]]
> $\mathrm{measure} \par{\ket{-}}$ risulta metà delle volte in $0$ e metà delle volte in $1$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base passivo]] è $0.5$, e l'[[intensità di uno stato quantistico|intensità]] nello [[stato base attivo]] è $0.5$.
>
> La [[fase di uno stato quantistico|fase]] non è dunque rilevante all'operazione.
