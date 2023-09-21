[[message authentication code system]] deprecato che funziona in modo simile al [[cipher block chaining operation mode]], con la differenza principale che solo l'ultimo blocco emette output.

1. usa la [[chiave simmetrica]] per determinare la [[keyed family of pseudo-random permutations]] da utilizzare
2. effettua lo [[XOR]] del plaintext con un [[initialization vector]] intrinseco all'algoritmo
3. fornisce il valore precedente alla [[keyed family of pseudo-random permutations]] selezionata
4. utilizza il risultato come initialization vector del blocco successivo, finchè non c'è più testo da autenticare
5. emette il risultato come [[message authentication code]]

## Diagramma

![[CBC-MAC.canvas]]