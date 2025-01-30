---
aliases:
  - descent method
---
[[metodo di approssimazioni successive]] per la risoluzione di un [[problema di ottimizzazione non vincolato con funzione obiettivo differenziabile]].

$$
\Huge
\mathbf{x}_{iter+1}
=
\mathbf{x}_{iter}
+
\alpha_{iter}
\cdot
\mathbf{d}_{iter}
$$
dove:
- $\mathbf{x}_{iter}$ è il [[punto]] ottenuto all'iterazione $iter$
- $\alpha_{iter}$ è la [[lunghezza di passo]] all'iterazione $iter$
- $\mathbf{d}_{iter}$ è la [[direzione di ricerca]] all'iterazione $iter$

## Struttura

Un metodo di discesa composto da tre parti:
- un [[criterio di arresto]] che determina quando interrompere le iterazioni
- una [[metodo per la direzione di ricerca]] che determina la [[direzione di ricerca]]
- una [[metodo di lunghezza di passo]] che determina la [[lunghezza di passo]]

## Requisiti

Perchè un metodo di discesa sia ben posto per il problema, deve soddisfare vari requisiti.

### Miglioramento ad ogni iterazione

Dopo ogni iterazione, il valore della [[funzione obiettivo]] deve essere diminuito:
$$
\Large
\func \par{\mathbf{x}_{iter+1}}
<
\func \par{\mathbf{x}_{iter}}
$$

Questo significa che la [[direzione di ricerca]] deve sempre essere una [[direzione di discesa]]:
$$
\Large
\nabla \func \par{\mathbf{x}_{iter}}^\dagger \times \mathbf{d}_{iter} < 0
$$

E ovviamente che la [[lunghezza di passo]] deve sempre essere positiva:
$$
\Large
\alpha_{iter} > 0
$$

### Punto non-stazionario

Ad ogni iterazione non-finale, il punto restituito dal metodo non deve essere un [[punto stazionario]]:
$$
\Large
\abs{ \nabla \func \par{\mathbf{x}_{iter}}} \neq 0
$$
