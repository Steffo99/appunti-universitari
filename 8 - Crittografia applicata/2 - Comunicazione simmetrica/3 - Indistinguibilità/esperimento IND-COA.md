[[esperimento|Esperimento]] che verifica l'[[indistinguibilità]] di un messaggio da un [[ciphertext-only attacker]].

## Sfida

1. Il [[sfidante|mittente]] sceglie un [[plaintext]] arbitrario.
2. Vi applica la [[funzione di cifratura]].
3. Sceglie con uguale probabilità di inviare uno dei seguenti messaggi:
	- Il [[ciphertext]].
	- Un [[blob]] di dati [[casualità crittografica|casuali]] della stessa lunghezza del [[ciphertext]].
4. Comunica il messaggio scelto all'[[avversario]].

### Condizioni di vittoria

- ⭐ Se l'avversario è in grado di determinare la scelta effettuata dallo sfidante **al massimo il 50% delle volte**, si ha [[indistinguibilità]] [[garanzia perfetta|perfetta]].
- ✅ Se l'avversario è in grado di determinare la scelta effettuata dallo sfidante **al massimo il 50% più una piccola percentuale trascursabile delle volte**, si ha [[indistinguibilità]] [[garanzia computazionale|computazionale]].
- ❌ Se l'avversario è in grado di determinare la scelta effettuata dallo sfidante **più del 50% delle volte**, l'[[indistinguibilità]] non sussiste.
