[[algoritmo]] di [[leader election]] che risolve il problema di terminazione della [[leader election su anello all-the-way]] ***introducendo una [[restrizione di topologia]] aggiuntiva.***

## [[Comportamento]]

> [!Summary]
> Ogni [[entità]] invia il suo [[identificatore]] alla successiva, e gli inoltra gli identificatori ricevuti dalla precedente, tenendo traccia dell'identificatore minimo ricevuto, ***fino a quando non ne conosce tanti quante le [[entità]] del [[sistema distribuito]]***.

## [[Comportamento]] aggiuntivo

Si può effettuare il conteggio in due modi:
- con un [[contatore]] su ogni [[entità]], che conta il numero di [[messaggio|messaggi]] transitati
- ==con un contatore su un messaggio==

## [[algoritmo corretto|Correttezza]]

L'algoritmo termina quando tutte le [[entità]] hanno visto tanti [[messaggio|messaggi]] quante le [[entità]] del [[sistema distribuito]].

## [[costo computazionale distribuito|Costo computazionale]]

### [[Comunicazione]]

Ogni [[entità]] invia tanti [[messaggio|messaggi]] quanti le [[entità]] del sistema distribuito, ovvero:
$$
Entity \cdot Entity
$$

In [[notazione asintotica]], è:
$$
\Large O \left( Entity^2 \right)
$$

### [[Spazio]]

Nel caso peggiore, ciascun messaggio contiene tanti [[bit]] quanti quelli dell'identificatore più grande, ovvero, in [[notazione asintotica]]:
$$
\Large O \left( Entity^2 \cdot \log( \max(Identifier) ) \right)
$$

### [[Tempo]]

Nel caso peggiore, solo una [[entità]] è [[iniziatori multipli|iniziatrice]], e in tal caso, dovrà svegliare le altre con il proprio messaggio.

Il messaggio dovrà prima arrivare alla sua precedente, richiedendo:
$$
\color{LightCoral} Entities -1
$$

Poi, il messaggio della precedente dovrà fare un giro completo:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{\color{LightCoral} Entities -1}
+
{\color{SkyBlue} Entities}
$$
Ovvero:
$$
2 \cdot Entities - 1
$$

Che in [[notazione asintotica]] è:
$$
\Large O(Entities)
$$
