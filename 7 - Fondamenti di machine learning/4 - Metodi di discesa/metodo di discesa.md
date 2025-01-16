---
aliases:
  - descent method
---

[[metodo di approssimazioni successive]] per la risoluzione di un [[problema di ottimizzazione non vincolato con funzione obiettivo differenziabile]].

Tutti i metodi di discesa hanno la proprietà che ad ogni iterazione, il valore della [[funzione obiettivo]] diminuisce:
$$
\Large
\func \par{\mathbf{x}_{iter}}
>
\func \par{\mathbf{x}_{iter+1}}
$$

## Metodo [[ben posto]]

Perchè un metodo di discesa sia [[ben posto]], deve restituire ad ogni [[passo di un metodo di discesa|passo]] (intermedio) un [[punto]] non-stazionario.
