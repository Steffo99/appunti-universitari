---
aliases:
  - X3DH start conversation message receiving
---

[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] [[X3DH]] di [[crittografia ibrida]] attraverso la quale un [[user agent]] riesce a ricevere i messaggi di una conversazione avviata in sua assenza.

## Funzionamento

6. 2️⃣ richiede e scarica dal [[server di interscambio]]:
	- [[identity information]] di 1️⃣
	- [[identity key]] pubblica di 1️⃣
	- [[coppia di chiavi effimere|chiave effimera]] pubblica di 1️⃣
7. 2️⃣ calcola contemporaneamente il risultato di 4 ipotetici [[scambio di chiave basato su Diffie-Hellman|scambi di chiave DH]], usando:
	- [[identity key]] pubblica di 1️⃣, [[signed pre-key]] privata di 2️⃣
		- [[autenticità|autentica]] [[session key]]
	- [[coppia di chiavi effimere|chiave effimera]] pubblica di 1️⃣,  [[identity key]] privata di 2️⃣
		- [[autenticità|autentica]] [[session key]]
	- [[coppia di chiavi effimere|chiave effimera]] pubblica di 1️⃣,  [[signed pre-key]] privata di 2️⃣
		- fornisce [[forward secrecy]]
	- [[coppia di chiavi effimere|chiave effimera]] pubblica di 1️⃣,  [[one-time pre-key]] privata di 2️⃣
		- previene [[replay attack]]
8. 2️⃣ fornisce il risultato a una [[key derivation function]], generando la [[session key]].
9. 2️⃣ decifra i messaggi che 1️⃣ ha iniziato ad inviare in fase di [[invio X3DH]].
