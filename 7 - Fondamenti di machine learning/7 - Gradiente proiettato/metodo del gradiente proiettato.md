Variante per [[metodo di discesa]].

Alterna:
1. un'iterazione normale del [[metodo di discesa]]
	- con [[passo di un metodo di discesa|lunghezza di passo]]
2. un'iterazione in cui la direzione è ottenuta [[proiezione su insieme convesso|proiettando]] il [[punto]] nella [[regione ammissibile]]
	- con [[lunghezza di proiezione]]

## Esistenza di un punto di accumulazione

Per garantire l'esistenza di almeno un [[punto stazionario vincolato]] si può selezionare la [[regione ammissibile]] in modo che sia [[insieme finito|finita]] e tutti i [[punto|punti]] in essa abbiano valore minore del [[punto]] iniziale.

## Convergenza

Se [[#Esistenza di un punto di accumulazione|esiste un punto di accumulazione]], e la [[passo di un metodo di discesa|lunghezza di passo]] è [[clamp|limitata superiormente e inferiormente]], come nella [[regola di lunghezza di proiezione di minimizzazione limitata|minimizzazione limitata]] o [[regola di lunghezza di proiezione di backtracking Armijo|backtracking Armijo]]...

### Caso generale

Se non si hanno informazioni sulla convessità della funzione, si può solo arrivare a dire che qualsiasi [[punto di accumulazione]] del metodo è un [[punto stazionario vincolato]].

In presenza di quel punto, $\mathbf{d}_{iter} = 0$.

### Caso [[funzione convessa|convesso]]

Se si sa che la funzione è [[funzione convessa|convessa]], allora possiamo dire che il metodo avrà un singolo [[punto di accumulazione]] e che esso sarà il [[7 - Fondamenti di machine learning/5 - Ottimizzazione vincolata/minimo vincolato|minimo vincolato]].

## Miglioramento ad ogni iterazione

Se la direzione ottenuta dopo la [[proiezione su insieme convesso|proiezione]] è nulla $= 0$, allora il [[punto]] ottenuto è un [[punto stazionario vincolato]].

Altrimenti, la direzione è una [[direzione di discesa]].
