[[gate quantistico universale]] che opera condizionalmente su un [[qbit]] in base allo stato di un altro [[qbit]], in modo simile a un [[controlled Pauli X gate]]:

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

==Deutsch gate?==
