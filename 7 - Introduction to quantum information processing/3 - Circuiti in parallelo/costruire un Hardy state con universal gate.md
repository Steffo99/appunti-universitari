$$
\def \notea {{\color{darkviolet} 1}}
\def \noteb {{\color{violet} 0}}

\def \ufirst {{\qU[\noteb]}}
\def \usecond {{\qU[\notea]}}
\def \uthird {{\qCU{\noteb}{\notea}}}

\def \kzero {{\color{darkgreen} +3}}
\def \kone {{\color{forestgreen} +1}}
\def \ktwo {{\color{limegreen} +1}}
\def \kthree {{\color{lightgreen} -1}}

\def \varX {\axisX{x}}
\def \varY {\axisY{y}}
\def \varZ {\axisZ{z}}

\Tiny
\notea \ \noteb 
\quad 
\ufirst \ \usecond \ \uthird
\quad
\kzero \ \kone \ \ktwo \ \kthree
\quad
\varX \ \varY \ \varZ
$$

## Obiettivo

Si vuole:
- creare un [[Hardy state]] $\ket{\Psi}$ 
- su due [[qbit]] $\notea$ e $\noteb$
	- allo [[qbit|stato]] neutro $\ket{0}$
- usando tre gate $\ufirst$, $\usecond$, e $\uthird$
	- $\ufirst$: configura $\noteb$
	- $\usecond$: configura $\notea$
	- $\uthird$: se $\noteb$ vale $1$, annulla $\usecond$ e configura $\notea$ appropriatamente.

$$
\large
\uthird\ 
\usecond\ 
\ufirst\ 
\ket{00}
\quad
= 
\quad
\frac{
	\kzero \ket{00} +
	\kone \ket{01} +
	\ktwo \ket{10} +
	\kthree \ket{11}
}{\sqrt{12}}
\quad
=
\quad
\frac{1}{\sqrt{12}}
\cdot
{
	\begin{bmatrix}
		\kzero\\
		\kone\\
		\ktwo\\
		\kthree
	\end{bmatrix}
}
$$

## Costruzione di $\ufirst$

Vogliamo costruire il gate $\ufirst$ da applicare solamente al [[qbit]] $\noteb$.

> [!Tip]
> Ricordiamo che è possibile invertire il [[prodotto tensoriale]] per separare i [[qbit]]:
> $$
>    
> \displaylines{
> 	\ket{00} = \ket{0}_\notea \otimes \ket{0}_\noteb \\
> 	\ket{01} = \ket{0}_\notea \otimes \ket{1}_\noteb \\
> 	\ket{10} = \ket{1}_\notea \otimes \ket{0}_\noteb \\
> 	\ket{11} = \ket{1}_\notea \otimes \ket{1}_\noteb
> }
> $$

Possiamo separare i [[qbit]] dell'[[Hardy state]] in: 
$$
	\frac{1}{\sqrt{12}} 
	\cdot 
	\left\{
		\begin{matrix}
			\kzero & \cdot & \par{\ket{0}_\notea \otimes \ket{0}_\noteb} \\
			& + \\
			\kone & \cdot & \par{\ket{0}_\notea \otimes \ket{1}_\noteb} \\
			& + \\
			\ktwo & \cdot & \par{\ket{1}_\notea \otimes \ket{0}_\noteb} \\
			& + \\
			\kthree & \cdot & \par{\ket{1}_\notea \otimes \ket{1}_\noteb}
		\end{matrix}
	\right\}
$$

Poi, possiamo raccogliere gli [[qbit|stati del qbit]] $\noteb$, ottenendo:
$$
\frac{1}{\sqrt{12}}
\cdot
\left\{
	\begin{matrix}
	(& \kzero \cdot \ket{0}_\notea & + & \ktwo \cdot \ket{1}_\notea &) & \otimes & \ket{0}_\noteb \\
	&&&&& + \\
	(& \kone \cdot \ket{0}_\notea & + & \kthree \cdot \ket{1}_\notea &) & \otimes & \ket{1}_\noteb
	\end{matrix}
\right\}
$$

Possiamo permetterci di ignorare temporaneamente il [[qbit]] $\notea$, visto che siamo allo stato neutro e vogliamo applicare questo gate solo a $\noteb$.

Determiniamo le [[ampiezza di uno stato quantistico|ampiezze]] del gate alla [[stato quantistico base|base]] di $\noteb$:

$$
\frac{1}{\sqrt{12}}
\cdot
\left\{
	\begin{matrix}
		\sqrt{ \kzero^2 + \ktwo^2 } & \otimes & \ket{0}_\noteb \\
		& + \\
		\sqrt{ \kone^2 + \kthree^2 } & \otimes & \ket{1}_\noteb
	\end{matrix}
\right\}
\quad = \quad
\frac{1}{\sqrt{12}}
\cdot
\left\{
	\begin{matrix}
		{\color{mediumaquamarine} \sqrt{ 10 }} & \otimes & \ket{0}_\noteb \\
		& + \\
		{\color{palegreen} \sqrt{ 2 }} & \otimes & \ket{1}_\noteb
	\end{matrix}
\right\}
$$

