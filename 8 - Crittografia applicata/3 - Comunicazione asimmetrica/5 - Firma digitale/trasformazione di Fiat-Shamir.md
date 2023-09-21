---
aliases: ["Fiat-Shamir transform", "Fiat-Shamir transformation", "Fiat-Shamir heuristic"]
---

[[Trasformazione]] attraverso la quale è possibile cambiare una [[funzione]] di [[zero-knowledge proof]] [[interattiva]] in una [[non-interattiva]].

## Requisiti

- Gli output della [[funzione di hashing]] devono essere [[casualità crittografica|casuali]].

## Funzionamento

Sostituisce alla [[challenge]] la computazione di un [[hash]] del [[commitment]].

```python
challenge = cryptohash(commitment)
```