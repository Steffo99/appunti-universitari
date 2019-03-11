# Progettare algoritmi

Per progettare un algoritmo, abbiamo bisogno di sapere per quale modello computazionale dobbiamo svilupparlo, e abbiamo bisogno di diversi strumenti per farlo (diagrammi di flusso, pseudocodice).

## Il modello RAM

Il modello attualmente in uso è il _modello RAM_: 

- Ogni cella di memoria può contenere **un dato** oppure **una istruzione**.
- Il **tempo di accesso** alle celle è **costante** per tutte le celle.
- La **memoria** principale è **infinita**.
- Si ha **un solo processore**.
- `TODO`

## Strutture dati

Le strutture dati sono i modi in cui possono essere organizzati i dati in un programma.

Si dividono in due tipi, **elementari** e **astratte**.

### Strutture dati elementari

Le strutture _elementari_ sono quelle che dipendono strettamente dal modo in cui vengono memorizzati i dati.

> **Liste**, **pile**, **code**, **array** sono tutte strutture dati elementari.

### Strutture dati astratte

Le strutture _astratte_ sono separate dai dati di un programma, più ad alto livello, e si definiscono descrivendo le **proprietà** dei dati nella struttura e le **operazioni** che su di essa possono essere effettuate.

> Una **classe** in un qualsiasi linguaggio di programmazione è una struttura dati astratta.

E' sempre possibile descrivere in maniera astratta una struttura dati elementare.

> Una **pila** astratta:
> - memorizza dati dello stesso tipo
> - `pop()`, estrae l'ultimo valore inserito nella pila
> - `push(val)`, aggiunge un valore in cima alla pila
