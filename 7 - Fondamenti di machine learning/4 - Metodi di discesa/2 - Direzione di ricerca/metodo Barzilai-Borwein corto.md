[[metodo per la direzione di ricerca]].
$$
\Huge
\mathbf{D}_{iter} = {\color{orange} \rho_{iter}} \times \mathbf{I}\\
$$
Dove:
$$
\Huge
{\color{orange} \rho_{iter}} 
= 
\frac
{{\color{lightcoral} \mathbf{s}_{iter}}^\dagger \times {\color{lightcoral} \mathbf{s}_{iter}}}
{{\color{lightcoral} \mathbf{s}_{iter}}^\dagger \times {\color{coral} \mathbf{g}_{iter}}}
$$
Ancora, dove:
$$
{\color{lightcoral} \mathbf{s}_{iter}} = {\color{lightcoral} \mathbf{x}_{iter} - \mathbf{x}_{iter - 1} }
$$
$$
{\color{coral} \mathbf{g}_{iter}} = {\color{coral} \nabla \func \par{ \mathbf{x}_{iter} } - \nabla \func \par{ \mathbf{x}_{iter - 1} } }
$$


> [!Success] Aspetti positivi
> 
> ==TODO==

> [!Failure] Aspetti negativi
> 
> Perchè il metodo sia [[metodo di discesa#Requisiti|ben posto]], ${\color{orange} \rho_{iter}}$ deve essere [[clamp|limitata]] in alto e in basso da due [[parametri di salvaguardia]].

## Derivazione

Vogliamo provare ad approssimare la seguente regola del [[metodo quasi-Newton]]:
$$
{\color{coral} \mathbf{g}_{iter}}
\approx
\mathbf{D}_{iter}^{-1}
\times
{\color{lightcoral} \mathbf{s}_{iter}}
$$

Ricordando che abbiamo sostituito $\mathbf{D}_{iter}$ con $\color{orange} \rho_{iter}$, abbiamo:
$$
{\color{coral} \mathbf{g}_{iter}}
\approx
{\color{orange} \rho_{iter}}^{-1}
\times
{\color{lightcoral} \mathbf{s}_{iter}}
$$

Creiamo un'ulteriore variabile, $\color{gold} \overline{\rho_{iter}}$, corrispondente all'inverso di $\color{orange} \rho_{iter}$:
$$
{\color{coral} \mathbf{g}_{iter}}
\approx
{\color{gold} \overline{\rho_{iter}}}
\times
{\color{lightcoral} \mathbf{s}_{iter}}
$$

Definiamo la funzione $\func[fa]_{iter}$ come lo [[scarto quadratico]] tra i due lati dell'approssimazione: ==Da dove viene fuori quell'1/2?==
$$
\func[fa]_{iter} \par{
	{\color{gold} \overline{\rho_{iter}}}
}
=
\frac{1}{2} \cdot \abs{ 
	{\color{coral} \mathbf{g}_{iter}}
	-
	{\color{gold} \overline{\rho_{iter}}}
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}^2
$$

Abbiamo quindi:
$$
\func[fa]_{iter} \par{
	{\color{gold} \overline{\rho_{iter}}}
}
=
\par{
	\frac{1}{2}
	\cdot
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
-
\par{
	\frac{2}{2}
	\cdot
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
+
\par{
	\frac{1}{2}
	\cdot
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{coral} \mathbf{g}_{iter}}
}
$$

Vogliamo trovare il punto per cui il valore di $\func[fa]_{iter}$ è [[minimo globale]]:
$$
\min \par{ \func[fa]_{iter} \par{\color{gold} \overline{\rho_{iter}}} }
$$

Passando alla derivata:
$$
\func[fa]_{iter}' \par{
	{\color{gold} \overline{\rho_{iter}}}
}
=
\par{
	\frac{2}{2}
	\cdot
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
-
\par{
	\frac{2}{2}
	\cdot
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
$$
Cioè:
$$
\func[fa]_{iter}' \par{
	{\color{gold} \overline{\rho_{iter}}}
}
=
\par{
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
-
\par{
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
$$

Il [[minimo globale]] è il punto in cui ${\color{gold} \overline{\rho_{iter}}} = 0$, quindi:
$$
\par{
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{lightcoral} \mathbf{s}_{iter}}^2
}
-
\par{
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
=
0
$$

Portando dall'altro lato:
$$
\par{
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
=
\par{
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
$$

Dividendo:
$$
\frac{
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}{
	{\color{gold} \overline{\rho_{iter}}}
	\cdot
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
=
1
$$

Portando dall'altro lato:
$$
{\color{gold} \overline{\rho_{iter}}}
=
\frac{
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}{
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
$$

E infine, invertendo da entrambi i lati:
$$
{\color{orange} \rho_{iter}}
=
\frac{
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}{
	{\color{coral} \mathbf{g}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}
$$

Se preferiamo la forma con ${\color{coral} \mathbf{g}_{iter}}$ a destra, possiamo applicare la proprietà commutativa sia sopra sia sotto alla frazione:
$$
{\color{orange} \rho_{iter}}
=
\frac{
	-\ 
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}{
	-\ 
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{coral} \mathbf{g}_{iter}}
}
$$

In cui ovviamente i $-$ si annullano:
$$
\Large
{\color{orange} \rho_{iter}}
=
\frac{
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{lightcoral} \mathbf{s}_{iter}}
}{
	{\color{lightcoral} \mathbf{s}_{iter}}^\dagger
	\times
	{\color{coral} \mathbf{g}_{iter}}
}
$$
## Uso

Si può usare individualmente, o alternare con il [[metodo Barzilai-Borwein lungo]].
