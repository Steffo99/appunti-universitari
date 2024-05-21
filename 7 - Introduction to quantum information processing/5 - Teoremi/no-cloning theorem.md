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
\mathbf{U}_f \left( \varA \otimes \ket{0} \right) = \varA \otimes \varA
$$

E anche:
$$
\mathbf{U}_f \left( \varB \otimes \ket{0} \right) = \varB \otimes \varB
$$

Creando una [[superposizione]] generica, e usando la [[linearità]] per risolverla:
$$
\displaylines{
	\mathbf{U}_f \left(
		\left( 
			a \cdot \varA + b \cdot \varB
		\right)
		\otimes \ket{0}
	\right)
	=\\
	a \cdot \mathbf{U}_f 
	\left(
		\varA \otimes \ket{0}
	\right)
	+
	b \cdot \mathbf{U}_f 
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
	\mathbf{U}_f \left(
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

I risultati sono diversi, il che è impossibile!
