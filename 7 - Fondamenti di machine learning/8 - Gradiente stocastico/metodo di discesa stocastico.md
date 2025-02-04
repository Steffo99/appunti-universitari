[[metodo di approssimazioni successive]] per determinare i parametri di un [[modello parametrico di supervised learning stocastico]], analogo a un [[metodo di discesa]].

$$
\Huge
\mathbf{w}_{iter+1}
=
\mathbf{w}_{iter}
+
\alpha_{iter}
\cdot
\func[d] \par{
	\mathbf{w}_{iter},\ 
	\mathbf{R}_{iter}
}
$$

Invece che usare il [[gradiente]] dell'intero [[training set]], usa il [[metodo stocastico per la direzione di ricerca]] $\func[d]$ per ricavare una [[direzione di ricerca]] campionando una parte ogni volta diversa del [[training set]] $\mathbf{R}_{iter}$ e usandola per determinare un [[gradiente empirico]].

> [!Success] Aspetti positivi
> È vantaggioso modellare i problemi in questo modo perchè hanno un fortissimo miglioramento già dalle prime operazioni.
> 
> Ha convergenza [[funzione sublineare|sublineare]].

> [!Failure] Aspetti negativi
> I miglioramenti tendono a rallentare significativamente dopo, e non raggiungere risultati buoni quanto il metodo [[modello di supervised learning|full gradient]].

## Convergenza

> [!Info] Esame
> Da quanto ho capito, queste cose non dovrebbero venire chieste all'esame, quindi ne ho riportato solo una versione molto corta.

### [[funzione obiettivo]] [[funzione fortemente convessa|fortemente convessa]] + [[passo di un metodo di discesa|lunghezza di passo]] fissa

==C'è convergenza a una costante superiore a zero.==

### [[funzione obiettivo]] [[funzione fortemente convessa|fortemente convessa]] + [[passo di un metodo di discesa|lunghezza di passo]] decrescente

==Ipotesi: Dobbiamo scegliere la lunghezza di passo in modo tale che la sua serie converga, ma la sua serie quadrata diverga, come ad esempio in 1/iter.==

==C'è convergenza a zero.==
### [[funzione obiettivo]] non-convessa + [[passo di un metodo di discesa|lunghezza di passo]] fissa

==C'è convergenza a una costante superiore a zero.==

### [[funzione obiettivo]] non-convessa + [[passo di un metodo di discesa|lunghezza di passo]] decrescente

==Ipotesi: Dobbiamo scegliere la lunghezza di passo in modo tale che la sua serie converga, ma la sua serie quadrata diverga, come ad esempio in 1/iter.==

==C'è convergenza a zero.==
