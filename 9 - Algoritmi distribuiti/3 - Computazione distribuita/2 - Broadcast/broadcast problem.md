---
aliases:
  - broadcast
---

Problema per un [[sistema distribuito]].

## Definizione

Una [[entità]] vuole comunicare un'informazione a tutto il resto del [[sistema distribuito]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]]

- [[terminazione locale]]
- **[[restrizione di comunicazione|Comunicazione]]**
	- [[iniziatore singolo]]
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

#### In un [[grafo]] qualsiasi

Ogni [[entità]] deve ricevere per forza il messaggio, quindi sicuramente:
$$
\Omega(Entities)
$$

In più, non è possibile togliere nessun [[canale di comunicazione|canale]] senza rischiare che un'[[entità]] non venga raggiunta, in quanto non si hanno informazioni sulla [[rete di comunicazione]] sottostante:
$$
\Large 2 \cdot Channels - (Entities - 1)
$$

#### [[restrizioni al modello dei sistemi distribuiti|Restringendo]] a un [[albero]] con [[leader]] alla [[radice di un albero|radice]]

In un [[albero]], è impossibile che due [[entità]] vicine vengano scoperte contemporaneamente, pertanto il [[notazione Ω-grande|lower bound]] diminuisce a:
$$
\Large 1 \cdot Channels
$$

#### [[restrizioni al modello dei sistemi distribuiti|Restringendo]] a un [[grafo completo]]

In un [[grafo completo]] il [[leader]] può inviare il [[messaggio]] direttamente ai suoi vicini:
$$
\Large 1 \cdot Nodes
$$

### [[tempo]]

#### In un [[grafo]] qualsiasi

Il [[grafo]] potrebbe essere un [[cammino]], che richiederebbe che ogni arco venisse attraversato, quindi sicuramente:
$$
\Large 1 \cdot Channels
$$

#### [[restrizioni al modello dei sistemi distribuiti|Restringendo]] a un [[albero]] con [[leader]] alla [[radice di un albero|radice]]

Anche un [[albero]] potrebbe essere un [[cammino]] come un [[grafo]] qualsiasi:
$$
\Large 1 \cdot Channels
$$

#### [[restrizioni al modello dei sistemi distribuiti|Restringendo]] a un [[grafo completo]]

In un [[grafo completo]], tutte le [[entità]] sono vicine del [[leader]], quindi ricevono tutte il [[messaggio]] contemporaneamente:
$$
\Large 1
$$
