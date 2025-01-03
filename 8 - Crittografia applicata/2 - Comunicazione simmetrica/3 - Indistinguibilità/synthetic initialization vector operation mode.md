---
aliases: ["SIV"]
---

[[operation mode di un cifrario a blocchi]] che sostituisce un [[synthetic initialization vector]] al nonce o all'initialization vector.

Consuma **due** [[chiave simmetrica|chiavi simmetriche]], in quanto la prima viene usata per la generazione del synthetic initialization vector, mentre la seconda per la funzione di cifratura.

## Diagramma

![[synthetic initialization vector operation mode.canvas]]

## Svantaggi

L'intero plaintext deve essere conosciuto all'inizio della cifratura, in quanto è necessario per generare il [[synthetic initialization vector]].

## Vedi anche

- [RFC 5297](https://www.rfc-editor.org/rfc/rfc5297)
