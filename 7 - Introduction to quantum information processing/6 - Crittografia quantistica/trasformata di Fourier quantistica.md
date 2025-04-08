---
aliases:
  - quantum Fourier transform
  - QFT
---
$$
\def \vU {\qU[{\func[Fourier]}]}
\def \vX {{\color{mediumturquoise} x}}
\def \vXT {{\color{darkturquoise} \tilde{x}}}
\def \vY {{\color{orchid} y}}
\def \vNN {{\color{orange} N}}
\def \vN {{\color{gold} n}}

\tiny
\vU
\qquad
\vX \ \vXT
\qquad
\vY
\qquad
\vNN \ \vN
$$

[[algoritmo]] per inizializzare una combinazione di [[stato quantistico|stati]] [[entanglement|entangled]] $\ket{\vXT}$ in modo tale che le loro [[fase di uno stato quantistico|fasi]] corrispondando al risultato di una [[trasformata di Fourier discreta]], definendo così una [[base di Fourier]].

## Scopo

Creare una trasformata simile permette di sfruttare la [[quantum tradeoff|parallelizzazione quantistica]] per futuri scopi, come risolvere il [[problema di ricerca del periodo discreto]].

Il [[quantum tradeoff]] è però che non si viene a conoscenza di tutte le [[armonica|armoniche]] che compongono la funzione.

## Costruzione intuitiva

Immaginiamo la circonferenza data dalla fase di ciascuno [[stato quantistico|stato di un qbit]].

Vogliamo che lo [[stato quantistico|stato]] $\ket{\vXT}$ faccia $\vXT$ rotazioni in essa, in $\vN$ passi (uno per ogni possibile [[stato quantistico base]]).

> [!Example]- Esempio: Caso a 2-qbit
> 
> Con soli due [[qbit]] abbiamo un passo di $\frac{2 \cdot \pi \cdot {\color{gold} 2}}{2} = \frac{\pi}{2}$.
> 
> Con i coefficienti non semplificati, questo darà:
> $$
> \begin{matrix}
> \ket{\tilde{0}}_2 &=& \frac{1}{2} & \cdot & ( & 1^0 & \ket{0}_2 & + & 1^1 & \ket{1}_2 & + & 1^2 & \ket{2}_2 & + & 1^3 & \ket{3}_2 & )
> \\
> \ket{\tilde{1}}_2 &=& \frac{1}{2} & \cdot & ( & \i^0 & \ket{0}_2 & + & \i^1 & \ket{1}_2 & + & \i^2 & \ket{2}_2 & + & \i^3 & \ket{3}_2 & )
> \\
> \ket{\tilde{2}}_2 &=& \frac{1}{2} & \cdot & ( & \par{-1}^0 & \ket{0}_2 & + & \par{-1}^1 & \ket{1}_2 & + & \par{-1}^2 & \ket{2}_2 & + & \par{-1}^3 & \ket{3}_2 & )
> \\
> \ket{\tilde{3}}_2 &=& \frac{1}{2} & \cdot & ( & \par{-\i}^0 & \ket{0}_2 & + & \par{-\i}^1 & \ket{1}_2 & + & \par{-\i}^2 & \ket{2}_2 & + & \par{-\i}^3 & \ket{3}_2 & )
> \end{matrix}
> $$
> 
> Con i coefficienti semplificati:
> $$
> \begin{matrix}
> \ket{\tilde{0}}_2 &=& \frac{1}{2} & \cdot & ( && \ket{0}_2 & + && \ket{1}_2 & + && \ket{2}_2 & + && \ket{3}_2 & )
> \\
> \ket{\tilde{1}}_2 &=& \frac{1}{2} & \cdot & ( && \ket{0}_2 & + & \i & \ket{1}_2 & - && \ket{2}_2 & - & \i & \ket{3}_2 & )
> \\
> \ket{\tilde{2}}_2 &=& \frac{1}{2} & \cdot & ( && \ket{0}_2 & - && \ket{1}_2 & + && \ket{2}_2 & - && \ket{3}_2 & )
> \\
> \ket{\tilde{3}}_2 &=& \frac{1}{2} & \cdot & ( && \ket{0}_2 & - & \i & \ket{1}_2 & - && \ket{2}_2 & + && \ket{3}_2 & )
> \end{matrix}
> $$

