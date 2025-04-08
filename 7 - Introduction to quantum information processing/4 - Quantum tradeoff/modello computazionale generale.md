Per effettuare una [[computazione quantistica]] si procede per passi:

1. Si crea una [[superposizione uniformemente pesata]] sul [[registri quantistici|registro di input]].
2. Si inizializza a un valore costante il [[registri quantistici|registro di output]].
3. Si applicano [[Toffoli gate]] che effettuano la computazione classica dal [[registri quantistici|registro di input]] al [[registri quantistici|registro di output]].
4. Si [[misura]] il [[registri quantistici|registro di output]].

In notazione matematica, questa procedura è rappresentata come:
$$
\Huge
\qU[\func] \ \left( {\color{blue} \ket{x}_{m}} \otimes {\color{red} \ket{y}_{n}} \right) 
= 
{\color{blue} \ket{x}_{m}} \otimes {\color{springgreen} \ket{y \oplus f(x)}_{n}}
$$
Dove $\oplus$ è lo [[XOR]].