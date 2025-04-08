[[problema di ricerca]] in cui si vuole individuare una specifica [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/soluzione|soluzione]] $a$ tra un [[insieme finito]] di [[cardinalità di un insieme|cardinalità]] $N$ di possibilità.

## Formulazione matematica

Si vuole identificare la $x$ tale per cui l'[[oracolo]] $\func \par{x}$ restituisce $1$, e di conseguenza, il valore di $a$.
$$
\Large
\func \par{x} =
\begin{cases}
0 & {\color{red} x \neq a}\\
1 & {\color{lime} x = a}
\end{cases}
$$

## [[notazione O-grande|upper bound]] in [[modello di calcolo classico]]

Ogni singola possibilità causa un'esecuzione dell'[[oracolo]]:
$$
\Large
O \par{N}
$$

## [[notazione O-grande|upper bound]] in [[modello di calcolo quantistico]]

L'[[algoritmo di Grover]] permette di trovare la soluzione con chiamate all'[[oracolo]] molto ridotte:
$$
\Large
O \par{\sqrt{N}}
$$
