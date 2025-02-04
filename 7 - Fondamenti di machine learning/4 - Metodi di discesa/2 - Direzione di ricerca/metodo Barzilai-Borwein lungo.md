[[metodo per la direzione di ricerca]].
$$
\Huge
\mathbf{D}_{iter} = {\color{orange} \rho_{iter}} \cdot \mathbf{I}\\
$$
Dove:
$$
\Huge
{\color{orange} \rho_{iter}} 
= 
\frac
{{\color{lightcoral} \mathbf{s}_{iter}}^\dagger \times {\color{coral} \mathbf{g}_{iter}}}
{{\color{coral} \mathbf{g}_{iter}}^\dagger \times {\color{coral} \mathbf{g}_{iter}}}
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
{\color{lightcoral} \mathbf{s}_{iter}}
\approx
\mathbf{D}_{iter}
\times
{\color{coral} \mathbf{g}_{iter}}
$$

Applica la stessa cosa del [[metodo Barzilai-Borwein corto]].

## Uso

Si può usare individualmente, o alternare con il [[metodo Barzilai-Borwein corto]].