$$

\def \ufirst {{\color{mediumpurple} \mathbf{U_A}}}
\def \usecond {{\color{mediumorchid} \mathbf{U_B}}}
\def \uthird {{\color{violet} \mathbf{U_C}}}

\def \kzero {{\color{darkgreen} 3}}
\def \kone {{\color{forestgreen} 1}}
\def \ktwo {{\color{limegreen} 1}}
\def \kthree {{\color{lightgreen} -1}}

\def \notea {{\color{orangered} \Leftarrow}}
\def \noteb {{\color{dodgerblue} \Rightarrow}}

\Tiny
\color{grey}
\text{don't mind me, just defining}\ \TeX\ \text{variables}
$$

## Obiettivo

Si vuole:
- creare un [[Hardy state]] $\ket{\Psi}$ 
- su due [[qbit]] $\notea$ e $\noteb$
	- allo [[qbit|stato]] neutro $\ket{0}$
- usando tre gate $\ufirst$, $\usecond$, e $\uthird$
	- $\ufirst$: configura $\noteb$
	- $\usecond$: configura $\notea$
	- $\uthird$: se $\ket{1}_\noteb$, annulla $\usecond$ e configura $\notea$

$$
\large
\uthird
\usecond
\ufirst
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

Determiniamo le [[ampiezza|ampiezze]] del gate alla [[stato base di un qbit|base]] di $\noteb$:

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

> [!Tip]
> Ricordiamo che l'[[universal gate]] è definito come:
> $$
> \mathbf{U}(a, b, c) = 
> \begin{bmatrix}
> 	\cos \frac{a}{2} &
> 	- (\cos c + i \sin c) \cdot \sin \frac{a}{2} \\
> 	(\cos b + i \sin b) \cdot \sin \frac{a}{2} &
> 	(cos (b + c) + i \sin (b + c)) \cdot \cos \frac{a}{2}
> \end{bmatrix}
> $$
> 

Otteniamo allora questa equazione, con $a$, $b$, e $c$ come incognite:
$$
\def \varX {a}
\def \varY {b}
\def \varZ {c}
\def \varI {i}

\ufirst 
\ket{0}_\noteb
\quad = \quad 
\begin{bmatrix}
	{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)} &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
	{\color{palegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)} &
	e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
\ket{0}_\noteb
\quad = \quad
\begin{bmatrix}
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}} \\
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\end{bmatrix}
$$

Mettendo a sistema, notiamo che abbiamo due equazioni che potrebbero risultare in qualsiasi cosa:
$$
\begin{cases}
	{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
	& = &
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
	\\
	{\color{palegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)}
	& = &
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
	\\
	{- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)}
	& = &
	*
	\\
	{e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)}
	& = &
	*
\end{cases}
$$

==Non è sintassi matematica formale. Qual è quella giusta?==

Per tenere i calcoli semplici, decidiamo che il risultato delle due equazioni sia $0$:
$$
\begin{cases}
	{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
	& = &
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
	\\
	{\color{palegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)}
	& = &
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
	\\
	{- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)}
	& = &
	0
	\\
	{e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)}
	& = &
	0
\end{cases}
$$

Usiamo le due equazioni con $0$ come risultato per determinare il valore di $\varY$ e $\varZ$:
$$
\begin{cases}
	{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
	& = &
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
	\\
	{\color{palegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)}
	& = &
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}} 
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

