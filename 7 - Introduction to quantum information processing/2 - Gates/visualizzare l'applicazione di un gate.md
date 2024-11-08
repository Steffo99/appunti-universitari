È possibile visualizzare la [[combinazione lineare]] derivante dall'applicazione di un gate come una mappa da input ad output di ciascuno [[stato]].

Dato questo [[Pauli Z gate]]:
$$
\Large
\mathbf{Z} = \begin{bmatrix}
  & {\color{Gray} In_{\ket{0}}} & {\color{Gray} In_{\ket{1}}} \\
  {\color{Gray} Out_\ket{0}} & {\color{tomato} 1} & {\color{gold} 0} \\
  {\color{Gray} Out_\ket{1}} & {\color{darkorange} 0} & {\color{yellow} -1} \\
\end{bmatrix}
$$

Possiamo vedere la prima colonna come "in cosa verrà trasmutato" lo stato $\ket{0}$, e la seconda colonna come "in cosa verrà trasmutato" lo stato $\ket{1}$.

Con questo gate, lo stato $\ket{0}$ diventerà:
$$
\Large
{\color{tomato} 1 \cdot \ket{0}} + {\color{darkorange} 0 \cdot \ket{1}}
$$
E invece, lo stato $\ket{1}$ diventerà:
$$
\Large
{\color{gold} 0 \cdot \ket{0}} + {\color{yellow} -1 \cdot \ket{1}}
$$


> [!Note]
> Sì, è una cosa triviale se uno sa come funzionano le combinazioni lineari, ma in qualche modo formulandola in questo modo il mio cervello l'ha capita meglio.
