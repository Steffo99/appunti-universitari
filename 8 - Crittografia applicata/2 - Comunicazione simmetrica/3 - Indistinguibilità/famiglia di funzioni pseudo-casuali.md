---
aliases: ["PRF"]
---

[[Funzione ideale]] per i problemi di [[crittografia moderna]].
- consuma una [[chiave simmetrica]]
- emette una coppia di funzioni che convertono il [[plaintext]] in un [[ciphertext]] indistinguibile da un blob casuale e viceversa.

```python
def pseudorandomfamily(key):
	def encrypt(plaintext) -> ciphertext:
		...
	def decrypt(ciphertext) -> plaintext:
		...
	return encrypt, decrypt
```
