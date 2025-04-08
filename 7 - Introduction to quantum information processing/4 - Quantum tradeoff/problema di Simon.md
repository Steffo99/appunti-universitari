[[problema di ricerca]] in cui è apparente il [[quantum tradeoff]].

Data una [[0 - Generale/funzione|funzione]] $\func : [0, 1]^n \to [0, 1]^n$ tale che $\func \par{x \oplus a} = \func \par{x}$ e tale che $x \neq y \oplus a \implies \func \par{x} \neq \func \par{y}$, si vuole determinare la password $a$.

> [!Info] Extra
> È un [[problema del sottogruppo abeliano nascosto]].

## algoritmo [[modello di calcolo classico|classico]]

È necessario valutare la funzione varie volte finchè non si trovano due [[risultato|output]] uguali, un po' come nel [[problema del compleanno]].

$a$ cresce quindi esponenzialmente con il numero di [[bit]] coinvolti $n$, quindi il problema è in:
$$
O \par{ 2^\frac{n}{2} }
$$

## algoritmo [[modello di calcolo quantistico|quantistico]]

Esiste sicuramente un [[universal gate]] $\qU[\func]$ che implementa $\func$:
$$
\Large \ket{x} \ket{y \oplus \func( y ) }= \qU[\func] \ket{x} \ket{y}
$$

Scegliamo come stato iniziale $\ket{0}_n \ket{0}_n$.:
$$
\Large
\ket{0}_n \ket{0}_n
$$

Mettiamolo l'[[9 - Algoritmi distribuiti/1 - Problemi algoritmici/parametro|input]] in [[superposizione uniformemente pesata|equal superposition]]:
$$
\Large
\par{\par{ \prod_{p = 0}^n  \qH[p] } \times \ket{0}_n} \otimes \ket{0}_n
$$

Gli [[stato quantistico|stati]] del sistema quindi saranno nella forma:
$$
\Large
\frac{1}{2^{\frac{n}{2}}}
\cdot
\sum_{p = 0}^n \par{
	\ket{p}_n \ket{0}_n
}
$$

Applichiamo ora $\qU[\func]$, facendo in modo che gli [[stato quantistico|stati]] associno tutti i possibili input ai loro rispettivi output (che non conosciamo):
$$
\Large
\frac{1}{2^{\frac{n}{2}}}
\cdot
\sum_{p = 0}^n \par{
	\ket{p}_n \ket{\func \par{p}}_n
}
$$

Procediamo [[misura|misurando]] i [[qbit]] dell'[[risultato|output]], "selezionando" così uno degli output $q$ ed eliminando tutti gli altri:
$$
\Large
\frac{1}{\sqrt{2}} \cdot \par{
	\ket{\phi}_n \ket{q}_n + \ket{\phi \oplus a}_n \ket{q}_n
}
$$

Se ora applichiamo di nuovo gli [[Hadamard gate]] all'[[input]], ci rimangono solo gli stati dell'output selezionato e del suo corrispondente:
$$
\Large
\par{\par{ \prod_{p=0}^n  \qH[p] } \times \par{ \ket{\phi}_n + \ket{\phi \oplus a}_n  } } \otimes \ket{q}_n
$$

Applicando la regola dell'[[Hadamard gate#circuito quantistico in parallelo|array di Hadamard]], arriviamo a:
$$
\Large
\frac{1}{2^{\frac{\par{n+1}}{2}}}
\sum_{y=0}^{2^n - 1}
\par{
	\par{-1}^{\par{q + \par{q \oplus a}} \odot y}
}
\times \ket{y}_n
$$

Applicando la [[proprietà distributiva]], arriviamo a:
$$
\Large
\frac{1}{2^{\frac{\par{n+1}}{2}}}
\sum_{y=0}^{2^n - 1}
\par{
	\par{-1}^{q \odot y} + \par{-1}^{\par{q \oplus a} \odot y}
}
\times \ket{y}_n
$$

> [!Warning]
> Se la funzione non fosse tale che $x \neq y \oplus a \implies \func \par{x} \neq \func \par{y}$, otterremmo qui una [[distribuzione uniforme]], e quindi una $y$ completamente casuale.

Interpretiamo gli stati: i due termini della somma si annullano quando $q \odot y$ e $\par{q \oplus a} \odot y$  sono uno pari e uno dispari, quindi ora se [[misura|misuriamo]] il registro di input otterremo un valore $z$ tale che[^untangled]:
$$
\Large
q \odot z = \par{q \oplus a} \odot z
$$

Per la [[proprietà distributiva]]:
$$
\Large
\par{q \odot z} = \par{q \odot z} \oplus \par{a \odot z} 
$$

Semplificando, arriviamo quindi a:
$$
\Large
a \odot z = 0
$$

Ovvero, che $a$ e $z$ hanno un [[numero pari]] di [[bit]] [[modulo-2 bitwise inner product|in comune]].

Immagazziniamo $z$, poi ripetiamo l'[[algoritmo]], molto probabilmente ottenendo così un valore $z$ diverso.

Continuamo fino a quando non abbiamo $n$ "$z$" diverse, così potremo scoprire finalmente $a$.

Il problema quindi è in:
$$
O \par{n}
$$

[^untangled]: https://medium.com/quantum-untangled/simons-algorithm-quantum-algorithms-untangled-62c8f81ed27a
