# Problemi algoritmici

Un _problema algoritmico_ è un problema matematico che si vuole provare a risolvere con un algoritmo.

> Dati 10 numeri, voglio sapere se sono in ordine crescente oppure no.

## Caterigorizzazione

I problemi algoritmici si dividono in tre categorie: problemi _trattabili_, problemi _intrattabili_ e problemi _irrisolvibili_.

### Problema trattabile

Perchè un problema algoritmico sia _trattabile_, deve avere **almeno un algoritmo con upper bound polinomiale**.

> Questo significa che il tempo impiegato da un computer per risolvere il problema rimane ragionevole, e che quindi può essere utilizzato in maniera efficiente.

La trattabilità è un campo ancora parecchio aperto: esistono anche tanti problemi di cui non si è ancora dimostrata la trattabilità o intrattabilità.

> La [fattorizzazione](https://it.wikipedia.org/wiki/Fattorizzazione) è uno di questi problemi: l'assenza di una dimostrazione è ciò che la rende uno dei pilastri della sicurezza informatica moderna.

### Problema intrattabile

Se **un problema non ha nessun algoritmo con upper bound polinomiale**, allora si dice che è **intrattabile**.

### Problema irrisolvibile

Se **non esistono algoritmi per risolvere un problema**, allora questo si dice **irrisolvibile**.

> [Dato un algoritmo con certi input, riusciamo a capire con un algoritmo se la sua esecuzione termina o no?](https://en.wikipedia.org/wiki/Halting_problem)

### Upper e lower bound di problemi

Si può anche trovare un _upper bound_ e un _lower bound_ per un problema, ma bisogna generalizzare di più.

L'**upper bound di un problema** è il minimo upper bound di tutti gli algoritmi che lo risolvono; deve esistere almeno un algoritmo che lo risolva che abbia lo stesso _upper bound_. E' praticamente il tempo migliore per risolvere il problema dato.

Il **lower bound di un problema** è il minimo lower bound di tutti gli algoritmi che lo risolvono; non deve esistere nemmeno un algoritmo che abbia un lower bound migliore. E' il numero assolutamente minimo di operazioni richieste, non si può fare meglio di così.

In particolare, abbiamo che l'_upper bound di un algoritmo_ -> l'_upper bound del suo problema_,  
e il _lower bound di un problema_ -> il _lower bound di un suo algoritmo_.

Generalmente, il _lower bound di un problema_ è una rappresentazione abbastanza accurata della sua difficoltà.
