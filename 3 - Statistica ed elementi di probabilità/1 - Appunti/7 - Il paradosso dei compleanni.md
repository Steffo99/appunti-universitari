# Il Paradosso dei Compleanni

> Un docente è in aula con `n` studenti.  
>
> Supponendo per semplicità che i compleanni siano distribuiti uniformemente nel corso dell'anno e che nessuno dei presenti sia nato il 29 febbraio, quanto valuteremo, in funzione di `n`, la probabilità che vi sia in aula uno studente con il compleanno nello stesso giorno del docente?  
>
> La probabilità che vi siano in aula due persone con il compleanno lo stesso giorno?
>
> Quanto valgono queste probabilità per `n` = 50?
>
> Quanto deve essere grande `n` affinchè ciascuna di queste probabilità risulti maggiore del 50%?

```latex
\Omega = \{(\omega_0, \omega_1, \dots, \omega_n | \omega_i \in {1, 2, \dots, 365}, i = 0, 1, \dots, n)\}

\corsivo{F} = \corsivo{p)(\Omega)

|\Omega| = 365^{n+1}

E = almeno\ una\ coincidenza\ con\ docente
F = almeno\ due\ compleanni\ uguali

\mathbb{P}(E) \leq \mathbb{P}(F)

\mathbb{P}(E) = 1 - \mathbb{P}(¬E) = 1 - \frac{365*364*364*\dots*364}{365^{n+1}} = 1 - \frac{364}{365}^n

\mathbb{P}(F) = 1 - \mathbb{P}(¬F) = 1 - \frac{364*363*362*361*\dots*(365-n)}{365^{n+1}} = 1 - \PRODUCT_{i=0}^n \frac{365-i}{365}
```
