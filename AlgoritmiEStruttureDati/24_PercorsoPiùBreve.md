# Percorso più breve

Trovare il _percorso più breve_ (o meno costoso) tra due nodi di un **grafo pesato** è un problema frequente nell'informatica; per questo, sono stati sviluppati [numerosi algoritmi](https://en.wikipedia.org/wiki/Shortest_path_problem) per risolverlo.

> Ad esempio, il pathfinding dei nemici nei videogiochi, oppure Google Maps!

## Percorso più breve da una sorgente singola

Una sottocategoria del problema del percorso più breve è il caso in cui ci interessa sapere i percorsi più brevi che **partono da uno specifico nodo del grafo**: è detto problema del _percorso più breve da una sorgente singola_, o _single-source shortest path_.

Si può notare che se il grafo contiene **costi negativi** allora è possibile che il percorso più breve non esista, in quanto diventa possibile la comparsa di **cicli di costo infinitamente negativo**.

### Esempi

Alcuni algoritmi che trovano il percorso più breve sono:
- L'_Algoritmo di Dijkstra_
- L'_Algoritmo di Bellman-Ford_
- La _ricerca A*_
