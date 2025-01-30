[[7 - Fondamenti di machine learning/6 - Ottimizzazione vincolata/vincolo|vincolo]] in cui si richiede che una data [[0 - Generale/funzione|funzione]] abbia valore [[non-positività|non-positivo]].

$$
\Large
\func[g]_{i} \par{ \mathbf{x} } \leq 0
$$

Tutti i vincoli di uguaglianza relativi a una [[regione ammissibile]] possono essere rappresentato come un [[array|vettore]] di funzioni:
$$
\large
\func[h] \par{ \mathbf{x} }
=
\begin{bmatrix}
	\func[h]_0 \par{ \mathbf{x} }\\
	\func[h]_1 \par{ \mathbf{x} }\\
	\vdots\\
	\func[h]_n \par{ \mathbf{x} }	
\end{bmatrix}
= 
\begin{bmatrix}
	0\\
	0\\
	\vdots\\
	0	
\end{bmatrix}
\leq
\mathbf{0}
$$
