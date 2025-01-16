[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] di [[padding]] che riempie gli spazi vuoti con il byte equivalente al numero di byte mancante.

## Caso peggiore

Se il plaintext è già perfettamente allineato, viene aggiunto un blocco extra, riempito con il numero di byte della dimensione del blocco.

## Esempi

- Padding a 4 byte del testo `hi`:
	```
	   h    i \x02 \x02
	```
- Padding a 4 byte del testo `ciao`: 
	```
	   c    i    a    o
	\x04 \x04 \x04 \x04
	```
- Padding a 4 byte del testo `ciaocomeva`:
	```
	   c    i    a    o
	   c    o    m    e
	   v    a \x02 \x02
	```