[[Protocollo]] di [[augmented password-based key exchange]].

Sfrutta una [[oblivious pseudo-random function]] e una [[funzione di password hashing]].

## Funzionamento

### Registrazione

L'[[user agent]] invia il suo [[username]] e la sua [[password]] [[blinded]] al [[servizio di autenticazione]], che ci aggiunge un [[salt]] e la invia indietro assieme alla sua [[chiave pubblica]].

La [[password]] [[salt|salted]] viene poi passata a una [[funzione di password hashing|password-based key derivation function]], ottenendo una "master key".

In seguito, l'[[user agent]] genera una [[coppia di chiavi]], e concatena la [[chiave privata]] generata alla [[chiave pubblica]] del server, per poi criptarle, usando [[crittografia simmetrica moderna]] con la "master key" come chiave.

Infine, al server viene inviata la [[chiave pubblica]] generata e il precedente dato cifrato, che vengono immagazzinati assieme al [[salt]] e all'[[username]] dell'utente.

## Login

L'[[user agent]] invia il suo [[username]] e la sua [[password]] [[blinded]] al [[servizio di autenticazione]], che ci aggiunge un [[salt]] e la invia indietro assieme alla [[chiave pubblica]] generata e al dato cifrato.

La [[password]] [[salt|salted]] viene poi passata a una [[funzione di password hashing|password-based key derivation function]], ottenendo la stessa "master key" ottenuta in fase di registrazione.

La "master key" viene usata per decifrare il dato, riottenendo così la [[chiave pubblica]] del server e la [[chiave privata]] generata.

L'[[user agent]] è ora in grado di effettuare uno [[scambio di chiave basato su Diffie-Hellman]] con la [[chiave privata]] generata e la [[chiave pubblica]] del [[servizio di autenticazione]].

Allo stesso modo, il [[servizio di autenticazione]] è in grado di effettuare lo stesso [[scambio di chiave basato su Diffie-Hellman]], usando la sua [[chiave privata]] e la [[chiave pubblica]] immagazinata.

In questo modo, le due parti hanno una [[chiave simmetrica]] con cui comunicare.
