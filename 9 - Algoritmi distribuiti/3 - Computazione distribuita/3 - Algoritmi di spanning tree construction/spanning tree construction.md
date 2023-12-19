[[problema di ricerca]] per un [[sistema distribuito]].

## Definizione

Si vuole determinare uno [[spanning tree]] per il [[sistema distribuito]] in modo da poter effettuare efficientemente [[broadcast problem|broadcast]].

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

## [[algoritmo|Algoritmi]]

- **Flooding-based**
	- [[shout protocol]]
	- [[shout+ protocol]]
- **Depth-first-search-based**
	- [[traversal protocol]]
	- [[traversal+ protocol]]
