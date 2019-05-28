# Array

Un _array_ è sequenza di dati di **lunghezza conosciuta**, tutti dello **stesso tipo** e di una **dimensione fissa**, immagazzinata in **blocchi di memoria contigui**.

## Proprietà

- E' possibile accedere a tutti i blocchi di memoria conoscendo la loro **posizione relativa al primo** elemento.

## Metodi

```python
class Array:
    def __init__(self, size, type=int): "Crea un array di dimensione size di elementi di tipo int."
    def __getitem__(self, index): "Restituisci il valore alla posizione index."
    def __setitem__(self, index, value): "Cambia il valore alla posizione index."
```

### Costo computazionale

Tutte le operazioni su un array sono in **accesso immediato `O(1)`**!
