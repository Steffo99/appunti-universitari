# Caso particolare del Master Theorem

## Ipotesi

Se:  
![](https://quicklatex.com/cache3/57/ql_e34dc27b42831d3c3ff671b0f3861257_l3.png)

Ovvero, se la dimensione dell'input viene divisa ad ogni ciclo da una costante b, è polinomiale e il caso base è costante...

## Tesi

Allora:  
![](https://quicklatex.com/cache3/ca/ql_26e3557a6ca2d6ac4b8481e7c5263fca_l3.png)

> In pratica, se il costo dominante è quello della parte "fissa" dell'algoritmo, esso sarà `O(n^d)`, mentre se il costo dominante è quello delle chiamate ricorsive, esso sarà `O(n^{log_b e})`.  
> Se nessuno dei due è dominante... si dividono circa in parti uguali, creando un costo di `O(n^d log n)`.
