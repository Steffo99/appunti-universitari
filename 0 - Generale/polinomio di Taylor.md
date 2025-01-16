Data:
- una [[funzione]] $\func$;
- un punto $a$;
il polinomio di Taylor in quel punto è:

$$
\Large
\func[P]_{\color{orange} k} \par{x} 
=
\frac{\func \par{a} \cdot (x - a)^{\color{orange} 0}}{{\color{orange} 0}!} 
+ 
\frac{\func{\color{orange} '} \par{a} \cdot (x - a)^{\color{orange} 1}}{{\color{orange} 1}!}
+ 
\dots
+ 
\frac{\func^{\color{orange} (k)} \par{a} \cdot (x - a)^{\color{orange} k}}{{\color{orange} k}!}
$$

> [!Tip]
> Serve per approssimare il valore di una [[0 - Generale/funzione|funzione]] senza conoscere la funzione stessa, solo conoscendo il valore che essa e le sue [[derivata|derivate]] hanno in un [[punto]].

> [!Cite]
> - [[resto di Taylor]]
> - [[serie di Taylor]]

## Formula con [[varietà affine]]

Possiamo scrivere diversamente la formula utilizzando il concetto di [[varietà affine]].

1. Definiamo $x \par{\alpha}$ come una [[varietà affine]] in $a$.
2. Sapendo che $x \par{\alpha} = a + \alpha \cdot \mathbf{s}$, abbiamo che $x \par{0} = a$.
3. Utilizziamo la [[varietà affine]] come [[argomento]] della [[funzione]], ottenendo $\func[P]_k \par{ x \par{\alpha} }$.
4. Riscriviamo il termine $\color{grey} x - a$ della formula originale con il nuovo parametro, ottenendo  $x \par{\alpha} - a$.
5. Espandendo la varietà affine, abbiamo $a + \alpha - a$, cioè $\alpha$. 

Otteniamo:
$$
\Large
\func[P]_{\color{orange} k} \par{x \par{\alpha}}
=
\frac{\func \par{a} \cdot \alpha^{\color{orange} 0}}{{\color{orange} 0}!}
+
\frac{\func{\color{orange} '} \par{a} \cdot \alpha^{\color{orange} 1}}{{\color{orange} 1}!}
+
\dots
+
\frac{\func^{\color{orange} \par{k}} \par{a} \cdot \alpha^{\color{orange} k}}{{\color{orange} k}!}
$$