Iniziamo a costruire il circuito partendo dal caso a 1-[[qbit]], che, avendo un passo di $\pi$, otteniamo facilmente attraverso l'[[Hadamard gate]]:
$$
\vU \ket{x}
\qeq
\qH[0] \ket{x}
$$

Introduciamo un secondo [[qbit]]; il passo diventa di $\frac{\pi}{2}$, e quindi dobbiamo dimezzare il "valore" di fase del primo [[qbit]], e applicarlo al secondo; possiamo farlo attraverso un [[half-Z gate]]:
$$
\vU \ket{x}_2
\qeq
\qH[0] \qCS{0}{1} \qH[1] \ket{x}_2
$$

Aggiungiamo un terzo [[qbit]]; ora abbiamo un passo di $\frac{\pi}{4}$; per esso, dobbiamo dimezzare ulteriormente i valori dei due precedenti, e stavolta avremo bisogno di un [[quarter-Z gate]]:
$$
\vU \ket{x}_3
\qeq
\qH[0] \qCS{0}{1} \qH[1] \qCT{0}{2} \qCS{1}{2} \qH[2] \ket{x}_3
$$

Aggiungiamo un quarto [[qbit]]; arriviamo a un passo di $\frac{\pi}{8}$; non esistendo nessun gate che applichi una rotazione simile, dobbiamo usare un [[controlled rotation Z gate]]:
$$
\vU \ket{x}_4
\qeq
\qH[0] \qCS{0}{1} \qH[1] \qCT{0}{2} \qCS{1}{2} \qH[2] \qCRZ{0}{3} \par{\frac{\pi}{8}} \qCT{1}{3} \qCS{2}{3} \qH[3] \ket{x}_4
$$

Continuando così, osserviamo che il numero di gates necessari scala quadraticamente, e quindi si ha uno speedup.

> [!Note]
> Gli stati in output sono in ordine invertito!
> 
> - $\ket{\color{darkturquoise} \tilde{0}}_2 = \ket{\color{mediumturquoise} 3}_2$
> - $\ket{\color{darkturquoise} \tilde{1}}_2 = \ket{\color{mediumturquoise} 2}_2$
> - $\ket{\color{darkturquoise} \tilde{2}}_2 = \ket{\color{mediumturquoise} 1}_2$
> - $\ket{\color{darkturquoise} \tilde{3}}_2 = \ket{\color{mediumturquoise} 0}_2$
> 
> Questo si può opzionalmente correggere con un numero di [[swap gate]] pari alla metà del numero di [[qbit]], arrondato per difetto.

## #TODO ==Costruzione matematica==

Implementiamo la trasfromata con un gate, che chiamiamo $\vU$, tale che:
$$
\Large
\vU \ket{\Psi}
\qeq
\ket{\tilde{\Psi}}
$$


Essa richiederà un registro di input di $\vN = \log \par{N}$ [[qbit]], che chiamiamo $\ket{\vX}_\vN$:
$$
\Large
\vU \ket{\vX}_\vN
\qeq
\ket{\vXT}_\vN
$$


Questo avviene creando su ogni [[qbit]] una [[superposizione]] tale che riproduca il [[periodo]] della funzione che vogliamo implementare:
$$
\Large
\ket{\vXT}_\vN
\qeq
\frac{1}{2^{\frac{\vN}{2}}}
\cdot
\sum_{\vY = 0}^{2^\vN - 1}
\par{
	e^{\frac{2 \pi \i \cdot \vX \cdot \vY}{2^\vN}}
	\cdot
	\ket{\vY}
}
$$

