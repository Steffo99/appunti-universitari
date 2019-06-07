# Problema dello zaino

Il problema dello zaino è un problema _pseudo-trattabile_: non abbiamo dimostrazioni di se sia trattabile o intrattabile.

## Descrizione

> Sei un ladro, e devi mettere **più refurtiva possibile** nello zaino per scappare.  
> Lo zaino può portare **al massimo `dim` kili**.
>
> **Quali** (e quanti) oggetti scegli?

| Input | Output |
|-------|--------|
| `dim`ensione_zaino, `n`umero_oggetti, `oggetto.peso`, `oggetto.valore` | `profitto_massimo` |

## Categorie

### Problema con ripetizione

Puoi prendere **tutte le copie che vuoi** di un oggetto.

#### Soluzione

`K(dim)` è il valore massimo ottenibile con uno zaino di capacità `dim`.

> Se `i` appartenesse alla soluzione ottima, allora `K(dim) = i.valore + K(dim - i.peso)`...

Possiamo dire che `K(dim) = max(i.valore + K(dim - i.peso))`.

Inoltre, `K(0) = 0`.

Ci salviamo tutte le soluzioni da `K(0)` a `K(dim)`, e le usiamo per calcolare il massimo in seguito.

Calcolare `K(dim)` avrà allora un costo di `O(n * dim)`:
- `n`, perchè trovare il massimo è un'operazione lineare
- `dim`, perchè `dim` sono tutti i casi tra i quali devo andare a provare

Il costo computazionale, allora, è in `O(n * dim)`. 

Però, il **tempo richiesto** dal nostro algoritmo dipende non dalla lunghezza dell'input, bensì dal **valore numerico** di `dim`, che corrisponde alla dimensione dell'array delle soluzioni.  
Allora, si dice che l'algoritmo è in **tempo _pseudo-polinomiale_**.

### Problema senza ripetizione

Si può prendere **ogni oggetto una volta sola**.

#### Soluzione _bruteforce_

Scelgo se prendere o no l'item 1.

Si creano due percorsi:
- Non prendo l'oggetto: `valore = 0, peso = 0`
- Prendo l'oggetto: `valore = oggetto.valore, peso = oggetto.peso`

Continuo a creare percorsi, creando una specie di albero binario.

Se a un certo punto vedo che `valore = x, peso = K` e `valore < x, peso = K`, allora posso escludere automaticamente tutto il sottoalbero destro, perchè non può essere migliore del sinistro: allora, sarò riuscito a ridurre il numero dei casi rispetto alla ricorsione.

### Problema in due variabili

`K(j, w)` = massimo valore ottenibile con uno zaino di capacità `w` scegliendo gli item da `1` a `j`.

Non possiamo più applicare la soluzione bruteforce, perchè abbiamo due variabili, `j` e `w`.

Allora, prendo l'elemento `j`. Esso può essere o non essere nella soluzione: mi calcolo entrambe le alternative, e mi tengo l'alternativa dal valore più alto.

Se `j` non è nella soluzione, il risultato diventerà `K(j-1, w)`; se invece è nella soluzione, il risultato sarà `j.valore + K(j-1, w-j.peso)`.

In pratica, prendiamo

```latex
K(j, w) = max
\begin{cases}
    V_j + K(j-1, w-w_j)
    K(j-1, w)
\end{cases}
```

Costruisco allora una matrice con `j` su un asse e `w` sull'altro.  
Riempio le caselle con il valore di `K(j, w)`.  
Nella casella con `K(j, w)` avremo la soluzione ottima.

Il tempo necessario per riempire tutte le caselle è nuovamente `O(n * w)`, ancora **pseudopolinomiale**.

Per sapere che oggetti ho messo o no devo tenere traccia in qualche modo della catena del calcolo, usando, ad esempio, una pila.