Problema per un [[sistema distribuito]] che introduce maggiori [[restrizioni al modello dei sistemi distribuiti|restrizioni]] alla [[leader election]] per ottenere [[costo computazionale]] minore.

## Definizione

Si vuole scegliere un'[[entità]] che diventerà il [[leader]] per un [[algoritmo]] futuro.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- ***[[dimensione dei messaggi limitata]]***
	- [[half-duplex]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
	- [[identificatori univoci]]
- **[[restrizione di tempo|Tempo]]**
	- ***[[ritardo di comunicazione unitario]]***
	- [[risveglio multiplo]]
	- [[terminazione locale]]

## [[algoritmo|Algoritmi]]

- [[leader election su anello speeding]]
- [[leader election su anello waiting]]