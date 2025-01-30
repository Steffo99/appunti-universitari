[[criterio di arresto]] per un [[metodo di discesa]].

Interrompe l'iterazione quando due [[iterate]] sono entro una certa [[distanza]] ***relativa***:
$$
\Large
\abs{
	\frac
	{ \mathbf{x}_{iter+1} - \mathbf{x}_{iter} }
	{ \mathbf{x}_{iter} }
}
\leq \tau
$$

> [!Tip] 
> Si interrompe quando il punto non sta più cambiando.
