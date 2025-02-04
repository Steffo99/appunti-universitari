metodo per estendere una [[support vector machine]] a un [[problema di classificazione multi-classe]].

Definisce e modella una [[support vector machine]] binaria $\func_\varN$ per ogni classe $\varN$:
$$
\def \varX {{\color{orangered} \mathbf{x}}}
\def \varYI {{\color{gold} y_{i}}}
\def \varW {{\color{turquoise} \mathbf{w}}}
\def \varB {{\color{darkturquoise} b}}
\def \varN {{\color{yellow} \par{n}}}

\Large
\func_\varN \par{ \varX } = \varW_\varN \cdot \varX + \varB_\varN
$$

Poi, si dice che un [[punto]] $\varX$ appartiene alla classe $\varN$ se $\func_\varN$ è la [[support vector machine]] che restituisce il valore più alto.

> [!Success] Aspetti positivi
> Richiede solo $O(n)$ [[support vector machine]] binarie.

> [!Failure] Aspetti negativi
> Non molto significativa: i vari [[iperpiano|iperpiani]] $\par{\varW_\varN, \varB_\varN}$ scalano l'output con proporzioni diverse.
> 
> Gli [[insieme|insiemi]] di addestramento sono sbilanciati, in quanto contengono molti più ${\color{orange} -1}$ dei ${\color{orange} +1}$.
