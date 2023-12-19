[[algoritmo]] di [[consenso sincrono deterministico bizantino]], variante di [[TellAll Crash]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di topologia|Topologia]]**
	- [[identificatori univoci]] con [[coppia di chiavi]]
- **[[restrizione di tempo|Tempo]]**
	- [[clock]] sincronizzati esternamente

## [[comportamento]]

> [!Summary]
> Ogni [[entità]] tiene traccia delle scelte e dei [[guasti di esecuzione di crash|crash]] che conosce.
> 
> Si sfrutta la verità assoluta fornita dal [[clock]] per impedire alle [[entità]] [[guasto|guaste]] di fornire informazioni false.
> 
> Ad ogni [[tick]], se ha `false` come valore, lo manda a tutte le altre, assieme al suo valore di [[clock]] attuale, e aggiorna i propri con i dati che riceve.
> 
> Se al [[tick]] successivo riceve notifica di un `false`, notifica tutti i suoi vicini a sua volta; se al [[tick]] consecutivo riceve notifica da sufficienti vicini che confermano il `false`, deciderà per `false`.

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Il protocollo termina dopo un numero finito di iterazioni.
> 
> La dimostrazione della validità del risultato è omessa perchè troppo lunga.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities^3)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Fallible)$ |

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

Sono richiesti due [[tick]] per ogni iterazione dell'[[algoritmo]], ma le cui fasi si possono sovrapporre:
1. notifica di `false`
2. conferma di `false`

Se [[TellAll Crash]] richiedeva $Fallible + 1$, questo algoritmo richiede:
$$
Fallible +2
$$

Quindi:
$$
\Large O(Fallible)
$$
