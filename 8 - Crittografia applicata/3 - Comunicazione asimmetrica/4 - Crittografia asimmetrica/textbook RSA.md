[[funzione]] di [[crittografia asimmetrica]] basata sul [[problema RSA]].

## Funzionamento

### Generazione delle chiavi

1. Si generano due [[numero primo|numeri primi]] grandi $p$ e $q$.
2. Si seleziona l'[[esponente pubblico]] $\color{orange} e$ in modo casuale o ponendo ${\color{orange} e} = 65537$.
3. Si calcola il [[modulo pubblico]] ${\color{orange} N} = p \times q$.
4. Si calcola l'[[esponente privato]] ${\color{lime} d} = e^{-1} \mod (p-1) (q-1)$

### [[funzione di cifratura]]

1. Si calcola $ciphertext = plaintext^{\color{orange} e} \mod {\color{orange} N}$.

### [[funzione di decifratura]]

1. Si calcola $plaintext = ciphertext^{\color{lime} d} \mod {\color{orange} N}$.

## Vulnerabilità

- La [[congettura della fattorizzazione]] non è valida per messaggi di dimensione piccola.
- È [[malleabilità|malleabile]].
