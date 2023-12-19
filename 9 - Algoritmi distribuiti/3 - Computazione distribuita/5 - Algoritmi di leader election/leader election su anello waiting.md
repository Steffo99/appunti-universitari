[[algoritmo]] di [[fully synchronous leader election]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di topologia|Topologia]]**
	- [[anello]] di dimensione nota
- **[[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo|Tempo]]**
	- [[risveglio ignorato]]

## [[comportamento]]

> [!Summary]
> Ogni [[entità]] aspetta un tempo proporzionale al valore del suo [[identificatore]] e al tempo necessario per un [[messaggio]] di attraversare tutto l'anello, inviando il suo [[identificatore]] alla successiva al termine dell'attesa.
> 
> Quando una [[entità]] in attesa riceve l'identificatore di un'altra, la accetta come [[leader]] e termina.

$$
\Large \mathrm{sleep}(Entities \cdot Identifier)
$$

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Prima o poi, un'[[entità]] terminerà la sua attesa, e farà circolare il suo [[messaggio]] di terminazione da tutte le altre.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | Dipende. |

### [[comunicazione]]

Vengono inviati solamente:
$$
Entities
$$

Quindi, il costo computazionale è di:
$$
\Large O(Entities)
$$

### [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]]

L'[[identificatore]] minore deve terminare l'attesa per poter notificare della terminazione:
$$
\color{LightCoral} \mathrm{sleep}(\min (Identifier))
$$

Poi, deve trascorrere sufficiente tempo per il [[broadcast problem|broadcast]] di terminazione:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{
\color{LightCoral} \mathrm{sleep}(\min (Identifier))
}
+
{
\color{SkyBlue} Entities
}
$$

La [[notazione asintotica]] risultante dipende dalla scelta effetuata di $\mathrm{delay}(Identifier)$.