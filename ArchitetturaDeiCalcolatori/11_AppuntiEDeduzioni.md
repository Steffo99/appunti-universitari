# Appunti

## Registri

I registri sono divisi in tre tipi: di **proprietà del chiamante**, di **proprietà del chiamato** (anche se in realtà è solo una convenzione) e... gli **altri**.

Tutti i registri sono grandi 64 bit: possono quindi contenere una _doubleword_.

### Proprietà del chiamante

Questi registri **non devono essere sovrascritti** quando viene chiamata una funzione, o se vengono sovrascritti, **devono essere ripristinati** prima che la funzione restituisca.

Essi sono:
- `s1..s11`: **Saved** registers, registri generici che possono essere usati per qualsiasi cosa.
- `sp`: **Stack Pointer**, il primo indirizzo dello stack disponibile per la scrittura. Va _decrementato_ quando si aggiunge qualcosa allo stack.
- `fp`: **Frame Pointer**, punta all'inizio dello stack.

### Proprietà del chiamato

Questi registri **possono essere sovrascritti** quando viene chiamata una funzione: bisogna salvarli in memoria prima di chiamarla!

Essi sono:
- `t0..t6`: **Temporary** registers, registri generici che possono essere usati per qualsiasi cosa.
- `ra`: **Return Address**, l'indirizzo a cui continuare l'esecuzione del programma dopo aver terminato una funzione. _Solitamente si usa solo con `jal` e `jalr`!_
- `a0..a7`: Function **Arguments**. Se all'interno di una funzione, contengono gli argomenti che sono stati passati. Se all'esterno di una funzione, contengono i valori restituiti dall'ultima funzione chiamata.

### Altri

- `zero`: **Zero**, registro che vale sempre 0, anche dopo essere stato sovrascritto da altro. Come `/dev/null` su Linux.
- `gp`: **Global Pointer**, punta a un indirizzo _[(?)](https://groups.google.com/a/groups.riscv.org/forum/#!topic/sw-dev/60IdaZj27dY)_
- `tp`: **Thread Pointer**, punta al thread-local storage _[(?)](https://groups.google.com/a/groups.riscv.org/d/msg/sw-dev/cov47bNy5gY/zLnlKkw9CQAJ)_
- `pc`: **Program Counter**, punta all'istruzione che sta venendo eseguita.

## Comandi preprocessore

Scrivendo file assembly per RISC-V, è possibile aggiungere direttive per il preprocessore.

Per ora ho scoperto queste:

- `.global INDIRIZZO`: definisce l'indirizzo a cui inizia il programma. _(Forse setta il `gp` a quell'indirizzo?)_
- `.equ NOME, VALORE`: definisce una costante con uno specifico nome. _Il nome delle costanti dovrebbe iniziare sempre con un underscore per convenzione._
- `.section [.data|.rodata|.bss|.text]`: marca l'inizio di una specifica sezione del programma. Le sezioni sono:
  - `.data`: Variabili del programma
  - `.rodata`: Variabili sola lettura del programma
  - `[.bss](https://en.wikipedia.org/wiki/.bss)`: Variabili statiche non costanti non inizializzate a nessun valore. _A volte, vengono inizializzate a 0. Solo a volte. Dipende dall'OS._
  - `.text`: Il testo del programma, con le istruzioni in assembly.
- `.TIPOVARIABILE`: crea una variabile di quel tipo e la inizializza a qualcosa.

# Link utili

- [algo.ing.unimo.it](http://algo.ing.unimo.it/people/andrea/Didattica/Architetture/index.html)
- [wikichip.org](https://en.wikichip.org/wiki/risc-v)
- [en.wikiversity.org](https://en.wikiversity.org/wiki/Computer_architecture)
- [it.wikiversity.org](https://it.wikiversity.org/wiki/Materia:Architetture_degli_elaboratori)
- [stackoverflow.com](https://stackoverflow.com/questions/tagged/riscv)
- [softwareengineering.stackexchange.com](https://softwareengineering.stackexchange.com/questions/tagged/assembly)
- [rv8.io](https://rv8.io/isa.html)
