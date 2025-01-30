---
aliases:
  - step length selection method
  - learning rate selection method
---
parte di un metodo per la risoluzione di un [[problema di ottimizzazione non vincolato con funzione obiettivo differenziabile]].

Consiste nel determinare la [[passo di un metodo di discesa|lunghezza di passo]] $\alpha_{iter}$ tale per cui:
$$
\Large
\func \par{
	\mathbf{x}_{iter} + \alpha_{iter} \cdot \mathbf{d}_{iter}
}
<
\func \par{
	\mathbf{x}_{iter}
}
$$

> [!Tip]
> Questo avviene dopo aver determinato una [[direzione di discesa]] $\mathbf{d}_{iter}$ con un [[metodo di discesa]].
