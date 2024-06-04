# Algoritmo di Huffman

L'_Algoritmo di Huffman_ è un **algoritmo greedy** per la **costruzione di un albero di decodifica**.

## Funzionamento

1. Costruisco **un albero** (con un solo nodo) **per ogni elemento dell'alfabeto**.
2. Associo ad **ogni albero la frequenza dell'elemento** da cui è stato creato, per poi inserire tutti gli elementi in una coda con priorità.
3. Finchè non ho **un albero solo**:
    1. Estraggo dalla coda i **due alberi con frequenza minore**.
    2. **Li rendo fratelli**, creando un nuovo nodo in cui sono uno figlio destro e uno figlio sinistro.
    3. Associo al nuovo nodo la **somma delle frequenze dei due alberi**, e inserisco il nuovo albero nella coda.

> È molto raro che venga un albero "dritto"; se succede, probabilmente c'è qualcosa che non va.