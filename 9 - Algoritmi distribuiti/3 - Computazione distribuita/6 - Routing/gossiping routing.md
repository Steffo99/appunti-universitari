[[algoritmo]] di [[routing]].

## [[Comportamento]]

> [!Summary]
> I [[router]] recuperano informazioni sul loro [[vicinato]].
>
> Si costruisce uno [[spanning tree]] non ottimizzato e lo si usa per permettere ai [[router]] di scambiarsi le informazioni raccolte.
> 
> Ricevute le informazioni, ogni entità computa uno [[spanning tree]] ottimizzato, e ci deriva la [[routing table]].

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Eventualmente, il [[broadcast problem su grafo aciclico|broadcast]] termina, dando a tutti i [[router]] le informazioni necessarie per calcolare la loro [[routing table]].

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione del routing]] | $O(Entities \cdot Channels)$ |
| [[tempo]] | ... |

### [[comunicazione del routing]]

Recuperare informazioni sul [[vicini di un'entità|vicinato]] richiede un'andata-e-ritorno attraverso ogni [[canale di comunicazione|canale]]:
$$
\color{LightCoral} 2 \cdot Channels
$$

Creare lo [[spanning tree]] iniziale con [[shout+ protocol]] richiede:
$$
\color{SpringGreen} 2 \cdot Channels
$$

Infine, inviare il [[broadcast problem su grafo aciclico|broadcast]] richiede:
$$
\sum_{Entity}^{Entities} (Entities - 1) \cdot \mathrm{neighbours}(Entity)
$$
Ovvero:
$$
\color{SkyBlue} (Entities - 1) \cdot (2 \cdot Channels)
$$

Per un totale di:
$$
{\color{LightCoral} 2 \cdot Channels}
+
{\color{SpringGreen} 2 \cdot Channels}
+
{\color{SkyBlue} (Entities - 1) \cdot (2 \cdot Channels)}
$$

Ovvero:
$$
(Entities + 3) \cdot (2 \cdot Channels)
$$
In [[notazione asintotica]]:
$$
\Large O(Entities \cdot Channels)
$$

### [[routing memory]]

> [!Note]
> Ogni [[entità]] si deve salvare le informazioni per *tutta* la [[rete di comunicazione]]!
