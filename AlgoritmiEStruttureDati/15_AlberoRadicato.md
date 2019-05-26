# Albero radicato

Un _albero radicato_ è una struttura dati di **natura ricorsiva** che organizza i dati in maniera **non-lineare**.

## Proprietà

- Ogni nodo dell'albero ha un **unico genitore**: `∀ (padre, figlio), (padre' figlio) ∈ E \implies padre = padre'`
- Ogni nodo dell'albero può avere **un numero qualsiasi di figli**.
<!---->
- I **nodi superiori al padre** vengono chiamati _antenati_.
- I **nodi inferiori ai figli** vengono chiamati _discendenti_.
<!---->
- Nodi **senza padre** sono detti _radice_: `\notexists (padre, radice) ∈ E`
- Nodi **con padre e figli** sono detti _rami_ o interni.
- Nodi **senza figli** sono detti _foglie_.
<!---->
- La **distanza** tra il nodo radice e i suoi discendenti è detta _livello_:
  - I figli immediati sono di livello 1.
  - I "nipoti" (figli dei figli) sono di livello 2.
  - I figli dei nipoti sono livello 3.
  - E così via.
- Il **livello massimo** all'interno di un albero è detto _altezza_, _profondità_ oppure _h_, ed è sempre `1 ≤ h ≤ n-1`.
<!---->
- Un albero ha sempre `n-1` archi.

## Alberi particolari

### Alberi `d`-ari

Un albero _`d`-ario_ è un particolare tipo di albero che **limita il numero massimo di figli di un nodo** a `d`.

> Un albero _binario_ può avere **massimo 2 figli** per ogni nodo; un albero _ternario_ ne può avere **3**; un albero _`17`-ario_ ne potrà avere **17**

#### Alberi completi

Un albero `d`-ario si dice _completo_ se **tutti i nodi hanno 0 o `d` figli**, e mai una numero in mezzo.

#### Alberi bilanciati

Un albero `d`-ario si dice _bilanciato_ se **tutti i livelli eccetto l'ultimo** hanno il numero massimo di figli.

#### Alberi perfettamente bilanciati

Un albero `d`-ario si dice _perfettamente bilanciato_ se **tutti i livelli incluso l'ultimo** hanno il numero massimo di figli.

##### Particolarità degli alberi binari perfettamente bilanciati

Si può dimostrare per induzione che:
- Hanno sempre `2^h` foglie.
- Hanno sempre `2^{h+1}-1` (`\sum_i=0^n 2^i`) nodi.
- L'altezza è in `Θ(log n)`.

## Ordine di visita

Possiamo visitare i nodi di un albero in **tanti ordini diversi**, in base all'uso che vogliamo fare dei valori dei nodi.

### Depth-First Search (DFS)

La _depth-first search_ visita **tutti i sottoalberi di un figlio** prima di passare ad un altro; essa sfrutta la natura ricorsiva degli alberi.

#### DFS previsita (preorder)

La _DFS previsita_ visita la **radice per prima**, poi tutti i sottoalberi formati dai figli uno dopo l'altro.

> 1. __Visita radice__
> 2. DFS_preorder(figlio1)
> 3. DFS_preorder(figlio2)

##### Postvisita (postorder)

Visita gli alberi, poi la radice.

> 1. Preorder(figlio1)
> 2. Preorder(figlio2)
> 3. Visita: Radice

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
