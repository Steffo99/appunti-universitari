---
aliases: ["axolotl ratchet"]
---

[[Protocollo]] utilizzato dal [[Signal protocol]] per garantire [[forward secrecy]] e [[backward secrecy]].

È composta da:
- ***[[symmetric ratchet]]***
	- **root chain**
		- inizializzata con la [[session key]] e poi aggiornata tramite ***[[Diffie-Hellman ratchet]]***
		- **sending chain**
			- invio di messaggi all'altra parte, corrispondente all'altra receiving chain
		- **receiving chain**
			- ricezione di messaggi dall'altra parte, corrispondente all'altra sending chain

## Vedi anche

- [Signal → Specifications: **The Double Ratchet Algorithm**](https://signal.org/docs/specifications/doubleratchet/)