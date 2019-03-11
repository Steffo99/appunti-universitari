# Dentro il processore

## Come sono fatti i circuiti integrati?

Sono composti da un layer di silicio (semiconduttore), più delle maschere di conduttori (µfili metallici), isolanti (plastica e vetro) e transistor.

### Processo di produzione

- Lingotto di silicio
- Tagliato in _wafer_ da 2mm
- Creazione dei _patterned wafer_
- Testing dei _patterned wafer_
- Taglio i _tested wafers_
- Creo un package con i _tested dies_
- Testo i _packaged dies_
- Spedisco i _tested packaged dies_ ai clienti.

### Lo yield

Lo yield è quanti _tested packaged dies_ riesco a produrre da un singolo lingotto di silicio.

## Come definiamo la performance di un processore?

Ci sono varie metriche per definirla:

- **Response time**: tempo impiegato a compiere un'operazione
- **Throughput**: operazioni fatte in un'unità di tempo

### Il clock

Il clock della CPU è il timer che scandisce le operazioni della CPU.

Ha, ovviamente, un periodo e una frequenza costanti.

### Il CPU time

Il tempo impiegato da una CPU a compiere una determinata operazione è dato da `numero di cicli di clock richiesti * periodo di clock`, ed è detto **CPU time**.

### Il Cost per instruction (CPI)

Alcune istruzioni di una CPU potrebbero richiedere più di un ciclo di clock.
