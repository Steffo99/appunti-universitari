[[criterio di arresto]] per un [[7 - Fondamenti di machine learning/4 - Metodi di discesa/metodo di discesa]].

Interrompe l'iterazione quando due [[iterazioni]] sono entro una certa [[distanza]] ***relativa***:
$$
\abs{
	\frac
	{ \func\par{\mathbf{x}_{iter+1}} - \func\par{\mathbf{x}_{iter}} }
	{ \func\par{\mathbf{x}_{iter}} }
}\ {\color{orange} \leq \tau}
$$
