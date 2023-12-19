[[algoritmo]] di [[spanning tree construction]] che migliora il [[traversal protocol]].

## [[comportamento]]

> [!Summary]
> Le [[entità]] del grafo vengono visitate sequenzialmente attraverso una [[depth-first search]].
> 
> In ogni momento, a solo una [[entità]] è permesso ***visitarne altre***, e questo permesso è tracciato attraverso un [[token metaforico]].

### `LEADER`

Inizia possedendo il [[token metaforico]].

***Parte notificando tutti i suoi [[vicini di un'entità|vicini]] di possedere il token con il tag `Own`.***

Poi, inizia la visita inviando il [[token metaforico|token]] al primo [[vicini di un'entità|vicino]] non visitato con il tag `Forward`, diventando `VISITED`.

### `IDLE`

In attesa di ricevere il [[token metaforico]], ***e in ascolto per notifiche `Own`***.

***Quando riceve una notifica `Own`***:
1. ***esclude il mittente dai [[vicini di un'entità|vicini]] da visitare.***

Quando riceve il token `Forward`:
1. memorizza il mittente come genitore;
2. notifica tutti i [[vicini di un'entità|vicini]] con il tag `Own`;
3. procede con la visita inviando il [[token metaforico|token]] al primo suo [[vicini di un'entità|vicino]] non visitato con il tag `Forward`;
4. diventa `VISITED`.

### `VISITED`

Ha già ricevuto il [[token metaforico]] in precedenza.

> [!Note]
> ***È impossibile che riceva `Forward` o `AlreadyVisited` per via del meccanismo di `Own`.***

Se lo riceve con il tag `Backward`, aggiunge all'[[albero]] il mittente, e poi invia il [[token metaforico|token]] al prossimo [[vicini di un'entità|vicino]] non visitato con il tag `Forward`.

Se riceve nuovamente il [[token metaforico|token]], e non ha altri vicini da visitare, restituisce il [[token metaforico|token]] al genitore, poi diventa `DONE`.

### `DONE`

Non fa nient'altro.


## [[algoritmo corretto|Correttezza]]

> [!Success]
> 
> Dato che:
> 1. Tutte le [[entità]] tranne il [[leader]] inviano `Finished` una sola volta.
> 2. Un `Forward` e un `Backward`  [[arco di un grafo|collegano]] le due [[entità]] coinvolte.
> 
> Allora, il [[grafo]] risultante è un [[albero]] [[grafo connesso|connesso]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Channels)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | $O(Entities)$ |

### [[comunicazione]]

==Credo si possa ottimizzare non inviando Visited al nodo a cui si sta per inviare il token.==

Tutti i [[canale di comunicazione|canali]] vengono visitati due volte, uno da `Visited::Sender`, e uno da `Visited::Receiver`:
$$
\color{LightCoral} 2 \cdot Channels
$$

In più, tutti i nodi tranne il [[leader]] invieranno almeno una volta `Token::Forward` e `Token::Finished`. 

$$
\color{SpringGreen} 2 \cdot (Entities - 1)
$$

Dunque, il numero di messaggi inviati sarà:
$$
{\color{LightCoral} 2 \cdot Channels}
+
{\color{SpringGreen} 2 \cdot (Entities - 1)}
$$

Essendo il grafo connesso, $(Entities - 1)$ è obbligatoriamente minore di $Channels$, quindi possiamo riscrivere la riga precedente come:
$$
{\color{LightCoral} 2 \cdot Channels}
+
{\color{SpringGreen} 2 \cdot Channels}
=
4 \cdot Channels
$$

In [[notazione asintotica]], è:
$$
\Large O(Channels)
$$

> [!Note]
> Coincide ***asintoticamente*** con il [[notazione Ω-grande|lower bound]] della [[spanning tree construction]].

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

L'invio di `Visited::Sender` e `Visited::Receiver` corrisponde al tempo di attraversamento di un [[albero]]:
$$
\color{SkyBlue} 2 \cdot (Entities - 1)
$$

In più, tutte le [[entità]] devono inviare sequenzialmente `Token::Forward` e `Token::Finished`:
$$
\color{Lavender} 2 \cdot Entities
$$

Dunque, il tempo necessario sarà:
$$
{\color{SkyBlue} 2 \cdot (Entities - 1)}
+
{\color{Lavender} 2 \cdot Entities}
=
4 \cdot Entities - 2
$$

In [[notazione asintotica]], è:
$$
\Large O(Entities)
$$

> [!Note]
> ***Coincide asintoticamente*** con il [[notazione Ω-grande|lower bound]] della [[spanning tree construction]].
