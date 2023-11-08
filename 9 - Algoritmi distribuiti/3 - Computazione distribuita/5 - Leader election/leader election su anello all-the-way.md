[[algoritmo]] di [[leader election]] su [[anello]].

## [[Comportamento]]

> [!Summary]
> Ogni [[entità]] invia il suo [[identificatore]] alla successiva, e gli inoltra gli identificatori ricevuti dalla precedente, tenendo traccia dell'identificatore minimo ricevuto.

## [[algoritmo corretto|Correttezza]]

> [!Failure]
> 
> L'algoritmo non giungerà mai a termine!
> 

Sono necessarie restrizioni aggiuntive, vedi:
- [[leader election su anello di dimensione conosciuta all-the-way]]
- [[leader election su anello first-in-first-out all-the-way]]
