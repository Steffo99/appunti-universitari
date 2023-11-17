[[algoritmo]] di [[consenso sincrono deterministico]].

## [[Comportamento]]

> [!Summary]
> Ogni [[entità]] tiene traccia delle scelte e dei [[guasti di esecuzione di crash|crash]] che conosce.
>
> Ad ogni [[tick]], manda questi dati a tutte le altre, e aggiorna i propri con i dati che riceve.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Dopo tante iterazioni quante i [[guasto|guasti]] possibili più una, l'algoritmo termina.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities^2 \cdot Fallible)$ |
| [[tempo]] | $O(Fallible)$ |

### [[Comunicazione]]

Ad ogni [[tick]], ogni [[entità]] invia a tutte le altre un report:
$$
{\color{LightCoral} \sum_{Tick}^{Iterations}} 
{\color{SpringGreen} \sum_{Entity}^{Entities}} 
{\color{SkyBlue} (Entities - 1)}
$$
Cioè:
$$
{\color{LightCoral} (Fallible - 1)}
\cdot
{\color{SpringGreen} (Entities)}
\cdot
{\color{SkyBlue} (Entities - 1)}
$$

In [[notazione asintotica]]:
$$
\Large O({\color{SpringGreen} Entities} ^{\color{SkyBlue} 2} \cdot {\color{LightCoral} Fallible})
$$

### [[Tempo]]

Richiede il seguente numero di iterazioni da un [[tick]] ciascuna:
$$
Fallible + 1
$$
In [[notazione asintotica]]:
$$
\Large O(Fallible)
$$

## ==Extra==

==C'è una dimostrazione aggiuntiva strana di cui non capisco lo scopo.==

==C'è un algoritmo di semplificazione per problemi decisionali che mi sembra triviale?==

