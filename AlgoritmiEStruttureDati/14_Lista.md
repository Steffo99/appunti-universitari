# Lista

Una _lista_ è una sequenza di dati immagazzinata in blocchi di memoria qualsiasi.

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
