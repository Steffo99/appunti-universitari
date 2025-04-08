[[algoritmo]] di [[quantum teleportation]] che trasmette un [[qbit]] attraverso due [[bit]] di informazione.

> [!Tip]
> Può essere considerato il contrario del [[dense coding attraverso stati di Bell]], che trasferisce due [[bit]] classici attraverso un [[qbit]] .

## Algoritmo

*Alice* vuole mandare un [[qbit]] a *Bob*.

1. *Alice* e *Bob* mettono in condivisione un [[circuito quantistico in parallelo|sistema con tre qbit]] $\ket{\psi} \ket{\chi} \ket{\phi} = \qBoo \ket{\phi}$:
	- *Alice* mantiene in possesso due dei tre [[qbit]], quelli di indice $0$ $\ket{\phi}$ e $1$ $\ket{\chi}$
	- *Bob* rimane in possesso dell'altro [[qbit]], quello di indice $2$ $\ket{\psi}$
	- I qbit $1$ e $2$ sono [[entanglement|entangled]] nel [[Bell state]] $\qBoo$
2. *Alice* crea un secondo [[Bell state]] [[entanglement|entangled]] a quello pre-esistente, legandovi il suo [[qbit]] in una [[combinazione lineare]] di queste due possibilità:
	- $\alpha_0 \cdot \qH[0] \qCX{0}{1} \qBoo \ket{0}$
		1. $\alpha_0 \cdot \qH[0] \qI[1] \qBoo \ket{0}$
		2. $\alpha_0 \cdot \qH[0] \qBoo \ket{0}$
		3. $\alpha_0 \cdot \qBoo \ket{+}$
		4. $\alpha_0 \cdot \frac{1}{2} \par{\ket{00} + \ket{11}} \otimes \par{\ket{0} + \ket{1}}$
		5. $\alpha_0 \cdot \frac{1}{2} \par{\ket{00}\ket{0} + \ket{00}\ket{1} + \ket{11}\ket{0} + \ket{11}\ket{1}}$
		6. $\alpha_0 \cdot \frac{1}{2} \par{\ket{0}\ket{00} + \ket{0}\ket{01} + \ket{1}\ket{10} + \ket{1}\ket{11}}$
	- $\alpha_1 \cdot \qH[0] \qCX{0}{1} \qBoo \ket{1}$
		1. $\alpha_1 \cdot \qH[0] \qX[1] \qBoo \ket{1}$
		2. $\alpha_1 \cdot \qH[0] \qBoi \ket{1}$
		3. $\alpha_1 \cdot \qBoi \ket{-}$
		4. $\alpha_1 \cdot \frac{1}{2} \par{\ket{01} + \ket{10}} \otimes \par{\ket{0} - \ket{1}}$
		5. $\alpha_1 \cdot \frac{1}{2} \par{\ket{01}\ket{0} - \ket{01}\ket{1} + \ket{10}\ket{0} - \ket{10}\ket{1}}$
		6. $\alpha_1 \cdot \frac{1}{2} \par{\ket{0}\ket{10} - \ket{0}\ket{11} + \ket{1}\ket{00} - \ket{1}\ket{01}}$
3. *Alice* [[misura|misura]] i suoi due [[qbit]], collassandone lo stato, e portando il bit di *Bob* a uno di questi quattro casi:
	- $00 \implies \alpha_0 \ket{0} + \alpha_1 \ket{1}$
	- $01 \implies \alpha_0 \ket{0} \axisZ{{}-{}} \alpha_1 \ket{1}$
	- $10 \implies \alpha_{\axisX{1}} \ket{0} + \alpha_{\axisX{0}} \ket{1}$
	- $11 \implies \alpha_{\axisX{1}} \ket{0} \axisZ{{}-{}} \alpha_{\axisX{0}} \ket{1}$
4. *Alice* invia i due [[bit]] risultanti a *Bob*.
5. *Bob* trasforma il suo [[qbit]] in base ai [[bit]] che ha ricevuto:
	- $00 \implies \qI[2] \qI[2] \ket{\psi} = \ket{\phi}$
	- $01 \implies \qI[2] \qZ[2] \ket{\psi} = \ket{\phi}$
	- $10 \implies \qX[2] \qI[2] \ket{\psi} = \ket{\phi}$
	- $11 \implies \qX[2] \qZ[2] \ket{\psi} = \ket{\phi}$
