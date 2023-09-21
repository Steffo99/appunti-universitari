---
aliases:
  - Bak-Tang-Wiesenfeld sandpile
---

[[Modello]] di [[sistema complesso]].

È un [[automa cellulare]] a [[reticolo di un automa cellulare|reticolo]] [[reticolo quadrato|quadrato]] e [[vicinato di von Neumann]].

## Funzionamento

- Ogni cella ha un valore discreto di sabbia in essa.
- Ad ogni iterazione:
	1. Viene aggiunta 1 unità di sabbia in una cella casuale.
	2. Finchè non viene raggiunta la stabilità:
		1. Se una cella ha 4 unità di sabbia, esse si distribuiscono nelle celle nel vicinato

## Risultati

Si è scoperto che operazione di aggiunta di sabbia forma un [[gruppo di Galois|gruppo abeliano]], ovvero  che il risultato finale **è indipendente dalle posizioni e dall'ordine in cui le unità di sabbia sono state aggiunte**.

Inoltre, il risultato dell'aggiunta di $N$ unità di sabbia **è indipendente dai parametri del sistema**, come le dimensioni del reticolo.

Infine, la [[legge di potenza]] ha un parametro $\alpha$ uguale a 1, il che determina che il rumore causato dalle perturbazioni è [[pink noise]].