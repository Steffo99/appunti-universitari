# Notazione asintotica

La notazione asintotica è un sistema per stimare il costo di un algoritmo complesso in modo semplice.

Ci permette di confrontare velocemente il caso peggiore degli algoritmi.

Per il **tempo**, in particolare, consideriamo il rapporto tra il numero di operazioni nel caso peggiore e la dimensione del suo input.

## Upper bound

La notazione asintotica è una **stima**. Possiamo dare quindi un _upper bound_, il limite superiore, un costo che siamo sicuri che non verrà _mai_ superato dall'algoritmo.

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

#### Polinomiale

Spesso, il tempo richiesto da una funzione è O grande di un polinomio di grado K, ovvero `f(n) ∈ O(n^k)`.

> **Come dimostriamo che il tempo è uguale al grado massimo del polinomio?**  
> Per `n > 0 \and 0 \leq i \leq k`:  
> `a_k n^k + a_{k-1} n^{k-1} + \dots + a_1 n + a_0 \leq`
> `\leq |a_k| n^k + |a_{k-1}| n^k + \dots + |a_1| n^k + |a_0| n^k = (|a_k| + |a_{k-1}| + \dots + |a_1| + |a_0|) n^k`

## Lower bound

Possiamo anche stimare il _lower bound_, il limite inferiore: il numero  di operazioni che viene effettuato nel caso migliore.

> Omega()

## Tight bound

Se notiamo che _upper_ e _lower bound_ coincidono, allora otteniamo un **tight bound**: sappiamo che il costo dell'algoritmo è sempre stimato da esso.

> SimboloStrano()
