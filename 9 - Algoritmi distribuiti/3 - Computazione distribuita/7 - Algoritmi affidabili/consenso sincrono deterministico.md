Problema per un [[sistema distribuito]] che restringe il [[consenso asincrono deterministico]].

## Definizione

Ad ogni [[entità]] viene fornito un [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/parametro|input]], che usa per scegliere un valore da una [[enumerazione]].

Successivamente, deve accordarsi con almeno un certo numero di altre per selezionare un [[risultato|output]].

Tutte le [[entità]] non [[guasto|guaste]] devono:
- **principio di non-trivialità**
	- dato uno stesso [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/parametro|input]], scegliere lo stesso valore
- **principio di accordo**
	- dare lo stesso [[risultato|output]]
- **principio di terminazione**
	- dare eventualmente un [[risultato|output]]

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[dimensione dei messaggi illimitata]]
	- [[full-duplex]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità nulla]]
		- [[guasti ubiqui]]
		- [[guasti permanenti]]
		- [[guasti di esecuzione]]
			- [[guasti di esecuzione di crash]]
			- [[niente guasti di esecuzione di omissione]]
			- [[niente guasti di esecuzione bizantini]]
		- [[niente guasti di trasmissione]]
		- ***meno di $Entities$ guasti***
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
	- [[grafo completo]]
- **[[restrizione di tempo|Tempo]]**
	- ***[[ritardo di comunicazione limitato]]***
	- [[risveglio multiplo]]
	- [[terminazione locale]]

## [[algoritmo|Algoritmi]]

- [[TellAll Crash]]
