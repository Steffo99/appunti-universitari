# Notazione asintotica

La notazione asintotica è un sistema per stimare il costo di un algoritmo complesso in modo semplice.

Ci permette di confrontare velocemente il caso peggiore degli algoritmi.

Per il **tempo**, in particolare, consideriamo il rapporto tra il numero di operazioni nel caso peggiore e la dimensione del suo input.

## Upper bound

La notazione asintotica è una **stima**. Possiamo dare quindi un _upper bound_, il limite superiore, un costo che siamo sicuri che non verrà _mai_ superato dall'algoritmo.

Il nostro obiettivo è trovare l'upper bound più preciso possibile per la nostra funzione, in modo da avere una stima abbastanza precisa.

### O()

> "O grande"

Date due funzioni `f(n) : N -> R` e `g(n) : N -> R`, diremo che `f(n) ∈ O(g(n))` se e soltanto se `∃ c > 0, n_0 ≥ 0` tali che `∀ n ≥ 0, f(n) ≤ c * g(n)`

Quando una funzione è _O grande_ di un altra, significa che asintoticamente la funzione in O grande è sempre maggiore di quella che sta venendo stimata.

> **Ipotesi**  
> `f(n) = 2n² + 3n + 6`  
> `g(n) = n²`
>
> **Tesi**  
> `f(n) ∈ O(n²)`.
>
> **Svolgimento**  
> Scrivo una disequazione, lasciando intatto il termine noto:  
> `2n² + 3n + 6 ≤ 2n² + 3n² + 6`  
> `n² ≤ 2n² + 3n² + n² = 6n²` per `n ≥ 3`  
> Sappiamo, allora, che `2n² + 3n + 6 ≤ 6n²`.

#### Espressioni di O()

| Espressione O() | Nome |
--------------------------
| `O(1)` | Costante |
| `O(log log n)` | loglog |
| `O(log n)` | Logaritmica |
| `O(\sqrt^c{n}\quad per\ c > 1` | Sublineare |
| `O(n)` | Lineare |
| `O(n log n)` | nlogn |
| `O(n²)` | Quadratica |
| `O(n³)` | Cubica |
| `O(n^k)\quad per\ k \geq 1` | Polinomiale |
| `O(a^n)\quad per\ a > 1` | Esponenziale |
| `O(n!)` | Fattoriale |

Notiamo che, se un certo algoritmo appartiene a una certa espressione, appartiene anche a quelli dell'ordine più alto; ad esempio, se `A \in O(n)`, allora anche `A \in O(n!)`.

##### Polinomiale

Spesso, il tempo richiesto da una funzione è O grande di un polinomio di grado K, ovvero `f(n) ∈ O(n^k)`.

> **Come dimostriamo che il tempo è uguale al grado massimo del polinomio?**  
> Per `n > 0 \and 0 \leq i \leq k`:  
> `a_k n^k + a_{k-1} n^{k-1} + \dots + a_1 n + a_0 \leq`
> `\leq |a_k| n^k + |a_{k-1}| n^k + \dots + |a_1| n^k + |a_0| n^k = (|a_k| + |a_{k-1}| + \dots + |a_1| + |a_0|) n^k`

#### Proprietà di O()

1. `f(n) \in O(g(n)) \implies \forall a > 0, a * f(n) \in O(g(n))`.
2. `f(n) \in O(g(n)), d(n) \in O(h(n)) \implies f(n) + d(n) \in O(g(n) + h(n)) \implies O(max\{g(n), h(n)\})`
3. `f(n) \in O(g(n)), d(n) \in O(h(n)) \implies f(n) * d(n) \in O(g(n) * h(n))`
4. nonsense?

## Lower bound

Possiamo anche stimare il _lower bound_, il limite inferiore: il numero minimo di operazioni che viene effettuato nel caso migliore.

> Omega()

### Omega()

Diremo che `f(n) \in \omega(g(n))` se e solo se `\exists c > 0, n_0 \geq 0 : \forall n \geq n_0 f(n) \geq c * g(n)`.

#### Espressioni di Omega()

| Espressione Omega() | Nome |
--------------------------
| `Omega(1)` | Costante |
| `Omega(log log n)` | loglog |
| `Omega(log n)` | Logaritmica |
| `Omega(\sqrt^c{n}\quad per\ c > 1` | Sublineare |
| `Omega(n)` | Lineare |
| `Omega(n log n)` | nlogn |
| `Omega(n²)` | Quadratica |
| `Omega(n³)` | Cubica |
| `Omega(n^k)\quad per\ k \geq 1` | Polinomiale |
| `Omega(a^n)\quad per\ a > 1` | Esponenziale |
| `Omega(n!)` | Fattoriale |

## Tight bound

Se notiamo che _upper_ e _lower bound_ coincidono, allora otteniamo un **tight bound**: sappiamo che il costo dell'algoritmo è sempre stimato da esso.

> Theta()

Blah blah blah `\exists c_1, c_2 > 0, n_0 \geq 0 : \forall n \geq n_0, c_1 * g(n) \leq f(n) \leq c_2 * g(n)`

#### Espressioni di Theta()

| Espressione Omega() | Nome |
--------------------------
| `Theta(1)` | Costante |
| `Theta(log log n)` | loglog |
| `Theta(log n)` | Logaritmica |
| `Theta(\sqrt^c{n}\quad per\ c > 1` | Sublineare |
| `Theta(n)` | Lineare |
| `Theta(n log n)` | nlogn |
| `Theta(n²)` | Quadratica |
| `Theta(n³)` | Cubica |
| `Theta(n^k)\quad per\ k \geq 1` | Polinomiale |
| `Theta(a^n)\quad per\ a > 1` | Esponenziale |
| `Theta(n!)` | Fattoriale |

## Problemi algoritmici

Un problema algoritmico è un problema matematico che si vuole provare a risolvere con un algoritmo.

> Dati 10 numeri, voglio sapere se sono in ordine crescente oppure no.

### Problema trattabile

Per definire un problema algoritmico **trattabile**, il nostro problema deve avere _almeno un algoritmo_ con un upper bound _polinomiale_; il tempo impiegato da un computer rimane ragionevole.

### Problema intrattabile

Se un problema non è _trattabile_, si dice che è **intrattabile**.

### Problema irrisolvibile

Se non esistono algoritmi per risolvere un problema, allora questo si dice **irrisolvibile**.

> Dato un algoritmo con certi input, riusciamo a capire con un algoritmo se la sua esecuzione termina o no?

### Problemi in NP?

Esistono anche tanti problemi di cui non si è ancora scoperto un modo per dimostrare se essi siano trattabili o intrattabili.

### Upper e lower bound di problemi

Si può anche trovare un _upper bound_ e un _lower bound_ per un problema, ma bisogna generalizzare di più.

L'**upper bound di un problema** è il minimo upper bound di tutti gli algoritmi che lo risolvono; deve esistere almeno un algoritmo che lo risolva che abbia lo stesso _upper bound_. E' praticamente il tempo migliore per risolvere il problema dato.

Il **lower bound di un problema** è il minimo lower bound di tutti gli algoritmi che lo risolvono; non deve esistere nemmeno un algoritmo che abbia un lower bound migliore. E' il numero assolutamente minimo di operazioni richieste, non si può fare meglio di così.

In particolare, abbiamo che l'_upper bound di un algoritmo_ `\implies` l'_upper bound del suo problema_, e il _lower bound di un problema_ `\implies` il _lower bound di un suo algoritmo_.

Generalmente, il _lower bound di un problema_ è una rappresentazione abbastanza accurata della sua difficoltà.