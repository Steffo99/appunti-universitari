[[attacco]] contro [[cifrario a blocchi|cifrari a blocchi]] che sfrutta il [[determinismo dell'initialization vector]] per vincere l'[[esperimento IND-DCPA]].

## Requsiti

- Conoscenza della [[funzione di cifratura]] utilizzata e possibilità di selezionare il [[plaintext]] da cifrare
	- [[chosen-plaintext attacker]]
- [[initialization vector]] non [[casualità crittografica|casuale]]
	- [[cipher block chaining operation mode]]

## Funzionamento

### Fase iniziale

1. 😈 L'[[avversario]] sceglie un [[plaintext]] $m_1$ di dimensione di un [[blocco]].
2. ✉️ Lo comunica allo [[sfidante]]. 
3. 😇 Lo [[sfidante]] sceglie un [[initialization vector]] $iv_1$.
4. 😇 Mescola il [[plaintext]] con l'[[initialization vector]], creando $m_1' = m \oplus iv_1$.
5. 😇 Calcola il [[ciphertext]] $c_1 = encrypt(m_1')$
6. ✉️ Comunica [[ciphertext]] $c_1$ e [[initialization vector]] $iv_1$ all'[[avversario]].

### [[esperimento IND-CPA]]

7. 😈 L'[[avversario]] usa l'[[initialization vector]] $iv_1$ ricevuto per determinare quello successivo, $iv_2$.
8. 😈 Calcola un [[plaintext]] speciale, $m_2 = m_1' \oplus iv_2$.
9. ✉️ Lo comunica allo [[sfidante]].
10. 😇 Lo [[sfidante]] sceglie un [[initialization vector]] uguale a quello predetto dall'[[avversario]], $iv_2$.
11. 😇 Mescola il [[plaintext]] con l'[[initialization vector]], $m_2' = m_2 \oplus iv_2 = m_1' \oplus iv_2 \oplus iv_2 = m_1'$.
12. 😇 Calcola il [[ciphertext]] $c_2 = encrypt(m_2') = encrypt(m_1') = c_1$.
13. 😇 Come parte dell'[[esperimento IND-CPA]] sceglie se inviare dati casuali oppure il [[ciphertext]] $c_2$.
14. ✉️ Lo comunica all'[[avversario]].
15. 😈 L'[[avversario]] è sempre in grado di distinguere [[ciphertext]] da dati casuali in quanto sa che il [[ciphertext]] sarà uguale a quello precedente, $c_1 = c_2$.

## Codice di esempio

```python
### Modificato dall'originale del prof. Ferretti.

>>> from os import urandom

>>> key = urandom(16)
>>> iv1 = urandom(16)
>>> iv2 = urandom(16)

>>> m1 = b'a' * 16
>>> c1 = encrypt(key, iv1, m1)
>>> c2 = encrypt(key, iv2, bxor(m1, iv1, iv2))

>>> print(f'{c1.hex()=}')
c1.hex()='fc5016bf41ec909e1dae7a6dd7102f0d'

>>> print(f'{c2.hex()=}')
c2.hex()='fc5016bf41ec909e1dae7a6dd7102f0d'
```