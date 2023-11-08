[[problema di ricerca]] per un [[sistema distribuito]], che estende il problema di [[spanning tree construction]].

## Definizione

Si vuole [[problema di ricerca|determinare]] uno [[spanning tree]] per il [[sistema distribuito]] in modo da poter effettuare efficientemente [[broadcast problem|broadcast]], ***ma è possibile che più [[entità]] diano il via alla costruzione contemporaneamente***.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[full-duplex]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
	- ***[[identificatori univoci]]***
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione unitario]]
	- ***[[risveglio parziale]]***
	- [[terminazione locale]]

### [[Algoritmo|Algoritmi]]

- [[multiple spanning tree transform]]
- [[selective spanning tree transform]]