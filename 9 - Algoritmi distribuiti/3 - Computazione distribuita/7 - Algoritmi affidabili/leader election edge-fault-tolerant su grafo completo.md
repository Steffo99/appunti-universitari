Problema per un [[sistema distribuito]], che estende la [[leader election]] a un sistema con [[affidabilità nulla]].

## Definizione

Si vuole scegliere un'[[entità]] che diventerà il [[leader]] per un [[algoritmo]] futuro.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[dimensione dei messaggi illimitata]]
	- [[half-duplex]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- ***[[affidabilità nulla]]***
		- [[guasti ubiqui]]
		- [[guasti permanenti]]
		- [[niente guasti di esecuzione]]
		- [[guasti di trasmissione]]
			- [[edge-broadcast-possibility]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
	- [[identificatori univoci]]
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione illimitato]]
	- [[risveglio multiplo]]
	- [[terminazione locale]]

## [[algoritmo|Algoritmi]]

- [[fault-tolerant broadcast election]]
