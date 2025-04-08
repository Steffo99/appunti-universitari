---
aliases:
  - Grover algorithm
  - cerchio di Grover
  - Grover circle
---
[[algoritmo]] [[modello di calcolo quantistico|quantistico]] per [[problema di ricerca in insieme finito]].

## Algoritmo

### Implementazione dell'oracolo

Esiste sicuramente un [[universal gate]] che implementa $\func$:
$$
\Large
\qU[\func]
$$

Esso richiederà un registro di input di $n = \log \par{N}$ [[qbit]], più un registro di output di $1$ [[qbit]]:
$$
\Large
\ket{x}_n \otimes \ket{y}
$$

Il gate è sicuramente equivalente a:
1. una catena di [[Pauli X gate]] applicati a un [[sottoinsieme]] sconosciuto $secret$ dei [[qbit]] del registro di input $\qX[secret]$
2. un [[Toffoli gate]] con tutto il registro di input $\ket{x}_n$ come controllo e il [[qbit]] di output $\ket{y}$ come controllato, $\qCX{input}{output}$
3. gli stessi [[Pauli X gate]] iniziali, applicati di nuovo, per annullare l'effetto dei primi
$$
\Large \qU[\func] = \qX[secret]\ \qCX{input}{output}\ \qX[secret]
$$

### Inizializzazione del registro di input

Mettiamolo l'[[9 - Algoritmi distribuiti/1 - Problemi algoritmici/parametro|input]] in [[superposizione uniformemente pesata|equal superposition]] per sfruttare lo speedup che ci offre il [[quantum tradeoff]]:
$$
\Large
\par{\par{ \prod_{p = 0}^n  \qH[p] } \times \ket{x}_n} \otimes \ket{y}
$$

Separando gli stati "incorretti" ${\color{red} \sum_{i \neq a}^N \par{\ket{i}_n}}$ dalla soluzione ${\color{lime} \ket{a}_n}$, ci troviamo nello stato:
$$
\Large
\frac{1}{2^{\frac{n}{2}}} 
\cdot
\par{ {\color{red} \sum_{i \neq a}^N \par{\ket{i}_n}} + {\color{lime} \ket{a}_n}} \otimes \ket{y}
$$

Chiamiamo la somma degli stati "incorretti" ${\color{red} \ket{a_\perp}_n}$, e otteniamo:
$$
\Large
\frac{1}{2^{\frac{n}{2}}} 
\cdot
\par{ {\color{red} \ket{a_\perp}_n} + {\color{lime} \ket{a}_n}} \otimes \ket{y}
$$

Infine, chiamiamo questa [[superposizione uniformemente pesata|equal superposition]] ${\color{orangered} \ket{\Phi}}$; ci troviamo nello stato:
$$
\Large
{\color{orangered} \ket{\Phi}} \otimes \ket{y}
$$

### Manipolazione del registro di output

Impostiamo il registro di output $\ket{y}$ a $\ket{-}$.

Se il registro di output fosse impostato a $\ket{0}$, manterrebbe intatto il registro di input e modificherebbe appropriatamente il registro di output:
$$
\Large
\qU[\func] \par{ \par{ {\color{red} \ket{a_\perp}_n} + {\color{lime} \ket{a}_n}} \otimes \ket{0} }
\quad = \quad
{\color{red} \ket{a_\perp}_n \otimes \ket{0}} + {\color{lime} \ket{a}_n \otimes \ket{1}}
$$

Con il registro di output impostato a $\ket{-}$, mantiene uguale il registro di output come [[quantum tradeoff]], ma inverte la [[fase di uno stato quantistico|fase]] di ${\color{lime} \ket{a}_n}$, lasciando intatte le altre:
$$
\Large
\qU[\func] \par{ \par{ {\color{red} \ket{a_\perp}_n} + {\color{lime} \ket{a}_n}} \otimes \ket{-} }
\quad = \quad
\par{{\color{red} \ket{a_\perp}_n} - {\color{lime} \ket{a}_n}} \otimes \ket{-}
$$

