[[funzione]] di [[zero-knowledge proof]] [[non-interattivo]] con [[honest verifier]].

Aggiunge la [[trasformazione di Fiat-Shamir]] al [[protocollo di identificazione di Schnorr interattivo]].

## Requisiti

- Gli output della [[funzione di hashing]] devono essere [[casualità crittografica|casuali]].

## Funzionamento

0. 1️⃣ vuole dimostrare di conoscere ${\color{orange} Y} = {\color{orange} g}^{\color{lime} x} \mod p$.
2. 1️⃣ calcola il [[commitment]] ${\color{orange} R} = {\color{orange} g}^k$.
	- Usando come $k$ un numero [[casualità crittografica|casuale]] per 2️⃣.
4. 1️⃣ calcola una [[challenge]] ${\color{orange} c} = \mathrm{hash}({\color{orange} R})$.
	- In quanto l'output di $\mathrm{hash}( {\color{orange} R} )$ è un numero [[casualità crittografica|casuale]] per 1️⃣.
6. 1️⃣ calcola il [[witness]] ${\color{orange} s} = k + {\color{lime} x} \cdot {\color{orange} c}$.
7. 1️⃣ invia il [[commitment]], la [[challenge]], e il [[witness]] a 2️⃣.
8. 2️⃣ effettua la verifica ${\color{orange} g^s} = {\color{orange} g}^{k + {\color{lime} x} \cdot {\color{orange} c}} = {\color{orange} g}^k \cdot {\color{orange} g}^{{\color{lime} x} \cdot {\color{orange} c}} = {\color{orange} R} \cdot {\color{orange} Y^c}$ .
