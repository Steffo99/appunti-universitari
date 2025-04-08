[[algoritmo]] [[modello di calcolo quantistico|quantistico]] di [[problema di correzione degli errori quantistici|correzione errori]].

> [!Success]
> Gli errori, in questo modello, sono più generalizzati di quelli che sono gestiti dalla [[3-qbit bitflip correction]]; consideriamo errore **una qualsiasi rotazione spuria su un [[qbit]] fisico**.

## Algoritmo

Implementiamo ciascun [[qbit]] logico come 5 [[qbit]] fisici ridondanti:
$$
\Large
\ket{\Psi}
\qeq
\alpha \ket{00000} + \beta \ket{11111}
\qeq
\alpha \ket{\overline{0}} + \beta \ket{\overline{1}}
$$

Questo può essere realizzato ad esempio con dei [[controlled Pauli X gate]][^wiki] dal [[qbit]] $0$ a $1$, $2$, $3$ e $4$:
$$
\Large
\ket{\Phi}
\qeq
\qCX{0}{4}
\qCX{0}{3}
\qCX{0}{2}
\qCX{0}{1}
\ket{0000}
\ket{\phi}
$$

In modo simile a come abbiamo fatto nel [[3-qbit bitflip correction]], introduciamo altri 4 [[qbit]] ausiliari, e definiamo sequenze di gates $\qX$ e $\qZ$ per il rilevamento di errori tali che: 
- il loro quadrato sia $\qI$
- il prodotto di due di esse consecutive permetta di ottenere il gate $\qY$

Esse sono: ==Misuso di notazione...==
$$
\Large
\begin{matrix}
	\mathbf{M}_0 &=& \qZ[1] & \qX[2] & \qX[3] & \qZ[4]\\
	\mathbf{M}_1 &=& \qZ[2] & \qX[3] & \qX[4] & \qZ[0]\\
	\mathbf{M}_2 &=& \qZ[3] & \qX[4] & \qX[0] & \qZ[1]\\
	\mathbf{M}_3 &=& \qZ[4] & \qX[0] & \qX[1] & \qZ[2]
\end{matrix}
$$

#TODO ==Ho tagliato molto...==

Ogni possibile combinazione dei loro risultati ci indica un tipo di errore diverso.

> [!Example]
> - $0000$ indica che non si è verificato errore
> - $0001$ indica che si è verificato un errore correggibile con $\qZ[1]$
> - $0010$ indica che si è verificato un errore correggibile con $\qY[2]$
> - ...

#TODO ==C'è tutto un discorso sull'ortogonalità che mi è passato sopra la testa, credo==
