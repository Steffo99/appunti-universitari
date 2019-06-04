# Master Theorem

Il _Master Theorem_ è uno dei teoremi più importanti dell'algoritmica.

Esso permette di **calcolare l'upper bound di un algoritmo ricorsivo** in modo piuttosto semplice.

## Ipotesi

Dato un algoritmo:
- Con uno o più casi base
- Che richiama la funzione ricorsiva un numero n di volte

## Tesi

Allora, il suo upper bound avrà la formula:

```latex
T(n) =\\
\\
T(n_0) \qquad n=n_0\\
T(n_1) + T(n_2) + T(n_3) + T(n_a) \qquad n > n_0
```
