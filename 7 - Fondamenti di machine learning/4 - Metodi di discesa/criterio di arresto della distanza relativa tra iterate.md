[[criterio di arresto]] per un [[7 - Fondamenti di machine learning/4 - Metodi di discesa/metodo di discesa]].

Interrompe l'iterazione quando due [[iterate]] sono entro una certa [[distanza]] ***relativa***:
$$
\abs{
	\frac
	{ \mathbf{x}_{iter+1} - \mathbf{x}_{iter} }
	{ \mathbf{x}_{iter} }
}\ {\color{orange} \leq \tau}
$$
