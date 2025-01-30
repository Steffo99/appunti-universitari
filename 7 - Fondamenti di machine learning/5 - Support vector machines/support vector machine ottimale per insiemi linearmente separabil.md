Particolare [[support vector machine estesa per insiemi linearmente separabili]].

Seleziona un [[iperpiano]] $\par{\varW, \varB}$ tale per cui lo spessore del [[support vector machine estesa per insiemi linearmente separabili#Margine|margine]] $\frac{2}{\abs{\varW}}$ sia [[massimo globale]]:
$$
\def \varXI {{\color{orangered} \mathbf{x}_i}}
\def \varYI {{\color{gold} y_{i}}}
\def \varW {{\color{turquoise} \mathbf{w}}}
\def \varB {{\color{darkturquoise} b}}

\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\? & \par{ \varW, \varB } & : & \varYI \cdot \par{ \varW \cdot \varXI + \varB } \geq 1
	\end{matrix}\\\\
	\Large
	\max_{\varW} \par{
		\frac{2}{\abs{\varW}}
	}
}
$$

## Duale

Essendo il [[problema duale]] più facile da risolvere, solitamente torna più comoda la seguente forma:
$$
\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\? & \par{ \varW, \varB } & : & \varYI \cdot \par{ \varW \cdot \varXI + \varB } \geq 1
	\end{matrix}\\\\
	\Large
	\min_{\varW} \par{
		\frac{\abs{\varW}}{2}
	}
}
$$

Che, ancora, è equivalente al [[minimo globale]] della [[funzione quadratica]]:
$$
\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\? & \par{ \varW, \varB } & : & \varYI \cdot \par{ \varW \cdot \varXI + \varB } \geq 1
	\end{matrix}\\\\
	\Large
	\min_{\varW} \par{
		\frac{\varW \cdot \varW}{2}
	}
}
$$
