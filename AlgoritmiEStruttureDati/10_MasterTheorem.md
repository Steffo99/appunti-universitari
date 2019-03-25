## Il Master Theorem
## Il teorema dell'esperto

Dato un algoritmo così:

```python
def ricorsivo(i):
    if ...:
        return ...
    for i in range(a):
        ricorsivo(i)
```

Allora, avrà la formula:

```latex
T(n) =\\
\\
T(n_0) \qquad n=n_0\\
T(n_1) + T(n_2) + T(n_3) + T(n_a) \qquad n > n_0
```

## Un caso particolare

Se
```latex
T(n) =\\
\\
\theta(1) \qquad n=n_0\\
aT(\frac{n}{b}) + O(n^d) \qquad n>n_0\\
a > 0\\
b > 0\\
d \geq 0
```

Ovvero, se la dimensione dell'input viene divisa ad ogni ciclo da una costante b, è polinomiale e il caso base è costante...

Allora
```latex
T(n) =\\
\\
O(n^d) \qquad d > \log_b a
O(n^d log n) \qquad d = log_b a
O(n^{log_b e}) \qquad d < log_b a
```

In pratica, se il costo dominante è quello della parte "fissa" dell'algoritmo, esso sarà `O(n^d)`, mentre se il costo dominante è quello delle chiamate ricorsive, esso sarà `O(n^{log_b e})`
