Estendendo il [[polinomio di Taylor]] alle [[funzione a variabili multiple|funzioni a variabili multiple]], abbiamo:

$$
\Large
\func[P]_k \par{\mathbf{x}} 
= 
\frac{\func \par{\mathbf{a}} \cdot (\mathbf{x} - \mathbf{a})^0}{0!}
+
\frac{\func' \par{\mathbf{a}} \cdot (\mathbf{x} - \mathbf{a})^1}{1!}
+
\dots
+
\frac{\func^{\par{k}} \par{\mathbf{a}} \cdot (\mathbf{x} - \mathbf{a})^k}{k!}
$$

## Formula con [[varietà affine]]

Applicando [[polinomio di Taylor#Formula con varietà affine|lo stesso ragionamento]] usato in precedenza, possiamo scrivere diversamente la formula utilizzando il concetto di [[varietà affine]].

1. Definiamo $\mathbf{x} \par{\alpha}$ come una [[varietà affine]] in $\mathbf{a}$ lungo $\mathbf{s}$.
2. Sapendo che $\mathbf{x} \par{\alpha} = \mathbf{a} + \alpha \cdot \mathbf{s}$, abbiamo che $x \par{0} = \mathbf{a}$.
3. Utilizziamo la [[varietà affine]] come [[argomento]] della [[funzione]], ottenendo $\func[P]_k \par{ \mathbf{x} \par{\alpha} }$.
4. Riscriviamo il termine $\color{grey} \mathbf{x} - a$ della formula originale con il nuovo parametro, ottenendo  $\mathbf{x} \par{\alpha} - a$.
5. Espandendo la varietà affine, abbiamo $\mathbf{a} + \alpha \cdot \mathbf{s} - \mathbf{a}$, cioè $\alpha \cdot \mathbf{s}$. 

Otteniamo:
$$
\Large
\func[P]_{\color{orange} k} \par{\mathbf{x} \par{\alpha}}
=
\frac{\func \par{a} \cdot \par{\alpha \cdot \mathbf{s}}^{\color{orange} 0}}{{\color{orange} 0}!}
+
\frac{{\color{orange} \nabla}\ \func \par{a} \cdot \par{\alpha \cdot \mathbf{s}}^{\color{orange} 1}}{{\color{orange} 1}!}
+
\dots
+
\frac{{\color{orange} \nabla^k}\ \func \par{a} \cdot \par{\alpha \cdot \mathbf{s}}^{\color{orange} k}}{{\color{orange} k}!}
$$

### Di secondo grado

Di particolare rilevanza è il polinomio di Taylor di secondo grado:

$$
\Large
\func[P]_{\color{orangered} 2} \par{\mathbf{x} \par{\alpha}}
=
{\color{gold} \frac{ \func \par{a} }{1}}
+
{\color{orange} \frac{ \nabla\ \func \par{a} \cdot \alpha \cdot \mathbf{s} }{1} }
+
{\color{orangered} \frac{ \alpha \cdot \mathbf{s}^\dagger \times \nabla^2\ \func \par{a} \times \alpha \cdot \mathbf{s} }{2}}
$$

> [!Example]
> È usato per:
> - [[metodo di discesa di Newton approssimato con Taylor]]