---
aliases:
  - step
  - lunghezza di passo
  - step length
  - learning rate
---

Ogni [[iterazione]] di un [[7 - Fondamenti di machine learning/4 - Metodi di discesa/metodo di discesa]] altera l'input successivo, traslandolo:
- in una data [[direzione di discesa]] *di ricerca* $\mathbf{d}$,
- per una data *lunghezza di passo* $\alpha$;
ovvero:
$$
\Large
\mathbf{x}_{iter + 1}
=
\mathbf{x}_{iter}
+
\alpha_{iter}
\cdot
\mathbf{d}_{iter}
$$
