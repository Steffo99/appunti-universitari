[[modello matematico]], estensione del [[modello di supervised learning]].

[[tensore]] di pesi di [[sinapsi]] che minimizza la [[perdita]] dal risultato desiderato.
$$
\Large
{\color{gold} \mathbf{W}^{\star}}
=
\min_{{\color{orange} \mathbf{W}} \in \mathbb{R}^{3}}
\dots
$$


Composto da:
- $1$ livello di [[percettrone|neuroni]] input, che non processano informazioni
- $n$ livelli di [[neuroni]] interconnessi da [[sinapsi]], che usano le loro connessioni per determinare il loro output e forniscono input ad altri [[percettrone|neuroni]] a loro volta
- $1$ livello di [[percettrone|neuroni]] output, che determinano solo il proprio output
