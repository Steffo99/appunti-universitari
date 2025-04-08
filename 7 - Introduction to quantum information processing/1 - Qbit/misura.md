---
aliases:
  - regola di Born
  - Born rule
---
[[Procedura]] [[modello di calcolo quantistico|quantistica]] [[algoritmo non-deterministico|non-deterministica]] [[irreversibile]], effettuata su un [[qbit]] lungo uno specifico [[asse]].
$$
\Huge
\qMeasure[\mathrm{axis}] \par{\ket{\phi}}
$$


Talvolta rappresentata come [[matrice proiettore|proiettore]] di [[ordine]] $1$:
$$
\Huge
\qM[\mathrm{axis}] \ket{\phi}
$$

Ha due effetti:
- restituisce un [[bit]] 
- fa collassare lo stato del [[qbit]] a cui è applicata

## Restituzione di un bit

Ogni misura restituisce [[casuale|casualmente]] un [[bit]] $0$ oppure $1$.

Le probabilità che si arrivi a un risultato invece che un altro sono determinate dall'[[intensità]] dello [[stato di un'entità|stato]] del [[qbit]] misurato verso gli estremi dell'[[asse]] scelto.

> [!Tip] Misura in [[asse Z]]
> $$
> \large
> \qM[\qAZ] \ket{\phi}
> =
> \qMeasure[\qAZ] \par{ \alpha_0 \ket{\axisZ{0}} + \alpha_1 \ket{\axisZ{1}} }
> \Longrightarrow
> \begin{cases}
> 	\prob{ 0 } = \abs{ \braket{\phi | \axisZ{0}} }^2 = \abs{\alpha_0}^2\\
> 	\prob{ 1 } = \abs{ \braket{\phi | \axisZ{1}} }^2 = \abs{\alpha_1}^2
> \end{cases}
> $$

> [!Tip] Misura in [[asse X]]
> $$
> \large
> \qM[\qAX] \ket{\phi}
> =
> \qMeasure[\qAX] \par{ \alpha_- \ket{\axisX{-}} + \alpha_+ \ket{\axisX{+}} }
> \Longrightarrow
> \begin{cases}
> 	\prob{ 0 } = \braket{\phi | \qM[\qAX]_{(0)} | \phi} = \abs{ \braket{\phi | \axisX{-}} }^2 = \abs{\alpha_-}^2\\
> 	\prob{ 1 } = \braket{\phi | \qM[\qAX]_{(1)} | \phi} = \abs{ \braket{\phi | \axisX{+}} }^2 = \abs{\alpha_+}^2
> \end{cases}
> $$

> [!Example] Esempio: [[stato base passivo]]
> $\qM[\qAZ] \ket{0}$ risulta sempre in $0$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base passivo]] è $1$.

> [!Example] Esempio: [[stato base attivo]]
> $\qM[\qAZ] \ket{1}$ risulta sempre in $1$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base attivo]] è $1$.

> [!Example] Esempio: [[stato Hadamard passivo]]
> $\qM[\qAZ] \ket{+}$ risulta metà delle volte in $0$ e metà delle volte in $1$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base passivo]] è $0.5$, e l'[[intensità di uno stato quantistico|intensità]] nello [[stato base attivo]] è $0.5$.

> [!Example] Esempio: [[stato Hadamard attivo]]
> $\qM[\qAZ] \ket{-}$ risulta metà delle volte in $0$ e metà delle volte in $1$, in quanto l'[[intensità di uno stato quantistico|intensità]] del [[qbit]] nello [[stato base passivo]] è $0.5$, e l'[[intensità di uno stato quantistico|intensità]] nello [[stato base attivo]] è $0.5$.
>
> La [[fase di uno stato quantistico|fase]] non è dunque rilevante all'operazione.


## [[autovalore|Autovalori]] ed [[autostato|autostati]]

I valori che possono risultare da una misura, $0$ e $1$, sono i suoi [[autovalore|autovalori]].

Gli stati che essa considera, come ad esempio $\ket{\axisX{-}}$ e $\ket{\axisX{+}}$, sono i suoi [[autostato|autostati]].

## Collasso dello [[stato quantistico]]

In seguito a una misura, il [[qbit]] misurato $\ket{\phi}$ perde la sua [[superposizione]], e assume l'[[autostato]] corrispondente all'[[autovalore]] $k$ che è risultato dalla misura.
$$
\Large
\qM[\qAZ]_{(k)} \ \ket{\phi} = \ket{k} \braket{k| \phi}
$$

## Equivalenze

La misura si comporta nelle equivalenze come il relativo gate:
$$
\Large
\qH \ \qM[\qAZ] \ \qH \ket{\phi} = \qM[\qAX] \ket{\phi}
$$
