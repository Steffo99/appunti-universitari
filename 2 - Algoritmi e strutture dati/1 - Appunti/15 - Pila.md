# Pila (Stack)

Una _pila_ è una struttura dati contenente **valori omogenei**.

## Proprietà

- I dati vi possono essere aggiunti solo tramite il **metodo `push()`**
- I dati possono essere estratti solo tramite il **metodo `pop()`**
    - Verranno restituiti i valori inseriti secondo la strategia **Last In, First Out** (l'ultimo inserito sarà il primo a essere estratto).

> Ci si può immaginare una pila di libri, da cui si può solo prendere un libro alla volta, quello più in alto.

## Metodi

```python
class Stack:
    def __init__(self): "Crea una nuova pila."
    def is_empty(self) -> bool: "Restituisce vero se la pila è vuota."
    def push(self, data): "Aggiunge un dato alla pila."
    def top(self) -> ...: "Restituisce il primo dato della pila."
    def pop(self) -> ...: "Restituisce il primo dato della pila e lo rimuove."
```

## Implementazione tramite lista

Utilizzando una lista possiamo realizzare una pila!

La direzione dei puntatori sarà dall'ultimo al primo, che non punterà più a nessuno.

Il costo di tutti i metodi è `Θ(1)`!

## Visualizzazione

[visualgo.net](https://visualgo.net/en/list)