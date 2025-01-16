---
aliases: ["X3DH start conversation message sending"]
---

[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] [[X3DH]] di [[crittografia ibrida]] attraverso la quale un [[user agent]] avvia una nuova conversazione con un altro.

## Funzionamento

1. 1️⃣ genera una [[coppia di chiavi effimere]].
2. 1️⃣ richiede e scarica dal [[server di interscambio]]:
	- [[identity information]] di 2️⃣
	- [[identity key]] pubblica di 2️⃣
	- [[signed pre-key]] pubblica di 2️⃣
	- una [[one-time pre-key]] di 2️⃣, che viene cancellata dal [[server di interscambio]]
3. 1️⃣ calcola contemporaneamente il risultato di 4 ipotetici [[scambio di chiave basato su Diffie-Hellman|scambi di chiave DH]], usando:
	- [[identity key]] privata di 1️⃣, [[signed pre-key]] pubblica di 2️⃣
		- [[autenticità|autentica]] [[session key]]
	- [[coppia di chiavi effimere|chiave effimera]] privata di 1️⃣,  [[identity key]] pubblica di 2️⃣
		- [[autenticità|autentica]] [[session key]]
	- [[coppia di chiavi effimere|chiave effimera]] privata di 1️⃣,  [[signed pre-key]] pubblica di 2️⃣
		- fornisce [[forward secrecy]]
	- [[coppia di chiavi effimere|chiave effimera]] privata di 1️⃣,  [[one-time pre-key]] pubblica di 2️⃣
		- previene [[replay attack]]
4. 1️⃣ fornisce il risultato a una [[key derivation function]], generando la [[session key]].
5. 1️⃣ inizia a inviare messaggi con la [[session key]].
