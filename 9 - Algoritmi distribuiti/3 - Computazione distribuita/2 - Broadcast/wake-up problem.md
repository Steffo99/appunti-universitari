Problema per un [[sistema distribuito]], variante del [[broadcast problem]].

## Definizione

***Varie [[entità]]*** vogliono comunicare una ***stessa*** informazione a tutto il resto del [[sistema distribuito]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- [[terminazione locale]]
- **[[restrizione di comunicazione|Comunicazione]]**
	- ***[[iniziatori multipli]]***
- **[[restrizione di affidabilità|Affidabilità]]**
	- [[affidabilità totale]]
- **[[restrizione di topologia|Topologia]]**
	- [[grafo connesso]]
	- [[full-duplex|grafo indiretto]]
- **[[restrizione di tempo|Tempo]]**
	- [[ritardo di comunicazione unitario]]

## [[algoritmo|Algoritmi]]

- **Flooding**
	- [[flooding v1]] (non [[algoritmo corretto|corretto]]...)
	- [[flooding v2]] ([[algoritmo corretto|corretto]].)
	- [[flooding v3]] (ottimizzato!)

## [[notazione Ω-grande|Lower bound]] [[costo computazionale|costo computazionale]]

### [[Comunicazione]]

#### Con un solo iniziatore

Uguale al [[broadcast problem]]:
$$
\Large 2 \cdot Channels - (Entities - 1)
$$

#### Con tutti iniziatori

Tutti i [[canale di comunicazione|canali]] vengono esplorati $2$ volte, quindi:
$$
\Large 2 \cdot Channels
$$

#### Con più iniziatori

Nel caso peggiore, gli iniziatori sono tutti vicini tra loro, e ciò aumenta il numero di [[canale di comunicazione|canali]] esplorati $2$ volte:
$$
\Large 2 \cdot Channels - (Entities - Initiators)
$$

### [[9 - Algoritmi distribuiti/1 - Problemi/tempo|Tempo]]

Nel caso peggiore, si ha un solo iniziatore, il che lo rende uguale al [[broadcast problem]].
