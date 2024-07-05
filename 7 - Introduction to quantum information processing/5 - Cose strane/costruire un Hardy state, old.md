  

Dobbiamo determinare i parametri dei gate da utilizzare per costruire il seguente stato:

  

$$

\ket{\Phi}_2 = \frac{1}{\sqrt{12}}\ (\ 3 \ket{00} + 1 \ket{01} + 1 \ket{10} - 1 \ket{11}\ )

$$

  

### Costruzione del gate $\mathbf{U_A}$ da applicare al qbit 0

  

Vogliamo usare un gate $\mathbf{U_0}(\theta, \phi, \lambda)$ per configurare il bit più a destra dello stato, assumendo che lo stato iniziale sia $\ket{00}$.

  

Raccogliamo il qbit più a destra:

  

$$

\ket{\Phi}_2 = \frac{1}{\sqrt{12}} \ (\ {\color{orange} (3\ket{0} + 1 \ket{1})}\ {\color{red} \ket{0}} + {\color{lime} (1\ket{0} - 1 \ket{1})}\ {\color{green} \ket{1}}\ )

$$

  

Ignorando il valore del qbit di sinistra, abbiamo che:

  

$$

\frac{1}{\sqrt{12}} \ \left(\ {\color{orange} \sqrt{3^2 + 1^2}}\ {\color{red} \ket{\_0}} + {\color{lime} \sqrt{1^2 + (-1)^2}}\ {\color{green} \ket{\_1}}\ \right) =

\frac{1}{\sqrt{12}} \ \left(\ {\color{orange} \sqrt{10}}\ {\color{red} \ket{\_0}} + {\color{lime} \sqrt{2}} {\color{green}\ \ket{\_1}}\ \right)

$$

  

Ricordando che il gate $\mathbf{U}(\theta, \phi, \lambda)$ è composto così:

  

$$

\mathbf{U}(\theta, \phi, \lambda) = \left[ \begin{matrix}

{\color{Gray} Out} & {\color{Gray} In_{\ket{\_0}}} & {\color{Gray} In_{\ket{\_1}}} \\\ \\

{\color{Red} \ket{\_0}} & \cos \left( \frac{\theta}{2} \right) & {\color{LightGray} - e^{i\lambda} \sin \left( \frac{\theta}{2} \right)}

\\\ \\

{\color{Green} \ket{\_1}} & e^{i \phi} \sin \left( \frac{\theta}{2} \right) & {\color{LightGray} e^{i(\phi + \lambda)} \cos \left( \frac{\theta}{2} \right)}

\end{matrix} \right]

$$

  

E che vogliamo ottenere il seguente gate:

  

$$

\mathbf{U_A} (\theta, \phi, \lambda) \ket{\_0} = \frac{1}{\sqrt{12}} \ \left(\ {\color{orange} \sqrt{10}}\ {\color{red} \ket{\_0}} + {\color{lime} \sqrt{2}} {\color{green}\ \ket{\_1}}\ \right)

$$

  

Possiamo portare a destra tutti i termini che non sono il gate, ottenendo:

  

$$

\mathbf{U_A} (\theta, \phi, \lambda) = \frac{1}{\sqrt{12}}

$$

  

Abbiamo che:

  

$$

\mathbf{U_A} (\theta, \phi, \lambda) = \frac{1}{\sqrt{12}} \left[ \begin{matrix}

{\color{Gray} Out} & {\color{Gray} In_{\ket{\_0}}} & {\color{Gray} In_{\ket{\_1}}} \\\ \\

{\color{Red} \ket{\_0}} & {\color{Orange} \sqrt{10}} & {\color{LightGray} ?}

\\\ \\

{\color{Green} \ket{\_1}} &{\color{Lime} \sqrt{2}} & {\color{LightGray} ?}

\end{matrix} \right]

$$

  

<aside>

📘 Non ci interessa lo stato $\ket{\_1}$, perchè lo stato iniziale a cui applichiamo il gate $\mathbf{U_A}$ è sempre $\ket{00}$.

  

</aside>

  

Mettiamo a sistema i valori che ci servono:

  

$$

\begin{cases}

{\color{Red} \ket{\_0}}: & \cos \left(\frac{\theta}{2}\right) = \frac{{\color{Orange} \sqrt{10}}}{\sqrt{12}}\\\ \\

{\color{Green} \ket{\_1}}: & e^{i \phi} \sin \left(\frac{\theta}{2}\right) = \frac{{\color{Lime} \sqrt{2}}}{\sqrt{12}}\\

\end{cases}

$$

  

Impostando le due dimensioni non-vincolate $\phi$ e $\lambda$ a $0$, abbiamo che:

  

$$

\begin{cases}

\cos \left(\frac{\theta}{2}\right) = \frac{{\color{Orange} \sqrt{10}}}{\sqrt{12}}\\

e^i \sin \left(\frac{\theta}{2}\right) = \frac{{\color{Lime} \sqrt{2}}}{\sqrt{12}}\\\phi = 0\\

\lambda = 0\\

\end{cases}

$$

  

Ci basta risolvere una delle due equazioni per trovare $\theta$, quindi decidiamo di risolvere quella sopra:

  

