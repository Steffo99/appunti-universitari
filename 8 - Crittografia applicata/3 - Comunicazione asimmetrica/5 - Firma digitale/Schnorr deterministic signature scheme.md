[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] che implementa un [[signature scheme]] in modo [[operation framework deterministico|deterministico]] usando una [[key derivation function]] per i numeri casuali.

## Requisiti

- Gli output della [[funzione di hashing]] devono essere [[casualità crittografica|casuali]].

## Funzionamento

0. 1️⃣ vuole dimostrare di conoscere ${\color{orange} Y} = {\color{orange} g}^{\color{lime} x} \mod p$.
1. 1️⃣ calcola il primo [[commitment]] $r = \mathrm{KDF}({\color{lime} x}, Data)$.
2. 1️⃣ calcola il secondo [[commitment]] ${\color{orange} R} = {\color{orange} g}^r$.
	- Usando come $k$ un numero [[casualità crittografica|casuale]].
3. 1️⃣ calcola una [[challenge]] ${\color{orange} c} = \mathrm{hash}({\color{orange} R}, Data)$.
	- Usando come ${\color{orange} c}$ un numero [[casualità crittografica|casuale]].
	- Usando come $Data$ i [[dati associati]] da firmare.
4. 1️⃣ calcola il [[witness]] ${\color{orange} s} = k + {\color{lime} x} \cdot {\color{orange} c}$.
5. 1️⃣ invia il [[commitment]], la [[challenge]], e il [[witness]] a 2️⃣.
6. 2️⃣ effettua la verifica ${\color{orange} g^s} = {\color{orange} g}^{k + {\color{lime} x} \cdot {\color{orange} c}} = {\color{orange} g}^k \cdot {\color{orange} g}^{{\color{lime} x} \cdot {\color{orange} c}} = {\color{orange} R} \cdot {\color{orange} Y^c}$ .
