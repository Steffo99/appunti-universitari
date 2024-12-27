[[gate quantistico]] che effettua una [[rotazione]] arbitraria.

$$
\def \varX {\axisX{x}}
\def \varY {\axisY{y}}
\def \varZ {\axisZ{z}}
\displaylines{
	\Huge
	\mathbf{U}(\varX, \varY, \varZ) 
	=\\\\ 
	\Large
	\begin{bmatrix}
		\cos \left( \frac{\varX}{2} \right) &
		- e^{\i \varZ} \sin \left( \frac{\varX}{2} \right) \\
		e^{\i \varY} \sin \left( \frac{\varX}{2} \right) &
		e^{\i \varY + \i \varZ} \cos \left( \frac{\varX}{2} \right)
	\end{bmatrix}
	=\\\\
	\begin{bmatrix}
		\cos \frac{\varX}{2} &
		- (\cos \varZ + \i \sin \varZ) \cdot \sin \frac{\varX}{2} \\
		(\cos \varY + \i \sin \varY) \cdot \sin \frac{\varX}{2} &
		(cos (\varY + \varZ) + \i \sin (\varY + \varZ)) \cdot \cos \frac{\varX}{2}
	\end{bmatrix}
}
$$

> [!Tip]
> - Con $\varY = 0$ e $\varZ = 0$, abbiamo un [[rotation X gate]].
> - Con $\varX = 0$ e $\varZ = 0$, abbiamo un [[rotation Y gate]].
> - Con $\varX = 0$ e $\varY = 0$, abbiamo un [[rotation Z gate]].
> - Con $\varX = \frac{\pi}{2}$, $\varY = 0$ e $\varZ = 0$, abbiamo un [[Pauli X gate]].
> - Con $\varY = \frac{\pi}{2}$, $\varX = 0$ e $\varZ = 0$, abbiamo un [[Pauli Y gate]].
> - Con $\varZ = \frac{\pi}{2}$, $\varX = 0$ e $\varY = 0$, abbiamo un [[Pauli Z gate]].

## 👁️ Effetto in [[qbit|rappresentazione matriciale]]

==Come altera la matrice a cui viene applicato?==

## 🌐 Effetto in [[sfera di Bloch]]

Ruota il [[qbit]] a cui è applicato di $\varX$ sull'[[asse X in quantum computing|asse X]], $\varY$ sull'[[asse Y]], e $\varZ$ sull'[[asse Z]].

## ✏️ Simbolo per [[circuito quantistico]]

![[universal gate.png]]

## ⛎ Utilizzo

Essendo un gate ancora **solamente teorico**, si cerca di evitarne l'utilizzo in circuiti effettivi.

==Verificare che non sia stato scoperto.==