Non operando più sul registro di output, lo possiamo escludere, riscrivendo l'[[oracolo]] in questo modo:
$$
\Large
\qU[\func] \ket{x}_n \ket{-} 
\quad = \quad
\qV[\func] \ket{x}_n
$$

Invertire la [[fase di uno stato quantistico|fase]] solo per lo stato ${\color{lime} \ket{a}_n}$ significa prima ***selezionarlo*** attraverso l'operatore di proiezione ${\color{lime} \ket{a}_n \bra{a}_n}$, poi sottrarlo due volte: la prima lo annulla, la seconda lo specchia[^magrover]:
$$
\Large
\qV[\func]\  \ket{x}_n 
\quad = \quad
\par{ \mathbf{1} - 2 \cdot {\color{lime} \ket{a}_n \bra{a}_n } } \ \ket{x}_n
$$

> [!Tip]
> Aiuta ricordare che la proiezione ${\color{lime} \ket{a}_n \bra{a}_n}$ non opera nelle dimensioni della [[fase di uno stato quantistico|fase]] $\qAY$ e $\qAZ$, ma opera nelle dimensioni dei [[qbit]], che includono $\qAX$.

Abbiamo quindi:
$$
\Large
\qV[\func] \quad = \quad \mathbf{1} - 2 \cdot {\color{lime} \ket{a}_n \bra{a}_n }
$$

Scrivendolo esplicitamente:
$$
\Large
\qV[\func]\ {\color{lime} \ket{a}_n} 
\quad = \quad
- {\color{lime} \ket{a}_n}
$$

Tutti gli stati ${\color{red} \ket{a_\perp}_n}$ vengono invece affievoliti, come possiamo vedere scrivendo la formula dell'intero sistema:
$$
\Large
\qV[\func]\ {\color{orangered} \ket{\Phi}} 
\quad = \quad
{\color{orangered} \ket{\Phi}} - \frac{2}{2^{\frac{n}{2}}} \cdot {\color{lime} \ket{a}_n}
$$

### Ripristino delle ampiezze positive

Definiamo un nuovo gate, $\qW$, che invece specchia le [[ampiezza di uno stato quantistico|ampiezze degli stati]] rispetto alla [[superposizione uniformemente pesata|equal superposition]] ${\color{orangered} \ket{\Phi}}$:
$$
\Large
\qW 
\quad = \quad
2 \cdot {\color{orangered} \ket{\Phi} \bra{\Phi}} - \mathbf{1}
$$
> [!Tip]
> Questo corrisponde ad usare come [[asse]] l'ampiezza "media" di tutti gli stati!

In questo modo, lo stato ${\color{lime} \ket{a}_n}$ torna ad un'[[ampiezza di uno stato quantistico|ampiezza]] positiva, più grande di quella degli stati ${\color{red} \ket{a_\perp}_n}$:
$$
\Large
\qW \ {\color{lime} \ket{a}_n} 
\quad = \quad
\frac{2}{2^{\frac{n}{2}}} \cdot {\color{orangered} \ket{\Phi}} - {\color{lime} \ket{a}_n}
$$

Mentre gli stati ${\color{red} \ket{a_\perp}_n}$ rimangono uguali:
$$
\Large
\qW \ {\color{orangered} \ket{\Phi}} 
\quad = \quad
{\color{orangered} \ket{\Phi}}
$$

### Definizione del cerchio di Grover

Generiamo un [[sottospazio vettoriale]] dagli stati ${\color{lime} \ket{a}_n}$ e ${\color{orangered} \ket{\Phi}}$, chiamato ***cerchio di Grover***.

Scegliamo di usare come [[base vettoriale]] ${\color{lime} \ket{a}_n}$ e ${\color{red} \ket{a_\perp}_n}$; possiamo quindi descrivere qualsiasi [[stato quantistico|stato]] come [[combinazione lineare]] di quei due.

