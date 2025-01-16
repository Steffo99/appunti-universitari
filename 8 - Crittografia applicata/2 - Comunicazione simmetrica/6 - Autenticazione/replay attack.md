[[attacco]] contro [[message authentication code system|message authentication code systems]].

## Requisiti

- conoscenza del tipo di [[testo]] inviato
- conoscenza del [[message authentication code]] corrispondente al [[testo]] inviato
- possibilità di inviare messaggi al [[sfidante|destinatario]]

## Funzionamento

L'avversario cattura una coppia [[testo]] e [[message authentication code]] in transito tra la [[squadra blu]] e la riinvia al [[sfidante|destinatario]].

### Prevenzione

- integrare nel [[testo]] un contatore di messaggi scambiati

## Effetti

Un attacco replay riuscito permette all'[[avversario]] di catturare e riutilizzare i messaggi pre-costruiti per interagire con il [[sfidante|destinatario]].

