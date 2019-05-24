# Coda (Queue)

Una _coda_ è come una pila, ma segue la strategia **First In, First Out** (il primo inserito sarà il primo a essere estratto).

Ha i seguenti metodi:
- nuovaCoda()
- eVuota() -> `bool`
- enqueue(`T dato`)
- first()
- dequeue()

## Implementazione tramite lista

Posso implementare la coda con una lista, ma per realizzare l'implementazione più efficiente devo tenere anche un puntatore all'ultimo elemento della coda, in modo da non doverla scorrere ogni volta che voglio effettuare un'operazione.

Chiamiamo i due puntatori `head` e `tail` rispettivamente.
