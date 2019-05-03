# Grafi

Sono strutture dati che rappresentano le connessioni tra elementi.

Sono composti da:
- **Vertexes** o nodi
- **Edges** o archi
    - Orientati / diretti
    - Non orientati / non diretti

## Proprietà

### Nodi

- Il loro _grado_ è dato dal **numero degli archi** che vi incidono.
    - Se sono orientati, si hanno anche l'_in-degree_ e l'_out-degree_.

### Archi

- Connettono due nodi.
    - Se non sono orientati, sono _incidenti_ sui due nodi.
    - Se sono orientati, sono _uscenti_ da un nodo ed _entranti_ nell'altro.
- Sono sempre meno del **quadrato dei nodi**.

## Catena

Una catena è una sequenza di nodi collegati tra di loro da archi non orientati.

## Cammino

Un cammino è una sequenza di nodi collegati da archi orientati nella stessa direzione.

## Grafo completo (cricca, clique)

Il grafo completo è un grafo in cui è presente un arco per ogni coppia di nodi.  
Ha `((n-1)n)/2` archi.

Se è orientato, deve avere un arco in entrambe le direzioni per ogni coppia.  
Di conseguenza, ha `(n-1)n` archi.