Riscriviamo la formula della trasformata in un modo un po' diverso:
$$
\Large
\ket{\vXT}_\vN
\qeq
\frac{1}{2^{\frac{\vN}{2}}}
\cdot
\sum_{\vY = 0}^{2^\vN - 1}
\par{
	e^{2^{1 - \vN}}
	\cdot
	e^{\pi \i \cdot \vX \cdot \vY}
	\cdot
	\ket{\vY}
}
$$

Ricordiamo che, - $e^{\pi \i} = -1$ e che $\frac{1}{2^{\frac{\vN}{2}}} \cdot \sum_{\vY = 0}^{2^\vN - 1} \par{(-1)^{\vX \cdot \vY} \ket{\vY}_\vN} = \qH \ket{\vX}_\vN$, possiamo quindi scrivere la trasformata come: ==Forse?==
$$
\Large
\ket{\vXT}_\vN
\qeq
\frac{1}{2^{\frac{\vN}{2}}}
\cdot
\sum_{\vY = 0}^{2^\vN - 1}
\par{
	e^{2^{1 - \vN}}
}
\times
\frac{1}{2^{\frac{\vN}{2}}}
\cdot
\sum_{\vY = 0}^{2^\vN - 1}
\par{
	e^{\pi \i \cdot \vX \cdot \vY}
	\cdot
	\ket{\vY}
}
$$

Ovvero, chiamando la parte a sinistra $\qV[(\vX)]$: ==FORSE???==
$$
\Large
\ket{\vXT}_\vN
\qeq
\qV[(\vX)] \ \qH \ \ket{0}_\vN
$$




## Collegamenti interessanti

- [Visualizzazione della QFT su Quirk](https://algassert.com/quirk#circuit=%7B%22cols%22:%5B%5B%22Counting5%22%5D,%5B1,1,1,1,%22H%22%5D,%5B1,1,1,%22%E2%80%A2%22,%22Z%5E%C2%BD%22%5D,%5B1,1,%22%E2%80%A2%22,1,%22Z%5E%C2%BC%22%5D,%5B1,%22%E2%80%A2%22,1,1,%22%7Ekutr%22%5D,%5B%22%E2%80%A2%22,1,1,1,%22%7En7uj%22%5D,%5B1,1,1,%22H%22%5D,%5B1,1,%22%E2%80%A2%22,%22Z%5E%C2%BD%22%5D,%5B1,%22%E2%80%A2%22,1,%22Z%5E%C2%BC%22%5D,%5B%22%E2%80%A2%22,1,1,%22%7Ekutr%22%5D,%5B1,1,%22H%22%5D,%5B1,%22%E2%80%A2%22,%22Z%5E%C2%BD%22%5D,%5B%22%E2%80%A2%22,1,%22Z%5E%C2%BC%22%5D,%5B1,%22H%22%5D,%5B%22%E2%80%A2%22,%22Z%5E%C2%BD%22%5D,%5B%22H%22%5D%5D,%22gates%22:%5B%7B%22id%22:%22%7El1a6%22,%22matrix%22:%22%7B%7B0.9807853-0.1950903i,0%7D,%7B0,0.9807853+0.1950903i%7D%7D%22%7D,%7B%22id%22:%22%7Ekutr%22,%22name%22:%221/16%22,%22matrix%22:%22%7B%7B0.9807853-0.1950903i,0%7D,%7B0,0.9807853+0.1950903i%7D%7D%22%7D,%7B%22id%22:%22%7En7uj%22,%22name%22:%221/32%22,%22matrix%22:%22%7B%7B0.9951847-0.0980171i,0%7D,%7B0,0.9951847+0.0980171i%7D%7D%22%7D%5D%7D)

[^circuit]: https://cnot.io/quantum_algorithms/qft/