[[attacco]] contro [[message authentication code system|message authentication code systems]].

## Requisiti

- conoscenza del tipo di [[testo]] inviato
- conoscenza del [[message authentication code]] corrispondente al [[testo]] inviato
- possibilità di inviare messaggi al [[sfidante|mittente]]

## Funzionamento

L'avversario cattura una coppia [[testo]] e [[message authentication code]] in transito tra la [[squadra blu]] e la riinvia al [[sfidante|mittente]].

### Prevenzione

- integrare nel [[testo]] un campo autenticato che ne denoti la provenienza
- utilizzare una chiave diversa per l'invio dei messaggi di ciascun [[sfidante|interlocutore]]

## Effetti

Un attacco reflection riuscito permette all'[[avversario]] di catturare e riutilizzare i messaggi pre-costruiti per interagire con il [[sfidante|mittente]].
