Riscriviamo i vincoli in modo tale da essere in grado di usare le [[condizioni di Karush-Kuhn-Tucker]]:
$$
\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\forall & \varKI & \in & \varK\\
		\? & \par{ \varW, \varB } & : & 1 - \varKI - \varYI \cdot \par{ \varW \cdot \varXI + \varB } \leq 0 \\
	\end{matrix}\\\\
	\Large
	\min_{\varW,\ \varK} \par{
		\frac{\varW \cdot \varW}{2}
		+
		c
		\cdot
		\sum_{\varKI \in \varK} \par{ \varKI }
	}
}
$$

Poi, applichiamo il [[duale di ottimizzazione vincolata|teorema di Wolfe]]:
$$
\def \varU {{\mathbf{u}}}
\def \varV {{\mathbf{v}}}
\def \varUI {{\color{aquamarine} u_i}}
\def \varVI {{\color{cadetblue} v_i}}

\displaylines{
	\begin{matrix}
		\forall & \par{ \varXI, \varYI } & \in & \mathbf{D_{train}} \\
		\forall & \varKI & \in & \varK\\
		\? & \varUI & \geq & 0\\
		\? & \varVI & \geq & 0\\
	\end{matrix}\\\\
	\max_{\varW, \varU, \varV} \par{
		\frac{\varW \cdot \varW}{2}
		+
		c
		\cdot
		\sum_{\varKI \in \varK} \par{ \varKI }
		+
		\sum_{\varKI \in \varK} \par{ \varUI \cdot \par{1 - \varKI - \varYI \cdot \par{ \varW \cdot \varXI + \varB }}}
		+
		\sum_{\varKI \in \varK} \par{ \varVI \cdot \par{ - \varKI } }
	}
}
$$

==Continua, ma qual è l'obiettivo di tutto ciò?==

