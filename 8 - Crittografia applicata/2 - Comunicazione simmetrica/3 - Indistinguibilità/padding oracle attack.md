[[attacco]] avanzato che può essere effettuato da un [[adaptive chosen-ciphertext attacker]].

## Codice di esempio per [[cipher block chaining operation mode|CBC]]

> Non è stata effettuata una code review su questo codice.
>
> Utilizzatelo (anche per studiare) a vostro rischio e pericolo.

```python
# Un attaccante CCA2 conosce il ciphertext e ha accesso alla funzione di decifratura.
cipherblock = b"abcdefgh"
blocksize = len(cipherblock)
decrypt = lambda plaintext: ...

# Vogliamo trovare il contenuto dell'ultimo blocco di un plaintext.
# Usiamo un array di bytes temporaneo in cui inseriamo le scoperte che abbiamo fatto.
tempblock = bytearray(blocksize)

# Per ogni byte del cyphertext...
for idx, cipherbyte in enumerate(cipherblock):
	# Per ogni possibile valore di un byte...
	for byte in range(256):
		# Crea un blocco vuoto, che farà da "initialization vector" per la funzione di decifratura
		exploitblock = bytearray(blocksize)
		# Imposta il byte corrente a `byte`
		# (-idx-1) seleziona l'idxultimo byte
		exploitblock[-idx-1] = byte
		# Se esistono, imposta i byte successivi al corrente in modo tale da formare un padding valido
		for nex in range(idx):
			exploitblock[-nex-1] = byte ^ tempblock
		# Prova a decifrare il nostro testo concatenato al blocco di ciphertext.
		try:
			resulttext = decrypt(exploitblock + cipherblock)
		except PaddingError:
			# Se la funzione dà un errore di padding, ricomincia con un valore di padding diverso.
			continue
		# Prendi l'ultimo blocco del testo risultante.
		resultblock = resulttext[-blocksize:]
		# Abbiamo trovato l'ultimo byte del blocco intermedio (e quindi anche del plaintext, ma ci arriveremo dopo)
		tempblock[-idx-1] = byte ^ resultblock[-idx-1]
		break

# Invertiamo lo XOR e abbiamo trovato il plaintext!
plainblock = cipherblock ^ tempblock
```
