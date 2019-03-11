# I principi dell'architettura dei calcolatori

## Gli otto grandi principi

- Progetta per la **Legge di Moore**
- **Astrai** per semplificare il design
- Velocizza i **casi più comuni**
- Sfrutta il **parallelismo**
  - Instruction level parallelism
    - In una sola CPU vengono realizzati più calcoli in parallelo
- Sfrutta le **pipeline**
  - Pipelining
    - Separare le azioni del processore in fasi
    - Il fetch è separato dal decoding, mentre decodifico un'istruzione posso già fetchare quell'altra
- **Prevedi** le istruzioni successive
- **Gerarchizza** le memorie per velocità di accesso
  - La CPU cerca sempre di accedere alle memorie più veloci
- Rendi affidabile con la **ridondanza**

### Parallelismo

> Chiedo a 100 persone di fare una moltiplicazione ciascuna invece che fare 100 moltiplicazioni io da solo

### Pipelining

![Senza](https://upload.wikimedia.org/wikipedia/commons/2/2c/Nopipeline.png)

![Con](https://upload.wikimedia.org/wikipedia/commons/2/21/Fivestagespipeline.png)

### Gerarchia delle memorie

> Hit or miss? I hope they never miss.

La CPU prova sempre ad accedere alle memorie più in alto di questa lista, effettuando un **hit** se trova i dati che le servono in una data memoria ed effettuando un **miss** se invece non trova i dati necessari e deve accedere a uno strato inferiore.

- [Cache](https://it.wikipedia.org/wiki/Cache) (piccolissima e velocissima)
- [Random Access Memory](https://it.wikipedia.org/wiki/RAM) (piccola e veloce)
- [Solid State Drive]() (medio e di media velocità)
- [Hard Disk Drive](https://it.wikipedia.org/wiki/Disco_rigido) (grosso, ma lento)
- [Tape storage](https://en.wikipedia.org/wiki/Magnetic_tape_data_storage) (enorme, ma lentissimo)

I _miss_ rallentano l'esecuzione dei programmi, in quanto causano ritardi nel ritrovamento dei dati, passando da _meno di 1 µs_ per le cache a _più di 1 ms_ per gli hard disk.

Inoltre, esistono due tipi di cache, anch'essi gerarchizzati:

- [SRAM](https://it.wikipedia.org/wiki/SRAM)
- [DRAM](https://it.wikipedia.org/wiki/DRAM)
