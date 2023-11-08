[[algoritmo]] di [[leader election]] su [[anello]].

## [[Comportamento]]

> [!Summary]
> Effettua iterazioni in cui ogni [[entità]] che potrebbe diventare potenzialmente [[leader]] diffonde il proprio [[identificatore]] a tutte le altre entro una certa distanza.

## [[Comportamento]]

### `CANDIDATE`

All'inizio di ogni iterazione, invia e fa inoltrare il proprio [[identificatore]] ai vicini (in entrambe le direzioni) a distanza $2^{Iteration}$.

Se il [[messaggio]] raggiunge la distanza massima senza incontrare un [[identificatore]] minore, viene rimandato indietro.

Se il `CANDIDATE` riceve indietro il suo identificatore da entrambe le direzioni, allora passa all'iterazione successiva.

Se il `CANDIDATE` riceve indietro il suo identificatore da entrambe le direzioni, ma in direzione scambiate, allora esso diventa il [[leader]].

### `DEFEATED`

Sapendo sicuramente di non essere il leader, si limita a inoltrare messaggi.

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

Ad ogni iterazione, ogni candidato invia e riceve su ogni lato:
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
Sommando tutti i `CANDIDATE`:
$$
{\color{Gold} \mathrm{floor} \left(
\frac{n}{2^{Iteration - 1} + 1}
\right)}
\cdot 2 \cdot 2 \cdot 2 ^ {Iteration}
$$

==Qui la prof fa dei calcoli. Ho troppo sonno per capirli.==
