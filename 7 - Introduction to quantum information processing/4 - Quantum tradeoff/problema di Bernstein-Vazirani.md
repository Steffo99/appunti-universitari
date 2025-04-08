[[problema]] che può essere visto come un'estensione del [[problema di Deutsch]].

Data una [[chiave simmetrica|password]] ${\color{gold} a} \in [0, 1]^n$ sconosciuta, e una [[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione|funzione]] $\func : [0, 1]^n \to [0, 1]$ che restituisce la [[somma]] degli [[XOR]] tra argomento e password, si vuole scoprire la password.

> [!Note]
> Suona simile ad un [[one-time pad]], ma non lo è, perchè non cifra nessun valore.

## algoritmo [[modello di calcolo classico|classico]]

È necessario valutare la funzione $n$ volte, chiamandola ogni volta con un [[bit]] diverso attivo, riuscendo così a determinare un bit alla volta della password:
$$
\Large
\func(0001) \quad \func(0010) \quad \func(0100) \quad \func(1000)
$$

## algoritmo [[modello di calcolo quantistico|quantistico]]

Esiste sicuramente un [[universal gate]] che implementa $\func$:
$$
\Large
\mathbf{U}_{\func} \ket{x} \ket{y}
$$

Esso sarà implementato come una sequenza (sconosciuta) di [[controlled Pauli X gate]] aventi un [[qbit]] di $x$ come controllo, e $y$ come output.

$$
\Large
\qCX{0}{4} \qCX{2}{4} \qCX{3}{4} \ket{x} \ket{y}
$$

![[problema di Bernstein-Vazirani.png]]

Allora, possiamo circondarla di [[Hadamard gate]], anche se essa è a scatola chiusa:
$$
\Large
\qH[4] \qH[3] \qH[2] \qH[1] \qH[0] \qCX{0}{4} \qCX{2}{4} \qCX{3}{4} \qH[0] \qH[1] \qH[2] \qH[3] \qH[4] \ket{x} \ket{y}
$$

Ottenendo come risultato l'inversione dei [[qbit]] controllati e di controllo dei [[controlled Pauli X gate]]:
$$
\Large
\qCX{4}{0} \qCX{4}{2} \qCX{4}{3} \ket{x} \ket{y}
$$

Scegliamo di usare come stato iniziale $\ket{0000} \ket{1}$:
$$
\Large
\qCX{4}{0} \qCX{4}{2} \qCX{4}{3} \ket{0000} \ket{1}
$$

Come risultato abbiamo che la password verrà "impressa" nei [[qbit]] di input:
$$
\Large
\ket{1101}\ket{1}
$$

E [[misura|misurandoli]], possiamo scoprire la password intera nonostante $\func$ sia stata eseguita una volta sola:
$$
\Large
1101
$$
