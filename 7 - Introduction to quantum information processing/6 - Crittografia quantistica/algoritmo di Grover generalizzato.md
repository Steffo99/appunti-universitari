[[algoritmo di Grover]] per problema con più possibili [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/soluzione|soluzioni]].

## Modifiche

Consideriamo $m$ il numero di soluzioni possibili.

$\qV[\func]$ viene generalizzata, e inverte tutti i valori corretti contemporaneamente:
$$
\Large
\qV[\func] \quad = \quad 1 - {\color{lime} \frac{2}{m} \cdot \sum_{j,\ k = 1}^{m} \ket{a_j}_n \bra{a_k}_n}
$$

Come risultato, anche lo stato ${\color{lime} \ket{a}_n}$ viene generalizzato nello stesso modo a ${\color{lime} \ket{\Psi}}$:
$$
\Large
{\color{lime} \ket{\Psi}}
\quad = \quad
{\color{lime} \frac{1}{\sqrt{m}} \cdot \sum_{k = 1}^m \ket{a_k}_n}
$$

Di conseguenza:
$$
\Large
\qV[\func] \quad = \quad 1 - {\color{lime} \frac{2}{m} \cdot \ket{\Psi}\bra{\Psi}}
$$

Con l'aumentare del numero di [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/soluzione|soluzioni]] accettabili, il numero di iterazioni necessario diminuisce, diventando:
$$
\Large
iter 
\quad \sim \quad
\frac{\pi \cdot \sqrt{N}}{4 \cdot \sqrt{m}}
$$

La [[misura]] alla fine restituisce una soluzione casuale tra quelle possibili.

Più $m$ è alto, meno [[quantum tradeoff]] c'è, perchè l'algoritmo [[modello di calcolo classico|classico]] scala invece con $\frac{1}{m}$.