Sostituiamo:
$$
\begin{cases}
{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
& = &
{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
\\
{\color{palegreen} e^{0} \sin \left( \frac{\varX}{2} \right)}
& = &
{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
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

Ancora:
$$
\begin{cases}
{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
& = &
{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
\\
{\color{palegreen} \sin \left( \frac{\varX}{2} \right)}
& = &
{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
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
Scegliamo di risolvere la prima equazione per ottenere $\varX$:
$$
\begin{cases}
{\color{mediumaquamarine} \varX}
& = &
{\color{mediumaquamarine} 2 \cdot \arccos \par{ \frac{\sqrt{10}}{\sqrt{12}} } }
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
{\color{mediumaquamarine} \varX}
& \approx &
{\color{mediumaquamarine} 0.841 }
\\
\varZ
& = &
0
\\
\varY
& = &
0
\end{cases}
$$

Quindi, abbiamo che:

$$
\Large
\ufirst \approx \mathbf{U}({\color{mediumaquamarine} 0.841 }, 0.000, 0.000)
$$

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
==C'è un passaggio matematico formale anche qui che non conosco.==

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

Arriviamo quindi all'equazione:
$$
\def \varX {a}
\def \varY {b}
\def \varZ {c}
\def \varI {i}

\usecond 
\ket{0}_\notea
\quad = \quad 
\begin{bmatrix}
	{\color{darkgreen} \cos \left( \frac{\varX}{2} \right)} &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
	{\color{limegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)} &
	e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
\ket{0}_\notea
\quad = \quad
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} \\
	{\color{limegreen} \frac{1}{\sqrt{10}}}
\end{bmatrix}
$$

E i vincoli:
$$
\begin{cases}
{\color{darkgreen} \cos \left( \frac{\varX}{2} \right)}
& = &
{\color{darkgreen} \frac{3}{\sqrt{10}}}
\\
{\color{limegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)}
& = &
{\color{limegreen} \frac{1}{\sqrt{10}}}
\\
- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)
& = &
*
\\
e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)
& = &
*
\end{cases}
$$
Che diventano:
$$
\begin{cases}
{\color{darkgreen} \varX}
& = &
{\color{darkgreen} 2 \cdot \arccos \left( \frac{3}{\sqrt{10}} \right) }
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
{\color{darkgreen} \varX}
& \approx &
{\color{darkgreen} 0.644 }
\\
\varZ
& = &
0
\\
\varY
& = &
0
\end{cases}
$$
$$
\Large
\usecond \approx \mathbf{U}({\color{darkgreen} 0.644 }, 0.000, 0.000)
$$

## Costruzione di $\uthird$

Infine, vogliamo costruire l'[[universal controlled gate]] $\uthird$ da applicare al [[qbit]] $\notea$.

Stavolta, non partiamo da $\ket{0}$, ma dallo stato configurato dal gate $\usecond$ per $\ket{0}_\noteb$:

$$
\def \varX {a}
\def \varY {b}
\def \varZ {c}
\def \varI {i}

\uthird
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} \\
	{\color{limegreen} \frac{1}{\sqrt{10}}}
\end{bmatrix}
\quad = \quad 
\begin{bmatrix}
	{\color{forestgreen} \frac{1}{\sqrt{2}}} \\
	{\color{lightgreen} \frac{-1}{\sqrt{2}}}
\end{bmatrix}
$$

Portando tutto a destra, sfruttando l'[[operatore aggiunto]]:
$$
\uthird
\quad = \quad
\begin{bmatrix}
	{\color{forestgreen} \frac{1}{\sqrt{2}}} \\
	{\color{lightgreen} \frac{-1}{\sqrt{2}}}
\end{bmatrix}
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} \\
	{\color{limegreen} \frac{1}{\sqrt{10}}}
\end{bmatrix}^\dagger
$$

Ovvero:
$$
\uthird
\quad = \quad
\frac{\sqrt{10}}{\sqrt{2}}
\begin{bmatrix}
	\kone \\
	\kthree
\end{bmatrix}
\begin{bmatrix}
	\kzero \\
	\ktwo
\end{bmatrix}^\dagger
$$


Che diventa:
$$
\uthird
\quad = \quad
\sqrt{5}
\begin{bmatrix}
	\kone \\
	\kthree
\end{bmatrix}
\begin{bmatrix}
	\kzero &
	\ktwo
\end{bmatrix}
$$

==Credo che quel $\sqrt{5}$ sia sbagliato...==

Risolvendo il [[prodotto matriciale]]:
$$
\uthird
\quad = \quad
\sqrt{5}
\begin{bmatrix}
	\kone \cdot \kzero & \kone \cdot \ktwo \\
	\kthree \cdot \kzero & \kthree \cdot \ktwo
\end{bmatrix}
$$
Moltiplicando:
$$
\uthird
\quad = \quad
\sqrt{5}
\begin{bmatrix}
	{\color{teal} 3} & {\color{aqua} 1} \\
	{\color{turquoise} -3} & {\color{aquamarine} -1}
\end{bmatrix}
$$

Sostituiamo $\uthird$:
$$
\def \varX {a}
\def \varY {b}
\def \varZ {c}
\def \varI {i}

\begin{bmatrix}
	{\color{teal} \cos \left( \frac{\varX}{2} \right)} &
	{\color{aqua} - e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)} \\
	{\color{turquoise} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)} &
	{\color{aquamarine} e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)}
