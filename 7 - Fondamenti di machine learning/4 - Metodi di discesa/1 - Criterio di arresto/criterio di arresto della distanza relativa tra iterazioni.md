[[criterio di arresto]] per un [[metodo di discesa]].

Interrompe l'iterazione quando due [[iterazioni]] sono entro una certa [[distanza]] ***relativa***:
$$
\Large
\abs{
	\frac
	{ \func\par{\mathbf{x}_{iter+1}} - \func\par{\mathbf{x}_{iter}} }
	{ \func\par{\mathbf{x}_{iter}} }
}
\leq \tau
$$

> [!Tip]
> Si interrompe quando l'approssimazione non sta più cambiando.
