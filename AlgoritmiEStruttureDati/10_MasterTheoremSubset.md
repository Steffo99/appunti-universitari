# Un caso particolare del Master Theorem

Se
```latex
T(n) =\\
\\
Θ(1) \qquad n=n_0\\
aT(\frac{n}{b}) + O(n^d) \qquad n>n_0\\
a > 0\\
b > 0\\
d ≥ 0
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

> In pratica, se il costo dominante è quello della parte "fissa" dell'algoritmo, esso sarà `O(n^d)`, mentre se il costo dominante è quello delle chiamate ricorsive, esso sarà `O(n^{log_b e})`.  
> Se nessuno dei due è dominante... si dividono circa in parti uguali, creando un costo di `O(n^d log n)`.
