[[gate quantistico]] che effettua una rotazione arbitraria.

Usando la [[formula di Eulero]], esso corrisponde a:
$$
\def \varX {{\color{coral} a}}
\def \varY {{\color{cornflowerblue} b}}
\def \varZ {{\color{yellowgreen} c}}
\def \varI {{\color{hotpink} i}}
\Huge
\mathbf{U}(\varX, \varY, \varZ) = \begin{bmatrix}
	\cos \left( \frac{\varX}{2} \right) &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
	e^{\varI \varY} \sin \left( \frac{\varX}{2} \right) &
	e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
$$

Espanso, sarebbe:
$$
\def \varX {{\color{coral} a}}
\def \varY {{\color{cornflowerblue} b}}
\def \varZ {{\color{yellowgreen} c}}
\def \varI {{\color{hotpink} i}}
\mathbf{U}(\varX, \varY, \varZ) = \begin{bmatrix}
	\cos \frac{\varX}{2} &
	- (\cos \varZ + \varI \sin \varZ) \cdot \sin \frac{\varX}{2} \\
	(\cos \varY + \varI \sin \varY) \cdot \sin \frac{\varX}{2} &
	(cos (\varY + \varZ) + \varI \sin (\varY + \varZ)) \cdot \cos \frac{\varX}{2}
\end{bmatrix}
$$
## Effetto

Ruota lo stato del [[qbit]] a cui è applicato di $\varX$ sull'[[asse X in quantum computing|asse X]], $\varY$ sull'[[asse Y]], e $\varZ$ sull'[[asse Z]].

## Visualizzazioni

### In un [[circuito quantistico]]

Un [[universal gate]] connesso con una linea verticale a un puntino nero su un altro [[qbit]].
