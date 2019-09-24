# Assembly

Useremo il RISC-V.  
Esso è little-endian, ed è indirizzato a gruppi di 8 bit.

## Registri

RISC-V ha a disposizione **32** registri da 64 bit, che vanno da `x0` a `x31`.

Un dato a 32 bit viene chiamato **word**, uno a 64 bit viene chiamato **doubleword**.

- `x0`: costante
- `x1`: indirizzo risultato
- `x2`: indirizzo della cima dello stack
- `x3`: indirizzo dell'area di memoria con variabili globali
- `x4`: indirizzo dell'area di memoria specifica del thread attivo
- `x5`: registro temporaneo
- `x6`: registro temporaneo
- `x7`: registro temporaneo
- `x8`: frame pointer
- `x9`: registro salvato, può essere copiato in memoria
- `x10`: argomento o risultato delle funzioni
- `x11`: argomento o risultato delle funzioni
- `x12`: argomento delle funzioni
- `x13`: argomento delle funzioni
- `x14`: argomento delle funzioni
- `x15`: argomento delle funzioni
- `x16`: argomento delle funzioni
- `x17`: argomento delle funzioni
- `x18`: registro salvato, può essere copiato in memoria
- `x19`: registro salvato, può essere copiato in memoria
- `x20`: registro salvato, può essere copiato in memoria
- `x21`: registro salvato, può essere copiato in memoria
- `x22`: registro salvato, può essere copiato in memoria
- `x23`: registro salvato, può essere copiato in memoria
- `x24`: registro salvato, può essere copiato in memoria
- `x25`: registro salvato, può essere copiato in memoria
- `x26`: registro salvato, può essere copiato in memoria
- `x27`: registro salvato, può essere copiato in memoria
- `x28`: registro temporaneo
- `x29`: registro temporaneo
- `x30`: registro temporaneo
- `x31`: registro temporaneo

## Operazioni

### Operazioni aritmetiche

Sono sempre formate da tre operandi: registro a cui il risultato verrà assegnato e gli argomenti dell'operazione.

- `add`: addizione
- `sub`: sottrazione
- `addi`: addizione di costanti

#### Esempio

```assembly
add a, b, c
```

##### Equivalente Python

```python
a = b + c
```

### Operazioni di trasferimento dati

Permettono di caricre / scaricare dati dalla memoria.

### Operazioni logiche

Consentono di effettuare operazioni di logica.

- `and`
- `or`
- ...

### Operazioni di shift

Consentono di spostare i bit di un registro di alcune posizioni, moltiplicando o dividendo effettivamente per potenze di 2.

### Operazioni condizionali

Consentono di saltare ad un'altra serie di istruzioni se certe condizioni si verificano. 

- `blt`: minore di, signed
- `bge`: maggiore di, signed
- `bltu`: minore di, unsigned
- `bgeu`: maggiore di, unsigned

### Operazioni non-condizionali

Consentono di saltare ad un'altra serie di istruzioni in qualunque caso.

#### Chiamare una procedura

> `jal x1, ProcedureLabel`

Salva l'indirizzo dell'istruzione successiva in x1, poi salta a ProcedureLabel.

#### Ritornare da una procedura

> `jalr x0, 0(x1)`

Ritorna all'indirizzo puntato da `x1`.

## Memoria

Per accedere a una posizione in memoria, si usa `offset(indirizzo)`.

##### Esempio

`64(x22)` accede al 64° byte dopo la posizione di memoria archiviata in `x22`.

## Segni

E' possibile usare rappresentazione standard o a complemento-a-2.

Possiamo usare la **sign extension** quando abbiamo un dato che vogliamo portare a un numero di bit maggiore di quello che è.

##### Esempio

```
[0]101 0101 --> 0000 0000 [0]101 0101
[1]100 0000 --> 1111 1111 [1]100 0000
```

### Operazioni di sincronizzazione

- `lr`: load reserved
- `sc`: store conditional

#### Load reserved

```
lr rd, (rs1)
```

> Non ho la minima idea di come funzioni.

Controlla se `rs1` è bloccato; se sì, mette un valore != 0 in `rd`...?

> Forse... crea un lock in `rd`?

#### Store conditional

```
sc rd, rs2, (rs1)
```

> Non ho la minima idea di come funzioni.

Copia il dato da `rs2` a `rs1`, se non è bloccato, e metti `x0` in `rd`...?

> Carica un dato... se ho ancora il lock, altrimenti, metti `x0` in `rd`.

#### Unlock

```
sd x0, 0(x20)
```

## Operazioni floating point

