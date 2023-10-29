Il glossario contiene voci fino allo slideshow 07.

### High performance (HP)

Sistemi con hardware specializzato per effettuare calcoli più velocemente, ad esempio tramite esecuzione in parallelo.

### Architectural heterogeneity

Sistemi le cui risorse di calcolo non sono tutte dello stesso tipo, e invece sono specializzate allo svolgimento di diversi compiti.

### Massive parallelism

### Locally homogeneous

Quando una parte di un sistema ha tante risorse di calcolo uguali che condividono risorse.

### Globally heterogeneous

Quando un sistema ha diverse parti *locally homogeneous* che interagiscono fra loro.

### Legge di Moore

Il numero di transsitor in un circuito integrato raddoppia ogni due anni.

Ha cessato di essere valida intorno al 2000.

### Legge di Dennard

I transistor possono essere scalati $\times 0.7$ ad ogni generazione di processori.

Riducendo le dimensioni dei transistor si può scalare la loro frequenza di $\times 1.4$.

Per impedire al campo elettrico di aumentare e di causare interferenze, anche la potenza fornita ai transistor è scalata di $\times 0.7$.

Ha cessato di essere valida nel 2005.

### Power wall
^2241b2

Soglia oltre la quale non è possibile diminuire la potenza fornita ai transistor.

### Instruction-level parallelism (ILP)

Parallelismo implicito nei processori per aumentare le prestazioni single-core, realizzato tramite pipelining.

Efficacia limitata.

### Dark silicon

Limitazione nei sistemi multicore che impedisce a tutti i core di essere attivati contemporaneamente per limiti di potenza.

