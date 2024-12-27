Assumiamo che i due qbit dello stato di Hardy siano controllati da due [[agente|agenti]] diversi, *Zero* e *One*.

*Zero* e *One* si trovano lontani uno dall’altro, e non hanno modo di comunicare o di interagire sul qbit dell’altro.

Pur trovandosi lontani, possono trasmettere istantaneamente informazioni all’altra parte operando sul loro qbit.

Infatti, si possono verificare i seguenti casi:

### Nessuna interazione

*Zero* non interagisce con il suo qbit.

*One* non interagisce con il quo qbit.

Se entrambi misurano il proprio qbit, **entrambi possono trovare $\ket{1}$** sul loro qbit.

$$
\displaylines{
	\ket{\Phi}_2 = \frac{1}{\sqrt{3}}\ (\ 2 \ket{00} - 1\ {\color{red} \mathbf{H_1} \mathbf{H_0}} \ket{11}\ )\\
	\ \\
	\ket{\Phi}_2 = \frac{1}{\sqrt{12}}\  (\ 3 \ket{00} + 1 \ket{01} + 1 \ket{10} - 1 \ket{11}\ )
}
$$

È possibile ottenere tutti gli stati.

### Entrambi interagiscono

*Zero* applica un $\mathbf{H_0}$ al suo qbit.

*One* applica un $\mathbf{H_1}$ al suo qbit.

Se entrambi misurano il proprio qbit, solo uno dei due può trovare $\ket{1}$.

$$
\displaylines {
	{\color{green} \mathbf{H_1} \mathbf{H_0}} \ket{\Phi}_2 = \frac{1}{\sqrt{3}}\ (\ 2\ {\color{green} \mathbf{H_1} \mathbf{H_0}}\ket{00} - 1 \ket{11}\ ) =
	\\\ \\
	{\color{green} \mathbf{H_1} \mathbf{H_0}} \ket{\Phi}_2 = \frac{1}{\sqrt{3}}\ (\ 1 \ket{00} + 1 \ket{01} + 1 \ket{10} {\color{lightgray} +\ 0 \ket{11}} \ )
}
$$

In qualche modo, è diventato impossibile ottenere $\ket{11}$, nonostante non sia avvenuta comunicazione tra *Zero* e *One*.

### *Zero* interagisce

*Zero* applica un $\mathbf{H_0}$ al suo qbit.

*One* non interagisce con il suo qbit.

Se entrambi misurano il loro qbit, *One* può trovare $\ket{1}$ solo se anche *Zero* ha trovato lo stesso.

$$
\displaylines{
	{\color{green} \mathbf{H_0}} \ket{\Phi}_2 = \frac{1}{\sqrt{3}}\ (\ 2\ {\color{green} \mathbf{H_0}} \ket{00} - 1\ {\color{red} \mathbf{H_1}} \ket{11}\ )\\
	\ \\
	{\color{green} \mathbf{H_1}} \ket{\Phi}_2 = \frac{1}{\sqrt{3}}\ (\ 2 \ket{00} + 1 \ket{01}{\color{lightgray} +\ 0 \ket{10}}\  + 1 \ket{11} \ )
}
$$

In qualche modo, è diventato impossibile ottenere $\ket{10}$, nonostante non sia avvenuta comunicazione tra *Zero* e *One*.


### *One* interagisce

*Zero* non interagisce con il suo qbit.

*One* applica un $\mathbf{H_1}$ al suo qbit.

Se entrambi misurano il loro qbit, *Zero* può trovare $\ket{1}$ solo se anche *One* ha trovato lo stesso.

$$
\displaylines{
	{\color{green} \mathbf{H_1}} \ket{\Phi}_2 = \frac{1}{\sqrt{3}}\ (\ 2\ {\color{green} \mathbf{H_1}} \ket{00} - 1\ {\color{red} \mathbf{H_0}} \ket{11}\ )\\
	\ \\
	{\color{green} \mathbf{H_1}} \ket{\Phi}_2 = \frac{1}{\sqrt{3}}\ (\ 2 \ket{00} {\color{lightgray} +\ 0 \ket{01}}\ + 1 \ket{10} + 1 \ket{11} \ )
}
$$

In qualche modo, è diventato impossibile ottenere $\ket{01}$, nonostante non sia avvenuta comunicazione tra *Zero* e *One*.
