---
aliases: ["secret", "segreto"]
---

[[Dato]] utilizzato come parte di soluzioni per l'[[archiviazione delle credenziali]].

## Funzionamento

Funziona in modo molto simile ad un parametro di [[contestualizzazione di una key derivation function|contestualizzazione]]: ne viene selezionato uno per l'intero [[database delle credenziali]], e poi viene prefissato prima del [[salt]] a tutte le [[password]].

Talvolta, solo il [[servizio di autenticazione]] ne è a conoscenza.

### Effetto

Se fa parte dei [[data breach|dati breached]], rende ancora più difficili [[attacco di pre-computazione|pre-computation attack]].

Se non ne fa parte, li rende quasi impossibili.