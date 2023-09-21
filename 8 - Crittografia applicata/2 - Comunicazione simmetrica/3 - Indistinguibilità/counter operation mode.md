[[operation mode di un cifrario a blocchi]].

## Funzionamento

1. usa la chiave simmetrica per determinare la keyed family of pseudo-random permutations da utilizzare
2. concatena un [[nonce]] ad un contatore di blocchi processati
3. fornisce il valore precedente alla keyed family of pseudo-random permutations selezionata
4. effettua lo XOR del risultato della permutazione con il plaintext
5. lo emette come risultato del blocco

> Dato che si basa su un nonce che aumenta per ogni blocco, è sostanzialmente un [[cifrario a flusso]] implementato attraverso un cifrario a blocchi.

## Diagramma

![[counter operation mode.canvas]]
