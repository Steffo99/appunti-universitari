Per effettuare una [[computazione quantistica]] si procede per passi:

1. Si crea una [[superposizione uguale]] sui [[qbit]] in [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/parametro|input]].
2. Si introducono [[qbit]] di [[risultato|output]] inizializzati a un valore costante.
3. Si applica un [[gate complesso]] che effettua la computazione classica con i [[qbit]] in [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/parametro|input]].
4. Si [[misura|misurano]] i [[qbit]] in [[risultato|output]].

In notazione matematica, questa procedura è rappresentata come:

$$
\Huge
\mathbf{U}_f \ \left( \ket{x}_{input} \otimes \ket{y}_{output} \right) 
= 
\ket{x}_{input} \otimes \ket{y \oplus f(x)}_{output}
$$