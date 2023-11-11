***[[problema di ottimizzazione]]*** per un [[sistema distribuito]], che estende il problema di [[spanning tree construction]].

## Definizione

Si vuole ***minimizzare il [[diametro di un grafo|diametro]]*** di uno [[spanning tree]] per il [[sistema distribuito]] in modo da massimizzare l'efficienza del [[broadcast problem|broadcast]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[dimensione dei messaggi illimitata]]
	- [[full-duplex]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione illimitato]]
	- [[risveglio singolo]]
	- [[terminazione locale]]

## Idea degli [[algoritmo|algoritmi]]

Trovare il [[centrality|centro]] del [[grafo]], poi effettuare una [[breadth-first search]].
