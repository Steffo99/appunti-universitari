[[metodo di lunghezza di passo]].

$$
\Huge
\alpha_{iter}
= 
\min_{{\color{orange} \alpha} \in {\color{red} \arr{0, s}}} 
\func \par{
	\mathbf{x}_{iter} + {\color{orange} \alpha} \cdot \mathbf{d}_{iter}
}
$$
Calcola effettivamente il [[minimo locale]] della funzione $\func \par{\mathbf{x}_{iter} + {\color{orange} \alpha} \cdot \mathbf{d}_{iter}}$ nell'intervallo $\color{red} \arr{0, s}$.

> [!Success] Aspetti positivi
> 
> Ottiene una riduzione della perdita migliore rispetto a quella della [[metodo di lunghezza di passo di backtracking Armijo]].
> 
> È meno complessa da calcolare della [[regola di lunghezza di passo di minimizzazione esatta]].

> [!Failure] Aspetti negativi
> 
> Ottiene una riduzione della perdita peggiore rispetto a quella della [[regola di lunghezza di passo di minimizzazione esatta]].
>
> È più complessa da calcolare della [[regola di lunghezza di passo di minimizzazione esatta]].

## In funzioni quadratiche

Assumiamo che la [[funzione]] $\func$ sia una [[funzione quadratica]] $\func = \par{\frac{1}{2} \cdot \mathbf{x}^\dagger \cdot \mathbf{Q} \cdot \mathbf{x}} + \par{\mathbf{b}^\dagger \cdot \mathbf{x}} + \par{\mathbf{c}}$.

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
