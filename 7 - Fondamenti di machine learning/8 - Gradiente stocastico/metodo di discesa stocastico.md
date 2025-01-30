[[metodo di discesa]] per [[modello parametrico di supervised learning stocastico]].
$$
\Huge
\mathbf{w}_{iter+1}
=
\mathbf{w}_{iter}
+
\alpha_{iter}
\cdot
\func[g] \par{
	\mathbf{w}_{iter},\ 
	\mathbf{r}_{iter}
}
$$

Invece che trasformare la discesa ripida $\mathbf{d}_{iter}$, trasforma un [[array|vettore]] $\mathbf{r}_{iter}$ dalla [[distribuzione di probabilità empirica in gradiente stocastico|distribuzione empirica]].

==mmmmmmmmmmm i cant words==

> [!Success] Aspetti positivi
> È vantaggioso modellare i problemi in questo modo perchè hanno un fortissimo miglioramento già dalle prime operazioni.
> 
> Ha convergenza [[funzione sublineare|sublineare]].

> [!Failure] Aspetti negativi
> I miglioramenti tendono a rallentare significativamente dopo, e non raggiungere risultati buoni quanto il metodo [[modello di supervised learning|full gradient]].

