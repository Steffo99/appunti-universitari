Problema per un [[sistema distribuito]].

## Definizione

Si vuole scegliere un'[[entità]] che diventerà il [[leader]] per un [[algoritmo]] futuro.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[dimensione dei messaggi illimitata]]
	- [[half-duplex]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
	- [[identificatori univoci]]
		- il teorema [[Angluin 1980]] li pone come requisito per la risolvibilità
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione illimitato]]
	- [[risveglio multiplo]]
	- [[terminazione locale]]

## [[algoritmo|Algoritmi]]

- **[[leader election su albero]]**
- **[[leader election su grafo aciclico]]**
- **leader election su anello**
	- [[leader election su anello all-the-way|all-the-way]]
	- [[leader election su anello as-far-as-it-can|as-far-as-it-can]]
	- [[leader election su anello controlled-distance|controlled-distance]]
- **leader election su grafo qualsiasi**
	- [[FloodMax]]
