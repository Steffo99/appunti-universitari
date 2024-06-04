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

## Implementazione degli alberi

Possiamo scegliere se usare una rappresentazione con array o con nodi e puntatori: ognuna ha vantaggi e svantaggi diversi.

### Implementazione tramite array

E' suggerito se l'albero è regolare; più è simile a un albero d-ario completo, meglio è.

### Implementazione tramite nodi e puntatori

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
