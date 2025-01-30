---
aliases:
  - metodo di lunghezza di passo di backtracking in versione monotona
---


[[metodo di lunghezza di passo]] che restringe la [[metodo di lunghezza di passo con backtracking]] per renderla **ben posta**.

Oltre a richiedere che i [[punto|punti]] selezionati riducano la [[perdita]] rispetto all'iterazione precedente, impone che essi la riducano di una quantità significativa.

Richiede la selezione di un parametro ${\color{orange} \sigma} \in \left] 0.0, 1.0 \right[$, che la proporzione tra il cambiamento nella lunghezza di passo e il miglioramento che essa deve apportare:
- $0.0$ corrisponde alla [[metodo di lunghezza di passo con backtracking]], non ponendo nessun limite alla [[passo di un metodo di discesa|lunghezza di passo]];
- $1.0$ richiede che il gradiente attuale venga seguito perfettamente, risultando in una [[passo di un metodo di discesa|lunghezza di passo]] nulla.

Il requisito del backtracking diventa così:
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
\func \par{
	\mathbf{x}_{iter}
}
+
{\color{yellow}
	{\color{orange} \sigma}
	\cdot
	\alpha
	\cdot
	\nabla\ 
	\func \par{
		\mathbf{x}_{iter}
	}^\dagger
	\times
	\mathbf{d}_{iter}
}
$$


> [!Success] Aspetti positivi
> 
> È [[ben posto]].

> [!Failure] Aspetti negativi

## Dimostrazione di convergenza in numero finito di passi

Per poter scrivere in [[forma iterativa]] il requisito del backtracking, dobbiamo prima dividere il parametro $\color{orange} \alpha$ nelle sue due componenti:
- $\color{orange} s_0$, la sua dimensione iniziale;
- $\color{orange} \beta^{step}$, il coefficiente di riduzione dopo $\color{orange} step$ passi.

Quindi, abbiamo che:
$$
\Large
{\color{orange} \alpha} = {\color{orange} s \cdot \beta^{step}}
$$

Vogliamo dimostrare che esiste un passo ${\color{orange} step}$ del backtracking che soddisfa il requisito per l'iterazione corrente:
$$
\displaylines{
	\large
	\exists\ step :
	\\
	\Large
	\func \par{
		\mathbf{x}
		+
		{\color{orange} s \cdot \beta^{step}}
		\cdot 
		\mathbf{d}
	}
	\leq
	\func \par{
		\mathbf{x}
	}
	+
	\sigma
	\cdot
	{\color{orange} s \cdot \beta^{step}}
	\cdot
	\nabla\ 
	\func \par{
		\mathbf{x}
	}^\dagger
	\times
	\mathbf{d}
}
$$

Assumiamo **per assurdo** che non esista, e quindi che per tutti ${\color{cyan} \forall}$ gli step si verifichi il contrario ${\color{cyan} >}$ del requisito:
$$
\displaylines{
	\large
	{\color{cyan} \forall}\ step :
	\\
	\Large
	\func \par{
		\mathbf{x}
		+
		s 
		\cdot 
		\beta^{step}
		\cdot 
		\mathbf{d}
	}
	\ 
	{\color{cyan} >}
	\ 
	\func \par{
		\mathbf{x}
	}
	+
	\sigma
	\cdot
	s 
	\cdot 
	\beta^{step}
	\cdot
	\nabla\ 
	\func \par{
		\mathbf{x}
	}^\dagger
	\times
	\mathbf{d}
}
$$

Riscriviamo la disequazione diversamente:
$$
\displaylines{
	\large
	\forall\ step :
	\\
	\Large
	{\color{pink}
		\func \par{
			\mathbf{x}
			+
			s \cdot \beta^{step}
			\cdot 
			\mathbf{d}
		}
		{\color{hotpink}
			{}-
			\func \par{
				\mathbf{x}
			}
		}
	}
	>
	\sigma
	\cdot
	s \cdot \beta^{step}
	\cdot
	\nabla\ 
	\func \par{
		\mathbf{x}
	}^\dagger
	\times
	\mathbf{d}
}
$$

Ancora:
$$
\displaylines{
	\large
	\forall\ step :
	\\
	\Large
	{\color{hotpink} \frac{
		{\color{pink}
			\func \par{
				\mathbf{x}
				+
				s 
				\cdot 
				\beta^{step}
				\cdot 
				\mathbf{d}
			}
			-
			\func \par{
				\mathbf{x}
			}
		}
	}
	{
		\color{hotpink}
		s 
		\cdot 
		\beta^{step}
	}
	}
	>
	\sigma
	\cdot
	\nabla\ 
	\func \par{
		\mathbf{x}
	}^\dagger
	\times
	\mathbf{d}
}
$$

Pensiamo al [[limite]] infinito positivo di $step$:
$$
\Large
{\color{green} 
	{\color{lime}
		\lim_{step \to +\infty}
	}
	\frac{
		\func \par{
			\mathbf{x}
			+
			s 
			\cdot 
			\beta^{step}
			\cdot 
			\mathbf{d}
		}
		-
		\func \par{
			\mathbf{x}
		}
	}
	{
		s 
		\cdot 
		\beta^{step}
	}
	{\color{lime}
		\geq{}
	}
}
\sigma
\cdot
\nabla\ 
\func \par{
	\mathbf{x}
}^\dagger
\times
\mathbf{d}
$$

Osserviamo che esso corrisponde al [[rapporto incrementale]] di $\func \par{\mathbf{x}}$ nella direzione di $\mathbf{d}$, ovvero a ${\color{springgreen} \nabla\ \func \par{\mathbf{x}}^\dagger \times	\mathbf{d}}$:
$$
\Large
{\color{springgreen}
	\nabla
	\ 
	\func \par{
		\mathbf{x}
	}^\dagger
	\times
	\mathbf{d}
}
\geq
\sigma
\cdot
\nabla\ 
\func \par{
	\mathbf{x}
}^\dagger
\times
\mathbf{d}
$$

Essendo $\mathbf{d}$ una direzione di discesa, abbiamo che ${\color{springgreen} \nabla\ \func \par{\mathbf{x}}^\dagger \times	\mathbf{d}}$ è sempre un valore minore di $0$:
$$
\Large
{\color{springgreen}
	\nabla
	\ 
	\func \par{
		\mathbf{x}
	}^\dagger
	\times
	\mathbf{d}
}
\geq
\sigma
\cdot
{\color{springgreen} \nabla\ \func \par{\mathbf{x}}^\dagger \times	\mathbf{d}}
$$

Ma moltiplicando un valore minore di $0$ per $\sigma$, un numero $\left] 0.0, 1.0 \right[$, si ottiene sempre un valore maggiore di quello iniziale, **creando così un assurdo**:
$$
\Large
\nabla
\ 
\func \par{
	\mathbf{x}
}^\dagger
\times
\mathbf{d}
{\color{red} {}\not\geq{}}
\sigma
\cdot
\nabla
\ 
\func \par{
	\mathbf{x}
}^\dagger
\times
\mathbf{d}
$$
