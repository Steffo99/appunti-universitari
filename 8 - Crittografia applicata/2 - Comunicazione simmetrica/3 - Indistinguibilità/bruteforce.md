[[Attacco]] effettuabile contro qualsiasi [[protocollo]].

## Requisiti

- Conoscenza della [[funzione di cifratura]] utilizzata
	- [[ciphertext-only attacker]]

## Funzionamento

Consiste nel provare tutti i possibili [[parametro|parametri]] della [[funzione di cifratura]] fino a quando essa non emette il [[ciphertext]] conosciuto.

### Livello di sicurezza

Il [[livello di sicurezza]] da questo attacco è determinato dal numero di possibili [[disposizione|disposizioni]] di parametri.
$$\Large O \left( x^{\color{Orange} Nk} \right)$$

## Effetti

Un attacco bruteforce riuscito permette all'avversario di effettuare [[key recovery]].
