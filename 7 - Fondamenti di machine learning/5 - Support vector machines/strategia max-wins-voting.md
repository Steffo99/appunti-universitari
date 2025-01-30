metodo per estendere una [[support vector machine]] a un [[problema di classificazione multi-classe]].
$$
\def \varX {{\color{orangered} \mathbf{x}}}
\def \varYI {{\color{gold} y_{i}}}
\def \varW {{\color{turquoise} \mathbf{w}}}
\def \varB {{\color{darkturquoise} b}}
\def \varN {{\color{yellow} \par{n}}}
\def \varNM {{\color{gold} \par{n, m}}}
{\color{grey} \tiny \arr{\cdots \quad \mathrm{\TeX\ variable\ definitions} \quad \cdots}}
$$

Definisce e modella una [[support vector machine]] binaria $\func_\varN$ per ogni coppia di classi $\varN$:
$$
\Large
\func_\varNM \par{ \varX } = \varW_\varNM \cdot \varX + \varB_\varNM
$$

Poi, si dice che un punto $\varX$ appartiene alla classe $\varN$ se essa è quella che "vince" più confronti $\func_\varNM$.

> [!Success] Aspetti positivi
> Gli [[insieme|insiemi]] di addestramento sono bilanciati.

> [!Failure] Aspetti negativi
> Richiede $O \par{\frac{n^2}{2}}$ [[support vector machine]] binarie.
