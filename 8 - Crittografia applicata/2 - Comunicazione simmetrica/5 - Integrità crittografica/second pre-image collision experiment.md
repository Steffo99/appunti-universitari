[[esperimento]] di [[verifica crittografica dell'integrità]] che verifica l'impossibilità di [[second pre-image collision]].

## Sfida

1. Uno [[sfidante]] sceglie un [[plaintext]] arbitrario.
2. Vi applica la [[funzione di hashing crittografico]].
3. Comunica l'[[hash]] all'avversario.

### Condizioni di vittoria

- ❌ Se l'[[avversario]] trova un [[plaintext]] che genera lo stesso [[hash]] di quello generato dallo [[sfidante]].
- ✅ Se l'[[avversario]] [[garanzia computazionale|non è in grado]] di determinare un [[plaintext]] tale.