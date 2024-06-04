# Dizionario

Un _dizionario_ è una struttura dati che **associa dei valori a delle chiavi**.

## Proprietà

- Ogni elemento del dizionario è un **valore** che è stato **associato a una chiave**.
- Possiamo aggiungere nuovi elementi con il **metodo `add(chiave, valore)`**.
- Posiamo estrarre elementi con il **metodo `get(chiave)`**, che restituirà il valore associato a `chiave`.
- E' possibile rimuovere elementi con il **metodo `delete(chiave)`**.
- Due elementi con **chiavi diverse** non devono **mai restituire lo stesso valore**.

## Metodi

Beh... Non ha molto senso in questo caso...

```python
dict()
```

## Implementazione con tabella hash

Una _tabella hash_ è un'array di coppie **chiave-valore**, che formano l'insieme _universo_.

Per determinare l'**indice dell'array** in cui inserire una coppia, usiamo una [funzione _hash_](https://it.wikipedia.org/wiki/Hash#Algoritmo_di_hash) sulla chiave, che restituirà **numeri da `0` a `len(hash_table)`**.

### Risoluzione collisioni

Potrebbe capitare però che **due chiavi diverse abbiano lo stesso indice**. Dobbiamo allora usare un metodo di _risoluzione collisioni_, che mi permetta di distinguere tra chiavi diverse.

#### Lista di trabocco

Possiamo salvare nell'array **liste di coppie** chiave-valore; in caso di collisione, **aggiungo un nuovo elemento alla lista**.

In media, ciascuna di queste liste conterrà `elementi_inseriti / dimensione_tabella` elementi.

#### Indirizzamento aperto

Possiamo decidere di mettere le coppie che non trovano posto nel loro indice in **un altro indirizzo vuoto** dell'array.

Ci sono diversi modi in cui decidere il nuovo indirizzo, ognuno con vantaggi e svantaggi: si può scegliere quello successivo, oppure il primo vuoto dell'array, oppure un indirizzo casuale.

> Python, nei `dict`, usa indirizzamento aperto pseudorandom.

### Costo computazionale

- Aggiungere una chiave: `O(n)`
- Trovare una chiave: `O(n)`
- Eliminare una chiave: `O(n)`
