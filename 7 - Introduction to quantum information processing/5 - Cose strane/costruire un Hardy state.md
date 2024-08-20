Si vuole creare un [[Hardy state]] su due [[qbit]] nello stato neutro applicandovi tre [[gate quantistico universale|gate quantistici universali]]:
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

> [!Note]
> I [[gate quantistico controllato universale|gate controllati]] costano di più dei [[gate quantistico universale|gate normali]], quindi per minimizzare il costo del [[circuito quantistico]] si:
> 1. $\ufirst$: utilizza un gate normale per configurare lo stato di $\noteb$
> 2. $\usecond$: utilizza un gate normale per configurare lo stato di $\notea$ quando $\ket{0}_\noteb$
> 3. $\uthird$: utilizza un gate controllato per annullare le modifiche del passo precedente e inoltre configurare lo stato di $\notea$ quando $\ket{1}_\noteb$.

## Costruzione di $\ufirst$

Ricordiamo che è possibile invertire il [[prodotto tensoriale]] per separare i [[qbit]]:
$$
   
\displaylines{
	\ket{00} = \ket{0}_\notea \otimes \ket{0}_\noteb \\
	\ket{01} = \ket{0}_\notea \otimes \ket{1}_\noteb \\
	\ket{10} = \ket{1}_\notea \otimes \ket{0}_\noteb \\
	\ket{11} = \ket{1}_\notea \otimes \ket{1}_\noteb
}
$$

Vogliamo costruire il gate $\ufirst$ da applicare solamente al [[qbit]] $\noteb$.



Possiamo separare i [[qbit]] dell'[[Hardy state]] in:   
$$
	\frac{1}{\sqrt{12}} 
	\cdot 
	\left\{
		\begin{matrix}
			\kzero & \cdot & (\ket{0}_\notea \otimes \ket{0}_\noteb) \\
			& + \\
			\kone & \cdot & (\ket{0}_\notea \otimes \ket{1}_\noteb) \\
			& + \\
			\ktwo & \cdot & (\ket{1}_\notea \otimes \ket{0}_\noteb) \\
			& + \\
			\kthree & \cdot & (\ket{1}_\notea \otimes \ket{1}_\noteb)
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

Decidiamo di ignorare temporaneamente il [[qbit]] $\notea$; determiniamo le [[ampiezza|ampiezze]] del gate alla [[stato base di un qbit|base]] di $\noteb$:

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

Ricordando che lo stato iniziale del sistema è sempre $\ket{0}_\noteb$, e che il [[gate quantistico universale]] è definito come:
$$
\def \varX {a}
\def \varY {b}
\def \varZ {c}
\def \varI {i}

\ufirst 
\quad = \quad 
\begin{bmatrix}
	{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)} &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
	{\color{palegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)} &
	e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
\quad = \quad
\begin{bmatrix}
	{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}} &
	\ *\ \\
	{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}} &
	\ *\ 
\end{bmatrix}
$$

Possiamo mettere a sistema i seguenti vincoli per determinare il valore di $\varX$ e $\varY$:

$$
\begin{cases}
{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
& = &
{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
\\
- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)
& = &
*
\\
{\color{palegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)}
& = &
{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\\
e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)
& = &
*
\end{cases}
$$

Abbiamo dunque due variabili libere; per semplificare i calcoli, decidiamo di fissare $\varY$ e $\varZ$ a $0$:

$$
\begin{cases}
{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
& = &
{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
\\
\varZ
& = &
0
\\
{\color{palegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)}
& = &
{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\\
\varY
& = &
0
\end{cases}
$$

Risolvendo il sistema:
$$
\begin{cases}
{\color{mediumaquamarine} \cos \left( \frac{\varX}{2} \right)}
& = &
{\color{mediumaquamarine} \frac{\sqrt{10}}{\sqrt{12}}}
\\
\varZ
& = &
0
\\
{\color{palegreen} \sin \left( \frac{\varX}{2} \right)}
& = &
{\color{palegreen} \frac{\sqrt{2}}{\sqrt{12}}}
\\
\varY
& = &
0
\end{cases}
$$
E poi:
$$
\begin{cases}
{\color{mediumaquamarine} \varX}
& = &
{\color{mediumaquamarine} 2 \cdot \arccos \left( \frac{\sqrt{10}}{\sqrt{12}} \right) }
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

Visto che si vuole riprodurre l'[[Hardy state]] in un simulatore che necessita di [[numero razionale|numeri razionali]], determiniamo un'approssimazione del valore di $\varX$:

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

## Costruzione di $\usecond$

Vogliamo costruire il [[gate quantistico universale]] $\usecond$ da applicare al [[qbit]] $\notea$.

Ripetiamo lo stesso procedimento di prima, ma ignorando $\ket{1}_{\noteb}$, visto che ci interessa configurare il qbit per $\ket{0}_\noteb$:
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
\quad = \quad
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

La sua [[matrice]] sarà quindi:

$$
\def \varX {a}
\def \varY {b}
\def \varZ {c}
\def \varI {i}

\usecond 
\quad = \quad 
\begin{bmatrix}
	{\color{darkgreen} \cos \left( \frac{\varX}{2} \right)} &
	- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right) \\
	{\color{limegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)} &
	e^{\varI \varY + \varI \varZ} \cos \left( \frac{\varX}{2} \right)
\end{bmatrix}
\quad = \quad
\begin{bmatrix}
	{\color{darkgreen} \frac{3}{\sqrt{10}}} &
	\ *\ \\
	{\color{limegreen} \frac{1}{\sqrt{10}}} &
	\ *\ 
\end{bmatrix}
$$

E i vincoli:
$$
\begin{cases}
{\color{darkgreen} \cos \left( \frac{\varX}{2} \right)}
& = &
{\color{darkgreen} \frac{3}{\sqrt{10}}}
\\
- e^{\varI \varZ} \sin \left( \frac{\varX}{2} \right)
& = &
*
\\
{\color{limegreen} e^{\varI \varY} \sin \left( \frac{\varX}{2} \right)}
& = &
{\color{limegreen} \frac{1}{\sqrt{10}}}
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
\varZ
& = &
0
\\
\varY
& = &
0
\end{cases}
$$
Approssimati:
$$
\begin{cases}
{\color{darkgreen} \varX}
& \approx &
{\color{darkgreen} 0.643 }
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

## Costruzione di $\uthird$

Infine, vogliamo costruire il [[gate quantistico controllato universale]] $\uthird$ da applicare al [[qbit]] $\notea$.

Ci troviamo nello stato configurato dal gate $\usecond$ per $\ket{0}_\noteb$:
$$
\frac{1}{\sqrt{10}} 
\left\{
	\begin{matrix}
		\kzero & \otimes & \ket{0}_\notea \\
		& + \\
		\ktwo & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
$$

Vogliamo usare il gate $\uthird$ per configurare lo stato per $\ket{1}_\noteb$ al valore seguente:

$$
\frac{1}{\sqrt{\kone^2 + \kthree^2}}
\cdot
\left\{
	\begin{matrix}
		\kone & \otimes & \ket{0}_\notea \\
		& + \\
		\kthree & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
\quad = \quad
\frac{1}{\sqrt{2}}
\cdot
\left\{
	\begin{matrix}
		\kone & \otimes & \ket{0}_\notea \\
		& + \\
		\kthree & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
$$
Abbiamo dunque che:
$$
\uthird 
\otimes 
\frac{1}{\sqrt{10}} 
\left\{
	\begin{matrix}
		\kzero & \otimes & \ket{0}_\notea \\
		& + \\
		\ktwo & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
\quad = \quad
\frac{1}{\sqrt{2}}
\left\{
	\begin{matrix}
		\kone & \otimes & \ket{0}_\notea \\
		& + \\
		\kthree & \otimes & \ket{1}_\notea
	\end{matrix}
\right\}
$$
In forma matriciale:
$$
\uthird 
\otimes 
\frac{1}{\sqrt{10}} 
\begin{bmatrix}
	\kzero \\
	\ktwo
\end{bmatrix}
\quad = \quad
\frac{1}{\sqrt{2}}
\begin{bmatrix}
	\kone \\
	\kthree
\end{bmatrix}
$$
Portando tutto a destra, sfruttando l'[[operatore aggiunto]]:
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
\sqrt{5}
\begin{bmatrix}
	{\color{teal} 3} & {\color{aqua} 1} \\
	{\color{turquoise} -3} & {\color{aquamarine} -1}
\end{bmatrix}
$$
==BOH??==
