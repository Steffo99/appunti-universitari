[[funzione ideale]] di [[scambio di chiave autenticato]] che si appoggia sulla [[congettura Diffie-Hellman]].

## Funzionamento

1. 1️⃣ genera una coppia di chiavi.
2. 1️⃣ cifra la sua chiave pubblica con la sua chiave privata.
3. 1️⃣ invia la sua chiave pubblica a 2️⃣, sia in chiaro, sia cifrata.
4. 2️⃣ genera una coppia di chiavi.
5. 2️⃣ cifra la sua chiave pubblica con la sua chiave privata.
6. 2️⃣ invia la sua chiave pubblica a 1️⃣, sia in chiaro, sia cifrata.
7. 1️⃣ decifra la chiave ricevuta da 2️⃣, e vede se corrisponde con quella in chiaro.
8. 2️⃣ decifra la chiave ricevuta da 1️⃣, e vede se corrisponde con quella in chiaro.

## Svantaggi
- La chiave pubblica viene completamente pubblicata.
	- Si perde la [[negabilità]].
	- Si perde l'[[anonimità]].