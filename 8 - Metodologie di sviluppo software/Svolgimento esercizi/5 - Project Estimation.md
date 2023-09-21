## Dati

- Progetto di medie dimensioni
- $60000$ [[non-commenting source statement]]
	- ($60\ kNCSS$)
- Requisiti rigidi
	- Richiede un database
- Qualsiasi linguaggio di programmazione
	- Usa un frontend web
- Esiste già un altro progetto simile

## Esercizio 1 - CoCoMo

### Premessa
 
> Fare una stima di un progetto in questo modo, selezionando parametri arbitrariamente, senza tararli su vecchi progetti fatti dallo stesso gruppo, ***non ha assolutamente senso***!
>
> Però è esattamente quello che chiede l'esercizio. *Vai a capire la logica di sta cosa...*

### Considerazioni iniziali

Consideriamo il progetto **semi-detached**, in quanto viene specificato che esso è di medie dimensioni.

### Basic model


$$
K_m = (3.0 \times 60)^{1.12} = 335.7\ person{-}months
$$

$$
t_d = (2.5 \times 335.7)^{0.35} = 10.6\ months
$$


### Intermediate model

#### Calcolo iniziale

$$
K_n = (3.0 \times 60)^{1.12} = 335.7\ person{-}months
$$

$$
t_d = (2.5 \times 335.7)^{0.35} = 10.6\ months
$$

#### Determinazione del coefficiente tramite [[../../cost driver|cost drivers]]

| Cost driver                                              | State       | Value  |
|--------------------------------------------------------|-------------:|--------|
| `RELY` · Required software reliability                   | **High**    | $1.15$ |
| `DATA` · Size of application database                    | **Nominal** | $1.00$ |
| `CPLX` · Complexity of the product                       | **Nominal** | $1.00$ |
| `TIME` · Run-time performance constraints                | **High**    | $1.00$ |
| `STOR` · Storage constraints                             | **Nominal** | $1.00$ |
| `VIRT` · Volatility of the virtual machine environment   | **Nominal** | $1.00$ |
| `TURN` · Required turnabout time                         | **Nominal** | $1.00$ |
| `ACAP` · Analyst capability                              | **Nominal** | $1.00$ |
| `AEXP` · Applications experience                         | **High**    | $0.91$ |
| `PCAP` · Software engineering and programming capability | **High**    | $0.86$ |
| `VEXP` · Virtual machine experience                      | **Nominal** | $1.00$ |
| `LEXP` · Programming language experience                 | **High**    | $0.95$ |
| `MODT` · Application of software engineering methods     | **Nominal** | $1.00$ |
| `TOOL` · Use of software tools                           | **High**    | $0.91$ |
| `SCED` · Required development schedule                   | **Nominal** | $1.00$ |

$$
\Pi_{c_i} = 1.15 \times 0.91 \times 0.86 \times 0.95 \times 0.91 = 0.78
$$

#### Calcolo finale

$$
K_m = 335.7 \times 0.78 = 261.8\ person{-}months
$$

## Esercizio 2 - Putnam

> Non si capisce niente e tanto non c'è all'esame, quindi l'ho saltato.

## Esercizio 3 - PERT

| Activity | Precedence | Optimistic $t_o$ | Most likely $t_m$ | Pessimistic $t_p$ |
|---------:|-----------:|-----------------:|------------------:|------------------:|
|        A |            |                $2$ |                 $3$ |                 $4$ |
|        B |            |                $4$ |                 $5$ |                $12$ |
|        C |          A |                $2$ |                 $2$ |                 $3$ |
|        D |       B, C |                $3$ |                 $5$ |                 $7$ |
|        E |          D |                $3$ |                 $3$ |                 $9$ |
|        F |          E |                $3$ |                 $3$ |                 $3$ |
|        G |       B, C |                $4$ |                $10$ |                $10$ |
|        H |       F, G |                $2$ |                 $3$ |                 $4$ |

> Non ho fatto il diagramma e i calcoli per mancanza di tempo e voglia.

