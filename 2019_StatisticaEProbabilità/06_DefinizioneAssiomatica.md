# Definizione assiomatica della probabilità

`\mathbb{P} : \corsivo{F} \to \mathbb{R}_+`

- La probabilità deve essere **normalizzata**: `\mathbb{P}(\Omega) = 1`
- La probabilità deve essere **additiva**: `\mathbb{P}(E \cup F) = \mathbb{P}(E) + \mathbb{P}(F)` se `E \cap F = \empty`
- La probabilità deve essere **continua da sotto**: `\mathbb{P}(\UNION_{n=1}^{+\inf} E_n) = \lim_{N -> +\inf} \mathbb{P}(\UNION_{n=1}^N E_n)`, dove [cose]

## Conseguenze dell'assioma

- `\mathbb{P}(\empty) = \mathbb{P}(\empty \cup \empty) = \mathbb{P}(\empty) + \mathbb{P}(\empty) = 2 \mathbb{P}(\empty) = \empty`

> L'elemento impossibile ha probabilità 0.

- Se `E \contains_or_equal F`, allora `\P(F \ E) = \P(F) - \P(E) \implies \P(E) \leq \P(F)`

> La probabilità è monotona.

- `\P(not\ E) = 1 - \P(E)` (**proprietà della negazione**)

> La probabilità negata è `1 - \P(E)`

- Se `E_1, E_2, \dots \qquad \forall i \neq j, E_i \cap E_j = \empty`, allora `\P (\UNION_{n=1}^{+\inf} E_n) = \lim_{N \to +\inf} \P(\UNION_{i = 1}^{N} E_n) = \lim_{N \to +\inf} \SUM_{n=1}^N \P(E_n) = \SUM_{n=1}^+\inf \P(E_n)` 

> Probabilità disgiunte possono essere sommate per effettuarne l'unione.
