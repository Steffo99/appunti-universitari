---
aliases: ["OPRF"]
---

[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] simile a una [[famiglia di funzioni pseudo-casuali]].

## Funzionamento 

Assumendo l'utilizzo del [[logaritmo discreto su gruppi ciclici primi sugli interi]] con la [[congettura Diffie-Hellman classica]]:

1. 1️⃣ converte il suo input in un elemento del gruppo ciclico $input$.
2. 1️⃣ seleziona un numero casuale $blinding$.
3. 1️⃣ rende [[blinded]] il suo input $blindinput = input^{blinding}$.
4. 1️⃣ invia l'input [[blinded]] a 2️⃣.
5. 2️⃣ applica la *oblivious pseudo-random function* sull'input di 1️⃣ $blindoutput = blindinput^{secret}$.
6. 2️⃣ invia l'output [[blinded]] a 1️⃣.
7. 1️⃣ rende [[blinded|unblinded]] il suo output $output = blindoutput^{blinding^{-1}}$.
