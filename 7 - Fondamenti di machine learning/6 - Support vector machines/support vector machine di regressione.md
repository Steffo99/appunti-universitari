estensione della [[support vector machine]] per [[problema di regressione|problemi di regressione]].

Invece che cercare un [[iperpiano]] che separa i punti, si vuole cercare un [[iperpiano]] che vi ci si avvicini il più possibile, usando una [[epsilon-insensitive loss|funzione perdita epsilon-insensitive]].

Si ha quindi:
$$
\def \varXI {{\color{orangered} \mathbf{x}_i}}
\def \varYI {{\color{gold} y_i}}
\def \varKI {{\color{springgreen} k_i}}
\def \varLI {{\color{mediumspringgreen} l_i}}
\def \varW {{\color{turquoise} \mathbf{w}}}
\def \varB {{\color{darkturquoise} b}}
\def \varL {\mathbf{l}}
\def \varK {\mathbf{k}}

\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\forall & \varKI & \in & \varK\\
		\? & \par{ \varW, \varB } & \?
	\end{matrix}\\\\
	\Large
	\min_{\varW,\ \varK} \par{
		\frac{\varW \cdot \varW}{2}
		+
		c
		\cdot
		\sum_{\varKI \in \varK} \loss_{\varKI} \par{\varYI, \varXI}
	}
}
$$

## Formulazione alternativa

All'interno del margine, abbiamo che la somma della [[distanza non-segnata tra punto e iperpiano|distanza]] tra i due [[iperpiano|iperpiani]] è sempre la stessa, perchè allontanandocisi da uno ci si avvicina a quell'altro della stessa quantità.

Possiamo allora formulare $\loss$ come la somma di due variabili slack, $\varKI + \varLI$: ==TODO: Doublecheck==
$$
\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\forall & \varKI & \in & \varK\\
		\forall & \varLI & \in & \varL\\
		\? & \varKI & : & \varKI \leq 0\\
		\? & \varLI & : & \varLI \leq 0\\
		\? & \par{ \varW, \varB } & : & +\varYI - \par{ \varW \cdot \varXI + \varB } \leq \epsilon - \varKI\\
		\? & \par{ \varW, \varB } & : & -\varYI + \par{ \varW \cdot \varXI + \varB } \leq \epsilon - \varLI\\
	\end{matrix}\\\\
	\Large
	\min_{\varW,\ \varK} \par{
		\frac{\varW \cdot \varW}{2}
		+
		c
		\cdot
		\sum_{\varLI \in \varL}
		\sum_{\varKI \in \varK} \par{ \varKI + \varLI }
	}
}
$$


## Formulazione alternativa duale

Possiamo usare il [[duale di ottimizzazione vincolata|teorema di Wolfe]] sulla [[#Formulazione alternativa|formulazione alternativa]] per ottenere:

==Non ho idea di cosa voglia dire.==