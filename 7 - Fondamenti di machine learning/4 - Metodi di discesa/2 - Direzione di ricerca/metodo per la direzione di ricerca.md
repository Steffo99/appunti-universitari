[[regola]] utilizzata per selezionare quale [[direzione di discesa]] seguire ad ogni iterazione di un [[metodo di discesa]].

$$
\Huge
\mathbf{d}_{iter}
$$
dove:
- $\mathbf{D}_{iter}$ è una [[matrice]] che rappresenta la [[trasformazione lineare]] dal [[gradiente]] nel punto attuale alla [[direzione di ricerca]] effettivamente applicata

Cioè:
$$
\Large
\mathbf{d}_{iter} = - \mathbf{D}_{iter} \times \nabla \func \par{\mathbf{x}_{iter}}
$$
