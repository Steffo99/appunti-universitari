---
aliases: ["Fiat-Shamir transform", "Fiat-Shamir transformation", "Fiat-Shamir heuristic"]
---

[[Trasformazione]] attraverso la quale è possibile cambiare una [[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] di [[zero-knowledge proof]] [[interattiva]] in una [[non-interattiva]].

## Requisiti

- Gli output della [[funzione di hashing]] devono essere [[casualità crittografica|casuali]].

## Funzionamento

Sostituisce alla [[challenge]] la computazione di un [[hash]] del [[commitment]].

```python
challenge = cryptohash(commitment)
```