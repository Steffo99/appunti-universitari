L'[[one-time pad]] è suscettibile al [[riutilizzo di chiavi]], considerando che:

$$ciphertext_1 = plaintext_1 \oplus key \qquad ciphertext_2 = plaintext_2 \oplus key$$

Si può dire che:

$$ciphertext_1 \oplus ciphertext_2 = (plaintext_1 \oplus key) \oplus (plaintext_2 \oplus key)$$

Applicando la proprietà associativa dello [[XOR]], però:

$$(plaintext_1 \oplus key) \oplus (plaintext_2 \oplus key) = (plaintext_1 \oplus plaintext_2) \oplus (key \oplus key)$$

E visto che l'elemento nullo dello [[XOR]] è l'operando stesso a cui viene applicato:

$$(plaintext_1 \oplus plaintext_2) \oplus (key \oplus key) = plaintext_1 \oplus plaintext_2$$
