
[[gate quantistico]] che introduce il tipo più semplice di [[superposizione]] nello stato:
$$
\Huge
\mathbf{H} = \begin{bmatrix}
1 & 1 \\
1 & -1
\end{bmatrix}
$$

## Effetto

Mette in superposizione le basi del [[qbit]] a cui è applicato, con un [[segno concorde]] se lo [[qbit|stato 0]] è più intenso dello [[qbit|stato 1]], e un [[segno discorde]] in caso contrario:
$$
\mathbf{H} \ket{0} = \ket{0} + \ket{1} = \ket{+}
$$
$$
\mathbf{H} \ket{1} = \ket{0} - \ket{1} = \ket{-}
$$
$$
\mathbf{H} 
\begin{bmatrix}
	\alpha \\
	\beta
\end{bmatrix}
=
\begin{bmatrix}
	\alpha + \beta \\
	\alpha - \beta
\end{bmatrix}
$$

## Visualizzazioni

### In un [[circuito quantistico]]

Un quadrato con una H sopra.

### Nella [[sfera di Bloch]]

Corrisponde a una [[rotazione]] su un asse diagonale dal centro della sfera alla metà dell'arco tra $\ket{0}$ e $\ket{+}$.
