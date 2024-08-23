[[operazione]] tra [[array|vettori]].
$$
\Huge 
\braket{\mathbf{x}, \mathbf{y}}
\qquad
\mathbf{x} \cdot \mathbf{y}
$$


Consiste nel [[prodotto|moltiplicare]] i componenti uno ad uno tra loro, e poi [[somma|sommare]] tutti i risultati:
$$
\Large
\def \varW {{\color{Yellow} w}}
\def \varX {{\color{Red} \mathbf{x}}}
\def \varY {{\color{MediumBlue} \mathbf{y}}}
\def \varZ {{\color{Lime} \mathbf{z}}}
\def \varXa {{\color{Crimson} x_1}}
\def \varXb {{\color{IndianRed} x_2}}
\def \varXc {{\color{Salmon} x_3}}
\def \varXn {{\color{LightSalmon} x_n}}
\def \varYa {{\color{RoyalBlue} y_1}}
\def \varYb {{\color{DeepSkyBlue} y_2}}
\def \varYc {{\color{LightSkyBlue} y_3}}
\def \varYn {{\color{PaleTurquoise} y_n}}

\braket{\varX, \varY}
=
(\varXa \cdot \varYa) +
(\varXb \cdot \varYb) +
(\varXc \cdot \varYc) +
\dots +
(\varXn \cdot \varYn)
$$

## Proprietà in $\mathbb{R}^n$

- $\braket{\varX, \varY} = \braket{\varY, \varX}$ ([[proprietà commutativa]])
- $\braket{\varX, (\varY + \varZ)} = \braket{\varX, \varY} + \braket{\varX, \varZ}$ ([[proprietà distributiva]])
- $\varW \cdot \braket{\varX, \varY} = \braket{(\varW \cdot \varX), \varY} = \braket{\varX, (\varW \cdot \varY)}$
- $| \varX | + | \varY | \geq | \braket{\varX, \varY} |$ ([[disuguaglianza di Cauchy-Schwarz]])
- $\braket{\varX, \varX} = | \varX |^2$

## Proprietà in $\mathbb{R}^2$

- $\braket{\varX, \varY} = |\varX| \cdot |\varY| \cdot \cos(angolo\ tra\ \varX\ e\ \varY)$
