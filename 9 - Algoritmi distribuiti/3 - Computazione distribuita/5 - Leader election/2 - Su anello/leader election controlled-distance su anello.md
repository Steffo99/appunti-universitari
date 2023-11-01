#TODO [[algoritmo]] di [[leader election su anello]].

## [[restrizioni al modello dei sistemi distribuiti]]

- [[full-duplex]]
- [[affidabilità totale]]
- [[orientamento locale]]
- [[identificatori distinti]]
- **non c'è bisogno di conoscere N**

## Funzionamento

I nodi possono essere *candidati* o *sconfitti*.

Ad ogni fase, ogni candidato cerca di sconfiggere alcuni nodi.  

In particolare:

1. Ogni candidato manda il suo ID ai suoi vicini.
2. Ogni vicino propaga il messaggio fino a quando non ha viaggiato per $2^{stage}$ archi.
3. If
	- Il messaggio incontra un ID più piccolo, si ferma.
	- Il messaggio raggiunge la fine del suo viaggio, viene rimandato indietro.
4. Se l'ID non torna indietro da entrambe le direzioni, il nodo è *sconfitto*.
5. Se il messaggio inviato a sinistra viene ricevuto a destra o viceversa, allora è stato percorso tutto l'anello.
## [[costo computazionale distribuito]]

### [[spazio]]

#TODO

## [[tempo]]

#TODO
