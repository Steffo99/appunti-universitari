[[algoritmo]] di [[leader election]] su [[grafo aciclico|grafi aciclici]].

## [[comportamento]]

> [!Summary]
> Usa la [[tecnica di saturazione per grafi aciclici]] per trovare l'entità con [[identificatore]] minore, che viene poi scelta come [[leader]].

## [[algoritmo corretto|Correttezza]]

> [!Success]
> L'unica parte non-[[algoritmo triviale|triviale]] di questo [[algoritmo]] è la [[tecnica di saturazione per grafi aciclici]], ed essendo corretta, rende anche questo [[algoritmo]] corretto.

## [[costo computazionale distribuito|Costo computazionale]]

| Costo | [[notazione O-grande]] | 
|-|-|
| [[comunicazione]] | $O(Entities)$ |
| [[9 - Algoritmi distribuiti/1 - Problemi algoritmici/tempo]] | ... |

## [[Duale]]

- [[shout+ protocol]]
