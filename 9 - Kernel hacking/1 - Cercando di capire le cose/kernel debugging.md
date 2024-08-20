Ci sono varie cose che vanno effettuate per rendere possibile debuggare il kernel con [[gdb]].

## Generare un config di debug iniziale

Iniziare la compilazione del kernel con [[virtme-ng]], poi interromperla subito con <kbd><kbd>Ctrl</kbd>+<kbd>C</kbd></kbd>:
```bash
virtme-ng --build
```

## Abilitare le info di debug

Aprire [[menuconfig]]:
```bash
make menuconfig
```

Nella sezione *Kernel hacking*, attivare *Kernel debugging*.

Nella sezione *Memory Management options*, attivare *Disable heap randomization*.

## Ricompilare il kernel

Ricompilare il kernel con [[virtme-ng]]:
```bash
virtme-ng \
	--verbose \
	--build \
	--config .config
```

## Eseguire il kernel in modalità debug

Eseguire il kernel con [[virtme-ng]]:
```bash
virtme-ng \
	--run \
	--debug
```

## Connettere gdb al kernel

Avviare [[gdb]]:
```bash
gdb
```

Caricare i [[simboli di debug]]:
```gdb
file vmlinux
```

Connettersi al server [[gdb]] remoto:
```gdb
target remote localhost:1234
```