Variante per [[metodo di discesa]].

Alterna:
1. un'iterazione normale del [[metodo di discesa]]
	- con [[passo di un metodo di discesa|lunghezza di passo]]
2. un'iterazione in cui la direzione è ottenuta [[proiezione su insieme convesso|proiettando]] il [[punto]] nella [[regione ammissibile]]
	- con [[lunghezza di proiezione]]

## Soddisfazione dei requisiti

==Ricapitolando?==

### Esistenza di [[punto stazionario vincolato]]

Un modo per garantire l'esistenza di un [[punto stazionario vincolato]] è selezionare la [[regione ammissibile]] in modo che tutti i [[punto|punti]] in essa abbiano valore minore del [[punto]] iniziale.

==Che altri modi ci sono?==

### Terminazione

Se la direzione ottenuta dopo la [[proiezione su insieme convesso|proiezione]] è nulla $= 0$, allora il [[punto]] ottenuto è un [[punto stazionario vincolato]].

Altrimenti, la direzione è una [[direzione di discesa]].

==Ha qualche significato aggiuntivo?==

==Perchè è così?==

### Esistenza e raggiungimento di [[7 - Fondamenti di machine learning/6 - Ottimizzazione vincolata/minimo vincolato|minimo vincolato]]

Se la [[funzione obiettivo]] è [[funzione convessa|convessa]], allora il [[7 - Fondamenti di machine learning/6 - Ottimizzazione vincolata/minimo vincolato|minimo vincolato]] esiste e verrà eventualmente raggiunto.

==Perchè?==
