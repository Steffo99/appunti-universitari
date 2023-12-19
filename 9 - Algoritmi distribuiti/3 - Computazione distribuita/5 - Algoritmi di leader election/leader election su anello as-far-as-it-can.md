[[algoritmo]] di [[leader election]] su [[anello]].

## [[comportamento]]

> [!Summary]
> 
> Ogni [[entità]] riceve identificatori dalla [[entità precedente in un anello|precedente]], tenendo traccia dell'identificatore minimo ricevuto, e inoltra alla [[entità successiva in un anello|successiva]] qualsiasi cambiamento al proprio minimo.
> 
> Quando un'[[entità]] avrà ricevuto il suo stesso identificatore dalla [[entità precedente in un anello|precedente]], essa diventerà leader, e manderà un [[broadcast problem|broadcast]] di terminazione a tutte le altre.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> È certo che l'identificatore minimo di tutto il [[sistema distribuito]] attraverserà tutte le [[entità]] in esso, fino a tornare al futuro [[leader]].
> 
> Avendo l'[[anello]] un numero finito di [[nodo di un grafo|nodi]] al suo interno, eventualmente sarà trovato un [[leader]], che a quel punto farà terminare l'esecuzione con il [[broadcast problem|broadcast]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | [[notazione Ω-grande]] |
|-|-|-|
| [[comunicazione]] | $O(Entities^2)$ | $\Omega(Entities)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Entities)$ | ... |

### [[comunicazione]]

#### Caso peggiore

Il caso peggiore è quello in cui le [[entità]] sono [[iniziatori multipli|tutte iniziatrici]] e in ordine crescente di [[identificatore]].

Nel caso peggiore, il [[ritardo di comunicazione unitario|ritardo di comunicazione sarà unitario]], quindi avremo che:
1. il massimo sarà propagato per $1$ messaggio
2. il secondo massimo sarà propagato per $2$ messaggi
3. $\dots$
4. il minimo sarà propagato per $Entities$ messaggi

Totalizzando:
$$
\color{LightCoral} \sum_{Identifier=1}^{Entities} Identifier
$$

Ovvero:
$$
\color{LightCoral}
\frac
{Entities \cdot (Entities + 1)}
{2}
$$

In aggiunta, sarà necessaria anche un [[broadcast problem|broadcast]] di terminazione, che richiederà:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{
\color{LightCoral}
\frac
{Entities \cdot (Entities + 1)}
{2}
}
+
{
\color{SkyBlue} Entities
}
$$
[[notazione asintotica|Asintoticamente]]:
$$
\Large O \left( Entities^2 \right)
$$

#### Caso migliore

Il caso migliore è quello in cui le [[entità]] sono [[risveglio multiplo|tutte iniziatrici]] e in ordine decrescente di [[identificatore]].

Avremo che:
1. il minimo sarà propagato per $Entities$ messaggi
2. tutti gli altri per $1$ messaggio

Totalizzando:
$$
\color{LightCoral}
Entities
+
\sum_{Identifier=2}^{Entities} 1
$$
Ovvero:
$$
\color{LightCoral} Entities + (Entities - 1)
$$

In aggiunta, sarà necessaria anche un [[broadcast problem|broadcast]] di terminazione, che richiederà:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{
\color{LightCoral} Entities + (Entities - 1)
}
+
{
\color{SkyBlue} Entities
}
$$
Ovvero:
$$
3 \cdot Entities - 1
$$
[[notazione asintotica|Asintoticamente]]:
$$
\Large \Omega \left( Entities \right)
$$

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

#### Caso peggiore

Il caso peggiore è quello in cui l'[[entità]] [[iniziatore singolo|iniziatrice è unica]] e alla massima distanza possibile dal futuro [[leader]].

Essa dovrà svegliare il leader, richiedendo:
$$
\color{LightCoral} Entities-1
$$

E poi l'identificatore del leader dovrà viaggiare per tutto l'anello, richiedendo:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{\color{LightCoral} Entities-1}
+
{\color{SkyBlue} Entities}
$$
Cioè:
$$
2 \cdot Entities - 1
$$
[[notazione asintotica|Asintoticamente]]:
$$
\Large O( Entities )
$$