Rappresentiamo il sottospazio come una circonferenza di raggio $1$ in cui:
- l'asse verticale va da ${\color{lime} \ket{a}_n}$ a ${\color{red} \ket{a_\perp}_n}$
- l'asse orizzontale va da ${\color{lime} \ket{a}_n} - {\color{red} \ket{a_\perp}_n}$ a ${\color{lime} \ket{a}_n} + {\color{red} \ket{a_\perp}_n}$
![[cerchio di Grover 1.png]]

Descriviamo lo [[stato quantistico|stato]] ${\color{orangered} \ket{\Phi}}$ relativamente al cerchio di Grover:
$$
\Large
{\color{orangered} \ket{\Phi}} 
\quad = \quad
{\color{lime} \frac{1}{\sqrt{N}} \cdot \ket{a}_n} + {\color{red} \frac{\sqrt{N - 1}}{\sqrt{N}} \cdot  \ket{a_\perp}_n}
$$

Esso ha una piccola componente di ${\color{lime} \ket{a}_n}$, e una grande componente di ${\color{red} \ket{a_\perp}_n}$:
![[cerchio di Grover 2.png]]

Chiamiamo l'angolo tra ${\color{orangered} \ket{\Phi}}$ e ${\color{red} \ket{a_\perp}_n}$:
$$
\Large
\widehat{\par{
	{\color{orangered} \ket{\Phi}}
	,\ 
	{\color{red} \ket{a_\perp}_n}
}}
\quad = \quad
\alpha
$$
![[cerchio di Grover 3.png]]

### Gates nel cerchio di Grover 

Possiamo notare dalle formule nelle sezioni precedenti che $\qV[\func]$ e $\qW$ sono [[chiuso|chiuse]] rispetto al cerchio di Grover. 

Per dimostrarlo definitivamente, le scriviamo nella nuova base.

$\qV[\func]$ è:
$$
\qV[\func]
=
\begin{bmatrix}
-1 & 0\\
0 & 1
\end{bmatrix}
$$

$\qW$ è:
$$
\qW
=
\frac{1}{N}
\begin{bmatrix}
2 - N & 2 \cdot \sqrt{N - 1} \\
2 \cdot \sqrt{N - 1} & N - 2
\end{bmatrix}
$$

Un'iterazione dell'algoritmo di Grover corrisponde quindi a:
$$
\qW \qV[\func]
=
\begin{bmatrix}
N - 2 & 2 \cdot \sqrt{N - 1} \\
2 \cdot \sqrt{N - 1} & N - 2
\end{bmatrix}
$$



### Rotazioni nel cerchio di Grover

Quando applichiamo $\qV[\func]$, stiamo specchiando ${\color{orangered} \ket{\Phi}}$ rispetto all'asse verticale, effettuando una rotazione di $2 \cdot \alpha$ in [[senso anti-orario]]:
![[cerchio di Grover 4.png]]

Quando applichiamo $\qW$, invece, stiamo specchiando $\qV {\color{orangered} \ket{\Phi}}$ rispetto al ${\color{orangered} \ket{\Phi}}$ originale, effettuando quindi una rotazione di $4 \cdot \alpha$ in [[senso orario]]:

![[cerchio di Grover 5.png]]

Ci siamo quindi complessivamente avvicinati ad ${\color{lime} \ket{a}_n}$ di $2 \cdot \alpha$!

Ripetendo un'iterazione, ci avvicineremo di altri $2 \cdot \alpha$, e così via.

Dobbiamo fare attenzione però a non fare ***troppe iterazioni***, altrimenti andremo ***oltre*** ${\color{lime} \ket{a}_n}$, e cominceremo ad allontanarci:
![[cerchio di Grover 6.png]]

### Numero delle iterazioni

Per sapere quante iterazioni dobbiamo fare, dobbiamo scoprire il valore di $\alpha$.

