Problema per un [[sistema distribuito]].

## Definizione

Si vuole effettuare [[broadcast problem|broadcast]] in un [[grafo completo]] con [[affidabilità nulla]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[dimensione dei messaggi illimitata]]
	- [[half-duplex]] 
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità nulla]]
		- [[guasti ubiqui]]
		- [[guasti permanenti]]
		- [[guasti di esecuzione]]
			- [[node-broadcast-possibility]]
		- [[guasti di trasmissione]]
			- [[edge-broadcast-possibility]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo completo]]
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione illimitato]]
	- [[risveglio singolo]]
	- [[terminazione ignorata]]

## [[algoritmo|Algoritmi]]

- [[two-steps broadcast]]
