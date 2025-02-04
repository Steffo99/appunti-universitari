Particolare [[funzione a variabili multiple]].

$$
\par{\frac{1}{2} \cdot \mathbf{x}^\dagger \cdot \mathbf{Q} \cdot \mathbf{x}}
+ 
\par{\mathbf{b}^\dagger \cdot \mathbf{x}}
+ 
\par{\mathbf{c}}
$$
dove: 
- $\mathbf{x}$ è il [[array|vettore]] [[input]],
- $\mathbf{b}$ e $\mathbf{c}$ sono [[vettore|vettori]] costanti dello stesso ordine di $\mathbf{x}$,
- $\mathbf{Q}$ è una [[matrice simmetrica]] costante dello stesso ordine di $\mathbf{x}$.

## Formulazione alternativa

$$
\par{
	\frac{1}{2} 
	\cdot 
	\par{\mathbf{x} - \mathbf{v}}^\dagger
	\cdot
	\mathbf{Q}
	\cdot
	\par{\mathbf{x} - \mathbf{v}}
}
+
\par{
\mathbf{w}
}
$$
dove:
- $\mathbf{v}$ è un [[array|vettore]] costante dello stesso 
- $\mathbf{b} = - \mathbf{Q} \cdot \mathbf{v}$
- $\mathbf{w} = \mathbf{c} - \frac{1}{2} \cdot \mathbf{v}^\dagger \cdot \mathbf{Q} \cdot \mathbf{v}$;
