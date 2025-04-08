---
aliases:
  - Bennett-Brassard key distribution
  - BB84
---
[[algoritmo]] [[modello di calcolo quantistico|quantistico]] di [[key distribution]].

## Algoritmo

$$
\def \varAA {{\color{hotpink} \mathbf{mat}_{\mathrm{Alice}}}}
\def \varAB {{\color{hotpink} \mathbf{mat}_{\mathrm{Bob}}}}
\def \varAS {{\color{hotpink} \mathbf{mat}_{\mathrm{Shared}}}}
\def \varBA {{\color{cyan} \mathbf{pub}_{\mathrm{Alice}}}}
\def \varBB {{\color{cyan} \mathbf{pub}_{\mathrm{Bob}}}}
\def \varBS {{\color{cyan} \mathbf{pub}_{\mathrm{Shared}}}}

\tiny
\varAA \ \varAB \ \varAS
\qquad
\varBA \ \varBB \ \varBS
$$

*Alice* vuole condividere una [[one-time pad|chiave per one-time pad]] con *Bob*.

1. *Alice* genera una stringa [[casuale]] di [[bit]], $\varBA$.
	- Ad esempio, può farlo preparando un [[qbit]] nello stato $\ket{+}$ e [[misura|misurandolo]] immediatamente.
2. Per ciascun [[bit]] di $\varBA$, *Alice* prepara il [[qbit]] $\ket{\phi_n}$:
	- Se $0$, prepara un [[qbit]] nello stato $\axisX{\ket{+}}$.
	- Se $1$, prepara un [[qbit]] nello stato $\axisZ{\ket{0}}$.
3. Per ciascun [[qbit]] preparato, *Alice* ottiene la stringa casuale $\varAA$:
	- Se preparato in $\axisX{\ket{+}}$, lo [[misura|misura]] nell'asse $\qAZ$.
	- Se preparato in $\axisZ{\ket{0}}$, lo [[misura|misura]] nell'asse $\qAX$.
4. *Alice* invia a *Bob* i [[qbit]] preparati $\ket{\Phi}$.
5. *Bob* genera una stringa [[casuale]] di [[bit]], $\varBB$.
6. Per ciascun [[bit]] di $\varBB$, *Bob* legge il [[qbit]] $\ket{\phi_n}$, ottenendo la stringa $\varAB$:
	- Se $0$, lo [[misura|misura]] nell'asse $\qAZ$.
	- Se $1$, lo [[misura|misura]] nell'asse $\qAX$.
7. In un canale pubblico, *Bob* invia $\varBB$ ad *Alice*.
8. In un canale pubblico, *Alice* invia $\varBA$ a *Bob*.
9. *Alice* e *Bob* calcolano $\varBS$ facendo lo [[XOR]] delle due stringhe $\varBA \oplus \varBB$.
10. Da ciascun bit di $\varBS$, *Alice* e *Bob* derivano $\varAS$:
	- Se $0$, significa che il bit corrispondente di $\varAA$ e $\varAB$ coincide, e quindi lo aggiungono a $\varAS$.
	- Se $1$, significa che il bit corrispondente di $\varAA$ e $\varAB$ non coincide, e quindi lo scartano.

## Perchè è sicuro

Se *Mallory* intercetta $\ket{\Phi}$, ed effettua delle [[misura|misure]], non conoscendo $\varBA$ ha il 50% di probabilità effettuare una [[misura|misura]] nella base sbagliata, alterando lo stato del relativo [[qbit]] il 50% delle volte, e portandolo così ad essere scartato.

Con un numero sufficiente di [[qbit]], questo rende impossibile determinare la [[one-time pad|chiave]].