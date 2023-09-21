Fase iniziale di una sessione [[TLS]] e [[DTLS]].

## Funzionamento v1.2

Consiste nelle seguenti fasi:

1. **Negoziazione**
	1. Trasmissione di [[metadato|metadati]]
		- Versione del protocollo
		- [[protocollo|Protocolli]] di crittografia disponibili
		- ID della sessione 
			- per [[caching]] della [[chiave simmetrica]]
1. **[[Scambio di chiave autenticato]] con [[coppia di chiavi effimere|coppie di chiavi effimere]]**
	1. Autenticazione del server
	2. *(Opzionale)* Autenticazione del client
2. **Terminazione dell'handshake**
	1. Autenticazione dello scambio di dati

## Cambiamenti in v1.3

- **3-RTT**: I parametri dello scambio di chiave vengono inviati dal client nella negoziazione.
- **2-RTT**: Permette di rimuovere un round trip ma con vulnerabilità a [[replay attack]]. 
- Sono rimossi protocolli deprecati.