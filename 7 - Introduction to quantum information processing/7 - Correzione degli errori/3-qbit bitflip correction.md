[[algoritmo]] [[modello di calcolo quantistico|quantistico]] di [[problema di correzione degli errori quantistici|correzione errori]].

> [!Warning]
> Gli errori, in questo modello, sono solo [[bitflip]] di un singolo [[qbit]]; per questo motivo, l'unico errore in cui possiamo imbatterci è **una singola applicazione spuria del [[Pauli X gate]] su un [[qbit]] fisico**.

## Algoritmo

Implementiamo ciascun [[qbit]] logico come 3 [[qbit]] fisici ridondanti:
$$
\Large
\ket{\Psi}
\qeq
\alpha \ket{000} + \beta \ket{111}
\qeq
\alpha \ket{\overline{0}} + \beta \ket{\overline{1}}
$$

Questo può essere realizzato ad esempio con dei [[controlled Pauli X gate]][^wiki] dal [[qbit]] $0$ a $1$ e $2$:
$$
\Large
\ket{\Phi}
\qeq
\qCX{0}{2}
\qCX{0}{1}
\ket{00}
\ket{\phi}
$$

Ora il sistema $\ket{\Phi}$ potrebbe trovarsi in uno di questi quattro casi $\ket{\Psi_e}$:
$$
\Large
\begin{matrix}
	{\color{lime} \ket{\Psi_{00}}} &=& \alpha \ket{000} + \beta \ket{111}\\
	{\color{red} \ket{\Psi_{01}}} &=& \alpha \ket{001} + \beta \ket{110}\\
	{\color{red} \ket{\Psi_{10}}} &=& \alpha \ket{010} + \beta \ket{101}\\
	{\color{red} \ket{\Psi_{11}}} &=& \alpha \ket{100} + \beta \ket{011}\\
\end{matrix}
$$

Sfruttiamo due ulteriori [[qbit]], $3$ e $4$, che [[misura|misuriamo]] per catturare informazioni su in quale dei quattro casi $e$ si trova il trio $\ket{\Phi}$, senza scoprire il valore di $\ket{\phi}$:
$$
\Large
\qM[4] \qM[3] \qCX{2}{4} \qCX{1}{4} \qCX{1}{3} \qCX{0}{3} \ket{00} \ket{\Phi}
$$

In base al risultato che otteniamo, possiamo applicare un gate a un [[qbit]] del trio $\ket{\Phi}$ per correggere l'errore:
$$
\Large
\begin{matrix}
	{\color{lime} \ket{\Psi_{00}}} & \longrightarrow & \qI[2] & \qI[1] & \qI[0] \\
	{\color{red} \ket{\Psi_{01}}} & \longrightarrow & \qI[2] & \qI[1] & \qX[0] \\
	{\color{red} \ket{\Psi_{10}}} & \longrightarrow & \qI[2] & \qX[1] & \qI[0] \\
	{\color{red} \ket{\Psi_{11}}} & \longrightarrow & \qX[2] & \qI[1] & \qI[0]
\end{matrix}
$$

> [!Tip]
> È intuitivamente simile ad un algoritmo di [[consenso]] in cui ogni [[qbit]] "vota" per ripristinare lo stato originale!

[^wiki]: https://en.wikipedia.org/wiki/Quantum_error_correction#Bit-flip_code