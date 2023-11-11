[[algoritmo]] di [[fully synchronous leader election]].

## [[restrizioni al modello dei sistemi distribuiti|Restrizioni]] aggiuntive

- **[[restrizione di topologia|Topologia]]**
	- [[anello]] di dimensione nota
- **[[9 - Algoritmi distribuiti/1 - Problemi/tempo|Tempo]]**
	- [[risveglio ignorato]]

## [[Comportamento]]

> [!Summary]
> Ogni [[entità]] aspetta un tempo dipendente dal valore dell'identificatore, inviando il suo [[identificatore]] alla successiva al termine dell'attesa.
> 
> Quando una [[entità]] in attesa riceve l'identificatore di un'altra, la accetta come [[leader]] e termina.

==Spiegare come scegliere il tempo?==

## [[algoritmo corretto|Correttezza]]

> [!Success]
> Prima o poi, un'[[entità]] terminerà la sua attesa, e farà circolare il suo [[messaggio]] di terminazione da tutte le altre.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities)$ |
| [[tempo]] | Dipende. |

### [[Comunicazione]]

Vengono inviati solamente:
$$
Entities
$$

Quindi, il costo computazionale è di:
$$
\Large O(Entities)
$$

### [[Tempo]]

L'[[identificatore]] minore deve terminare l'attesa per poter notificare della terminazione:
$$
\color{LightCoral} \mathrm{delay}(\min (Identifier))
$$

Poi, deve trascorrere sufficiente tempo per il [[broadcast problem|broadcast]] di terminazione:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{
\color{LightCoral} \mathrm{delay}(\min (Identifier))
}
+
{
\color{SkyBlue} Entities
}
$$

La [[notazione asintotica]] risultante dipende dalla scelta effetuata di $\mathrm{delay}(Identifier)$.