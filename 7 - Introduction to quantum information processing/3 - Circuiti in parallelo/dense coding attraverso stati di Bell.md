[[algoritmo]] di [[dense coding]] che trasmette due [[bit]] di informazione trasferendo un solo [[qbit]].

> [!Tip]
> Può essere considerato il contrario del [[quantum teleportation protocol]], che trasferisce un [[qbit]] attraverso due [[bit]] classici[^wikiverse].

[^wikiverse]: https://en.wikipedia.org/wiki/Superdense_coding#:~:text=opposite%20of%20quantum%20teleportation
## Algoritmo

*Alice* vuole mandare due [[bit]] a *Bob*.

1. *Alice* e *Bob* mettono in condivisione un [[circuito quantistico in parallelo|sistema con due qbit]] nel [[Bell state|Bell state]] $\qBoo$:
	- *Alice* mantiene in possesso uno dei due [[qbit]], quello di indice $0$
	- *Bob* rimane in possesso dell'altro [[qbit]], quelo di indice $1$
2. *Alice* trasforma il [[Bell state|Bell state]] in quello dell'informazione che desidera comunicare, operando solo sul suo [[qbit]]:
	- $\qBoo = \qI \qBoo$
	- $\qBoi = \qX[0] \qBoo$
	- $\qBio = \qZ[0] \qBoo$
	- $\qBii = \qZ[0] \qX[0] \qBoo$
3. *Alice* invia il suo [[qbit]] a *Bob*.
4. *Bob* [[Bell state#Realizzazione|riporta il Bell state alla base canonica]].

## Circuito

Si vuole realizzare un circuito che trasferisca lo [[stato quantistico base]] di due [[qbit]] di *Alice* `a` a *Bob* attraverso un [[circuito quantistico in parallelo|sistema con due qbit]] `b` di cui *Alice* possiede il [[qbit]] di indice $0$.

1. Il registro `b` viene inizializzato nel [[Bell state|Bell state]] $\qBoo$.
2. `b[1]` viene inviato a *Bob*.
3. *Alice* usa due [[controlled gate]] per operare condizionalmente su `b[0]`.
4. `b[0]` viene inviato a *Bob*.
5. *Bob* [[Bell state#Realizzazione|riporta il Bell state alla base canonica]].

![[dense coding circuit.png]]

## Impossibilità con un solo [[qbit]]

Per effettuare dense coding servono quattro [[stato quantistico|stati]] mutualmente [[ortogonali]].

Con un solo [[qbit]], avremmo tre [[dimensione|dimensioni]], e quindi potremmo ottenerne solo tre [[stato di un'entità|stati]] mutualmente ortogonali!
