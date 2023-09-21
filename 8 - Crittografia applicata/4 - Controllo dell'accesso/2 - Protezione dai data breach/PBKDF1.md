[[funzione di password hashing]].

## Funzionamento

Computa l'hash un numero significativo di volte, detto [[rounds]].

```python
def pbkdf1(salt, password, rounds):
	current_hash = hash(safe_concat(salt, password))
	for _ in range(rounds-1):
		current_hash = hash(current_hash)
	return current_hash
```
