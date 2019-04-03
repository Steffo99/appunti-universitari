# Notazione asintotica

La notazione asintotica è un sistema per stimare il costo di un algoritmo complesso in modo semplice.

Ci permette di confrontare velocemente il caso peggiore degli algoritmi.

Per il **tempo**, in particolare, consideriamo il rapporto tra il numero di operazioni nel caso peggiore e la dimensione del suo input.

## Upper bound

La notazione asintotica è una **stima**. Possiamo dare quindi un _upper bound_, il limite superiore, un costo che siamo sicuri che non verrà _mai_ superato dall'algoritmo.

Il nostro obiettivo è trovare l'upper bound più preciso possibile per la nostra funzione, in modo da avere una stima abbastanza precisa.

### O()

> "O grande"  
> O di g(n)

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
|-----------------|------|
| `O(1)` | Costante |
| `O(log log n)` | loglog |
| `O(log n)` | Logaritmica |
| ![LaTeX](https://latex.codecogs.com/png.latex?O(n^{1/c})) (per c ≥ 1) | Sublineare |
| `O(n)` | Lineare |
| `O(n log n)` | nlogn |
| `O(n²)` | Quadratica |
| `O(n³)` | Cubica |
| `O(n^k)` (per k ≥ 1) | Polinomiale |
| `O(a^n)` (per a ≥ 1) | Esponenziale |
| `O(n!)` | Fattoriale |

Notiamo che, se un certo algoritmo appartiene a una certa espressione, appartiene anche a quelli dell'ordine più alto; ad esempio, se `A ∈ O(n)`, allora anche `A ∈ O(n!)`.

##### Polinomiale

Spesso, il tempo richiesto da una funzione è O grande di un polinomio di grado K, ovvero `f(n) ∈ O(n^k)`.

> **Come dimostriamo che il tempo è uguale al grado massimo del polinomio?**  
> Per `n > 0 \and 0 ≤ i ≤ k`:  
> ![LaTeX](https://latex.codecogs.com/png.latex?a_k%20n^k%20+%20a_{k-1}%20n^{k-1}%20+%20%E2%80%A6%20+%20a_1%20n%20+%20a_0%20%E2%89%A4%20|a_k|%20n^k%20+%20|a_{k-1}|%20n^k%20+%20%E2%80%A6%20+%20|a_1|%20n^k%20+%20|a_0|%20n^k%20=%20(|a_k|%20+%20|a_{k-1}|%20+%20%E2%80%A6%20+%20|a_1|%20+%20|a_0|)%20n^k)

#### Proprietà di O()

1. `f(n) ∈ O(g(n)) -> ∀ a > 0, a * f(n) ∈ O(g(n))`.
2. `f(n) ∈ O(g(n)), d(n) ∈ O(h(n)) -> f(n) + d(n) ∈ O(g(n) + h(n)) -> O(max\{g(n), h(n)\})`
3. `f(n) ∈ O(g(n)), d(n) ∈ O(h(n)) -> f(n) * d(n) ∈ O(g(n) * h(n))`

In pratica, se una funzione è la **somma di più termini**, basta guardare l'`O()` _più grande_ tra tutti i suoi termini;  
se invece una funzione è un **prodotto di più termini**, si possono omettere tutte le costanti, e l'`O()` finale sarà dato dal prodotto degli `O()` dei termini.

## Lower bound

Possiamo anche stimare il _lower bound_, il limite inferiore: il numero minimo di operazioni che viene effettuato nel caso migliore.

### Ω()

> "Omega"  
> Omega di g(n)

Diremo che `f(n) ∈ Ω(g(n))` se e solo se `∃ c > 0, n_0 ≥ 0 : ∀ n ≥ n_0 f(n) ≥ c * g(n)`.

#### Espressioni di Ω()

| Espressione Ω() | Nome |
|-----------------|------|
| `Ω(n!)` | Fattoriale |
| `Ω(a^n)` (per a ≥ 1) | Esponenziale |
| `Ω(n^k)` (per k ≥ 1) | Polinomiale |
| `Ω(n³)` | Cubica |
| `Ω(n²)` | Quadratica |
| `Ω(n log n)` | nlogn |
| `Ω(n)` | Lineare |
| ![LaTeX](https://latex.codecogs.com/png.latex?\Omega(n^{1/c})) (per c ≥ 1) | Sublineare |
| `Ω(log n)` | Logaritmica |
| `Ω(log log n)` | loglog |
| `Ω(1)` | Costante |

## Tight bound

Se notiamo che _upper_ e _lower bound_ coincidono, allora otteniamo un **tight bound**: sappiamo che il costo dell'algoritmo è sempre stimato da esso.

### θ()

> "Theta"  
> Theta di g(n)

Diciamo che `f(n) ∈ θ(g(n))` se e solo se `∃ c_1, c_2 > 0, n_0 ≥ 0 : ∀ n ≥ n_0, c_1 * g(n) ≤ f(n) ≤ c_2 * g(n)`.

#### Espressioni di θ()

| Espressione θ() | Nome |
|-----------------|------|
| `θ(1)` | Costante |
| `θ(log log n)` | loglog |
| `θ(log n)` | Logaritmica |
| ![LaTeX](https://latex.codecogs.com/png.latex?\Theta(n^{1/c})) (per c ≥ 1) | Sublineare |
| `θ(n)` | Lineare |
| `θ(n log n)` | nlogn |
| `θ(n²)` | Quadratica |
| `θ(n³)` | Cubica |
| `θ(n^k)` (per k ≥ 1) | Polinomiale |
| `θ(a^n)` (per a ≥ 1) | Esponenziale |
| `θ(n!)` | Fattoriale |

## Problemi algoritmici

Un problema algoritmico è un problema matematico che si vuole provare a risolvere con un algoritmo.

> Dati 10 numeri, voglio sapere se sono in ordine crescente oppure no.

### Problema trattabile

Per definire un problema algoritmico **trattabile**, il nostro problema deve avere _almeno un algoritmo_ con un _upper bound polinomiale_; il tempo impiegato da un computer rimane ragionevole.

### Problema intrattabile

Se un problema non ha nessun algoritmo con _upper bound polinomiale_, allora si dice che è **intrattabile**.

### Problema irrisolvibile

Se non esistono algoritmi per risolvere un problema, nemmeno con _upper bound fattoriale_, allora questo si dice **irrisolvibile**.

> [Dato un algoritmo con certi input, riusciamo a capire con un algoritmo se la sua esecuzione termina o no?](https://en.wikipedia.org/wiki/Halting_problem)

### Problemi in NP?

Esistono anche tanti problemi di cui non si è ancora scoperto un modo per dimostrare se essi siano trattabili o intrattabili.

### Upper e lower bound di problemi

Si può anche trovare un _upper bound_ e un _lower bound_ per un problema, ma bisogna generalizzare di più.

L'**upper bound di un problema** è il minimo upper bound di tutti gli algoritmi che lo risolvono; deve esistere almeno un algoritmo che lo risolva che abbia lo stesso _upper bound_. E' praticamente il tempo migliore per risolvere il problema dato.

Il **lower bound di un problema** è il minimo lower bound di tutti gli algoritmi che lo risolvono; non deve esistere nemmeno un algoritmo che abbia un lower bound migliore. E' il numero assolutamente minimo di operazioni richieste, non si può fare meglio di così.

In particolare, abbiamo che l'_upper bound di un algoritmo_ -> l'_upper bound del suo problema_,  
e il _lower bound di un problema_ -> il _lower bound di un suo algoritmo_.

Generalmente, il _lower bound di un problema_ è una rappresentazione abbastanza accurata della sua difficoltà.