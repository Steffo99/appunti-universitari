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

Il costo di tutti i metodi è `Θ(1)`!

### Coda (Queue)

Vedi la pila, ma segue la strategia **First in, first out** (il primo inserito sarà il primo a essere estratto).

Ha i seguenti metodi:
- nuovaCoda()
- eVuota() -> `bool`
- enqueue(`T dato`)
- first()
- dequeue()

#### Implementazione tramite lista

Posso implementare la coda con una lista, ma per realizzare l'implementazione più efficiente devo tenere anche un puntatore all'ultimo elemento della coda, in modo da non doverla scorrere ogni volta che voglio effettuare un'operazione.

Chiamiamo i due puntatori `head` e `tail` rispettivamente.

## Albero radicato (Tree)

Un albero radicato è una struttura per organizzare i dati in una struttura non-lineare.

Ogni elemento dell'albero ha un genitore, ma può avere tanti figli!

I nodi superiori al padre vengono chiamati _antenati_, mentre quelli inferiori ai figli vengono chiamati _discendenti_.

Un nodo che non ha padre è detto _radice_, un nodo che non ha figli è detto _foglia_, un nodo che ha padre e figli è un _nodo interno_.

`∀ (padre, figlio), (padre' figlio) ∈ E \implies padre = padre'`

`\notexists (padre, radice) ∈ E`

Hanno una **natura ricorsiva**: un albero qualunque posso vederlo come una radice con tanti alberi come figli!

La **distanza** tra il nodo radice e i suoi discendenti è detta _livello_: i figli immediati sono livello 1, i loro figli livello 2, etc.; il livello massimo è detto _altezza_, _profondità_ oppure _livello h_, ed è `1 ≤ h ≤ n-1`.

Un albero ha sempre `n-1` archi.

Gli alberi possono essere _`d`-ari_: ogni nodo di questi alberi può avere massimo `d` figli; si dicono _completi_ se tutti i nodi hanno 0 o `d` figli, e mai una numero in mezzo.

E' _bilanciato_ se le foglie sono quasi tutte alla stessa altezza.

### Albero binario completo perfettamente bilanciato

Ha sempre `2^h` foglie e `2^{h+1}-1` (`\sum_i=0^n 2^i`) nodi; è dimostrabile per induzione!

L'altezza è `Θ(log n)`.

### Ordine di visita

#### Depth first search (DFS)

##### Previsita (preorder)

Visita prima la radice, poi tutti i sotto alberi uno dopo l'altro.

1. **V:** Radice
2. Preorder(figlio1)
3. Preorder(figlio2)
4. ...

##### Postvisita (postorder)

Visita gli alberi, poi la radice.

1. Preorder(figlio1)
2. Preorder(figlio2)
3. ...
4. **V:** Radice

##### Invisita (inorder)

Visita la radice... a metà degli alberi.

1. Preorder(figlio1)
2. **V:** Radice
3. Preorder(figlio2)
4. ...


###### Dimostrazione per induzione

`d` è il costo fuori dalla ricorsione.

```latex
T(n) ≤ 2dn + d
```

**Caso base:**
```latex
T(0) ≤ d\\
0 ≤ d
```

**Passo induttivo:**
```latex
T(n) ≤ 2dn + d
```
Sappiamo che i nodi in uno dei due sotto alberi sono `0 ≤ K ≤ n-1`, mentre nell'altro `n - K - 1`.

Allora, abbiamo che:
```latex
T(n) ≤ T(K) + T(n - K - 1) + d ≤ 2dK + d + 2d(n - K - 1) + d = 2dK + 2d + 2dn - 2dK - 2d = 2dn
```

#### Breadth first search (BFS)

Visita ogni livello.

1. **V:** Radice
2. **V:** Livello 1
3. **V:** Livello 2
4. ...

Si implementa facilmente con una coda.

```python
def bfs(radice):
    c = Queue()
    c.enqueue(radice)
    while not c.is_empty():
        nodo = c.dequeue()
        print(nodo)
        for figlio in nodo.figli:
            nodo.enqueue(figlio)
```

### Implementazione degli alberi

Anche qui possiamo scegliere se usare una rappresentazione con array o con nodi e puntatori.

#### Vettore

E' suggerito se l'albero è regolare; più è simile a un albero d-ario completo, meglio è.

#### Nodi e puntatori

Più adatta ad alberi irregolari.

Se l'albero è regolare, creiamo il numero esatto di campi:

- Valore
- Figlio1
- Figlio2
- _Opzionale:_ Padre

Se un albero è irregolare, creiamo una specie di lista:

- Valore
- Primo figlio
- Prossimo fratello
- _Opzionale:_ Padre
