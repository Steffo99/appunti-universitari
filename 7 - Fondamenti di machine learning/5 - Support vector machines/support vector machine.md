Estensione della definizione di [[support vector machine ottimale per insiemi linearmente separabil]].

Introduce un [[vettore]] di [[slack]] $\mathbf{k}$ di dimensione pari alle coppie nel [[dataset per supervised learning|dataset]]:
- se la coppia $i$ è valida per la scelta dell'[[iperpiano]], allora $\varKI = 0.0$;
- se la coppia $i$ non è valida per la scelta dell'[[iperpiano]], allora $\varKI > 0.0$, e in particolare è uguale alla frazione di [[normale]] percorsa per raggiungere il punto.

Si ha quindi:
$$
\def \varXI {{\color{orangered} \mathbf{x}_i}}
\def \varYI {{\color{gold} y_i}}
\def \varKI {{\color{springgreen} k_i}}
\def \varW {{\color{turquoise} \mathbf{w}}}
\def \varB {{\color{darkturquoise} b}}
\def \varK {\mathbf{k}}

\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\forall & \varKI & \in & \varK\\
		\? & \par{ \varW, \varB } & : & \varYI \cdot \par{ \varW \cdot \varXI + \varB } \geq 1 - \varKI\\
	\end{matrix}\\\\
	\Large
	\min_{\varW,\ \varK} \par{
		\frac{\varW \cdot \varW}{2}
		+
		c
		\sum_{\varKI \in \varK} \par{ \varKI }
	}
}
$$
dove:
- $c$ è un parametro che regola quanto il modello deve essere tollerante a misclassificazioni.


> [!Tip]
> 
> Più un [[punto]] si trova lontano dal suo semipiano, più il suo $\varKI$ sarà alto:
> 
> ![[support vector machine.png]]
