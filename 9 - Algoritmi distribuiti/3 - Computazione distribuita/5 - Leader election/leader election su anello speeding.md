[[algoritmo]] di [[fully synchronous leader election]] derivato dalla [[leader election su anello as-far-as-it-can]]

## [[Comportamento]]

> [!Summary]
> 
> Ogni [[entità]] riceve identificatori dalla [[entità precedente in un anello|precedente]], tenendo traccia dell'identificatore minimo ricevuto, e inoltra alla [[entità successiva in un anello|successiva]] qualsiasi cambiamento ad esso, ***applicando però un ritardo dipendente dal valore dell'[[identificatore]]***.
> 
> Quando un'[[entità]] avrà ricevuto il suo stesso identificatore dalla [[entità precedente in un anello|precedente]], essa diventerà leader, e manderà un [[broadcast problem|broadcast]] di terminazione a tutte le altre.

==Spiegare come scegliere il tempo?==

## [[algoritmo corretto|Correttezza]]

> [!Success]
> È certo che l'identificatore minimo di tutto il [[sistema distribuito]] attraverserà tutte le [[entità]] in esso, fino a tornare al futuro [[leader]].
> 
> Avendo l'[[anello]] un numero finito di [[nodo di un grafo|nodi]] al suo interno, eventualmente sarà trovato un [[leader]], che a quel punto farà terminare l'esecuzione con il [[broadcast problem|broadcast]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | Dipende. |
| [[tempo]] | Dipende. |

### [[Tempo]]

L'[[identificatore]] minore compie un giro completo dell'[[anello]] dopo:
$$
\color{LightCoral} \mathrm{delay}(\min (Identifier)) \cdot Entities
$$

In più, il [[broadcast problem|broadcast]] di terminazione richiede:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{
\color{LightCoral} \mathrm{delay}(\min (Identifier)) \cdot Entities
}
+
{
\color{SkyBlue} Entities
}
$$

La [[notazione asintotica]] risultante dipende dalla scelta effetuata di $\mathrm{delay}(Identifier)$.

### [[Comunicazione]]

Anche il costo di comunicazione dipende dalla scelta effettuata di $\mathrm{delay}(Identifier)$, pertanto il calcolo è completamente omesso da questa pagina.