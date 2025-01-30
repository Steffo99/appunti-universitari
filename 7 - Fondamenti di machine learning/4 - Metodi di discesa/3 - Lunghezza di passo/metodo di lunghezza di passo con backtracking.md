[[metodo di lunghezza di passo]].

Prova inizialmente un valore di $\alpha$ arbitrario, poi, se non soddisfa il seguente requisito, lo riduce di una frazione fissa $\beta$:

$$
\Large
\func \par{
	\mathbf{x}_{iter}
	+
	\alpha
	\cdot 
	\mathbf{d}_{iter}
}
\leq
{\color{yellow}
	\func \par{
		\mathbf{x}_{iter}
	}
}
$$

> [!Error] Regola mal posta
> Non garantisce che i punti $\mathbf{x}_{iter}$ risultanti siano [[punto stazionario|punti stazionari]], ma solo [[punto di accumulazione|punti di accumulazione]], quindi non è [[ben posto|ben posta]]!
