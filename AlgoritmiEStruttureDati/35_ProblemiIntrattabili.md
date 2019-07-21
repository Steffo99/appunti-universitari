# Problemi intrattabili

## Problema di Set-Cover

### Input

`U`niverso di `e`lementi

`S`ottoinsieme di `s`ottoinsiemi di elementi di `U`

### Output

Il minimo `S'`ottoinsieme di `s`ottoinsiemi che copra completamente `U`.

### Soluzione in `O(n^d)`

Non c'è.

### Non-soluzione alternativa

Faccio una scelta greedy, ma non posso dimostrare in alcun modo che la soluzione ottenuta sia quella ottima.  
Infatti, l'algoritmo non dà sempre la soluzione ottima, ma dà una soluzione accettabile in tempo polinomiale.

Seleziono sempre il sottoinsieme che copre più elementi mancanti possibili.

#### Costo computazionale

`Costo greedy <= log(numero_elementi) * Costo ottimo`
