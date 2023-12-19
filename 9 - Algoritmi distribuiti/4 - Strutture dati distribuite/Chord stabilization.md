[[algoritmo]] di supporto a [[Chord]].

Mantiene aggiornati predecessori e successori dell'[[anello]].

Ogni [[entità]]:
1. Informa il suo successore della sua esistenza
2. Se il successore si aspettava un predecessore diverso, aggiorna il suo predecessore all'[[entità]] che ha appena mandato il [[messaggio]], e le risponde comunicandole il suo predecessore originale
3. Aggiorna il successore al predecessore originale che ha ricevuto in risposta
