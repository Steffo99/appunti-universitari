> TODO: Reformat this.

# Albero (Tree)

Un _albero radicato_ è una struttura per organizzare i dati in una struttura non-lineare.

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
