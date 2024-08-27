---
aliases:
  - derivata direzionale
  - avente derivata direzionale
  - ha derivata direzionale
---
[[proprietà]] di una [[funzione]].
$$
\Huge
\derivativeDirectionalSimple{x}{s}
$$

Una [[funzione]] ha questa [[proprietà]] rispetto alla [[direzione]] $s$ in $x_0$ quando:
- $\derivativeDirectionalSimple{x}{s}$ e $\derivativeDirectionalSimple{x}{-s}$ esistono
- $\derivativeDirectionalSimple{x}{s}$ e $\derivativeDirectionalSimple{x}{-s}$ sono finite
- $\derivativeDirectionalSimple{x}{s}$ e $\derivativeDirectionalSimple{x}{-s}$ sono uguali

## Calcolo

Consideriamo la [[varietà affine reale]]:
$$
\varietyAffine{c} = x_0 + c \cdot s
$$

Se una [[funzione]] $f$ è [[differenziabilità|differenziabile]], allora esistono le [[derivata parziale|derivate parziali]]:
$$
\displaylines{
	\forall \par{
		{\color{cyan} direzione} 
		\in 
		\hsh{1 \dots \fmlInputSize}_{\mathbb{N}}
	}
	:
	\exists \par{
		\derivativePartial{x}{{\color{cyan} direzione}}
	}
}
$$
Inoltre, ==esiste la [[varietà affine reale]]==:
$$
\varietyAffine[X_i]{a}
$$