$$

\begin{cases}

\theta = 2 \cdot \cos^{-1} \left(\frac{{\color{Orange} \sqrt{10}}}{\sqrt{12}}\right) \approx 0.841\\

\phi = 0\\

\lambda = 0\\

\end{cases}

$$

  

Per ottenere il bit di destra dello stato $\ket{\Psi}$ dobbiamo usare il gate $\mathbf{U_0}(0.841,\ 0,\ 0)$, che chiameremo $\mathbf{U_A}$!

  

### Costruzione del gate $\mathbf{U_B}$ da applicare al qbit 1

  

Ora dobbiamo configurare il qbit di sinistra, entangleandolo correttamente con il bit di destra.

  

<aside>

📘 Potremmo usare due gate $\mathbf{U}$ controllati, uno che si attiva quando $\mathbf{n_0}$, e uno che si attiva quando $\mathbf{\dot{n}_0}$.

  

Visto però che i gate $\mathbf{U}$ controllati sono più costosi di quelli normali, possiamo usare un trucchetto per usare un solo $\mathbf{U}$ controllato e un $\mathbf{U}$ normale.

  

Utilizziamo il gate $\mathbf{U}$ normale per configurare “globalmente” il qbit 1 per lo stato $\ket{\_0}$, e poi utilizziamo il gate $\mathbf{U}$ controllato per annullare le modifiche che esso ha apportato e per applicare una configurazione diversa per lo stato $\ket{\_1}$.

  

</aside>

  

Lo stato $\ket{\_0}$ che avevamo raccolto prima era composto da:

  

$$

\frac{1}{\sqrt{10}}\ ({\color{Orange} 3}\ {\color{Red} \ket{0\_}} + {\color{lime} 1}\ {\color{Green} \ket{1\_}})

$$

  

Allora, possiamo costruire il gate $\mathbf{U_B}$ usando un gate $\mathbf{U_1}(\theta, \phi, \lambda)$ tale che:

  

$$

\mathbf{U_B} \ket{0\_} = \frac{1}{\sqrt{10}}\ ({\color{Orange} 3}\ {\color{Red} \ket{0\_}} + {\color{lime} 1}\ {\color{Green} \ket{1\_}})

$$

  

Usiamo lo stesso processo che abbiamo usato prima (saltando alcuni passaggi):

  

$$

\begin{cases}

{\color{Red} \ket{0\_}}: & \cos \left(\frac{\theta}{2}\right) = \frac{{\color{Orange} 3}}{\sqrt{10}}\\\ \\

{\color{Green} \ket{1\_}}: & e^{i \phi} \sin \left(\frac{\theta}{2}\right) = \frac{{\color{lime} 1}}{\sqrt{10}}\\

\end{cases}

$$

  

Semplificandoci ancora la vita:

  

$$

\begin{cases}

\cos \left(\frac{\theta}{2}\right) = \frac{{\color{Orange} 3}}{\sqrt{10}}\\

e^{i \phi} \sin \left(\frac{\theta}{2}\right) = \frac{{\color{lime} 1}}{\sqrt{10}}\\

\phi = 0\\

\lambda = 0\\

\end{cases}

$$

  

E risolvendo ancora solo l’equazione sopra, abbiamo che:

  

$$

\begin{cases}

\theta = 2 \cdot \cos^{-1} \left(\frac{{\color{orange} 3}}{\sqrt{10}}\right) \approx 0.643\\\phi = 0\\

\lambda = 0\\

\end{cases}

$$

  

Per ottenere il bit di sinistra dello stato $\ket{\Psi}$ quando il bit di destra è impostato a zero dobbiamo usare il gate $\mathbf{U_1}(0.643,\ 0,\ 0)$, che chiameremo $\mathbf{U_B}$!

  

### Costruzione del gate controllato $\mathbf{U_{C}}$

  

Infine, dobbiamo costruire il gate che configura il bit di sinistra dello stato $\ket{\_1}$.

  

Esso deve costruire il seguente stato:

  

$$

\frac{1}{\sqrt{2}}\ ({\color{DodgerBlue} 1} \ket{0\_} \ {\color{Turquoise} -\ 1}\ \ket{1\_})

$$

  

Inoltre, esso deve annullare le modifiche apportate da $\mathbf{U_B}$, ovvero:

  

$$

\frac{1}{\sqrt{10}}\ ({\color{OrangeRed} 3} \ket{0\_} + {\color{Goldenrod} 1} \ket{1\_})

$$

  

Usiamo un gate $\mathbf{U_{01}}(\theta, \phi, \lambda)$, che chiamiamo $\mathbf{U_C}$.

  

Dobbiamo trovare i suoi parametri, in modo tale che:

  

$$

\mathbf{U_C}(\theta, \phi, \lambda) \otimes \frac{1}{\sqrt{10}}\ ({\color{OrangeRed} 3} \ket{0\_} + {\color{Goldenrod} 1} \ket{1\_}) = \frac{1}{\sqrt{2}}\ ({\color{DodgerBlue} 1} \ket{0\_} \ {\color{Turquoise} -\ 1}\ \ket{1\_})