Il nostro gate dovrà quindi essere tale che:
$$
\ufirst 
\ket{0}_\noteb
=
\begin{bmatrix}
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}} \\\\
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\end{bmatrix}
\quad
$$

Ricordando la definizione di [[universal gate]] otteniamo questo [[sistema di equazioni]], con $\varX$, $\varY$, e $\varZ$ come incognite:
$$
\begin{bmatrix}
	\cos \left( \frac{\varX}{2} \right) &
	- e^{\i \varZ} \sin \left( \frac{\varX}{2} \right) \\\\
	e^{\i \varY} \sin \left( \frac{\varX}{2} \right) &
	e^{\i \varY + \i \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
\begin{bmatrix}
	1\\\\
	0
\end{bmatrix}
=
\begin{bmatrix}
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}} \\\\
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\end{bmatrix}
\quad
$$

Ovvero:
$$
\begin{cases}
	1 \cdot \cos \left( \frac{\varX}{2} \right) 
	& - & 
	0 \cdot e^{\i \varZ} \sin \left( \frac{\varX}{2} \right)
	& = &
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
	\\\\
	1 \cdot e^{\i \varY} \sin \left( \frac{\varX}{2} \right)
	& + &
	0 \cdot e^{\i \varY + \i \varZ} \cos \left( \frac{\varX}{2} \right)
	& = &
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\end{cases}
$$

Applicando i moltiplicatori:
$$
\begin{cases}
	\cos \left( \frac{\varX}{2} \right)
	& = &
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
	\\\\
	e^{\i \varY} \sin \left( \frac{\varX}{2} \right)
	& = &
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\end{cases}
$$

Avendo due [[7 - Fondamenti di machine learning/5 - Ottimizzazione vincolata/vincolo|vincoli]], ma tre [[incognite]], possiamo assegnare qualsiasi valore a una di esse: siamo costretti a farlo per $\varZ$, visto che non appare più in nessun vincolo:
$$
\begin{cases}
	\cos \left( \frac{\varX}{2} \right)
	& = &
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
	\\\\
	e^{\i \varY} \sin \left( \frac{\varX}{2} \right)
	& = &
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
	\\\\
	\varZ
	& = &
	0
\end{cases}
$$


