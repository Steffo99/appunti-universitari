I [[ciphertext]] dell'[[one-time pad]] sono [[malleabilità|malleabili]] per via della associazione tra operando dello [[XOR]] e risultato.

| Dato        | $p_3$ | $p_2$ | $p_1$ | $p_0$ |
|-------------|-------|-------|-------|-------|
|   Plaintext | 0     | 0     | 0     | 1     |
|      Chiave | 1     | 1     | 0     | 1     |
|  Ciphertext | 1     | 1     | 0     | 0     |
|     Attacco | 1     | 0     | 0     | 0     |
| Ciphertext' | 0     | 1     | 0     | 0     |
|      Chiave | 1     | 1     | 0     | 1     |
|  Plaintext' | 1     | 0     | 0     | 1     |

