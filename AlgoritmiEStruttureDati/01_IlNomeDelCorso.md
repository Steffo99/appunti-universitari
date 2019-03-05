# Cosa si studia in questa materia?

## Cosa sono gli algoritmi?

Gli algoritmi sono modi sistematici per risolvere problemi.

Sono fondamentali per sviluppare software, in quanto i computer sono eccellenti esecutori di algoritmi.

## Come si sviluppa un algoritmo?

Innanzitutto, bisogna conoscere gli _input_ e gli _output_ del problema, rispettivamente i dati di partenza e i dati di arrivo di esso; si ha quindi una fase di **ricerca**.

Poi, si deve trovare un procedimento che ci faccia risolvere il nostro problema: è quello che faremo in questa materia!

Infine, bisogna scrivere la soluzione in un modo che possa essere eseguita da un computer: questa è la **programmazione**.

## Che tipo di problemi possiamo risolvere?

Un algoritmo risolve problemi di tipo generale, non ci interessa sapere...

> Il risultato di 123+456

Ma vogliamo sapere...

> Il risultato di x+y, dove x e y sono due numeri naturali qualsiasi

Un problema può essere quindi considerato circa come una **funzione matematica**, che connette ogni input a un output corrispondente.

## Che caratteristiche ha un algoritmo?

Per prima cosa, ripetendo l'algoritmo più volte con lo stesso ingresso deve dare sempre la stessa uscita come **risultato**, finendo in un **tempo finito**.

Deve essere **ben ordinato**: cambiando l'ordine in cui vengono effettuate le operazioni, è probabile che anche il risultato cambi!

Le sue istruzioni devono essere **non ambigue**, cioè che non possano essere interpretate in più modi, e `TODO, me lo sono perso!`

## Esistono algoritmi equivalenti?

Sì! Possono esserci due algoritmi che dati gli stessi input, hanno gli stessi output, e quindi risolvono lo stesso problema.

In compenso, possono avere un numero di operazioni diverse, e quindi essere uno più veloce (da eseguire) dell'altro.

## Come si verifica la correttezza di un algoritmo?

L'algoritmo deve essere valido per tutti gli input, anche se questi sono infiniti.

Possiamo effettuare prove matematiche per verificarne la correttezza; il **principio di induzione** è dunque una dei teoremi fondamentali dell'algoritmica.

Possiamo però verificare la _non correttezza_ di un algoritmo trovando un singolo controesempio.

## Che caratteristiche ha un buon algoritmo?

Un buon algoritmo deve essere **efficiente**, ovvero deve usare il minimo delle risorse necessarie, come usare il minimo di **tempo** possibile.

## Come misuriamo il tempo necessario?

Cerchiamo di astrarre il tempo dal particolare esecutore, e andiamo a contare il numero di operazioni elementari richieste per eseguire il nostro algoritmo nel caso peggiore.

Un algoritmo efficiente, infatti, diventerà sempre più veloce rispetto a uno non efficiente, anche su computer più lenti!

> Il [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort) è sempre più lento di un [Tree Sort](https://en.wikipedia.org/wiki/Tree_sort), anche su computer più lenti, perchè, dovendo ordinare liste sempre più lunghe, prima o poi si raggiunge il punto in cui il primo è più veloce (in termini di tempo) dell'altro.
