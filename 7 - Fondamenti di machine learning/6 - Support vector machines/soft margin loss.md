[[perdita]] per [[support vector machine di regressione]].

$$
\Large
\loss
\par{y, x}
= 
\max \par{
	0,\
	1 - y \cdot \func[f] \par{x}
}
$$

> [!Tip]
> Se il prodotto tra $y$ e $\func \par{x}$ risulta essere maggiore di $1$, vale $0$, altrimenti è un valore positivo non vincolato che cresce linearmente tanto più i due dati si distanziano.

> [!Tip]
> Se un valore $y$ non è predetto con completa confidenza $\func \par{x} < 1$, la soft margin loss sarà non-nulla.

==Come è correlato al margine di spessore?==
