Problema per un [[sistema distribuito]].

## Definizione

Si vuole scegliere un'[[entità]] che diventerà il [[leader]] per un [[algoritmo]] futuro.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[iniziatori multipli]]
	- [[identificatori univoci]]
		- **[[Angluin 1980]]**: questo problema è irrisolvibile senza identificatori univoci
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[full-duplex|grafo indiretto]]
	- [[grafo connesso]]
	- [[half-duplex|grafo diretto]]
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione unitario]]

## [[algoritmo|Algoritmi]]

- **[[leader election su albero]]**
- **[[leader election su grafo aciclico]]**
- **leader election su anello**
	- [[leader election su anello all-the-way|all-the-way]]
	- [[leader election su anello as-far-as-it-can|as-far-as-it-can]]
	- [[leader election su anello controlled-distance|controlled-distance]]
- **leader election su grafo qualsiasi**
	- [[FloodMax]]
