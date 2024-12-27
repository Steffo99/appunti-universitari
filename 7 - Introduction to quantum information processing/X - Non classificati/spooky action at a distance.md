Fenomeno particolare che si manifesta con due [[qbit]] in [[superposizione]].

Anche se questi due [[qbit]] vengano fisicamente separati e messi a grande distanza tra loro, le [[gate quantistico|operazioni]] che vengono effettuate su di essi li portano a influenzare immediatamente i risultati delle [[operatore misura|misure]] effettuate su di essi.

> [!Quote] Albert Einstein
> _“I cannot seriously believe in it because the theory cannot be reconciled with the idea that physics should represent a reality in time and space, free from spooky action at a distance.”_ 

## Con l'[[Hardy state]]

Sono dati due [[qbit]] a grande distanza nell'[[Hardy state]] e due [[entità]] che li controllano, dette *Alice* e *Bob*, incaricati di [[operatore misura|misurarli]].

Si lascia loro la possibilità di scegliere se prima della misura vada applicato un [[Hadamard gate]] al proprio [[qbit]].

I risultati possibili sono i seguenti:

| Alice                    | Bob                      | Stato (non normalizzato)                            | Note                                   |
| ------------------------ | ------------------------ | --------------------------------------------------- | -------------------------------------- |
| $\color{Grey}\mathbf{1}$ | $\color{Grey}\mathbf{1}$ | $3 \ket{00} + 1 \ket{01} + 1 \ket{10} - 1 \ket{11}$ | Tutti i risultati sono possibili.      |
| $\color{Grey}\mathbf{1}$ | $\color{Lime}\mathbf{H}$ | $3 \ket{00} + 1 \ket{01} + \ket{11}$                | È impossibile il risultato $\ket{10}$. |
| $\color{Lime}\mathbf{H}$ | $\color{Grey}\mathbf{1}$ | $3 \ket{00} + 1 \ket{10} + \ket{11}$                | È impossibile il risultato $\ket{01}$. |
| $\color{Lime}\mathbf{H}$ | $\color{Lime}\mathbf{H}$ | $\ket{00} + \ket{01} + \ket{10}$                    | È impossibile il risultato $\ket{11}$. |

In qualche modo, se si considerano i due [[qbit]] come oggetti fisici separati, essi devono avere trasmesso informazioni in qualche momento per raggiungere a quello stato, o alternativamente deve significare che l'universo non è [[principio di località|locale]].
