[[gate quantistico]] che effettua una rotazione arbitraria [[controlled gate|in modo controllato]].
$$
\def \varX {{\color{coral} a}}
\def \varY {{\color{cornflowerblue} b}}
\def \varZ {{\color{yellowgreen} c}}
\def \varI {{\color{hotpink} i}}
\Huge
\mathbf{U}_{0 \to 1}(\varX, \varY, \varZ)
=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & e^{\varI \varY} \sin \left( \frac{\varX}{2} \right) & e^{\varI \varY + \varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
0 & 0 & \cos \left( \frac{\varX}{2} \right) &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)
\end{bmatrix}
$$

## Effetto

Ruota lo stato del [[qbit]] a cui è applicato di $\varX$ sull'[[asse X in quantum computing|asse X]], $\varY$ sull'[[asse Y]], e $\varZ$ sull'[[asse Z]].

## Visualizzazioni

### In un [[circuito quantistico]]

Un [[universal gate]] connesso con una linea verticale a un puntino nero su un altro [[qbit]].
