[[algoritmo]] [[algoritmo Las Vegas|Las Vegas]] di [[consenso asincrono non-deterministico bizantino]], derivante dal [[protocollo di Ben-Or Las Vegas]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di tempo|Tempo]]**
	- ***[[terminazione ignorata]]***

## [[comportamento]]

> [!Summary]+ Summary ma non troppo
> 
> Tutte le [[entità]] partono che si trovano al *round 1*, poi avanzano di round man mano che sono completate iterazioni.
> 
> I [[messaggio|messaggi]] ricevuti appartenenti a un *round* precedente al proprio sono scartati; quelli appartenenti a un *round* successivo al proprio sono archiviati per uso futuro.
> 
> Ad ogni round, ogni [[entità]] fa il [[broadcast problem|broadcast]] del proprio valore, e attende di ricevere $Entities - Fallible$ [[messaggio|messaggi]].
> 
> Se almeno $Entities - 2 \cdot Fallible$ [[messaggio|messaggi]] che ha ricevuto hanno lo stesso valore, decide per quello.
> 
> Se almeno $Entities - 4 \cdot Fallible$ [[messaggio|messaggi]] che ha ricevuto hanno lo stesso valore, sceglie quello e passa al round successivo.
> 
> Altrimenti, sceglie un valore casuale e passa al round successivo.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Le [[entità]] che non sono le prime a decidere condividono $(Entities - 2 \cdot Fallible) - 2 \cdot Fallible$ [[vicini di un'entità|vicini]] non-[[guasto|guasti]] con la prima a decidere, quindi al round successivo a una decisione l'algoritmo terminerà sicuramente in favore a quella decisione.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $\sim O\left( 2^{Entities} \right)$ |