\end{bmatrix}
\quad = \quad
\begin{bmatrix}
	{\color{teal} 3 \cdot \sqrt{5}} & {\color{aqua} \sqrt{5}} \\
	{\color{turquoise} -3 \cdot \sqrt{5}} & {\color{aquamarine} - \sqrt{5}}
\end{bmatrix}
$$

Mettiamo a sistema:
$$
\begin{cases}
	{\color{teal} \cos \left( \frac{\varX}{2} \right)} & = & {\color{teal} 3 \cdot \sqrt{5}}
	\\\\
	{\color{aqua} - e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)} & = & {\color{aqua} \sqrt{5}}
	\\\\
	{\color{turquoise} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)} & = & {\color{turquoise} -3 \cdot \sqrt{5}}
	\\\\
	{\color{aquamarine} e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)} & = & {\color{aquamarine} -\sqrt{5}}
\end{cases}
$$

Abbiamo tre incognite e quattro equazioni.  
Rendiamo prima tutto uguale a $1$:

$$
\begin{cases}
	{\color{teal} \frac{1}{3 \sqrt{5}} \cdot \cos \left( \frac{\varX}{2} \right)} & = & 1
	\\\\
	{\color{aqua} - \frac{1}{\sqrt{5}} \cdot e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)} & = & 1
	\\\\
	{\color{turquoise} - \frac{1}{3 \sqrt{5}} \cdot e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)} & = & 1
	\\\\
	{\color{aquamarine} - \frac{1}{\sqrt{5}} \cdot e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)} & = & 1
\end{cases}
$$

Poi, possiamo prendere a due a due le equazioni che ci sono più comode per determinare ciascuna incognita:

$$
{\color{aqua} - \frac{1}{\sqrt{5}} \cdot e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)} = {\color{aquamarine} - \frac{1}{\sqrt{5}} \cdot e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)}
$$

I $-\frac{1}{\sqrt{5}}$ si semplificano:
$$
{\color{aqua} e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)} = {\color{aquamarine} e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)}
$$
L'esponente $e^{\varI \varY + \varI \varZ}$ si separa:
$$
{\color{aqua} e^{\varI \varZ} \cdot \sin \left( \frac{\varX}{2} \right)} = {\color{aquamarine} e^{\varI \varY} \cdot e^{\varI \varZ} \cdot \cos \left( \frac{\varX}{2} \right)}
$$

$e^{\varI \varZ}$ si semplifica:
$$
{\color{aqua} \sin \left( \frac{\varX}{2} \right)} = {\color{aquamarine} e^{\varI \varY} \cdot \cos \left( \frac{\varX}{2} \right)}
$$

Tornando al sistema, possiamo sbarazzarci dell'ultimo $\sin \par{\frac{\varX}{2}}$ rimasto:
$$
\begin{cases}
	{\color{teal} \frac{1}{3 \sqrt{5}} \cdot \cos \left( \frac{\varX}{2} \right)} & = & 1
	\\\\
	{\color{aqua} \sin \left( \frac{\varX}{2} \right)} & = & e^{\varI \varY} \cdot \cos \left( \frac{\varX}{2} \right)
	\\\\
	{\color{turquoise} - \frac{1}{3 \sqrt{5}} \cdot e^{\varI \varY + \varI \varY} \cos \left( \frac{\varX}{2} \right)} & = & 1
	\\\\
	{\color{aquamarine} - \frac{1}{\sqrt{5}} \cdot e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)} & = & 1
