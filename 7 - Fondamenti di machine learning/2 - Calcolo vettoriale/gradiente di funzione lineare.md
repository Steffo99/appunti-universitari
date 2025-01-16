Dimostriamo che il [[gradiente]] di una [[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] [[linearità|lineare]] $\funcLinear (\mathbf{x})$ è $\mathbf{0}$.

Dati $\mathbf{a}$ e $\mathbf{b}$ [[vettore|vettori]] costanti, una [[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/funzione]] [[linearità|lineare]] è definita come:
$$
\funcLinear (\mathbf{x}) 
=\
\mathbf{a}^\dagger \cdot \mathbf{x} + \mathbf{b}
$$


Vogliamo determinarne il [[gradiente]]:
$$
\nabla \par{\mathbf{a}^\dagger \cdot \mathbf{x} + \mathbf{b}}
$$

Per farlo, possiamo semplificare la formula applicando le [[regole di derivazione]] ==(per i vettori sono leggermente diverse, andrebbero specificate)==:
$$
\displaylines{
	\nabla \par{ \color{SandyBrown} \mathbf{a}^\dagger \cdot \mathbf{x} + \mathbf{b}} =\\
	\nabla \par{ \color{SandyBrown} \mathbf{a}^\dagger \cdot \mathbf{x}} + \nabla \par{ \color{SandyBrown} b} =\\
	\nabla \par{ \color{SandyBrown} \mathbf{a}^\dagger} \cdot \mathbf{x} + \nabla \par{ \color{SandyBrown} \mathbf{x}^\dagger} \cdot \mathbf{a} + \nabla \par{ \color{SandyBrown} b} =\\
	0 \cdot \mathbf{x} + \mathbf{a} \cdot 1  + 0 =\\
	0 + \mathbf{a} + 0 =\\
	\mathbf{a}
}
$$

Abbiamo come risultato:
$$
\Huge
\mathbf{a}
$$

Ovviamente, l'[[matrice Hessiana|Hessiana]] risulterà essere $\mathbf{0}$, perchè $\mathbf{a}$ è una costante.
