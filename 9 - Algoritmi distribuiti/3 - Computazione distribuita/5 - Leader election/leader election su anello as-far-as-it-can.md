[[algoritmo]] di [[leader election]] su [[anello]].

> [!Summary]
> 
> Ogni [[entità]] riceve identificatori dalla precedente, tenendo traccia dell'identificatore minimo ricevuto, e inoltra alla successiva qualsiasi cambiamento al proprio minimo.

## [[algoritmo corretto|Correttezza]]

Quando il futuro [[leader]] avrà ricevuto dalla precedente il suo stesso identificatore, l'algoritmo avrà terminato.

> [!Note]
> 
> La [[terminazione locale|terminazione è locale solo per il leader]], le altre entità hanno bisogno di un [[broadcast problem|broadcast]]. 

## [[costo computazionale distribuito|Costo computazionale]]

==Includere la terminazione nel costo computazionale?==

### [[Comunicazione]]

#### Caso peggiore

Il caso peggiore è quello in cui le [[entità]] sono [[iniziatori multipli|tutte iniziatrici]] e in ordine crescente di [[identificatore]].

Assumendo un [[ritardo di comunicazione unitario]], avremo che:
1. il massimo sarà propagato per $1$ messaggio
2. il secondo massimo sarà propagato per $2$ messaggi
3. $\dots$
4. il minimo sarà propagato per $Entities$ messaggi

Totalizzando:
$$
\sum_{Identifier=1}^{Entities} Identifier
$$

Ovvero:
$$
\frac
{Entities \cdot (Entities + 1)}
{2}
$$

[[notazione asintotica|Asintoticamente]]:
$$
\Large O \left( Entities^2 \right)
$$

#### Caso migliore

Il caso peggiore è quello in cui ==le [[entità]] sono [[iniziatori multipli|tutte iniziatrici]]== e in ordine decrescente di [[identificatore]].

==Assumendo un [[ritardo di comunicazione unitario]]==, avremo che:
1. il minimo sarà propagato per $Entities$ messaggi
2. tutti gli altri per $1$ messaggio

Totalizzando:
$$
Entities
+
\sum_{Identifier=2}^{Entities} 1
$$

Ovvero:
$$
Entities + (Entities - 1)
$$
[[notazione asintotica|Asintoticamente]]:
$$
\Large \Omega \left( Entities \right)
$$

### [[Tempo]]

#### Caso peggiore

Il caso peggiore è quello in cui l'[[entità]] [[iniziatore singolo|iniziatrice è unica]] e alla massima distanza possibile dal futuro [[leader]].

Essa dovrà svegliare il leader, richiedendo:
$$
\color{LightCoral} Entities-1
$$

E poi l'identificatore del leader dovrà viaggiare per tutto l'anello, richiedendo:
$$
\color{SkyBlue} Entities
$$

Per un totale di:
$$
{\color{LightCoral} Entities-1}
+
{\color{SkyBlue} Entities}
$$
Cioè:
$$
2 \cdot Entities - 1
$$
[[notazione asintotica|Asintoticamente]]:
$$
\Large O( Entities )
$$
