# Ordinamento

Un problema molto frequente nell'informatica consiste nell'**ordinare efficientemente grandi quantità di elementi**.

Esistono [tantissimi](https://it.wikipedia.org/wiki/Algoritmo_di_ordinamento) algoritmi per effettuare l'ordinamento.  
L'**efficienza** di ciascuno **varia** di caso in caso: alcuni sono estremamente efficienti se quasi tutti i numeri sono già nell'ordine giusto; altri, invece, potrebbero impiegare tantissimo tempo.

In termini matematici, abbiamo:

- **Input:** A[n]
- **Output:** B, ∀ i < n, A[i] ≤ A[i+1]

## Ordinamento tramite confronto

L'ordinamento "tradizionale" è detto _ordinamento tramite confronto_: funziona sempre, e **non ha altri modi di ottenere informazioni** se non con l'operazione logica di confronto tra i dati.

### Limiti

E' un problema risolto: è dimostrabile che il suo **lower bound** è **`Ω(n log n)`**; possiamo quindi dire che qualsiasi algoritmo di ordinamento è in `Ω(n log n)`, e se riusciamo a trovare un algoritmo di ordinamento in `O(n log n)` siamo riusciti a raggiungere il massimo dell'efficienza.

#### Dimostrazione

Consideriamo **tutte le possibili permutazioni** della sequenza da ordinare: sono `n!`.

Per ogni confronto che effettuiamo, **riduciamo la quantità di permutazioni** correttamente ordinate; prima o poi, rimarrà **una sola possibilità**.

**TODO, non trovo la spiegazione corretta!**

### Esempi

Algoritmi che effettuano l'ordinamento tramite confronto sono:
- _Bubble sort_
- _Merge sort_
- _Insertion sort_
- _Quick sort_
- _Heap sort_
- E tanti, tanti altri!

## Ordinamento con altri mezzi

Esistono algoritmi che ricavano informazioni in altri modi, diversi dal confronto.

Essi possono avere un lower bound più basso di `O(n log n)`, però hanno spesso limitazioni sul loro utilizzo.

### Esempi

- _Counting sort_, indicizza i valori da ordinare
- _Radix sort_, guarda singolarmente le cifre dei valori
- _Sleep sort_, sfrutta i thread e la funzione sleep per ordinare valori
- E altri ancora!
