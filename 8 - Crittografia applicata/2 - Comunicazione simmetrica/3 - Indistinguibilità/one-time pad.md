[[funzione]] che implementa una [[famiglia di funzioni pseudo-casuali]] in modo semplice ed efficiente, ma [[malleabilità|malleabile]] ed [[riutilizzo di chiavi nell'one-time pad|efficace per un singolo messaggio]].

## Funzionamento

L'*one-time pad* si basa sull'invertibilità della funzione logica [[XOR]].

```python
def onetimepad(key):
	def encrypt(plaintext) -> ciphertext:
		return key ^ plaintext
	def decrypt(ciphertext) -> plaintext:
		return key ^ ciphertext
	return encrypt, decrypt
```


