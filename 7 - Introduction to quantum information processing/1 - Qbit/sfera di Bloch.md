L'insieme dei possibili [[stato di un qubit|stati di un qubit]] può essere rappresentato attraverso una sfera, le cui intersezioni con l'origine degli assi corrispondono a punti notevoli.

I punti notevoli sono i seguenti:
- $\begin{bmatrix} 1\\0 \end{bmatrix}$ in cima alla sfera
- $\begin{bmatrix} 0\\1 \end{bmatrix}$ in fondo alla sfera
- $\begin{bmatrix} 1\\1 \end{bmatrix}$ a destra della sfera
- $\begin{bmatrix} 1\\-1 \end{bmatrix}$ a sinistra della sfera
- $\begin{bmatrix} 1\\i \end{bmatrix}$ dietro alla sfera
- $\begin{bmatrix} 1\\-i \end{bmatrix}$ davanti alla sfera

## Corrispondenze quantistiche

- **[[stato di un qubit]]**: un raggio di questa sfera
- **[[gate quantistico]]**: una rotazione in questa sfera

## Corrispondenze fisiche

- **[[stato di un qubit]]**: polarizzazione di un atomo

## Forma polare

Rappresentazione alternativa per uno [[stato quantistico|stato di un qbit]], attraverso [[latitudine]] $\ell$ e [[longitudine]] $\theta$ nella sfera di Bloch:
$$
\Large
\cos \par{\frac{\theta}{2}} \cdot \ket{0} + e^{\i \ell} \sin \par{\frac{\theta}{2}} \cdot \ket{1}
$$

## Forma vettoriale

Rappresentazione alternativa per uno [[stato quantistico|stato di un qbit]], attraverso [[coordinate]] polari sulla sfera di Bloch:
$$
\Large
\arr{
	\axisX{
		\sin \par{\theta} \cdot \cos \par{\ell}
	},\ 
	\axisY{
		\sin \par{\theta} \cdot \sin \par{\ell}
	},\ 
	\axisZ{
		\cos \par{\theta}
	}
}
$$

Le coordinate possono essere ottenute anche direttamente a partire dallo stato $\ket{\phi}$:

==È giusto mettere i gate qui?==
$$
\Large
\arr{
	\axisX{
		\braket{\phi | \mathbf{X} | \phi}
	},\ 
	\axisY{
		\braket{\phi | \mathbf{Y} | \phi}
	},\ 
	\axisZ{
		\braket{\phi | \mathbf{Z} | \phi}
	}
}
$$