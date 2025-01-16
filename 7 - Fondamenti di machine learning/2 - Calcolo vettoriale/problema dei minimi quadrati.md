[[Esempio]] di problema in cui è necessario calcolare il [[gradiente di funzione quadratica]].

## Definizione

Dati:
- $m$ coppie di valori $\par{x_i, y_i}$, raccolte nei vettori $\par{\mathbf{x}, \mathbf{y}}$

Si vuole determinare:
- $n$ valori di polinomio $a_j$, raccolti nel vettore $\mathbf{a}$
	- che, per ogni coppia input-output, minimizzino la distanza tra i valori $\par{\par{a_0 \cdot x^0_i} + \par{a_1 \cdot x^1_i} + \par{a_2 \cdot x^2_i} + \dots + \par{a_n \cdot x^n_i}}$ e $y_i$

> [!Tip]
> È un problema [[funzione a variabili multiple|a variabili multiple]] [[funzione a valore vettoriale|a valore vettoriale]], "tanti-a-tanti"!

> [!Warning]
> La formulazione del problema è ingannevole, $\mathbf{x}$ e $\mathbf{y}$ non sono incognite, mentre $\mathbf{a}$ lo è!

## Svolgimento

Definiamo una [[matrice]] $\mathbf{V}$ (detta [[matrice di Vandermonde]]) in cui $v_{ij} = x_i^j$:
$$
\mathbf{V} =
\begin{bmatrix}
\mathbf{x}^0 & \mathbf{x}^1 & \mathbf{x}^2 & \dots & \mathbf{x}^n \\
\end{bmatrix} =
\begin{bmatrix}
x_1^0 & x_1^1 & x_1^2 & \dots & x_1^n \\
x_2^0 & x_2^1 & x_2^2 & \dots & x_2^n \\
x_3^0 & x_3^1 & x_3^2 & \dots & x_3^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
x_m^0 & x_m^1 & x_m^2 & \dots & x_m^n \\
\end{bmatrix} =
\begin{bmatrix}
1 & x_1 & x_1^2 & \dots & x_1^n \\
1 & x_2 & x_2^2 & \dots & x_2^n \\
1 & x_3 & x_3^2 & \dots & x_3^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_m & x_m^2 & \dots & x_m^n \\
\end{bmatrix}
$$

Grazie a questa matrice, possiamo descrivere in forma vettoriale il primo valore delle coppie:
$$
\mathbf{V} \times \mathbf{a}
$$

La [[modulo vettoriale|distanza]] tra i valori corrisponderà quindi a:
$$
\abs{\mathbf{y} - \mathbf{V} \times \mathbf{a}}
$$

E dunque, il nostro problema consisterà in:
$$
\min \abs{\mathbf{y} - \mathbf{V} \times \mathbf{a}}^2
$$

Che è [[gradiente di funzione quadratica|quadratico]]:
$$
\displaylines{
	\abs{\mathbf{y} - \mathbf{V} \times \mathbf{a}}^2 
	
	=\\
	
	\par{\mathbf{y} - \mathbf{V} \times \mathbf{a}}^\dagger \times \par{\mathbf{y} - \mathbf{V} \times \mathbf{a}}
	
	=\\
	
	\par{\mathbf{y}^\dagger \times \mathbf{y} }
	-
	\par{\mathbf{y}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}
	-
	\par{\par{\mathbf{a} \times \mathbf{V}}^\dagger \times \mathbf{y}}
	+
	\par{\par{\mathbf{a} \times \mathbf{V}}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}
	
	=\\
	
	\par{\mathbf{y}^\dagger \times \mathbf{y} }
	-
	\par{\mathbf{y}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}
	+
	\par{\par{\mathbf{V} \times \mathbf{a}}^\dagger \times \mathbf{y}}
	+
	\par{\par{\mathbf{a} \times \mathbf{V}}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}
	
	=\\
	
	\par{\mathbf{y}^\dagger \times \mathbf{y} }
	-
	\par{\mathbf{y}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}
	-
	\par{\mathbf{y}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}
	+
	\par{\par{\mathbf{a} \times \mathbf{V}}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}	
	
	=\\
	
	\par{\mathbf{y}^\dagger \times \mathbf{y}}
	- 
	2 \cdot	\par{\mathbf{y}^\dagger \times \par{\mathbf{V} \times \mathbf{a}}}
	+
	\par{\mathbf{a}^\dagger \times \mathbf{V}^\dagger \times \mathbf{V} \times \mathbf{a}}
	
	=\\
	
	\par{\mathbf{a}^\dagger \times {\color{red} \par{\mathbf{V}^\dagger \times \mathbf{V}}} \times \mathbf{a}}
	+ 
	\par{2 \times {\color{orange} \par{\mathbf{y}^\dagger \times \mathbf{V}}} \times \mathbf{a}} 
	+
	{\color{yellow} \par{\mathbf{y}^\dagger \times \mathbf{y}}}
	= \\
	\par{\mathbf{a}^\dagger \times {\color{red} \mathbf{Q}} \times \mathbf{a}}
	+
	\par{2 \times {\color{orange} \mathbf{b}} \times \mathbf{a}}
	+
	{\color{yellow} \mathbf{c}}
}
$$
