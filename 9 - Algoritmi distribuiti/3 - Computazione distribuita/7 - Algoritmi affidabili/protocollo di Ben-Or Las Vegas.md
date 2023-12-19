[[algoritmo]] [[algoritmo Las Vegas|Las Vegas]] di [[consenso asincrono non-deterministico]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di tempo|Tempo]]**
	- ***[[terminazione ignorata]]***

## [[comportamento]]

> [!Summary]+ Summary ma non troppo
> Tutte le [[entità]] partono che si trovano al *round 1*, poi avanzano di un round per ogni iterazione completata.
> 
> I [[messaggio|messaggi]] ricevuti appartenenti a un *round* precedente al proprio sono scartati; quelli appartenenti a un *round* successivo al proprio sono archiviati per uso futuro.
> 
> Ad ogni *round*, ogni entità:
> 1. fa [[broadcast problem|broadcast]] `Mine` del suo valore e *round* attuale
> 2. aspetta di ricevere tutti i [[messaggio|messaggi]] `Mine` garantiti, cioè $\frac{Entities}{2}$
> 3. fa [[broadcast problem|broadcast]] `Propose` di un valore:
> 	1. se tutti i [[messaggio|messaggi]] ricevuti avevano lo stesso valore, propone quello
> 	2. se i [[messaggio|messaggi]] ricevuti avevano valori diverso, invia `null`
> 4. aspetta di ricevere tutti i [[messaggio|messaggi]] `Propose` garantiti, cioè $\frac{Entities}{2}$
> 5. determina come procedere:
> 	1. se tutti i `Propose` che ha ricevuto avevano lo stesso valore non-`null`, termina con quello
> 	2. se tutti i `Propose` che ha ricevuto erano `null`, cambia il proprio valore a un valore casuale e inizia il round successivo
> 	3. altrimenti, cambia il proprio valore a un valore casuale tra quelli non-`null` che ha ricevuto e inizia il round successivo

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Avendo ricevuto almeno $\frac{Entities}{2}$ `Propose` uguali, c'è la certezza che almeno uno di essi fosse da un'[[entità]] non-[[guasto|guasta]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] stimata | ... |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] stimato | $O(2^n)$ |

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] stimato

> [!Quote] Fonti
> - [Correctness Proof of Ben-Or’s Randomized Consensus Algorithm](https://ecommons.cornell.edu/bitstream/handle/1813/7336/98-1682.pdf?sequence=1)

#### Costo di un round

Ad ogni *round* vengono effettuati 2 [[broadcast problem|broadcast]], per un tempo di:
$$
2
$$

#### Numero di round

##### Quando si riesce a proporre qualcosa

Un'[[entità]] non può ricevere `Proposal` per il valore non di maggioranza.

Pertanto, potrà ricevere o tutte `Proposal` nulle, o almeno una `Proposal` per il valore di maggioranza.

Se questa `Proposal` viene inviata, prevarrà su tutte le nulle, adattando a quel valore tutte le altre non-nulle, e garantendo che venga scelta al *round* successivo.

##### Quando non si propone nulla

La probabilità che tutte le [[entità]] si adattino casualmente o per una proposta allo lo stesso valore ad ogni round è come minimo:

$$
\frac{1}{2^{Entities}}
$$

[[prove ripetute|Ripetendo la prova]] ad ogni *round*, si viene a determinare una [[distribuzione geometrica]], per cui il numero stimato di $Round$ richiesto per terminare è:

$$
2^n
$$

#### Unendo le cose

Combinando le due cose, abbiamo che il costo di tempo stimato è:
$$
2 \cdot 2^n
$$

Ovvero, in [[notazione asintotica]]:
$$
\Large O\left(2^n\right)
$$