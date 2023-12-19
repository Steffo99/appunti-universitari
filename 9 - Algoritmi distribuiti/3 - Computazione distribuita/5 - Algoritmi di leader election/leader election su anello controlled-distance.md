[[algoritmo]] di [[leader election]] su [[anello]].

## [[comportamento]]

> [!Summary]
> Effettua iterazioni in cui ogni [[entità]] che potrebbe diventare potenzialmente [[leader]] diffonde il proprio [[identificatore]] a tutte le altre entro una certa distanza.

### `CANDIDATE`

All'inizio di ogni iterazione, invia e fa inoltrare il proprio [[identificatore]] ai vicini (in entrambe le direzioni) a distanza $2^{Iteration}$.

Se il [[messaggio]] raggiunge la distanza massima senza incontrare un [[identificatore]] minore, viene rimandato indietro.

Se il `CANDIDATE` riceve indietro il suo identificatore da entrambe le direzioni, allora passa all'iterazione successiva.

Se il `CANDIDATE` riceve indietro il suo identificatore da entrambe le direzioni, ma in direzione scambiate, allora esso diventa il [[leader]].

### `DEFEATED`

Sapendo sicuramente di non essere il leader, si limita a inoltrare messaggi.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities \cdot \log (Entities))$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | ... |

### [[comunicazione]]

Il caso peggiore per le iterazioni sono le iterazioni intermedie (che non sono la prima o l'ultima o il broadcast di terminazione). ==Perchè?==

Ad ogni iterazione intermedia, ogni candidato invia e riceve su ogni lato:
$$
\color{Gold} 2 ^ {Iteration}
$$
Sommando andata e ritorno:
$$
{\color{Gold} 2} \cdot 2 ^ {Iteration}
$$
Sommando i due lati:
$$
{\color{Gold} 2} \cdot 2 \cdot 2^{Iteration}
$$
I `CANDIDATE` si dimezzano ad ogni iterazione; considerando le iterazioni [[indicizzazione a 1|indicizzate a 1]], sommandoli si ottiene che:
$$
{\color{Gold} \mathrm{floor} \left(
\frac{Entities}{2^{Iteration - 1} + 1}
\right)}
\cdot 2 \cdot 2 \cdot 2 ^ {Iteration}
$$
Pertanto, in [[notazione asintotica]] abbiamo:
$$
O(Entities \cdot Iteration)
$$

Il numero di iterazioni è pari al [[logaritmo in base 2]] del numero di [[entità]] del [[sistema distribuito]]:
$$
\color{Gold} \mathrm{ceil} \left(
	\log (Entities)
\right)
$$
Quindi, la [[notazione asintotica]] finale sarà:
$$
\large O(Entities \cdot {\color{Gold} \log (Entities)})
$$
