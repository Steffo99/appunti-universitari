---
aliases: ["Schnorr identification protocol"]
---

[[funzione]] di [[zero-knowledge proof]] [[interattivo]] con [[honest verifier]].

Sfrutta la [[congettura Diffie-Hellman decisionale]].

## Funzionamento

0. 1️⃣ vuole dimostrare di conoscere ${\color{orange} Y} = {\color{orange} g}^{\color{lime} x} \mod p$.
1. 1️⃣ invia il [[generatore di un gruppo ciclico|generatore]] ${\color{orange} g}$ a 2️⃣.
2. 1️⃣ calcola il [[commitment]] ${\color{orange} R} = {\color{orange} g}^k$.
	- Usando come $k$ un numero [[casualità crittografica|casuale]] per 2️⃣.
1. 1️⃣ invia il [[commitment]] a 2️⃣.
2. 2️⃣ calcola una [[challenge]] ${\color{orange} c}$.
	- Usando come ${\color{orange} c}$ un numero [[casualità crittografica|casuale]] per 1️⃣.
1. 2️⃣ invia la [[challenge]] a 1️⃣.
2. 1️⃣ calcola il [[witness]] ${\color{orange} s} = k + {\color{lime} x} \cdot {\color{orange} c}$.
3. 1️⃣ invia il [[witness]] a 2️⃣.
4. 2️⃣ effettua la verifica ${\color{orange} g^s} = {\color{orange} g}^{k + {\color{lime} x} \cdot {\color{orange} c}} = {\color{orange} g}^k \cdot {\color{orange} g}^{{\color{lime} x} \cdot {\color{orange} c}} = {\color{orange} R} \cdot {\color{orange} Y^c}$ .
