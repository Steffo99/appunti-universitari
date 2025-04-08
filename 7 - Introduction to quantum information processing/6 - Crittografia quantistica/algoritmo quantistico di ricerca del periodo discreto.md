[[algoritmo]] [[modello di calcolo quantistico|quantistico]] per la soluzione di [[problema di ricerca del periodo discreto]].

## Algoritmo

1. Creiamo una [[superposizione uniformemente pesata|equal superposition]] sul registro di input.
2. Applichiamo il gate $\qU[\func]$ che implementa la funzione di cui ricerchiamo il periodo.
3. [[misura|Misuriamo]] il registro di output $\qM[(output)]$.
	- Praticamente, abbiamo applicato il [[problema di Simon]].
	- L'input si riduce a un sottoinsieme di stati per cui la funzione ha lo stesso output.
4. Applichiamo la [[trasformata di Fourier quantistica|quantum Fourier transform]] $\qU[{\func[Fourier]}]$ al registro di ingresso.
	- Invece che solo l'[[Hadamard gate]] del [[problema di Simon]].
5. [[misura|Misuriamo]] il registro di input $\qM[(input)]$.
6. Dividendo il risultato per $N$, otteniamo un valore uguale a uno dei fattori del periodo.
7. Accumuliamo moltiplicativamente il fattore in una variabile `tentative_period *= factor`
8. Controlliamo se `f(0) = f(tentative_period)`; se non lo è, significa che ci mancano dei fattori, e ripetiamo la procedura fino a quando non li avremo trovati tutti.

