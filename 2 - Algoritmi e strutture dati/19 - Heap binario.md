# Heap binario

L'_heap binario_ è un **albero binario bilanciato a sinistra**.

## Proprietà

- _Proprietà strutturale_:
    - L'albero è **perfettamente bilanciato** in tutti i livelli tranne l'ultimo
    - Nell'ultimo livello, le foglie occupano le **posizioni più a sinistra** possibili
- _Proprietà di ordinamento_:
    - La chiave di un qualsiasi nodo è **più piccola** di tutte quelle dei nodi **del suo sottoalbero**

## Metodi

```python
class Heap:
    def __init__(self, H): ...
    def _heapify_ancestors(self, i): "Ripristina le proprietà dell'heap per il nodo all'indice specificato e i suoi genitori."
    def minimum(self): "Restituisce la chiave con il valore minimo in H."
    def decrease_value(self, index, new_value): "Diminuisce il valore della chiave all'indice index a new_value."
    def insert(self, value): "Inserisci un nuovo valore nell'albero."
    def _heapify_children(self, i): "Ripristina le proprietà dell'heap per il nodo all'indice specificato e i suoi figli."
    def pop(self): "Restituisce la chiave con il valore minimo, e la elimina."
    def from_list(l): "Crea un heap da una lista."
```

## Implementazione con un array

Possiamo implementare l'albero utilizzando un array con le chiavi dell'albero memorizzate nell'ordine _breadth-first_.

L'indice del figlio sinistro può essere trovato a `2i+1`, mentre l'indice del figlio sinistro può essere trovato a `2i+2`; il genitore è a `i//2-1`.

### Pseudocodice

```python
class Heap:
    def __init__(self, size):
        self.array = Array(size)  # Il tipo Array non esiste; consideriamolo pseudocodice
        self.next_value = 0

    def _heapify_ancestors(self, index)
        """Ripristina le proprietà dell'heap per il nodo all'indice specificato e i suoi genitori.

        Costo:
            O(log n)"""
        # Trovo l'indice del genitore
        parent = index // 2 - 1
        # Controllo se viene mantenuta la proprietà di ordinamento dell'heap
        if self.array[index] < self.array[parent]:
            # Scambio i valori dei due nodi
            self.array[index], self.array[parent] = self.array[parent], self.array[index]
            # Faccio la stessa cosa con il genitore
            self._heapify(parent)
        

    def minimum(self):
        """Restituisce la chiave con il valore minimo in H.
        
        Costo:
            O(1)"""
        return self.array[0]

    def decrease_value(self, index, new_value):
        """Diminuisce il valore della chiave all'indice index a new_value.
        
        Costo:
            O(log n)"""
        # Diminuisco il valore del nodo
        self.array[index] = new_value
        # Aggiorno l'heap 
        self._heapify(index)

    def insert(self, value):
        """Inserisci un nuovo valore nell'albero.
        
        Costo:
            O(log n)"""
        # Trovo l'indice in cui inserire il valore
        index = self.next_index 
        # Aggiungo il valore in fondo
        self.array[index] = value
        # Aggiorno l'heap
        self._heapify(index)

    def _heapify_children(self, index):
        """Ripristina le proprietà dell'heap per il nodo all'indice specificato e i suoi figli.

        Costo:
            O(log n)"""
        # Trovo l'indice dei figli
        left = index * 2 + 1
        right = index * 2 + 2
        # Mi assicuro che i figli esistano
        try:
            # Guardo quale dei figli è maggiore
            if self.array[left] > self.array[right]:
                # Scambio i valori
                self.array[left], self.array[index] = self.array[index], self.array[left]
                # Ripeto la procedura sul figlio modificato
                self._heapify_children(left)
            else:
                # Scambio i valori
                self.array[right], self.array[index] = self.array[index], self.array[right]
                # Ripeto la procedura sul figlio modificato
                self._heapify_children(left)
        except IndexError:
            # La foglia non ha figli: ho finito!
            return

    def pop(self):
        """Restituisce la chiave con il valore minimo, e la elimina.
        
        Costo:
            O(log n)"""
        # Mi salvo il valore della radice
        value = self.array[0]
        # Sostituisco la radice con l'ultima foglia a destra
        self.array[0], self.array[self.next_value] = self.array[self.next_value], self.array[0]
        ### Non bisognerebbe eliminare la foglia...?
        # Riordino l'heap
        self._heapify_children(0)
        return value

    @staticmethod
    def from_list(l):
        """Crea un heap da una lista.
        
        Costo:
            O(n log n), ma si può abbassare"""
        heap = Heap(len(l)))
        heap.array = Array.from_list(l)  # Pseudocodice
        heap.next_value = len(l)
        # Cominciamo a riordinare l'heap dalla fine, in modo che rispetti le proprietà
        for index in range(heap.next_value, 0, -1):
            heap._heapify_children(index)
```

## Visualizzazione

[visualgo.net](https://visualgo.net/en/heap)
