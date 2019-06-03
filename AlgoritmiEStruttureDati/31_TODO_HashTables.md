# Tabelle hash

Array che va da `0` a `m-1` che archivia coppie (chiave, valore).

L'insieme delle possibili chiavi è detto _universo_ o `U`.

## Risoluzione collisioni

### Lista di trabocco

Invece che archiviare coppie, archivio puntatori alla testa di una lista: quando c'è una collisione semplicemente aggiungo un nuovo elemento in fondo alla lista, e quando riprendo un elemento dalla lista guardo l'intera lista finchè non trovo un elemento che mi serve.

In media, ci saranno in ogni cella `valori_inseriti / dimensione_tabella` valori.

Pertanto, possiamo dire che `n \in O(m)`.

### Indirizzamento aperto

Se due chiavi andrebbero mappate nella stessa cella, mappa la seconda in un altro indirizzo vuoto dell'array.

L'altro indirizzo potrebbe essere quello successivo, o uno casuale.

> Python usa indirizzamento pseudorandom.
