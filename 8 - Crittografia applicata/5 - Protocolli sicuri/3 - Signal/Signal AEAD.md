In [[Signal]], l'[[authenticated encryption with associated data]] è effettuata con un dato associato ottenuto concatenando:

1. [[identity information]] di 1️⃣
2. [[identity information]] di 2️⃣
3. [[identity key]] pubblica di 1️⃣
4. [[identity key]] pubblica di 2️⃣

Il dato ottenuto può essere usato per effettuare [[out-of-band verification]], in caso si voglia rafforzare la sicurezza della comunicazione.

Inoltre, viene trasmesso:

5. contatore dei messaggi inviati per il [[symmetric ratchet]]
6. chiave pubblica del [[Diffie-Hellman ratchet]]