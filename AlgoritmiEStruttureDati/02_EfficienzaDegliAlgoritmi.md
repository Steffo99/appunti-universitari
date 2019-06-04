# Efficienza degli algoritmi

Un buon algoritmo deve essere **efficiente**, ovvero deve usare il minimo delle risorse necessarie, come _usare il minimo di tempo possibile_.

## Come misuriamo il tempo necessario?

Cerchiamo di astrarre il tempo dal particolare esecutore, e andiamo a contare il numero di operazioni elementari richieste per eseguire il nostro algoritmo nel caso peggiore.

Un algoritmo efficiente, infatti, all'aumentare dei dati in ingresso, diventerà sempre più veloce rispetto a uno non efficiente, anche su computer più lenti!

> Il [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort) è sempre più lento di un [Tree Sort](https://en.wikipedia.org/wiki/Tree_sort), anche su computer più lenti, perchè, dovendo ordinare liste sempre più lunghe, prima o poi si raggiunge un punto in cui il primo è più veloce (in termini di tempo) dell'altro.

Dobbiamo andare a vedere, quindi, _il numero di operazioni richieste per ottenere il risultato nel caso peggiore_.

Consideriamo operazioni sia operazioni aritmetiche sia operazioni logiche, e diciamo che ciascuna costa 1.

> L'[algoritmo di Euclide](https://it.wikipedia.org/wiki/Algoritmo_di_Euclide) per l'MCD costa `3` per ogni iterazione (un giro del ciclo `while`). Diciamo, allora, che costa `3n`, dove `n` è il numero più alto dei due, perchè nel caso peggiore (uno dei due numeri è 1) l'algoritmo compie `n` iterazioni.

## Altri parametri ottimizzabili

È possibile che alcuni algoritmi per vari motivi cerchino di ottimizzare altri parametri diversi dal tempo, come ad esempio _la dimensione dell'input_ o la _memoria utilizzata_.  

> Generalmente, questo viene fatto sui dispositivi embedded, con memoria molto limitata.

### Criteri di costo di memoria

Ci sono vari criteri con cui stimare la memoria richiesta da un dato: è possibile che il costo risultante vari in base al criterio scelto!

#### Criterio di costo logaritmico

Un dato costa il numero di bit necessari per rappresentarlo.

> Un int che contiene il numero `n` costa `log_2(n)`.  
> Un array di `[n]` numeri tutti uguali costa `n log_2(n)`.

#### Criterio di costo uniforme

Un dato costa il numero di elementi che lo costituiscono.

> Un int che contiene il numero `n` costa `1`.  
> Un array di `[n]` numeri costa `n`.  
> Una matrice `[m][n]` costa `m*n`.
