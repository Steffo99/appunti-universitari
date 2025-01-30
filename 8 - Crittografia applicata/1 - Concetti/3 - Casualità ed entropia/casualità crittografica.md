---
aliases:
  - casuale
---

[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/vincolo|Vincolo]] che richiede che i [[risultato|risultati]] di un [[generatore]] siano sia [[distribuzione uniforme|distribuiti uniformemente]] sia [[imprevedibilità|imprevedibili]] per tutte le parti coinvolte.

## Esempio

Questo generatore Python ha un output **statisticamente casuale**, ma non **crittograficamente casuale**, perchè è possibile determinare i numeri successivi che esso emetterà:
```python
def random():
	"[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, ...]"
	while True:
		yield 0
		yield 1
```

Questo generatore Python ha un output **statisticamente casuale** e **crittograficamente casuale**, perchè non è possibile determinare i numeri successivi che esso emetterà:
```python
def random():
	"[0, 1, 0, 1, 1, 1, 0, 1, 1, 0, ...]"
	while True:
		result = flip_a_coin_in_real_life()
		yield result
```

## Livello di sicurezza

Il [[livello di sicurezza]] rispetto alla casualità crittografica corrisponde all'[[entropia]] dei valori stessi.