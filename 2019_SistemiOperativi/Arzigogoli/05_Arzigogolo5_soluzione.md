# Arzigogolo 5

## Prerequisiti

Si allochino almeno 4 GB di memoria alla macchina virtuale Arch Linux, altrimenti `cscope` non sarà in grado di funzionare sul codice sorgente del kernel Linux.

All'interno di essa, si installino tramite `pacman` i programmi necessari allo svolgimento degli esercizi: `pacman -S cscope wget git gcc`.

_Per semplicità, si assume che in fase di installazione si sia installato su Arch il pacchetto `linux` contenente il kernel Linux standard, e non pacchetti contenenti kernel alternativi come `linux-hardened` o `linux-zen`._

## Esercizio 1

### Comandi utilizzati

- `uname` è un comando che permette di visualizzare informazioni sul sistema operativo attualmente in esecuzione: con l'opzione `-r`, esso stampa la release del kernel attualmente in uso.

- `wget` è un comando che permette di scaricare file dal web: il primo argomento che gli viene passato specifica quale pagina o file esso deve scaricare. 

- `tar` è un comando che permette di estrarre o inserire file in un archivio: l'opzione `-x` specifica che deve estrarre (e`x`tract) i file da un archivio, mentre l'opzione `-f {NOMEFILE}` specifica il file archivio da cui deve estrarre i file. 

- `ldd` è un comando che permette di visualizzare le librerie dinamiche richieste per il funzionamento di un certo eseguibile; se usato con l'opzione `--version`, esso stamperà la versione della libreria C del sistema.

- `git clone` è un comando che permette di creare una copia del repository Git presente alla posizione del primo argomento. Il primo argomento può essere il percorso di un file locale, un percorso di un file remoto accessibile tramite `ssh`, oppure l'URL di una pagina web accessibile tramite i protocolli `https` o `git`.

- `git checkout` è un comando che permette di cambiare branch del repository Git presente nella current working directory: il primo argomento specifica il nome del branch a cui si vuole passare.

- `cscope` è un comando che indicizza il codice sorgente C di un programma per permettere di ricercare velocemente simboli al suo interno.
    - Con l'opzione `-b`, `cscope` creerà l'indice dei simboli presenti nei file `.c`, `.h`, `.l` e `.y` della directory attuale.
    - Con l'opzione `-q`, `cscope` creerà in aggiunta un indice inverso di simboli, permettendo l'utilizzo di un algoritmo più veloce per la ricerca (a costo di un maggiore utilizzo di memoria).
    - Con l'opzione `-k`, `cscope` ignorerà le librerie presenti all'interno del sistema operativo (in `/usr/include`), e si limiterà a indicizzare i file nella directory attuale.  
    Questa modalità è detta “kernel mode”, e viene utilizzata nel caso si stia indicizzando il codice sorgente del kernel Linux, in quanto esso implementa le funzioni definite all’interno degli header include.
    - Con l'opzione `-R`, `cscope` cercherà file sorgenti ricorsivamente (all'interno di tutte le sottocartelle presenti nella cartella attuale).
    - Con l'opzione `-v`, `cscope` stamperà ogni secondo informazioni sul progresso attuale dell'indicizzazione.

### Scaricare il codice sorgente del kernel Linux

Si controlli la release del kernel Linux attualmente in esecuzione sul sistema con il comando `uname -r`.

Si cerchi sul sito web https://www.kernel.org/ la versione corrispondente a quella attualmente in esecuzione, e se ne scarichi l'archivio del codice sorgente con il comando `wget`: nel caso della release 5.3.8, il comando è `wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.3.8.tar.xz`.

Si estraggano i file dall'archivio scaricato con il comando `tar -xf linux-5.3.8.tar.xz`: esso creerà una nuova cartella `linux-5.3.8` contenente il codice sorgente del kernel attualmente in uso.

### Scaricare il codice sorgente della libreria C

Si controlli la versione della libreria C (`glibc`) disponibile sul sistema con il comando `ldd --version`.

Si cloni il repository Git di `glibc`, disponibile all'URL `git://sourceware.org/git/glibc.git`: `git clone git://sourceware.org/git/glibc.git`; sarà creata una cartella `glibc` contenente il codice sorgente più recente della libreria C.

Si entri nella cartella `glibc` con `cd glibc`.

Si risalga al codice sorgente della release attuale con il comando `git checkout`: nel caso della release 2.30, il comando sarà `git checkout release/2.30/master`: terminata l'esecuzione, nella cartella sarà presente il codice sorgente della libreria C attualmente in uso dal sistema.

Si esca dalla cartella con `cd ..`.

### Creazione del database `cscope`

Si entri nella cartella `linux-5.3.8`, e si esegua `cscope -bqkRv`; saranno creati i file `cscope.out`, `cscope.in.out`, `cscope.po.out`, rappresentanti l'indice del codice sorgente del kernel Linux; si esca infine dalla cartella con `cd ..`.

