---
aliases: ["CBC"]
---
[[operation mode di un cifrario a blocchi]].

## Funzionamento

1. usa la chiave simmetrica per determinare la keyed family of pseudo-random permutations da utilizzare
2. effettua lo XOR del plaintext con un [[initialization vector]]
3. fornisce il valore precedente alla keyed family of pseudo-random permutations selezionata
4. lo emette come risultato del blocco
5. utilizza il risultato come initialization vector del blocco successivo

## Diagramma

![[cipher block chaining operation mode.canvas]]