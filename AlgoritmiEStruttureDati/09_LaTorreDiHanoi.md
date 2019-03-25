# La Torre di Hanoi

## Algoritmo

```python
def hanoi(dischi, partenza, arrivo, appoggio):
    # Caso base
    if dischi == 1:
        move(partenza, arrivo)
    # Caso ricorsivo
    else:
        hanoi(dischi - 1, partenza, appoggio, arrivo)
        move(partenza, arrivo)
        hanoi(dischi - 1, appoggio, arrivo, partenza)
```

## Analisi

### Mosse richieste

#### Formulazione di ipotesi

Se è un solo disco, richiede `1` mosse.  
Se sono due dischi, richiede `2+1=3` mosse.  
Se sono tre dischi, richiede `3*2+1=7` mosse.

Possiamo quindi dire che richiede `2*M(n-1)+1` mosse per qualsiasi `n != 1`.

Dobbiamo ora trovare una formula chiusa che esprima questa formula definita per ricorrenza.

`2*M(n-1)+1 = 2*(2*M(n-2)+1)+1 = \dots = 2*(2*(2*(M(n-3))+4+2+1 = \sum_{i=0}^{n-1} (2^i) = 2^{n} - 1 = O(2^n)`

#### Dimostrazione per induzione

##### Caso base

`M(1) = 2^1 - 1 = 1`

##### Ipotesi induttiva

`M(n-1) = 2^{n-1} - 1 \implies M(n) = 2^n - 1`

`1+2^(2^{n-1} - 1) = 2^n - 1`

##### Risultati

E' valida per ogni n.

#### Conclusione

- Upper bound: **O(2^n)**
