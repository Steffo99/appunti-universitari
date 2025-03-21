Dimostriamo che il [[gradiente]] di una [[0 - Generale/funzione|funzione]] [[funzione quadratica a variabili multiple|quadratica]] $q (\mathbf{x})$ è $\mathbf{0}$.

Vogliamo determinarne il [[gradiente]]:
$$
\Large
\nabla \par{
\par{\frac{1}{2} \cdot \mathbf{x}^\dagger \cdot \mathbf{Q} \cdot \mathbf{x}}
+ 
\par{\mathbf{b}^\dagger \cdot \mathbf{x}}
+ 
\par{\mathbf{c}}
}
$$

> [!Note]
> Esiste una formulazione alternativa della [[funzione quadratica a variabili multiple]].
> 
> Dati:
> - $\mathbf{b} = - \mathbf{Q} \cdot x_0$
> - $\bar{\mathbf{c}} = \mathbf{c} - \frac{1}{2} \cdot \mathbf{x_0}^\dagger \cdot \mathbf{Q} \cdot \mathbf{x_0}$;
> 
> allora:
> $$
> q(\mathbf{x}) 
> = 
> \frac{1}{2} 
> \cdot 
> \par{x - x_0}^\dagger
> \cdot
> \mathbf{Q}
> \cdot
> \par{x - x_0}
> +
> \bar{c}
> $$

Per farlo, possiamo semplificare la formula applicando le [[regole di derivazione]] ==(per i vettori sono leggermente diverse, andrebbero specificate)==:
$$
\displaylines{
	\frac{1}{2} \cdot \nabla \par{ \color{SandyBrown} \mathbf{x}^\dagger \cdot \mathbf{Q} \cdot \mathbf{x} } + \nabla \par{ \color{SandyBrown} \mathbf{b}^\dagger \cdot \mathbf{x}} + 0
	=\\
	\frac{1}{2} \cdot \nabla \par{ \color{SandyBrown} \mathbf{x}^\dagger } \cdot \mathbf{Q} \cdot \mathbf{x} + \frac{1}{2} \cdot \mathbf{x}^\dagger \cdot \nabla \par{ \color{SandyBrown} \mathbf{Q} \cdot \mathbf{x} } + \nabla \par{ \color{SandyBrown} \mathbf{b}^\dagger} \cdot \mathbf{x} + \nabla \par{ \color{SandyBrown} \mathbf{x}^\dagger} \cdot \mathbf{b} + 0 
	=\\
	\frac{1}{2} \cdot 1 \cdot \mathbf{Q} \cdot \mathbf{x} + \frac{1}{2} \cdot \mathbf{x}^\dagger + 0 + \mathbf{b} + 0
	=\\
	\frac{1}{2} \cdot \mathbf{Q} \cdot 2 \cdot \mathbf{x} + \mathbf{b}
	=\\
	\mathbf{Q} \cdot \mathbf{x} + \mathbf{b}
}
$$
==In che magico modo $\mathbf{x}$ e $\mathbf{x}^\dagger$ si sommano?==

Abbiamo come risultato un [[iperpiano]]:
$$
\Huge
\mathbf{Q} \cdot \mathbf{x} + \mathbf{b}
$$

Ovviamente, l'[[matrice Hessiana|Hessiana]] risulterà essere $\mathbf{Q}$, essendo $\mathbf{Q} \cdot \mathbf{x} + \mathbf{b}$ una funzione lineare.

==Something something differenza di gradienti?==
