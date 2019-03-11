# Algoritmi efficienti

Un algoritmo efficiente cerca di minimizzare vari parametri:
- Dimensione dell'input
- Memoria utilizzata
- Numero di istruzioni

## Dimensione dell'input

Possiamo stimare la dimensione dell'input con diversi criteri.

### Criterio di costo logaritmico

La dimensione dell'input costa il numero di bit necessari per rappresentarlo.

> Un int che contiene il numero `n` occupa `log_2 n` bit.

### Criterio di costo uniforme

La dimensione dell'input costa il numero di elementi che lo costituiscono.

> Un array di `n` numeri costa `n`; una matrice `[m][n]` costa `m*n`

## Memoria utilizzata

I criteri per l'utilizzo di memoria sono gli stessi della dimensione dell'input.

## Numero di istruzioni

La velocità di un algoritmo dipende dal numero di istruzioni richiesto per eseguirlo nel caso peggiore.

Consideriamo operazioni sia operazioni aritmetiche sia operazioni logiche, e diciamo che ciascuna costa 1.

> L'algoritmo di Euclide per l'MCD costa `3` per ogni iterazione. Diciamo, allora, che costa `3n`, dove `n` è il numero più alto dei due, perchè nel caso peggiore (uno dei due numeri è 1) l'algoritmo compie `n` iterazioni.