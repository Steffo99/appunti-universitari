---
aliases:
  - ϵ-insensitive loss
  - ϵ-insensitive
---
[[perdita]] per [[support vector machine di regressione]].

Misura la [[distanza non-segnata tra punto e iperpiano]], non restituendo errore se essa si trova nel relativo [[epsilon-tube]], ovvero entro una certa soglia $\epsilon$ di distanza dal piano.
$$
\Large
\loss_{\epsilon}
\par{y, x}
= 
\max \par{
	0,\
	\abs{y - \func[f] \par{x}} - \epsilon
}
$$

==f(x) deve ovviamente essere la formula dell'iperpiano...==