---
aliases: ["pre-computation attack"]
---

[[attacco]] non-interattivo a un [[database delle credenziali]].

## Requisiti

- Il [[database delle credenziali]] utilizza [[hash]].
- La [[funzione di hashing]] utilizzata è conosciuta a priori.

## Funzionamento

1. L'avversario [[enumeration attack|enumera]] anticipatamente numerosi [[hash]], creando una [[rainbow table]].
2. L'avvesario causa un [[data breach]] del [[database delle credenziali]].
3. L'avversario usa la [[rainbow table]] per trovare le [[password]] corrispondenti a ciascun hash.
