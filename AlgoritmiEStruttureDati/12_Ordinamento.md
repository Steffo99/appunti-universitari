# Ordinamento

Un problema molto frequente nell'informatica consiste nell'**ordinare efficientemente grandi quantità di elementi**.

Esistono [tantissimi](https://it.wikipedia.org/wiki/Algoritmo_di_ordinamento) algoritmi per effettuare l'ordinamento.  
L'**efficienza** di ciascuno **varia** di caso in caso: alcuni sono estremamente efficienti se quasi tutti i numeri sono già nell'ordine giusto; altri, invece, potrebbero impiegare tantissimo tempo.

## Ordinamento tramite confronto

L'ordinamento "tradizionale" è detto _ordinamento tramite confronto_: funziona sempre, e **non ha altri modi di ottenere informazioni** se non con l'operazione logica di confronto tra i dati.

E' un problema risolto: è dimostrabile che il suo **lower bound** è **`Ω(n log n)`**; possiamo quindi dire che qualsiasi algoritmo di ordinamento è in `Ω(n log n)`, e se riusciamo a trovare un algoritmo di ordinamento in `O(n log n)` siamo riusciti a raggiungere il massimo dell'efficienza.

##### Dimostrazione

Consideriamo **tutte le possibili permutazioni** della sequenza da ordinare: sono `n!`.

Per ogni confronto che effettuiamo, **riduciamo la quantità di permutazioni** correttamente ordinate; prima o poi, rimarrà **una sola possibilità**.

**TODO**