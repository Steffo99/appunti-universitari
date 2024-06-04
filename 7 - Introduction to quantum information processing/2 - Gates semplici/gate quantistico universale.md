Un [[gate quantistico]] che permette di effettuare una rotazione su asse arbitrario.

Usando la [[formula di Eulero]], esso corrisponde a:
$$
\def \varX {{\color{coral} \theta}}
\def \varY {{\color{cornflowerblue} \phi}}
\def \varZ {{\color{yellowgreen} \lambda}}
\def \varI {{\color{hotpink} i}}
\Huge
\mathbf{U}(\varX, \varY, \varZ) = \begin{bmatrix}
	\cos \left( \frac{\varX}{2} \right) &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
	e^{\varI \varY} \sin \left( \frac{\varX}{2} \right) &
	e^{\varI \varY + \varI \varZ} \sin \left( \frac{\varX}{2} \right)
\end{bmatrix}
$$

Espanso, sarebbe:
$$
\def \varX {{\color{coral} \theta}}
\def \varY {{\color{cornflowerblue} \phi}}
\def \varZ {{\color{yellowgreen} \lambda}}
\def \varI {{\color{hotpink} i}}
\mathbf{U}(\varX, \varY, \varZ) = \begin{bmatrix}
	\cos \frac{\varX}{2} &
	- (\cos \varZ + \varI \sin \varZ) \cdot \sin \frac{\varX}{2} \\
	(\cos \varY + \varI \sin \varY) \cdot \sin \frac{\varX}{2} &
	(cos (\varY + \varZ) + \varI \sin (\varY + \varZ)) \cdot \sin \frac{\varX}{2}
\end{bmatrix}
$$
