# Pila (Stack)

Una _pila_ è una struttura dati contenente **valori omogenei** (dello stesso tipo).

I dati vi possono essere aggiunti tramite il **metodo `push()`**, e possono essere estratti con il **metodo `pop()`**; verranno restituiti i valori inseriti secondo la strategia **Last In, First Out** (l'ultimo inserito sarà il primo a essere estratto).

> Ci si può immaginare una pila di libri, da cui si può solo prendere un libro alla volta, quello più in alto.

Ha i seguenti metodi:
- nuovaPila()
- eVuota() -> `bool`
- push(`T dato`)
- top()
- pop()

## Implementazione tramite lista

Utilizzando una lista possiamo realizzare una pila!

La direzione dei puntatori sarà dall'ultimo al primo, che non punterà più a nessuno.

Il costo di tutti i metodi è `Θ(1)`!