Si entri nella cartella `glibc` e si ripeta il comando `cscope -bqkRv`; si è ottenuto l'indice del codice sorgente della libreria C; si esca nuovamente dalla cartella con `cd ..`.

## Esercizio 2

### Comandi utilizzati

- `mount` è un comando che permette di connettere ad una cartella il file system di un dispositivo collegato al computer.
  - L'opzione `-t {TIPO}` specifica il tipo di filesystem che si sta montando: ad esempio, alcuni tipi che possono essere specificati sono `ext4` (filesystem usato principalmente da Linux), `ntfs` (filesystem usato da Windows), e anche tipi speciali come `tracefs` (contenente file per la tracciatura di eventi nel kernel) e `debugfs` (contenente file per il debug del kernel) che non rappresentano dati contenuti all'interno di un dispositivo.
  - Il primo argomento specifica il percorso del file dispositivo che si vuole montare; può essere il nome speciale `nodev`, che rappresenta nessun dispositivo ed è utilizzato dai tipi speciali precedentemente menzionati.
  - Il secondo argomento specifica la directory in cui si vuole montare il file system; essa verrà popolata con tutti i rispettivi file al termine dell'esecuzione del comando.

### Verificare che `ftrace` sia supportato dal kernel

E' possibile verificare se `ftrace` sia supportato o no dal kernel Linux verificando l'esistenza della cartella `/sys/kernel/tracing`.

Se la cartella esiste, è possibile montarvi il filesystem speciale `tracefs`, contenente tutti i file relativi al tracing, tramite il comando `mount -t tracefs nodev /sys/kernel/tracing`.

### Verificare che `ftrace` sia attivo nel sistema

E' possibile vedere lo stato di attivazione del tracing leggendo i contenuti del file `/sys/kernel/tracing/tracing_on`: esso conterrà `0` se `ftrace` è disattivato e `1` se `ftrace` è attivato.

### Attivare o disattivare `ftrace`

E' possibile attivare o disattivare `ftrace` scrivendo rispettivamente `1` o `0` nel file `/sys/kernel/tracing/tracing_on`: il modo più facile per farlo è con i comandi `echo 1 > /sys/kernel/tracing/tracing_on` e `echo 0 > /sys/kernel/tracing/tracing_on`.

### Abilitare la tracciatura completa di tutte le funzioni del kernel

E' possibile selezionare il tipo di tracciatura che si vuole effettuare scrivendo una stringa all'interno del file `/sys/kernel/tracing/current_tracer`.

Un elenco di tutti i tipi di tracciatura supportati è presente all'interno del file `/sys/kernel/tracing/available_tracers`.

Il tipo di tracciatura necessario per ottenere l'albero delle funzioni del kernel è `function_graph`; lo si scriva quindi sul file `current_tracer` con il comando `echo "function_graph" > /sys/kernel/tracing/current_tracer`.

### Recuperare la traccia di esecuzione completa delle funzioni del kernel

Una volta sottoscritti a uno più eventi, è possibile visualizzare la traccia degli eventi a cui si è sottoscritti all'interno del file `/sys/kernel/tracing/trace` (ad esempio con il comando `cat /sys/kernel/tracing/trace`).

## Esercizio 3

### Comandi utilizzati

Il comando `gcc` compila i file sorgente C che gli vengono passati come argomenti e come risultato crea il file eseguibile `a.out`.

### Programma in C

Si crei il seguente programma C, salvandolo su un file chiamato `programma.c`:

```c
#include <stdio.h>
#include <unistd.h>

int main(int argc, char* argv[]) {
    if(access("/etc/passwd", R_OK)) {
        printf("/etc/passwd è leggibile dall'utente attuale");
        return 0;
    }
    else {
        printf("/etc/passwd NON è leggibile dall'utente attuale");
        return 1;
    }
}
```

### `access()` (la funzione `s`)

La funzione `int access(const char *pathname, int mode);` è una funzione di `glibc` che permette di controllare se un file esiste e se l'utente che ha eseguito il programma (l'utente _reale_, non l'utente _effettivo_) ha i permessi di leggere/scrivere/eseguire quel file.

Per effettuare la verifica, la funzione effettua una syscall, chiamando la funzione `sys_access` del kernel Linux. 

L'argomento `pathname` specifica il percorso del file su cui si vuole effettuare il controllo.

L'argomento `mode` specifica quali controlli si vogliono effettuare sui permessi del file:
- Con il flag `F_OK` si verifica solo l'esistenza del file
- Con il flag `R_OK` si verifica se l'utente che ha eseguito il programma ha permessi di lettura sul file
- Con il flag `W_OK` si verifica se l'utente che ha eseguito il programma ha permessi di scrittura sul file
- Con il flag `X_OK` si verifica se l'utente che ha eseguito il programma ha permessi di esecuzione sul file

E' possibile effettuare l'OR bitwise tra più flag (`R_OK | W_OK`) per verificare che l'utente abbia tutti i permessi delle flag passate.

### Compilazione del programma

Si compili il file invocando il comando `gcc programma.c`; sarà creato l'eseguibile linkato dinamicamente `a.out`.

