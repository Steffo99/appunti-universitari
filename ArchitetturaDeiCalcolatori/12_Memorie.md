# Memorie

La _memoria_ di un calcolatore solitamente è composta da molteplici strati, realizzati per velocizzare gli accessi.

Ogni strato offre lettura più veloce, ma è più costoso da realizzare e ha consumi più alti.

In ordine di velocità, sono:

- Registers
- Cache L1
- Cache L2
- Cache L`X`
- Random Access Memory
- Solid State Drive
- Hard Disk Drive

## Cache

### Cache L1

Piccola, ma miss penalty bassa

### Cache L2

Molto grande, ma miss penalty alta

### Direct mapping

Una cache _direct mapped_ associa a ogni indirizzo di RAM un **indice** uguale agli **N bit meno significativi** dell'indirizzo dell'inferiore, e un **tag** uguale agli **N bit più significativi**.

Se durante un accesso _il tag di un blocco è diverso dal tag dell'indirizzo a cui vogliamo accedere_, si ha un cache miss.

> Il dato di cui abbiamo bisogno è contenuto nell'indirizzo `0x0ABC` della RAM.
> Il suo indice sarà `0xBC`, e il suo tag sarà `0x0A`.
> Essendo la cache vuota all'inizio, viene immediatamente caricato.
>
> Voglio poi accedere all'indirizzo `0x0BBC` della RAM.
> Controlliamo il blocco con indice `0xBC`: il suo tag è `0x0A`, ma noi stiamo cercando `0x0B`! Si ha quindi un cache miss, e devo andare a prendere dalla memoria il dato che sto cercando e scriverlo sulla RAM.

Inoltre, in ogni blocco di memoria della cache è presente **un bit di validità**, che rappresenta se il dato in cache è stato inizializzato o no: parte da `0` e viene impostato a `1` quando viene caricato dalla RAM un dato nel relativo blocco.

> Un esempio potrebbe essere un processore con blocchi di memoria da 32 bit e indirizzi a 64 bit: la cache, contenente 1024 blocchi di memoria, avrà index a 12 bit, e di conseguenza il tag sarà grande 52 bit.

#### Dimensione blocchi

Fare blocchi grandi o fare blocchi piccoli ha significative differenze sulla velocità della cache:

Avere blocchi più grandi significa che ci saranno meno blocchi in tutta la cache, quindi:

```diff
+ Riduce il miss rate per il principio di località spaziale
- Avendo una quantità minore di blocchi, aumenta la possibilità di conflitto
- La miss penalty è più alta
# La miss penalty è compensabile con tecniche come early restart o critical-word-first
```

Con blocchi più piccoli, invece
```diff
+ Miss penalty minore
+ Più blocchi significa meno conflitti
- E' possibile che abbia bisogno di fare più di una richiesta alla cache, rallentandola significativamente
```

#### Scrittura tramite cache

Quando scrivo in memoria un dato presente nella cache, l'informazione presente nella cache diventa errata. 

Si può risolvere questo problema con una politica di riscrittura:
- Write-through
- Write-back

##### Write-through

_Quando **viene scritto** su dato in cache_, aggiorna tutte le memorie che lo contengono.

```diff
+ Non necessita di ulteriore memoria di cache
+ Caricare dati è veloce
+ Se si verifica un write miss non ha per forza bisogno di portare in cache il dato da scrivere
- I write richiedono molto più tempo, soprattutto se ripetuti
```


##### Write-back

Scrivi la modifica di dato solo nella cache, e _marca il blocco come **dirty**_.

Quando un blocco dirty viene **sovrascritto**, aggiorna le memorie che lo contengono.

```diff
+ I write richiedono poco tempo, anche se ripetuti
- Caricare dati dalla RAM è più lento
- Necessita di memoria da dedicare al dirty bit
- Devo fetchare obbligatoriamente i dati da sovrascrivere
```

##### Miglioramenti alle policy

E' possibile utilizzare un **write buffer** invece che fare attendere il tempo di scrittura alla CPU. I dati saranno scritti successivamente, ma prima che questi vengano utilizzati.

```diff
+ Il processore non ha bisogno di fermarsi per le write
- Il buffer potrebbe riempirsi, neganode i vantaggi
- Il buffer utilizza memoria che forse sarebbe stata più utile come cache
```

### Fully associative

Ogni dato può essere messo in qualunque indirizzo della cache.

Richiede che l'indirizzo di origine venga salvato assieme al dato, e tanti comparatori.

### Set associative

Divido tutti i blocchi di cache in vie.

Ogni via può contenere `n` dati.

Un set è l'insieme dei dati che hanno lo stesso index ma sono in vie diverse.

Ogni dato può essere messo in qualunque indirizzo del set a cui appartiene.

Identifico il numero di set di appartenenza facendo `indirizzo % numerodiset`.

Una cache `1`-way Set Associative è una cache Direct Mapped, mentre una cache `numeroentries`-way Set Associative è una cache Fully Associative.

Quando non c'è spazio in un set, rimpiazzo un dato secondo la politica **Least Recently Used**, rimuovendo il dato usato meno recentemente. Posso usare anche la politica **Random**, se ho un'alta associatività.

#### Performance

Più una cache è associativa, più il miss rate sarà ridotto, ma l'associatività richiede un maggior numero di comparatori e potenzialmente più ritardi nella restituzione del dato.

Inoltre, la percentuale di miss non diminuisce linearmente con il numero di vie: dopo un certo numero di vie, i guadagni sono molto ridotti.