\end{cases}
$$

Nuova equazione:
$$
{\color{teal} \frac{1}{3 \sqrt{5}} \cdot \cos \left( \frac{\varX}{2} \right)} = 
{\color{turquoise} - \frac{1}{3 \sqrt{5}} \cdot e^{\varI \varY + \varI \varY} \cos \left( \frac{\varX}{2} \right)}
$$

Semplificando:
$$
{\color{teal} 1}  = {\color{turquoise} - e^{2 \varI \varY}}
$$

E quindi:
$$
{\color{teal} \varY} = {\color{turquoise} \frac{ \ln ( - 1 ) }{2 \varI}}
$$

Cioè:
$$
{\color{teal} \varY} = {\color{turquoise} \frac{ \pi \varI }{2 \varI}}
$$

Ovvero:
$$
{\color{teal} \varY} = {\color{turquoise} \frac{\pi}{2}}
$$

Che nel sistema diventa:
$$
\begin{cases}
	{\color{teal} \varY} & = & \frac{\pi}{2}
	\\\\
	{\color{aqua} \sin \left( \frac{\varX}{2} \right)} & = & \varI \cdot \cos \left( \frac{\varX}{2} \right)
	\\\\
	{\color{turquoise} \frac{1}{3 \sqrt{5}} \cdot \cos \left( \frac{\varX}{2} \right)} & = & 1
	\\\\
	{\color{aquamarine} - \frac{\varI}{\sqrt{5}} \cdot e^{\varI \varZ} \cos \left( \frac{\varX}{2} \right)} & = & 1
\end{cases}
$$

Possiamo ora scoprire il valore di $\varX$:
$$
{\color{turquoise} \frac{1}{3 \sqrt{5}} \cdot \cos \left( \frac{\varX}{2} \right)} = 1
$$
Cioè:
$$
{\color{turquoise} \varX} = 2 \cdot \arccos \par{ 3 \sqrt{5} }
$$
Che nel sistema diventa:
$$
\begin{cases}
	{\color{teal} \varY} & = & \frac{\pi}{2}
	\\\\
	{\color{aqua} \sin \left( \frac{\varX}{2} \right)} & = & \varI \cdot \cos \left( \frac{\varX}{2} \right)
	\\\\
	{\color{turquoise} \varX} & = & 2 \cdot \arccos \par{ 3 \sqrt{5} }
	\\\\
	{\color{aquamarine} - 3 \varI \cdot e^{\varI \varZ}} & = & 1
\end{cases}
$$

Concludendo:
$$
{\color{aquamarine} e^{\varI \varZ}} = - \frac{1}{3 \varI}
$$

Che diventa:
$$
{\color{aquamarine} \varZ} = \frac{\ln \par{ -\frac{1}{3 \varI} }}{\varI}
$$

Ovvero:
$$
{\color{aquamarine} \varZ} = - \frac{\pi \ln(3)}{2}
$$

Ottenendo, dunque:
$$
\begin{cases}
	{\color{turquoise} \varX} & = & 2 \cdot \arccos \par{ 3 \sqrt{5} }
	\\\\
	{\color{teal} \varY} & = & \frac{\pi}{2}
	\\\\
	{\color{aquamarine} \varZ} & = & - \frac{\pi \ln(3)}{2}
\end{cases}
$$

Che, approssimando, diventa:
$$
\begin{cases}
	{\color{turquoise} \varX} & \approx & 5.182 \varI
	\\\\
	{\color{teal} \varY} & \approx & 1.571
	\\\\
	{\color{aquamarine} \varZ} & \approx & - 1.726
\end{cases}
$$

==I?????????????????????????????????????????????==