Per creare l'albero di funzioni di `access()`, si userà `ftrace`, già configurato in precedenza, e `ltrace`, descritto nella sezione _Esercizio 3 > Comandi utilizzati_.

### Recupero dell'albero di funzioni

Si disattivi il tracing scrivendo `0` su `/sys/kernel/tracing/tracing_on` (`echo 0 > /sys/kernel/tracing/tracing_on`).

Si svuoti la traccia attuale scrivendo `""` su `/sys/kernel/tracing/trace` (`echo "" > /sys/kernel/tracing/trace`).

Si inserisca poi il comando `echo 1 > /sys/kernel/tracing/tracing_on; ./a.out; echo 0 > /sys/kernel/tracing/tracing_on; cat /sys/kernel/tracing/ > ftrace.txt`: si attiverà la tracciatura solo per il tempo necessario all'esecuzione del programma `./a.out`, in modo da tracciare solo le funzioni di sistema chiamate durante l'esecuzione del programma, e infine la traccia sarà copiata sul file `ftrace.txt`.

Si cerchi all'interno del file `ftrace.txt` la riga contenente `sys_access()`: si è ottenuto l'albero delle chiamate della chiamata di sistema `access()`.

Segue un estratto dal file ftrace, assieme al commento delle principali funzioni invocate (le linee di commento iniziano con un cancelletto).

### Commento dell'albero di funzioni

```python
# La chiamata di sistema access, per l'architettura x64
__x64_sys_access() {
	# Funzione corrispondente alla chiamata di sistema access
	do_faccessat() {
		# Crea una struttura "creds" modificabile, contenente le credenziali di un utente, e incrementa di 1 il suo reference counter
		prepare_creds() {
			# Alloca memoria dalla cache
			kmem_cache_alloc() {
				should_failslab();
				memcg_kmem_get_cache() {
					__rcu_read_lock();
					preempt_count_add();
					preempt_count_sub();
					__rcu_read_unlock();
				}
				memcg_kmem_put_cache() {
					preempt_count_add();
					preempt_count_sub();
				}
			}
			# Riempi la struttura con dei dati
			security_prepare_creds() {
				lsm_cred_alloc.isra.0();
			}
		}
		# Se si passa da root a un altro utente, rimuovi i permessi
		make_kuid() {
			map_id_range_down();
		}
		# Cambia le credenziali del processo attuale
		override_creds();
		# Trova un file a un dato percorso in userspace
		user_path_at_empty() {
			# Trova le flag dei permessi del file con un dato nome
			getname_flags() {
				kmem_cache_alloc() {
					should_failslab();
					memcg_kmem_put_cache();
				}
				__check_object_size() {
					check_stack_object();
					__virt_addr_valid();
					__check_heap_object();
				}
			}
			# Cerca il file con un dato nome
			filename_lookup() {
				path_lookupat.isra.0() {
					path_init() {
						__rcu_read_lock();
						# Parti dalla root directory ( / )
						set_root();
						nd_jump_root();
					}
					# Attraversa le varie directory
					link_path_walk() {
						# Assicurati di avere i permessi per entrare in una directory
						inode_permission() {
							generic_permission();
							security_inode_permission();
						}
						# Entra nella directory
						walk_component() {
							lookup_fast() {
								__d_lookup_rcu();
								__follow_mount_rcu.isra.0() {
									__lookup_mnt();
								}
							}
						}
						inode_permission() {
							generic_permission();
							security_inode_permission();
						}
					}
					walk_component() {
						lookup_fast() {
							__d_lookup_rcu();
							__follow_mount_rcu.isra.0();
						}
					}
					# Termina l'esplorazione delle directory
					complete_walk() {
						unlazy_walk() {
							legitimize_links();
							legitimize_path.isra.0() {
								__legitimize_mnt();
							}
							__rcu_read_unlock();
						}
					}
					# Restituisci il risultato
					terminate_walk() {
						dput();
						mntput();
					}
				}
				restore_nameidata();
				putname() {
					kmem_cache_free();
				}
			}
		}
		# Controlla di avere i permessi di lettura
		inode_permission() {
			generic_permission();
			security_inode_permission();
		}
		# Libera la memoria 
		path_put() {
			dput() {
				__rcu_read_lock();
				__rcu_read_unlock();
			}
			mntput() {
				mntput_no_expire() {
					__rcu_read_lock();
					__rcu_read_unlock();
				}
			}
		}
		# Ritorna alle credenziali originali
		revert_creds();
		# Decrementa di 1 il reference counter delle credenziali create in precedenza, al fine di deallocare la struttura se nessun altro processo la stausando
		__put_cred() {
			put_cred_rcu() {
				security_cred_free();
				key_put();
				key_put();
				key_put();
				key_put();
				free_uid();
				# Il reference counter ha raggiunto 0, si può deallocare la memoria occupata dalla struttura “creds” in sicurezza
				kmem_cache_free();
			}
		}
	}
}
```
