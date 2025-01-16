[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] di [[extraction di una key derivation function]], utilizzata in [[HKDF]].

## Funzionamento

Effettua l'[[HMAC]] dell'[[input key material]] utilizzando il *salt* come chiave.

```python
def hkdf_extract(ikm: str, salt: str):
	prk = hmac(key=salt, data=ikm)
	return prk
```