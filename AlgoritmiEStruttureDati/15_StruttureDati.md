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
- inserimentoInTesta(`T valore`)
- inserimentoDopoDato(`T valore`, `Nodo<T>& dopo`)
- inserimentoInPosI(`T valore`, `int posizioni`)
- cancellazioneDato(`Nodo<T>& cancellare`)
