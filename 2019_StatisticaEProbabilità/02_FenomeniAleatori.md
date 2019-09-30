# Fenomeni aleatori

Un fenomeno aleatorio è un qualcosa che ha una certa possibilità di avvenire, e se l'evento viene ripetuto all'infinito, avverrà sempre almeno una volta.

Chiamiamo un fenome aleatorio con la terna (\omega, \corsivo{f}, \mathbb{P}).

## \omega ("omegone", alfabeto)

**\omega** rappresenta l'insieme non vuoto dei possibili risultati dell'evento.  

> In un lancio di dado a 6 facce, `\omega = {1, 2, 3, 4, 5, 6}`.

I risultati sono anche detti _esiti sperimentali_.

> **Esercizio 1**
>
> Lanciando un dado, a quale parte di \omega corrispondono gli eventi:
>
> - ...il numero ottenuto è primo: `A = {2, 3, 5}`
> - ...il numero ottenuto è divisibile per due: `B = {2, 4, 6}`
> - ...il numero ottenuto è dispari: `C = {1, 3, 5}`
> - ...il numero ottenuto è divisibile per tre: `D = {3, 6}`
>
> Abbiamo creato dei sottoinsiemi di \omega: `\omega \contains A, B, C, D`

### Negazione

Possiamo anche negare un sottoinsieme di eventi, aggiungendo ¬ prima del nome del sottoinsieme:

> - ...il numero ottenuto **non** è primo: `¬A = {1, 4, 6}`
> - ...il numero ottenuto **non** è divisibile per due: `¬B = {1, 3, 5}`
> - ...il numero ottenuto **non** è dispari: `¬C = B = {2, 4, 6}`

Due negazioni di sottoinsieme si annullano: `¬¬\omeghino = \omeghino`

La definizione matematica è:
```latex
¬A = {\omeghino \in \omega | \omeghino \not \in A}
```

### Intersezioni

Possiamo intersecare due sottoinsiemi per ottenere gli eventi che soddisfano entrambe le condizioni: 

> - ...il numero ottenuto è primo **e** divisibile per due: `A \cap B = {2}`
> - ...il numero ottenuto è divisibile per due **e** per tre: `B \cap D = {6}`
> - ...il numero ottenuto è divisibile per due **e** dispari: `B \cap C = {}`

Due sottoinsiemi la cui intersezione è nulla sono **mutualmente esclusivi**.

La definizione matematica è:
```latex
A \cup B = {\omeghino \in \omega | \omeghino \in A\ and\ \omeghino \in B}
```

### Unioni

Possiamo unire due sottoinsiemi per ottenere gli eventi che soddisfano una delle due condizioni:

> - ...il numero ottenuto è primo **o** divisibile per due: `A \cup B = {2, 3, 4, 5, 6}`
> - ...il numero ottenuto è divisibile per due **o** è dispari: `C \cup D = \omega`

La definizione matematica è:
```latex
A \cap B = {\omeghino \in \omega | \omeghino \in A\ or\ \omeghino \in B}
```

### Differenza

Possiamo effettuare la differenza tra due sottoinsiemi, ma non ci è molto utile, in quanto si può comporre con intersezioni e negazioni: `A \ D = A \cap ¬D = {2, 5}`

## \corsivo{f} (sigma-algebra, famiglia degli eventi)

\corsivo{f} è detta la _sigma-algebra_, ed è l'insieme di tutti i risultati di operazioni effettuabili tra gli eventi: sono presenti in questo insieme l'insieme vuoto, l'insieme pieno e gli insiemi dati da qualsiasi combinazione di negazione, unione e intersezione di due sottoinsiemi.

E' quello che in algebra lineare abbiamo chiamato uno **spazio chiuso** rispetto alle operazioni di negazione, intersezione e unione. 

E' lo **spazio generato dall'alfabeto \omega**.

> In un lancio di moneta:
> - `\omega = {"testa", "croce"}
> - `\corsivo{f} = {\empty, {"testa"}, {"croce"}, \omega}

Tutti i sottoinsiemi dati da operazioni su insiemi \in \corsivo{f} sono a loro volta \in \corsivo{f}.

Possiamo generare ulteriori sigma-algebre da elementi di \corsivo{f}: 

> `\sigmino (B)` è la sigma-algebra generata da B, ovvero la più piccola f contenente `B`, ovvero `{\empty, B}`.

## \mathbb{P} (Probabilità)

\mathbb{P} = \corsivo{f} → \mathbb{R}+
