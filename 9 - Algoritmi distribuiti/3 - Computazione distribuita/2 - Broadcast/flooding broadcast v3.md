[[Algoritmo]] di [[broadcast]], migliore rispetto a [[flooding broadcast v2]].

Ogni [[entità]] manda l'informazione a tutti i suoi vicini **che non gliel'hanno mandato**, ma solo se non l'ha già fatto.

## [[Stato]]

- `INITIATOR`: quello che manda il messaggio
- `SLEEPING`: quelli che non mandano il messaggio
- `DONE`: quelli non hanno mandato il messaggio, ma l'hanno ricevuto e inoltrato

## [[comportamento]]

### `INITIATOR`

Se ricevo il messaggio non faccio niente.

### `SLEEPING`

Se ricevo il messaggio lo propago ai miei vicini **eccetto quello che me l'ha mandato** e passo a `DONE`.

### `DONE`

Se ricevo il messaggio non faccio niente.

## [[costo computazionale distribuito]]

### [[Spazio]]

Abbiamo massimo $2$ messaggi per ogni [[arco di un grafo|arco]] della [[rete di comunicazione]]:
- $1$ normalmente
- $2$ se i due nodi che l'arco connette si mandano messaggi a vicenda

Quindi, l'algoritmo è in $O(archi)$, ovvero $O(nodi)$, e in particolare:
	#TODO La formula formattata bene.

### [[Tempo]] (unitario uniforme per messaggio)

[[diametro di un grafo|Diametro]] della [[rete di comunicazione]].

Quindi, l'algoritmo è in $O(nodi)$.

## Osservazioni

C'è [[terminazione locale]], ma non [[terminazione globale]]: non si sa [[termination detection problem|il momento in cui il messaggio è stato propagato a tutti i nodi]]!

L'algoritmo è efficiente negli [[albero|alberi]], non nei [[grafo completo|grafi completi]]:
	#TODO Al minimo richiede $n - 1$ messaggi, e quindi $\Omega(nodi)$.