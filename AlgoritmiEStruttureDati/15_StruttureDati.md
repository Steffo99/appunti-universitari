# Strutture dati

## Sequenza lineare

### Array

Una sequenza di dati **di lunghezza conosciuta**, tutti dello stesso tipo e di una dimensione fissa, immagazzinata in **blocchi di memoria contigui**.

Posso accedere ai vari blocchi di memoria conoscendo la loro _posizione relativa_ al primo elemento.

Effettuo, dunque, un _accesso diretto_, perchè posso calcolare la posizione del blocco in `O(1)`.

### Liste

Una sequenza di dati immagazzinata in blocchi di memoria qualsiasi.

Ogni dato ha anche un **riferimento** alla collocazione di memoria **successivo** (un puntatore).

Per raggiungere l'`n`-esimo elemento, devo scorrere tutti gli elementi prima di esso in `O(n)`: è dunque un _accesso sequenziale_.

All'interno di un "nodo" di una lista è presente:
- il valore del dato di tipo `T`
- il riferimento al prossimo dato `T&`

Ha i seguenti metodi:
- nuovaLista() -> `Nodo<T>&`
- eVuota() -> `bool`
- ePiena() -> `bool`
- inserimentoInTesta(`T valore`) -> `Nodo<T>&`
- inserimentoDopoDato(`T valore`, `Nodo<T>& dopo`)
- inserimentoInPosI(`T valore`, `int posizioni`)
- cancellazioneDato(`Nodo<T>& cancellare`)
- avanza(`int posizioni`)
- trova(`Nodo<T>& nodo`)
- precedente(`Nodo<T>& inizio`)

## Pila e coda

### Pila (Stack)

La pila è una struttura dati contenente valori _omogenei_ (dello stesso tipo).

I dati vi possono essere aggiunti tramite il metodo `push()`, e possono essere estratti con il metodo `pop()`; verranno restituiti i valori inseriti secondo la strategia **Last in, first out** (l'ultimo inserito sarà il primo a essere estratto).

> Ci si può immaginare una pila di libri, da cui si può solo prendere un libro alla volta, quello più in alto.

Ha i seguenti metodi:
- nuovaPila()
- eVuota() -> `bool`
- push(`T dato`)
- top()
- pop()

#### Implementazione tramite lista

Utilizzando una lista possiamo realizzare una pila!

La direzione dei puntatori sarà dall'ultimo al primo, che non punterà più a nessuno.