Prendiamo il cerchio di Grover, e in particolare il triangolo di $\alpha$: ne conosciamo ipotenusa per definizione di [[stato quantistico]], e cateti dalla precedente descrizione di ${\color{orangered} \ket{\Phi}}$.

L'ipotenusa è ${\color{orangered} 1}$, mentre il cateto è ${\color{lime} \frac{1}{\sqrt{N}}}$; usando l'[[arcoseno]] possiamo arrivare al valore di $\alpha$:
$$
\Large
\alpha
\quad = \quad
\arcsin \par{
	\frac{{\color{lime} \frac{1}{\sqrt{N}}}}{{\color{orangered} 1}}
}
\simeq
\frac{1}{\sqrt{N}}
$$

Possiamo usare l'[[arcoseno]] a tale scopo:
![[cerchio di Grover 7.png]]


Ora possiamo determinare il numero ideale di iterazioni con:
$$
\Large
\par{1 + 2 \cdot iter} \cdot \alpha
\quad = \quad
\frac{\pi}{2}
$$

Cioè:
$$
\Large
\frac{1 + 2 \cdot iter}{\sqrt{N}}
\quad = \quad
\frac{\pi}{2}
$$

Ovvero:
$$
\Large
iter
\quad = \quad
\frac{\pi \cdot \sqrt{N}}{4} - \frac{1}{2}
\quad \sim \quad
\frac{\pi \cdot \sqrt{N}}{4}
$$

### Soluzione

Non resta da fare altro che [[misura|misurare]] i [[qbit]] del registro di input per ottenere la soluzione.

Considerando che ciascuna iterazione ruota di $2 \cdot \alpha$, con il numero ottimale di iterazioni ci troveremo a non più di $\alpha$ di distanza da ${\color{lime} \ket{a}_n}$.

In tal caso, l'[[ampiezza di uno stato quantistico|ampiezza]] in ${\color{lime} \ket{a}_n}$ sarà almeno:
$$
\Large
\cos \par{\alpha}
\quad = \quad
\cos \par{\frac{1}{\sqrt{N}}}
$$

L'[[intensità di uno stato quantistico|intensità]] di conseguenza sarà almeno:
$$
\Large
\cos^2 \par{\alpha}
\quad = \quad
\cos^2 \par{\frac{1}{\sqrt{N}}}
\quad = \quad
1 - \sin^2 \par{\frac{1}{\sqrt{N}}}
\quad \geq \quad
1 - {\frac{1}{\sqrt{N}}}
$$

#TODO ==Simboli a sinistra.==
![[cerchio di Grover 8.png]]

Eventualmente, è possibile verificarne la correttezza attraverso una singola chiamata all'[[oracolo]].

[^magrover]: https://www.youtube.com/watch?v=c30KrWjHaw4

## Scomposizione in gates

### W

Possiamo derivare il gate $\qW$ da [[Hadamard gate]], [[Pauli X gate]], [[Toffoli gate]] e [[controlled Pauli Z gate]].

#TODO ==Controllare==
Per prima cosa, riportiamo a una forma più comune lo stato:
$$
2 {\color{orangered} \ket{\Phi} \bra{\Phi}} - \mathbf{1}
\quad = \quad
\qX \par{1 - 2 {\color{orangered} \ket{\Phi} \bra{\Phi}}} \ \qX
$$

Poi, creiamo l'[[superposizione uniformemente pesata|equal superposition]]:
$$
\par{1 - 2 {\color{orangered} \ket{\Phi} \bra{\Phi}}}
\quad = \quad
\qH \par{ 1 - 2 \ket{0}_n \bra{0}_n } \ \qH
$$

Continuando, possiamo creare la matrice di diffusione con dei [[Pauli X gate]] e un [[controlled Pauli Z gate]]:
$$
1 - 2 \ket{0}_n \bra{0}_n
\quad = \quad
\qX \ \qCZ{(n-1)}{n} \ \qX
$$


#TODO ==Non può essere semplificato?==