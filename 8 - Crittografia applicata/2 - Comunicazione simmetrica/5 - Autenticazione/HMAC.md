---
aliases: ["keyed hash function"]
---

[[message authentication code system]] applicando due volte una [[funzione di hashing crittografico]] per generare due chiavi indipendenti.

## Implementazione

L'implementazione è agnostica dalla [[funzione di hashing crittografico]] utilizzata, ma richiede in input la dimensione del [[blocco]] utilizzato.

```python
from typing import Callable
HashFunction = Callable[[bytes], bytes]

def hmac(hashf: HashFunction, block_length: int, key: bytes, message: str) -> bytes:
	base_padding = b"\x00" * (block_length - len(key))
	inner_padding = b"\x36" * block_length
	outer_padding = b"\x5c" * block_length
	
	base_key = key + base_padding
	inner_key = hash(base_key ^ inner_padding)
	outer_key = base_key ^ outer_padding

	return hashf(bf"{keyo}{keyi}{message}")
```

## Caso d'uso

Viene usato solitamente nei [[general purpose computer]].

## Vedi anche

- #Extra [RFC 2104: **HMAC: Keyed-Hashing for Message Authentication**](https://datatracker.ietf.org/doc/html/rfc2104)