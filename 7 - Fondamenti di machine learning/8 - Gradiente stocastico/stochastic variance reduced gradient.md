---
aliases:
  - SVRG
---
Variante per [[metodo di discesa stocastico]].

Ricalcola periodicamente il [[gradiente empirico]] completo, ma altrimenti lo calcola solo per un elemento del [[training set]] alla volta.

Per ogni iterazione $iter$ finchè non si vuole terminare:
1. Computa il [[gradiente empirico]] completo $\mathbf{m}_{iter}$ con tutti i parametri attuali
2. Crea una copia $\mathbf{q}_{0}$ dei parametri attuali $\mathbf{w}_{iter}$
3. Per $\color{orange} s$ iterazioni $subiter$:
	1. [[campione|Campiona]] un elemento dal [[training set]] $elem$
	2. Calcola il [[gradiente empirico]] $\mathbf{p}_{subiter}$ solo per esso con i parametri iniziali $\mathbf{w}_{iter-1}$
	3. Calcola il [[gradiente empirico]] $\mathbf{n}_{subiter}$ solo per esso con la copia dei parametri $\mathbf{q}_{subiter-1}$
	4. Determina la direzione di ricerca con: $\mathbf{d}_{subiter} = \mathbf{n}_{subiter} - \mathbf{p}_{subiter} + \mathbf{m}_{iter}$
	5. Aggiorna la copia $\mathbf{q}_{subiter} = \mathbf{q}_{subiter-1} - {\color{yellow} \alpha} \cdot \mathbf{d}_{subiter}$
4. Aggiorna i parametri attuali $\mathbf{w}_{iter}$ con uno dei seguenti metodi:
	- Sostituiscili direttamente con $\mathbf{q}_{\color{orange} s}$
	- Sostituiscili con la [[media]] dei valori in $\mathbf{q}$
	- Sostituiscili con i parametri di una sottoiterazione casuale $\mathbf{q}_{rand}$ ==WHY==
