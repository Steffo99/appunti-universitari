---
aliases: ["sale"]
---

[[Dato]] utilizzato come parte di soluzioni per l'[[archiviazione delle credenziali]].

## Funzionamento

Funziona in modo molto simile ad un [[nonce]]: ad ogni [[password]] viene prefissato il suo *salt*, che poi viene immagazzinato assieme all'[[hash]] nel [[database delle credenziali]].

### Effetto

Previene [[attacco di pre-computazione|pre-computation attack]].
