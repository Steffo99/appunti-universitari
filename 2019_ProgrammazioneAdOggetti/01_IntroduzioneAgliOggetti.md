# Introduzione agli oggetti

Per rendere più comoda la scrittura di codice, dobbiamo avere un meccanismo che protegga alcune componenti del codice dal misuso.

Supponiamo di voler implementare un contatore.

Esso avrà:

- 1 attributo
    - Valore contatore
- 3 operazioni
    - Definizione
    - Incremento
    - Lettura

Devo prevenire tutte le operazioni all'infuori di queste, come il decremento.

In C non possiamo farlo: nulla impedisce al programmatore di fare ad esempio `cont++`!

Ci serve allora una soluzione.  
Immaginiamoci un linguaggio che abbia costrutti per:

- livelli più alti di astrazione
- protezione migliore dei dati
- migliore riutilizzo del codice

Vogliamo che ci dia un errore se viene eseguito `cont++`, ad esempio.

Vogliamo definire dei **vincoli**.
