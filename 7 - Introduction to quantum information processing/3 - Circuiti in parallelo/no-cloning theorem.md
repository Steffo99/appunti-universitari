[[Teorema]] che dimostra come sia impossibile copiare lo [[qbit|stato di un qbit]] a un altro [[qbit]] attraverso [[gate quantistico|gate quantistici]].

## Dimostrazione (per assurdo)

$$
\def \varA {{\color{coral} \ket{\psi}}}
\def \varB {{\color{skyblue} \ket{\phi}}}
\def \varC {{\color{yellowgreen}	\left( 
	a \cdot \ket{\psi} + b \cdot \ket{\phi}
\right) }}
$$
Se fosse possibile, allora sarebbe possibile:

$$
\qU[\func] \left( \varA \otimes \ket{0} \right) = \varA \otimes \varA
$$

E anche:
$$
\qU[\func] \left( \varB \otimes \ket{0} \right) = \varB \otimes \varB
$$

Creando una [[superposizione]] generica, e usando [[proprietà distributiva]] data dalla [[linearità]] per risolverla:
$$
\displaylines{
	\qU[\func] \left(
		\left( 
			a \cdot \varA + b \cdot \varB
		\right)
		\otimes \ket{0}
	\right)
	=\\
	a \cdot \qU[\func] 
	\left(
		\varA \otimes \ket{0}
	\right)
	+
	b \cdot \qU[\func]
	\left(
		\varB \otimes \ket{0}
	\right)
	=\\
	a \cdot \left(
		\varA \otimes \varA
	\right)
	+
	b \cdot \left(
		\varB \otimes \varB
	\right)
}
$$

Ma al tempo stesso, risolvendola direttamente:
$$
\displaylines{
	\qU[\func] \left(
		\varC \otimes \ket{0}
	\right)
	=\\
	\varC
	\otimes
	\varC
	=\\
	a^2 \cdot ( \varA \otimes \varA )
	+
	b^2 \cdot ( \varB \otimes \varB )
	+
	ab \cdot ( \varA \otimes \varB )
	+
	ab \cdot ( \varB \otimes \varA )
}
$$

I risultati possono essere uguali solo se:  
$$
\small
a \cdot \left(
	\varA \otimes \varA
\right)
+
b \cdot \left(
	\varB \otimes \varB
\right)
= 
a^2 \cdot ( \varA \otimes \varA )
+
b^2 \cdot ( \varB \otimes \varB )
+
ab \cdot ( \varA \otimes \varB )
+
ab \cdot ( \varB \otimes \varA )
$$
Ovvero, quando:
$$
\begin{cases}
a &=& a^2 \\
b &=& b^2
\end{cases}
$$
Cioè:
$$
\begin{cases}
a \cdot b = 0 \\\\
a = 0 \\
b = 1
\end{cases}
\quad
\bigcup
\quad
\begin{cases}
a \cdot b = 0 \\\\
a = 1 \\
b = 0
\end{cases}
$$
Il gate $\qU[\func]$ esiste quindi solo per gli stati [[ortogonale|ortogonali]].

> [!Note]
> Per gli stati $\ket{0}$ e $\ket{1}$, il gate $\qU[\func]$ è il [[controlled Pauli X gate]] $\qCX{0}{1}$!
