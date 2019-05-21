## Introduzione alle Strutture Dati

Una _struttura dati_ è un modo in cui si possono organizzare i dati di un programma.

Si possono definire in due modi: **elementari** e **astratte**.

### Strutture dati elementari

Le strutture _elementari_  dipendono strettamente dal modo in cui vengono memorizzati i dati.

> **Array** e **liste** sono strutture dati elementari: sono definite dicendo come sono memorizzati i dati, rispettivamente, in celle contigue di memoria e da una serie di nodi con un valore e che puntano al successivo.

### Strutture dati astratte

Le strutture _astratte_ sono separate dal modo in cui vengono memorizzati i dati, sono più ad alto livello, e si definiscono descrivendo le **proprietà** della struttura e i **metodi** che su di essa possono essere effettuate.

> Una _classe_ in un qualsiasi linguaggio di programmazione è una struttura dati astratta.

> Una _pila_ astratta:
> - memorizza dati tutti dello stesso tipo
> - `pop()`, estrae dalla pila l'ultimo valore inserito
> - `push(val)`, aggiunge alla pila un valore
> - `top()`, permette di vedere l'ultimo valore inserito nella pila
> - `vuota()`, dice se la pila è vuota oppure no.
