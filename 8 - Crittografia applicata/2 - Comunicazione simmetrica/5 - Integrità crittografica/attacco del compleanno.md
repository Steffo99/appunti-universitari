[[attacco]] effettuabile contro [[funzione di hashing crittografico|funzioni di hash crittografico]] equivalente al [[bruteforce]], ma con l'obiettivo di superare il [[collision experiment]] invece che il [[first pre-image collision experiment]].

## Requisiti

- conoscenza della [[funzione di hashing crittografico]] utilizzata

## Funzionamento

L'avversario sceglie un [[hash]] a piacimento, poi prova tutti i [[plaintext]] possibili fino a quando non ne trova uno che [[hash|lo]] genera.

### Livello di sicurezza

Il [[livello di sicurezza]] rispetto ad attacchi del compleanno è un'esponenziale del numero di possibili hash.

$$\Large O \left( x^{\frac{\color{Orange} N}{2}} \right)$$

Dopo $\sqrt{N}$ tentativi, la probabilità di aver trovato una collisione è del 50%.

## Conseguenze

Un attacco del compleanno riuscito dimostra l'assenza di [[collision experiment|collision resistance]].