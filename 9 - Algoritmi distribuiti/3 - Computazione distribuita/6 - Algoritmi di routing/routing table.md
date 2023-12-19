In un contesto di [[routing]], [[hash table|mappa]] da [[router]] destinatario a [[canale di comunicazione]] da utilizzare più [[costo]] totale per raggiungerla.

$$
\def \varSource {{\color{LimeGreen} Source}}
\def \varDestination {{\color{IndianRed} Destination}}
\Large
\varDestination \to 
\begin{pmatrix}
	\textrm{Channel}_{\varSource}(\varDestination)
	\\
	\textrm{Cost}_{\varSource}(\varDestination)
\end{pmatrix}
$$

Implementazione semplice di [[funzione di routing]].

> [!Note]
> ==Il [[principio di ottimalità]] è il motivo per cui è sufficiente salvare solo il [[canale di comunicazione]]!==

## [[costo computazionale]]

### [[search time]]

Un lookup nel [[hash table|dizionario]]:
$$
\Large O(\log(Entities))
$$

### [[routing memory]]

Lo spazio usato dal [[hash table|dizionario]]:
$$
\Large O(Entities \cdot \log(\max(Identifier)))
$$
