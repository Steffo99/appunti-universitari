---
aliases:
  - neuroni
---


[[nodo di un grafo|nodo]] di una [[rete neurale multilivello]], che riceve tanti [[input]] e li usa per determinare un [[output]] attraverso la sua [[funzione di attivazione]].

I suoi input sono [[somma|sommati]] per ottenere un unico valore:
$$
\Large
a_{\color{gold}_n}^{\color{forestgreen} \par{l}}
=
\sum_{z_{\color{royalblue} i}^{\color{forestgreen} \par{l}}\ \in\  \mathbf{z}^{\color{forestgreen} \par{l}}}
\par{ 
	w_{{\color{royalblue} i}{\color{gold} n}}^{\color{forestgreen} \par{l}}
	\cdot
	z_{{\color{royalblue} i}}^{\color{forestgreen} \par{l}}
	-
	b_{{\color{gold} n}}^{\color{forestgreen} \par{l}}
}
$$

E poi, passati come argomento alla [[funzione di attivazione]] per determinare il relativo output:
$$
\Large
z_{\color{gold} n}^{\color{forestgreen} \par{l}}
=
\func[g]_{\color{gold} n}^{\color{forestgreen} \par{l}}
\par{
	a_{\color{gold} n}^{\color{forestgreen} \par{l}}
}
$$

> [!Note]
> Per tenere la notazione matematica più semplice, si assume che tutti i neuroni siano interconnessi tra loro, per poi impostare il peso delle [[sinapsi]] inesistenti a $0$.
