Problema per un [[sistema distribuito]].

## Definizione

Due [[entità]] si vogliono accordare su un valore con confidenza totale di essersi accordate sullo stesso.

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- **[[restrizione di comunicazione|Comunicazione]]**
	- [[full-duplex]]
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità nulla]]
		- [[guasti ubiqui]]
		- [[guasti transitori]]
		- [[niente guasti di esecuzione]]
		- [[guasti di trasmissione]]
- **[[restrizione di topologia|Topologia]]**
	- due [[entità]]
	- un [[canale di comunicazione|canale]]
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione illimitato]]
	- [[risveglio singolo]]
	- [[terminazione globale]]

## Risolvibilità

> [!Failure]
> Il problema non è risolvibile deterministicamente senza la certezza che venga consegnato almeno un [[messaggio]].


