Problema per un [[sistema distribuito]].

## Definizione

Si vuole calcolare qualcosa più efficientemente possibile, distribuendo gli [[9 - Algoritmi distribuiti/1 - Problemi/parametro|input]] tra le [[entità]] e sfruttando le proprietà di un [[sistema distribuito]] ad [[albero]] di cui è nota la radice.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- ***[[iniziatore singolo]]***
	- ***[[identificatori univoci]]***
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[full-duplex|grafo indiretto]]
	- [[grafo connesso]]
	- ***[[albero]]***
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione illimitato]]

## [[algoritmo|Algoritmi]]

- [[tecnica di saturazione per alberi]]
