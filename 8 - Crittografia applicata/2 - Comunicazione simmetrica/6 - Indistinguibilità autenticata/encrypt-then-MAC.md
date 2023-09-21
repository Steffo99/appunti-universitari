---
aliases: ["generic composition for authenticated encryption"]
---

Metodo di [[generic composition]] per creare un [[protocollo]] di [[crittografia simmetrica autenticata]] da due protocolli qualsiasi rispettivamente di [[crittografia simmetrica moderna]] e di [[autenticazione]], utilizzando due [[chiave simmetrica|chiavi]] diverse.

## Funzionamento

### Cifratura

1. Al [[plaintext]] viene applicata la [[funzione di cifratura]] con la prima chiave.
2. Al [[ciphertext]] e **ai parametri ad esso associati** ([[nonce]], [[initialization vector]], etc) viene applicato il [[message authentication code system]] con la seconda chiave.
3. Vengono restituiti [[ciphertext]] e [[message authentication code]] insieme.

### Decifratura

1. Viene verificato il [[message authentication code]] **con una funzione a [[tempo costante]]**.
2. Viene decifrato il [[ciphertext]].
3. Viene restituito il [[plaintext]].