Risolviamo la prima equazione[^waa]:
$$
\begin{cases}
\varX
& = &
2 \cdot \arccos \par{ \frac{\sqrt{10}}{\sqrt{12}} }
\\\\
e^{\i \varY} \sin \left( \frac{2 \arccos \par{\frac{\sqrt{10}}{\sqrt{12}}}}{2} \right)
& = &
{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\\\\
\varZ
& = &
0
\end{cases}
$$

Risolviamo la seconda equazione:
$$
\begin{cases}
\varX
& = &
2 \cdot \arccos \par{ \frac{\sqrt{10}}{\sqrt{12}} }
\\
\varY
& = &
0
\\
\varZ
& = &
0
\end{cases}
$$

Approssimando:
$$
\begin{cases}
\varX
& \approx &
0.841
\\
\varY
& = &
0.000
\\
\varZ
& = &
0.000
\end{cases}
$$

Quindi, abbiamo che:

$$
\Large
\ufirst \approx \qU \par{ 0.841,\ 0.000,\ 0.000}
$$

[^waa]: https://www.wolframalpha.com/input?i=e%5E%28i*y%29+*+sin%282+*+arccos%28+sqrt%2810%29+%2F+sqrt%2812%29+%29+%2F+2%29+%3D+sqrt%282%29+%2F+sqrt%2812%29

## Costruzione di $\usecond$

Vogliamo costruire il gate $\usecond$ da applicare solamente al [[qbit]] $\notea$.

Ripetiamo la stessa procedura che abbiamo usato per $\ufirst$, ma per l'altro [[qbit]].

$$
	\frac{1}{\sqrt{12}} 
	\cdot 
	\left\{
		\begin{matrix}
			\kzero & \cdot & \par{\ket{0}_\notea \otimes \ket{0}_\noteb} \\
			& + \\
			\kone & \cdot & \par{\ket{0}_\notea \otimes \ket{1}_\noteb} \\
			& + \\
			\ktwo & \cdot & \par{\ket{1}_\notea \otimes \ket{0}_\noteb} \\
			& + \\
			\kthree & \cdot & \par{\ket{1}_\notea \otimes \ket{1}_\noteb}
		\end{matrix}
	\right\}
$$

Raccogliamo gli [[qbit|stati del qbit]] $\notea$, ottenendo:
$$
\frac{1}{\sqrt{12}}
\cdot
\left\{
	\begin{matrix}
	(& \kzero \cdot \ket{0}_\noteb & + & \kone \cdot \ket{1}_\noteb &) & \otimes & \ket{0}_\notea \\
	&&&&& + \\
	(& \ktwo \cdot \ket{0}_\noteb & + & \kthree \cdot \ket{1}_\noteb &) & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
$$

Vogliamo che $\usecond$ costruisca lo stato giusto di $\notea$ specificamente per $\ket{0}_\noteb$, quindi prendiamo in considerazione solo quei coefficienti, e rinormalizziamo:
$$
\frac{1}{\sqrt{\kzero^2 + \ktwo^2}}
\cdot
\left\{
	\begin{matrix}
		\kzero & \otimes & \ket{0}_\notea \\
		& + \\
		\ktwo & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
$$

Cioè:
$$
\frac{1}{\sqrt{10}}
\cdot
\left\{
	\begin{matrix}
		\kzero & \otimes & \ket{0}_\notea \\
		& + \\
		\ktwo & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
$$

Il nostro gate dovrà quindi essere tale che:
$$
\usecond
\ket{0}_{\notea}
=
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} \\
	{\color{limegreen} \frac{1}{\sqrt{10}}}
\end{bmatrix}
$$

Ovvero:
$$
\begin{bmatrix}
	\cos \left( \frac{\varX}{2} \right) &
	- e^{\i \varZ} \sin \left( \frac{\varX}{2} \right) \\\\
	e^{\i \varY} \sin \left( \frac{\varX}{2} \right) &
	e^{\i \varY + \i \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
\begin{bmatrix}
	1\\\\
	0
\end{bmatrix}
=
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} \\
	{\color{limegreen} \frac{1}{\sqrt{10}}}
\end{bmatrix}
\quad
$$

Allo stesso modo di prima, arriviamo a:
$$
\begin{cases}
\varX
& = &
2 \cdot \arccos \left( \frac{3}{\sqrt{10}} \right)
\\
\varY
& = &
0
\\
\varZ
& = &
0
\end{cases}
$$
Approssimati:
$$
\begin{cases}
\varX
& \approx &
0.644
\\
\varY
& = &
0.000
\\
\varZ
& = &
0.000
\end{cases}
$$

Quindi, abbiamo che:
$$
\Large
\usecond \approx \qU \par{0.644,\ 0.000,\ 0.000}
$$

## Costruzione di $\uthird$

Infine, vogliamo costruire l'[[universal controlled gate]] $\uthird$ da applicare al [[qbit]] $\notea$.

Stavolta, non partiamo da $\ket{0}$, ma dallo stato configurato dal gate $\usecond$ per $\ket{0}_\noteb$, che con una breve semplificazione possiamo scrivere come:
$$
\uthird
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} \\
	{\color{limegreen} \frac{1}{\sqrt{10}}}
\end{bmatrix}
=
\begin{bmatrix}
	{\color{forestgreen} \frac{1}{\sqrt{2}}} \\
	{\color{lightgreen} \frac{-1}{\sqrt{2}}}
\end{bmatrix}
$$

Sostituiamo ancora una volta:
$$
\begin{bmatrix}
	\cos \left( \frac{\varX}{2} \right) &
	- e^{\i \varZ} \sin \left( \frac{\varX}{2} \right) \\\\
	e^{\i \varY} \sin \left( \frac{\varX}{2} \right) &
	e^{\i \varY + \i \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} \\
	{\color{limegreen} \frac{1}{\sqrt{10}}}
\end{bmatrix}
=
\begin{bmatrix}
	{\color{forestgreen} \frac{1}{\sqrt{2}}} \\
	{\color{lightgreen} \frac{-1}{\sqrt{2}}}
\end{bmatrix}
$$


Risolvendo il sistema, arriviamo a:
$$
\begin{cases}
	2 \cos \par{\frac{\varX}{2}} + \sin \par{\frac{\varX}{2}} & = & 0
	\\\\
	\varY & = & 0
	\\\\
	\varZ & = & 0
\end{cases}
$$


Risolvendo il sistema, infine, otteniamo:
$$
\begin{cases}
	\varX & = & - 2 \cdot \arctan \par{ 2 }
	\\
	\varY & = & 0
	\\
	\varZ & = & 0
\end{cases}
$$

Che, approssimando, diventa:
$$
\begin{cases}
	{\color{turquoise} \varX} & \approx & -2.214
	\\
	{\color{teal} \varY} & = & 0.000
	\\
	{\color{aquamarine} \varZ} & \approx & 0.000
\end{cases}
$$
