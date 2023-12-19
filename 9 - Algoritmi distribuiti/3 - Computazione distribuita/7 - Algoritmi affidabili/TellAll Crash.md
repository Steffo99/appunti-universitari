[[algoritmo]] di [[consenso sincrono deterministico]].

## [[comportamento]]

> [!Summary]
> Ogni [[entità]] tiene traccia delle scelte e dei [[guasti di esecuzione di crash|crash]] che conosce.
>
> Ad ogni [[tick]], manda questi dati a tutte le altre, e aggiorna i propri con i dati che riceve.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Dopo tante iterazioni quante i [[guasto|guasti]] possibili **più una**, l'algoritmo termina.

> [!Note]
> L'iterazione extra è necessaria per garantire il consenso nel caso in cui le entità si guastino una ad una durante la propagazione del proprio messaggio.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities^2 \cdot Fallible)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Fallible)$ |

### [[comunicazione]]

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

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

Richiede il seguente numero di iterazioni da un [[tick]] ciascuna:
$$
Fallible + 1
$$
In [[notazione asintotica]]:
$$
\Large O(Fallible)
$$