$$

  

Abbiamo quindi che:

  

$$

\mathbf{U_C} (\theta, \phi, \lambda)\ \frac{\sqrt{2}}{\sqrt{12}} \left[ \begin{matrix}

{\color{Gray} Out} & {\color{Gray} In_{\ket{\_0}}} & {\color{Gray} In_{\ket{\_1}}} \\\ \\

{\color{Gray} \ket{\_0}} & {\color{OrangeRed} 3}\ \cdot\ {\color{DodgerBlue} 1} & {\color{Goldenrod} 1}\ \cdot\ {\color{DodgerBlue} 1}

\\\ \\

{\color{Gray} \ket{\_1}} &{\color{OrangeRed} 3}\ \cdot\ {\color{Turquoise} -1} & {\color{Goldenrod} 1}\ \cdot\ {\color{Turquoise} -1}

\end{matrix} \right] = 1

$$

  

E allora, che: [qual è il passaggio matematico qui?]

  

$$

\begin{cases}

\frac{\sqrt{2}}{\sqrt{12}} & ({\color{OrangeRed} 3}\ \cdot\ {\color{DodgerBlue} 1}) \cos \frac{\theta}{2} & - &({\color{Goldenrod} 1}\ \cdot\ {\color{DodgerBlue} 1})\ e^{i\lambda} \sin \frac{\theta}{2} & = 1\\

\\

\frac{\sqrt{2}}{\sqrt{12}} & \left({\color{OrangeRed} 3}\ \cdot\ {\color{Turquoise} -1} \right) e^{i \phi} \sin \frac{\theta}{2} & + & ({\color{Goldenrod} 1}\ \cdot\ {\color{Turquoise} -1})\ e^{i\phi + i\lambda} \cos \frac{\theta}{2} & = 1

\end{cases}

$$

  

Semplificandoci ancora una volta la vita:

  

$$

\begin{cases}

\frac{\sqrt{2}}{\sqrt{12}} & ({\color{OrangeRed} 3}\ \cdot\ {\color{DodgerBlue} 1}) \cos \frac{\theta}{2} & - &({\color{Goldenrod} 1}\ \cdot\ {\color{DodgerBlue} 1}) \sin \frac{\theta}{2} & = 1\\

\\

\frac{\sqrt{2}}{\sqrt{12}} & ({\color{OrangeRed} 3}\ \cdot\ {\color{Turquoise} -1}) \sin \frac{\theta}{2} & + & ({\color{Goldenrod} 1}\ \cdot\ {\color{Turquoise} -1}) \cos \frac{\theta}{2} & = 1\\

\\

\phi = 0\\

\\

\lambda = 0

\end{cases}

$$

  

E allora:

  

$$

\begin{cases}

({\color{OrangeRed} 3}\ \cdot\ {\color{DodgerBlue} 1}) \cos \frac{\theta}{2} & - &({\color{Goldenrod} 1}\ \cdot\ {\color{DodgerBlue} 1}) \sin \frac{\theta}{2} & = &\left({\color{OrangeRed} 3}\ \cdot\ {\color{Turquoise} -1} \right) \sin \frac{\theta}{2} & + & ({\color{Goldenrod} 1}\ \cdot\ {\color{Turquoise} -1}) \cos \frac{\theta}{2}\\

\\

\phi = 0\\

\\

\lambda = 0

\end{cases}

$$

  

Che risulta in:

  

$$

\begin{cases}

4 \cos \frac{\theta}{2} + 2 \sin \frac{\theta}{2} = 0\\

\phi = 0\\

\lambda = 0

\end{cases}

$$

  

Quindi:

  

$$

\begin{cases}

\theta \approx -2.214\\

\phi = 0\\

\lambda = 0

\end{cases}

$$

  

Per ottenere il bit di sinistra dello stato $\ket{\Psi}$ quando il bit di destra è impostato a uno dobbiamo usare il gate $\mathbf{U_{01}}(-1.571,\ 0,\ 0)$, che chiameremo $\mathbf{U_C}$!

  

### Risultato

  

![Untitled](Glossario%206f22ab79f2da4bd4a0fcd670c58cde62/Untitled.png)

  

<aside>

📘 Utilizzando lo stesso procedimento possiamo costruire qualsiasi stato arbitrario costante a $n$ qbit!

  

Richiederebbe però $\sum_{i=1}^n n$ gates $\mathbf{U}$, e degli $\mathbf{U}$ gates con doppio controllo, amichevolmente chiamati $\mathbf{U}$-Toffoli dalla chat…

  

![Untitled](Glossario%206f22ab79f2da4bd4a0fcd670c58cde62/Untitled%201.png)

  

</aside>


---



1. Determinare la somma dei quadrati dei coefficienti:
   $$
   \frac{\sqrt{\kzero^2 + \ktwo^2}}{\sqrt{12}} = \frac{\sqrt{10}}{\sqrt{12}}
   $$
   $$
   \frac{\sqrt{\kone^2 + \kthree^2}}{\sqrt{12}} = \frac{\sqrt{2}}{\sqrt{12}}
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
