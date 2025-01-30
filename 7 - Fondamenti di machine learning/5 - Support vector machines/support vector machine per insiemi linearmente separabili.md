[[modello di supervised learning]] che risolve un [[problema di classificazione binaria]].

Consiste in un [[iperpiano]] $\par{\varW, \varB}$ che soddisfa la seguente condizione:
$$
\def \varXI {{\color{orangered} \mathbf{x}_i}}
\def \varYI {{\color{gold} y_{i}}}
\def \varW {{\color{turquoise} \mathbf{w}}}
\def \varB {{\color{darkturquoise} b}}

\displaylines{
	\forall \par{ \varXI, \varYI } \in \mathbf{D_{train}} \\
	\Large
	\varYI \cdot \par{ \varW \cdot \varXI + \varB } \geq 0
}
$$
dove:
- $\mathbf{D_{train}}$ è il [[training set]] utilizzato;
- $\cdot$ è il [[kernel di una support vector machine|kernel]] utilizzato;
- $\varXI$ è il [[punto]] in input;
- $\varYI$ è il risultato della classificazione, che può essere solo $\color{gold} +1$ o $\color{gold} -1$.

> [!Tip]
> La condizione è quindi che il [[classificatore]] e il risultato della classificazione siano [[segno concorde|concordi]].

Perchè esista una soluzione, richiede che l'[[insieme]] dei [[punto|punti]] risultanti $\color{gold} +1$ e l'[[insieme]] dei [[punto|punti]] risultanti $\color{gold} +1$ siano [[insiemi linearmente separabili|linearmente separabili]].
