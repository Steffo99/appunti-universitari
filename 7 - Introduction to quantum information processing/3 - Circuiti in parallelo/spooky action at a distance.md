Fenomeno particolare che si manifesta con due [[qbit]] in [[superposizione]].

Anche se questi due [[qbit]] vengano fisicamente separati e messi a grande distanza tra loro, le [[gate quantistico|operazioni]] che vengono effettuate su di essi li portano a influenzare immediatamente i risultati delle [[misura|misure]] effettuate su di essi.

> [!Quote] Albert Einstein
> _“I cannot seriously believe in it because the theory cannot be reconciled with the idea that physics should represent a reality in time and space, free from spooky action at a distance.”_ 

## Con l'[[Hardy state]]

Sono dati due [[qbit]] a grande distanza nell'[[Hardy state]] e due [[entità]] che li controllano, dette *Alice* e *Bob*, incaricati di [[misura|misurarli]].

Si lascia loro la possibilità di scegliere se prima della misura vada applicato un [[Hadamard gate]] al proprio [[qbit]].

I risultati possibili sono i seguenti:

| Alice                         | Bob                           | Stato (non normalizzato)                                                     | Note                                   |
| ----------------------------- | ----------------------------- | ---------------------------------------------------------------------------- | -------------------------------------- |
| $\color{Grey}\mathbf{1}_1$    | $\color{Grey}\mathbf{1}_0$    | $3 \cdot \ket{00} + 1 \cdot \ket{01} + 1 \cdot  \ket{10} - 1 \cdot \ket{11}$ | Tutti i risultati sono possibili.      |
| $\color{Grey}\mathbf{1}_1$    | $\color{Magenta}\mathbf{H}_0$ | $3 \cdot \ket{00} + 1 \cdot \ket{01} + 1 \cdot \ket{11}$                     | È impossibile il risultato $\ket{10}$. |
| $\color{Magenta}\mathbf{H}_1$ | $\color{Grey}\mathbf{1}_0$    | $3 \cdot \ket{00} + 1 \cdot \ket{10} + 1 \cdot \ket{11}$                     | È impossibile il risultato $\ket{01}$. |
| $\color{Magenta}\mathbf{H}_1$ | $\color{Magenta}\mathbf{H}_0$ | $1 \cdot \ket{00} + 1 \cdot \ket{01} + 1 \cdot \ket{10}$                     | È impossibile il risultato $\ket{11}$. |

In qualche modo, se si considerano i due [[qbit]] come oggetti fisici separati, essi devono avere trasmesso informazioni in qualche momento per raggiungere a quello stato, o alternativamente deve significare che l'universo non è [[principio di località|locale]].

> [!Question] Novità dalla scienza
> O forse no? https://arxiv.org/html/2402.16935v1
