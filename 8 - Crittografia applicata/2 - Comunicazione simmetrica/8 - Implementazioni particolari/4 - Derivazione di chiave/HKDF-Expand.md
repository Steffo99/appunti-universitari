[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] di [[expansion di una key derivation function]], utilizzata in [[HKDF]].

## Funzionamento

Effettua ripetuti [[HMAC]] con la [[pseudo-random key]], incrementando ogni volta un contatore concatenato al parametro di [[contestualizzazione di una key derivation function|contestualizzazione]] concatenato al [[risultato]] precedente, fino a raggiungere la dimensione dell'output desiderata.

```python
def hkdf_expand(prk: bytes, info: str, blocks: int):
	results = []
	for block_n in range(blocks):
		key_part = hmac(key=prk, data=block_n + info + results[-1])
		results.append(key_part)
	return b"".join(results)
```

Il numero di blocchi è limitato a un singolo byte.