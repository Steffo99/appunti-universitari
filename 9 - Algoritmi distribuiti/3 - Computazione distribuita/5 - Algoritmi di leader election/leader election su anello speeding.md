[[algoritmo]] di [[fully synchronous leader election]] derivato dalla [[leader election su anello as-far-as-it-can]]

## [[comportamento]]

> [!Summary]
> 
> Ogni [[entità]] riceve identificatori dalla [[entità precedente in un anello|precedente]], tenendo traccia dell'[[identificatore]] minimo ricevuto, e inoltra alla [[entità successiva in un anello|successiva]] qualsiasi cambiamento ad esso, ***applicando però un ritardo esponenziale sul valore dell'[[identificatore]]***.
> 
> Quando un'[[entità]] avrà ricevuto il suo stesso identificatore dalla [[entità precedente in un anello|precedente]], essa diventerà leader, e manderà un [[broadcast problem|broadcast]] di terminazione a tutte le altre.

$$
\Large \mathrm{sleep} \left( 2^{Identifier} \right)
$$


## [[algoritmo corretto|Correttezza]]

> [!Success]
> È certo che l'identificatore minimo di tutto il [[sistema distribuito]] attraverserà tutte le [[entità]] in esso, fino a tornare al futuro [[leader]].
> 
> Avendo l'[[anello]] un numero finito di [[nodo di un grafo|nodi]] al suo interno, eventualmente sarà trovato un [[leader]], che a quel punto farà terminare l'esecuzione con il [[broadcast problem|broadcast]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | Dipende. |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | Dipende. |

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

L'[[identificatore]] minore compie un giro completo dell'[[anello]] dopo:
$$
\color{LightCoral} \mathrm{sleep}(\min (Identifier)) \cdot Entities
$$

In più, il [[broadcast problem|broadcast]] di terminazione richiede:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{
\color{LightCoral} \mathrm{sleep}(\min (Identifier)) \cdot Entities
}
+
{
\color{SkyBlue} Entities
}
$$

La [[notazione asintotica]] risultante dipende dalla scelta effetuata di $\mathrm{sleep}(Identifier)$.

### [[comunicazione]]

Anche il costo di comunicazione dipende dalla scelta effettuata di $\mathrm{sleep}(Identifier)$, pertanto il calcolo è completamente omesso da questa pagina.