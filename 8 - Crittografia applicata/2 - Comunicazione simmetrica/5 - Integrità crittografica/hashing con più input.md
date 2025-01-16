[[8 - Crittografia applicata/1 - Concetti/2 - Dimostrare la validità delle soluzioni/debolezza]] di una [[funzione di hashing crittografico]] che si presenta quando l'input della funzione è formato concatenando direttamente due dati.

```python
hash("builtin" + "security") == hash("built" + "insecurity")
```

## Causa

Certe funzioni di hashing, come quelle basate sul design di [[Merkle-Damgard]], cifrano il [[plaintext]] dividendolo in blocchi di dimensione fissa processati consecutivamente.

Se si conosce l'hash fino a un certo blocco, determinare l'hash per una quantità limitata di blocchi successivi è molto più facile.

## Prevenzione

- Utilizzare un separatore che non appare nel testo:
	```python
	hash("builtin" + "," + "security")
	```

- Utilizzare un indicatore della lunghezza del primo dato:
	```python
	hash(len("builtin") + "builtin" + "security")
	```

## Vedi anche

> [AWS signature version 1 is insecure](http://www.daemonology.net/blog/2008-12-18-AWS-signature-version-1-is-insecure.html)