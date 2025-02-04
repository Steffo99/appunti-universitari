[[metodo di lunghezza di passo]].

$$
\Huge
\alpha_{iter}
= 
\min_{{\color{orange} \alpha} \in {\color{yellow} \mathbb{R}}} 
\func \par{
	\mathbf{x}_{iter} + {\color{orange} \alpha} \cdot \mathbf{d}_{iter}
}
$$
Calcola effettivamente il [[minimo globale]] della funzione $\func \par{\mathbf{x}_{iter} + {\color{orange} \alpha} \cdot \mathbf{d}_{iter}}$.

> [!Success] Aspetti positivi
> È la regola che ottiene una riduzione della [[perdita]] maggiore.

> [!Failure] Aspetti negativi
>
> È la regola più complessa da calcolare.

## In funzioni quadratiche

Assumiamo che la [[funzione]] $\func$ sia una [[funzione quadratica a variabili multiple]] $\func = \par{\frac{1}{2} \cdot \mathbf{x}^\dagger \cdot \mathbf{Q} \cdot \mathbf{x}} + \par{\mathbf{b}^\dagger \cdot \mathbf{x}} + \par{\mathbf{c}}$.

Svolgendo i passaggi per determinare il [[minimo globale]] $\min_{\color{orange} \alpha} \func \par{	\mathbf{x}_{iter} + {\color{orange} \alpha} \cdot \mathbf{d}_{iter}}$, abbiamo che:
$$
\Large
\alpha_{iter}
=
-
\frac
{\mathbf{d}_{iter}^\dagger \times \par{ \mathbf{Q} \times \mathbf{x}_{iter} + \mathbf{b} }}
{\mathbf{d}_{iter}^\dagger \times \mathbf{Q} \times \mathbf{d}_{iter}}
$$
