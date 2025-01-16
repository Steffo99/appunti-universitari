---
aliases: ["PKCS#1 v1.5"]
---

# PKCS#1 v1.5

[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] di [[crittografia asimmetrica]] basata su [[textbook RSA]] che ne aumenta la sicurezza aggiungendo un [[padding]] di dimensioni non deterministiche al messaggio.

## Funzionamento

1. Prima di cifrare il messaggio, vi aggiunge un [[blob]] che:
	1. inizia con un byte `0x00`;
	2. continua con un byte `0x02` 
		1. `0x00` o `0x01` per applicazioni diverse dalla crittografia asimmetrica
	3. continua con un numero casuale di bytes casuali
	4. termina con un byte `0x00`

## Vulnerabilità

- È [[malleabilità|malleabile]].