[[Algoritmo]] di [[broadcast]], una correzione a [[flooding broadcast v1]].

Ogni [[entità]] manda l'informazione a tutti i suoi vicini, **ma solo se non l'ha già fatto**.

## [[Stato]]

- `INITIATOR`: quello che manda il messaggio
- `SLEEPING`: quelli che non mandano il messaggio
- **`DONE`: quelli non hanno mandato il messaggio, ma l'hanno ricevuto e inoltrato**

## [[comportamento]]

### `INITIATOR`

Se ricevo il messaggio non faccio niente.

### `SLEEPING`

Se ricevo il messaggio lo propago ai miei vicini e passo a `DONE`.

### **`DONE`**

**Se ricevo il messaggio non faccio niente.**
