Problema per un [[sistema distribuito]].

## Definizione

Si vuole calcolare qualcosa più efficientemente possibile, distribuendo gli [[9 - Algoritmi distribuiti/1 - Problemi/parametro|input]] tra le [[entità]] e sfruttando le proprietà di un [[sistema distribuito]] ad [[albero]] di cui ***non è nota la [[radice di un albero|radice]]***.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[full-duplex|grafo indiretto]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
	- ***[[grafo aciclico]]***
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione illimitato]]
	- ***[[risveglio parziale]]***
	- [[terminazione locale]]

## [[algoritmo|Algoritmi]]

- [[tecnica di saturazione per grafi aciclici]]
