# Coda (Queue)

Una _coda_ è come una pila, ma segue la strategia **First In, First Out** (il primo inserito sarà il primo a essere estratto).

## Proprietà

- I dati vi possono essere aggiunti solo tramite il **metodo `enqueue()`**
- I dati possono essere estratti solo tramite il **metodo `dequeue()`**
  - Verranno restituiti i valori inseriti secondo la strategia **First In, First Out** (il primo inserito sarà il primo a essere estratto).

> Hai presente quando fai la fila per pagare al supermercato? Beh, è quello, però non si possono superare le altre persone in nessun modo.

## Metodi

```python
class Queue:
    def __init__(self): "Crea una nuova coda."
    def is_empty(self) -> bool: "Restituisce vero se la coda è vuota."
    def enqueue(self, data): "Aggiunge un dato alla coda."
    def first(self) -> ...: "Restituisce il primo dato della coda."
    def dequeue(self) -> ...: "Restituisce il primo dato della coda e lo rimuove."
```

## Implementazione tramite lista

Posso implementare la coda con una lista, ma per realizzare l'implementazione più efficiente devo tenere anche un puntatore all'ultimo elemento della coda, in modo da non doverla scorrere ogni volta che voglio effettuare un'operazione.

Chiamiamo i due puntatori `head` e `tail` rispettivamente.

## Visualizzazione

[visualgo.net](https://visualgo.net/en/list)