Vedi [[#^2241b2|Power wall]].

### Soluzione #1: Rimpicciolimento

Realizzare chip più piccoli ed economici.

### Soluzione #2: Dimming

Realizzare più core paralleli, ma più lenti.

### Soluzione #3: Specializzazione

Realizzare più core con funzionalità diverse e selezionare sul momento quali usare.

### Soluzione #4: Cambio di approccio

Iniziare ad usare tecnologie diverse per la realizzazione di microprocessori.

### Tassonomia di Flynn (SISD, SIMD, MISD, MIMD)

Classificazione di processori in base a come operano in parallelo.

### Single instruction, single datastream

Esecuzione sequenziale. CPU single-core.

### Single instruction, multiple datastreams

Vengono effettuate le stesse operazioni su dati diversi. GPU.

### Multiple instruction, single datastreams

Vengono effettuate operazioni diverse sugli stessi dati. Array processors.

### Multiple instruction, multiple datastreams

Vengono effettuate a matrice istruzioni diverse su dati diversi. CPU multi-core.

### Loop unrolling

Trasformazione di un loop in modo che riesca ad effettuare più operazioni con una singola istruzione.

```c
for(int i = 0; i < SIZE; i++) {
	array[i] += 1;
}
```

```c
for(int i = 0; i < SIZE / 4; i++) {
	array[i+0] += 1;
	array[i+1] += 1;
	array[i+2] += 1;
	array[i+3] += 1;
}
```

```c
for(int i = 0; i < SIZE / 4; i++) {
	addToAddresses(array, i, n, 1)  // Singola istruzione assembly!
}
```

### Istruzione di *fork*

Divisione dell’execution path in due path separati con istruzioni diverse

### Istruzione di *join*

Riunione di execution path *fork*ati, richiede che entrambi abbiano terminato l’esecuzione.

### Symmetric multi-processors (SMP, UMA)

Processori shared memory la cui memoria è fisicamente condivisa.

Sono uniform memory access time (UMA).

### Distributed shared memory (DSM, NUMA)

Processori shared memory la cui memoria è fisicamente distribuita tra i core.

Sono non-uniform memory access time (NUMA).

### Coherence

Principio di caching secondo il quale il contenuto delle cache deve essere sempre valido, anche quando un altro processore ha modificato il dato in questione nella memoria principale.

### Snoopy cache

Cache che interagisce direttamente con le altre cache attraverso un singolo bus condiviso, invalidando e scrivendo i dati quando necessario.

### Directory cache

Cache distribuita in modo simile a una memoria di un sistema NUMA, richiede a ciascun core di mantenere una directory di quali core hanno in cache un certo dato.

### Full bit vector

Ogni blocco di cache ha nella directory un bit per ciascun core che potrebbe avere o no il blocco cacheato.

### Limited pointer scheme (LPS)

Invece che usare una matrice di flag, vengono salvati gli indici dei core, come in un array sparso.

### Broadcast

Quando gli indici dei core utilizzano più spazio di quello disponibile, si ritorna a un sistema di broadcast.

### No broadcast

Quando gli indici dei core utilizzano più spazio di quello disponibile, il più nuovo sostituisce quello vecchio.

### Vettore grossolano

Vettore che fa in modo che ciascun indice corrisponda a più core, ad esempio tramite modulo `%`

### Puntatori dinamici

### Sparse directory

Viene usata una linked list distribuita per rappresentare quali core hanno in cache quale blocco.

### Protocollo Modified-Shared-Invalid (MSI)

Protocollo per invalidazione di blocchi di cache che prevede tre stati:

- modified
- shared
- invalid

### Protocollo Modified-Exclusive-Shared-Invalid (MESI)

Protocollo per invalidazione di blocchi di cache che prevede quattro stati:

- exclusive modified
- exclusive
- shared
- invalid

### Coherence miss / Communication miss / Sharing miss

Miss di cache dovuto alle azioni di un altro core.

### True

Quando il dato ad essere modificato da un altro core è specificamente quello salvato in cache.

### False

Quando il dato ad essere modificato è solamente contenuto all’interno dello stesso blocco.

### Operazioni atomiche / operazioni indivisibili

Operazioni che vengono effettuate da un thread in una transazione unica, che non possono essere interrotte a metà.

A livello hardware, sono comunemente implementate le seguenti.

### Test & Set (Lock acquire)

```cpp
atomic bool acquire(bool* lock) {
	bool result = *lock;
	*lock = true;
	return result;
}
```

### Swap

```cpp
atomic void swap<T>(T* a, T* b) {
	T tmp = *a;
	*a = *b;
	*b = tmp;
}
```

### Compare & Swap

### Test & Test & Set

### Test | Backoff & Test & Set (Lock acquire)

### Esclusione mutua (Mutex, Lock)

Meccanismo per impedire che un altro core operi durante un’operazione atomica.

### Lock

Meccanismo di sincronizzazione che permette a un solo thread alla volta di utilizzare una risorsa.

### Sezione critica

Parte di codice che può eseguire solo un thread alla volta.

### Sequential consistency

Caratteristica di un’architettura che non effettua reordering di alcun tipo.

### Write buffering (W→R)

Caratteristica di un’architettura che permette ai read successivi ai writes di essere effettuati in anticipo.

### Total store ordering

I read di altri processori sono bloccati finchè tutti gli altri processori non hanno ricevuto il nuovo valore.

### Processor consistency

I read di altri processori sono bloccati finchè il processore singolo non ha ricevuto il nuovo valore.

### Partial store ordering (W→R + W→W)

Caratteristica di un’architettura che permette a qualsiasi operazione di essere effettuata prima che un write abbia effettivamente scritto il valore in memoria.

### Weak ordering / release consistency (fence)

Caratteristica di un’architettura che permette a qualsiasi operazione di essere effettuata prima di altre.

Richiede l’utilizzo di particolari istruzioni *fence* che impediscono il reordering.

### Legge di Amdahl

$$
Speedup = \frac{Old\ Run\ Time}{New\ Run\ Time}
$$

$$
Speedup = \frac{1}{\left( 1 - Parallel\ Time \right) + \left(\frac{Parallel\ Time}{n}\right)}
$$

### Shared memory

Implementazione del parallelismo a livello di codice che prevede memoria condivisa tra più core, richiede meccanismi di atomicità e locking.

Tipo `threading` in Python.

### Distributed memory / Message passing

Implementazione del parallelismo a livello di codice che prevede memoria individuale per ciascun core, richiede scambio di dati esplicito.

Tipo `multiprocessing` in Python.

Il costo per il message passing è:

$$
Message\ Cost = Frequency \times \left( Overhead + Network\ Delay + \frac{Data\ Size}{Messages \times Bandwidth} + Network\ Contention - Overlap \right)
$$

### Static load balancing

I task vengono assegnati ai core a compile-time.

### Dynamic load balancing

I task vengono assegnati ai core a run-time.