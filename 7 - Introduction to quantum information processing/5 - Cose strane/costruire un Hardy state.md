Per creare un [[Hardy state]] partendo da $\ket{00}$, è necessario:

==TODO: Formattare con sintassi matematica decente.==

1. Separare i [[qbit]] nell'equazione dello stato:
   $$
   \def \noteA {{\color{grey} a}}
   \def \noteB {{\color{grey} b}}
   
	\displaylines{
	   \ket{00} = \ket{0}_\noteA \otimes \ket{0}_\noteB \\
	   \ket{01} = \ket{0}_\noteA \otimes \ket{1}_\noteB \\
	   \ket{10} = \ket{1}_\noteA \otimes \ket{0}_\noteB \\
	   \ket{11} = \ket{1}_\noteA \otimes \ket{1}_\noteB
	}
   $$
2. Raccogliere i bit dello stato: 
   $$
   \frac{1}{\sqrt{12}}
   \cdot
   {\LARGE(\ }
	   (\ 3 \ket{0}_\noteA + 1 \ket{1}_\noteA\ ) \otimes \ket{0}_\noteB
	   + 
	   (\ 1 \ket{0}_\noteA - 1 \ket{1}_\noteA\ ) \otimes \ket{1}_\noteB
   {\ \LARGE)}
   $$
3. Determinare la somma dei quadrati dei coefficienti:
   $$
   \large
   \begin{matrix}
	   \ket{0}_\noteB & : & \frac{\sqrt{3^2 + 1^2}}{\sqrt{12}} &=& \frac{\sqrt{10}}{\sqrt{12}} \\
	   \ket{1}_\noteB & : & \frac{\sqrt{1^2 + 1^2}}{\sqrt{12}} &=& \frac{\sqrt{2}}{\sqrt{12}}
   \end{matrix}
   $$
4. Determinare i parametri del [[gate quantistico universale]] per il secondo qbit $\mathbf{U}_\noteB (\theta, \phi, \lambda)$:
   $$
   \large
   \displaylines{
	   \begin{cases}
		\cos \frac{\phi}{2} &=& \frac{\sqrt{10}}{\sqrt{12}} \\
		e^{i \theta} \sin \frac{\phi}{2} &=& \frac{\sqrt{2}}{\sqrt{12}} \\
	   \end{cases}
	   \\\\\updownarrow\\\\
	   \begin{cases}
		\phi &=& 2 \arccos \frac{\sqrt{10}}{\sqrt{12}} \\
		\theta &=& 0 \\
		\lambda &=& 0
	   \end{cases}
   }
   $$
5. Determinare la somma dei quadrati dei coefficienti quando il bit $\noteB$ è $\ket{0}$:

   $$
   \large
   \begin{matrix}
	   \ket{0}_\noteA \otimes \ket{0}_\noteB & : & \frac{3}{\sqrt{12}} \\
	   \ket{1}_\noteA \otimes \ket{0}_\noteB & : & \frac{1}{\sqrt{12}}
   \end{matrix}
   $$
6. Determinare i parametri del [[gate quantistico universale]] per il primo qbit $\mathbf{U}_\noteA$:
   $$
	\large
	\displaylines{
	   \begin{cases}
		  \cos \frac{\phi}{2} &=& \frac{3}{\sqrt{12}} \\
		  e^{i \theta} \sin \frac{\phi}{2} &=& \frac{1}{\sqrt{12}} \\
	   \end{cases}
	   \\\\\updownarrow\\\\
	   \begin{cases}
		  \phi &=& 2 \arccos \frac{3}{\sqrt{10}} \\
		  \theta &=& 0 \\
		  \lambda &=& 0
	   \end{cases}
	}
   $$

==TODO: Non lo so, mi sono perso.==
