---
aliases:
  - SAGA
---
Variante per [[metodo di discesa stocastico]].

Tiene traccia dell'ultimo [[gradiente empirico]] incontrato per ciascun elemento del [[training set]], computandolo inizialmente per tutti.

1. Per ogni elemento $elem$ del [[training set]]:
	1. Computa e salva il relativo [[gradiente empirico]] $\mathbf{m}_{elem}$
2. Itera $iter$ finchè non si vuole terminare:
	1. [[campione|Campiona]] un elemento dal [[training set]] $elem$
	2. Aggiornane il [[gradiente empirico]] salvato $\mathbf{m}_{elem}$ con uno nuovo calcolato con i parametri attuali $\mathbf{w}_{iter-1}$
	3. Calcola la [[somma]] di tutti i [[gradiente empirico|gradienti empirici]] salvati $\mathbf{d}_{iter}$
	4. Aggiorna i parametri usando la somma come [[direzione di ricerca]]  $\mathbf{w}_{iter} = \mathbf{w}_{iter - 1} - {\color{yellow} \alpha} \cdot \mathbf{d}_{iter}$
