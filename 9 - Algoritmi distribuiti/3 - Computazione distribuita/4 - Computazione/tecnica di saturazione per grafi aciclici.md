[[algoritmo]] di [[computazione in grafi aciclici]].

> [!Summary]
> Si distribuisce un dato a ogni [[entità]], che effettua la computazione per i dati dei suoi figli e ne invia il risultato al genitore.  
> 
> Processati tutti i dati, viene effettuato un [[broadcast problem|broadcast]] ***dalle due entità rimaste*** per distribuire i risultati dell'algoritmo a tutti.

## [[Comportamento]]

### ***`INITIATOR`***

Inviano un ***[[wake-up problem|wake-up]]*** a tutte le altre [[entità]], poi tutte passano ad `ACTIVE`.

### `ACTIVE`

Riceve informazioni finchè non ne ha ricevute tante quante il numero dei suoi vicini meno uno (i suoi figli).

Effettua il calcolo sulle informazioni che ha, poi ne invia il [[risultato]] al vicino rimasto, passando a `PROCESSING`.

### `PROCESSING`

Attende un ulteriore [[messaggio]], che arriverà ***solo quando i due lati del [[grafo aciclico]] si incontreranno in due [[entità]]***.

Le [[entità]] `PROCESSING` che ricevono il [[messaggio]] ***effettuano nuovamente l'elaborazione tra il loro [[risultato]] e quello ricevuto***, e poi lo mandano a tutti i loro vicini tranne il mittente, passando a `DONE`.

### `DONE`

Un'[[entità]] `DONE` conosce il [[risultato]] della computazione, e non fa nient'altro.

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

#### Attivazione

La fase di ***[[wake-up problem|wake-up]]*** ad `ACTIVE` richiede:
$$
(2 \cdot Channels - (Entities - Initiators))
$$
Dato che gli iniziatori possono essere tutte le [[entità]] eccetto una, al massimo i messaggi inviati saranno:
$$
\color{LightCoral} (2 \cdot Channels - (Entities - 1))
$$

#### Saturazione

La fase di `ACTIVE` invia un [[messaggio]] per ogni [[entità]]:
$$
\color{SkyBlue} (Entities)
$$

#### Risoluzione

La fase di `PROCESSING` richiede un ulteriore [[messaggio]] per ogni [[entità]], ***tranne le due saturate inizialmente***:
$$
\color{SpringGreen} (Entities - 2)
$$

#### Totale

In totale, nel caso peggiore i messaggi scambiati saranno:
$$
{\color{LightCoral} (2 \cdot Channels - (Entities - 1))}
+
{\color{SkyBlue} (Entities)}
+
{\color{SpringGreen} (Entities - 2)}
$$
Ovvero:
$$
4 \cdot Entities - 4
$$

Che [[notazione asintotica|asintoticamente]] è:
$$
\Large O(Entities)
$$
