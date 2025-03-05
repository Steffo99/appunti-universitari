`offwaketime` è un profiler per thread su Linux che sfrutta eBPF per catturare informazioni nei momenti in cui un thread entra in attesa di un evento esterno alla CPU e in quelli in cui esso viene risvegliato dall'attesa.

È mantenuto dall'[IO Visor Project](https://github.com/iovisor).

## Installazione

[`offwaketime`](https://github.com/iovisor/bcc/blob/master/tools/offwaketime.py) è uno script del toolkit [`bcc`](https://github.com/iovisor/bcc), e viene installato assieme ad esso.

Inoltre, richiede che siano installati gli header del kernel in esecuzione sulla macchina che esegue il programma di cui si vuole effettuare il profiling.

Infine, per visualizzare graficamente l'output ottenuto, è necessario il renderer [`FlameGraph`](https://github.com/brendangregg/FlameGraph).

### `bcc`

`bcc` è preparato downstream dalla grande maggioranza delle distribuzioni Linux:
- su ***Debian 12 Bookworm***, è possibile installarlo tramite il pacchetto [`bpfcc-tools`](https://packages.debian.org/bookworm/bpfcc-tools)
- su ***Ubuntu 24.10 Oracular Oriole***, è possibile installarlo tramite il pacchetto [`bpfcc-tools`](https://launchpad.net/ubuntu/+source/bpfcc)
- su ***Fedora 41***, è possibile installarlo tramite il pacchetto [`bcc-tools`](https://packages.fedoraproject.org/pkgs/bcc/bcc-tools/)
- su ***Arch Linux 2025-02-27***, è possibile installarlo tramite il pacchetto [`bcc-tools`](https://archlinux.org/packages/extra/x86_64/bcc-tools/) in `extra`

IO Visor mantiene una [lista completa](https://github.com/iovisor/bcc/blob/master/INSTALL.md) di tutti i downstream che includono `bcc`.

### Header del kernel

> [!Note]
> Per utilizzare `bcc`, è necessario che il kernel che si sta utilizzando abbia le seguenti funzionalità compilate[^bccconfig]:
> - `CONFIG_BPF_SYSCALL`
> - `CONFIG_BPF_JIT`
> - `CONFIG_HAVE_BPF_JIT`
> - `CONFIG_HAVE_EBPF_JIT`
> - `CONFIG_HAVE_CBPF_JIT`
> - `CONFIG_MODULES`
> - `CONFIG_BPF`
> - `CONFIG_BPF_EVENTS`
> - `CONFIG_PERF_EVENTS`
> - `CONFIG_HAVE_PERF_EVENTS`
> - `CONFIG_PROFILING`
> - `CONFIG_DEBUG_INFO_BTF`
> - `CONFIG_PAHOLE_HAS_SPLIT_BTF`
> - `CONFIG_DEBUG_INFO_BTF_MODULES`
> - `CONFIG_BPF_JIT_ALWAYS_ON`
> - `CONFIG_BPF_UNPRIV_DEFAULT_OFF`
> - `CONFIG_CGROUP_BPF`
> - `CONFIG_BPFILTER`
> - `CONFIG_BPFILTER_UMH`
> - `CONFIG_NET_CLS_BPF`
> - `CONFIG_NET_ACT_BPF`
> - `CONFIG_BPF_STREAM_PARSER`
> - `CONFIG_LWTUNNEL_BPF`
> - `CONFIG_NETFILTER_XT_MATCH_BPF`
> - `CONFIG_IPV6_SEG6_BPF`
> - `CONFIG_KPROBE_EVENTS`
> - `CONFIG_KPROBES`
> - `CONFIG_HAVE_KPROBES`
> - `CONFIG_HAVE_REGS_AND_STACK_ACCESS_API`
> - `CONFIG_KPROBES_ON_FTRACE`
> - `CONFIG_FPROBE`
> - `CONFIG_BPF_KPROBE_OVERRIDE`
> - `CONFIG_UPROBE_EVENTS`
> - `CONFIG_ARCH_SUPPORTS_UPROBES`
> - `CONFIG_UPROBES`
> - `CONFIG_MMU`
> - `CONFIG_TRACEPOINTS`
> - `CONFIG_HAVE_SYSCALL_TRACEPOINTS`
> - `CONFIG_BPF_LSM`
> - `CONFIG_BPF_LIRC_MODE2`

[^bccconfig]: https://github.com/iovisor/bcc/blob/master/docs/kernel_config.md

#### Kernel distribuito

Se si sta usando il kernel Linux compilato dalla propria distribuzione, solitamente si possono installare i relativi header dal proprio package manager:
- su ***Debian 12 Bookworm***, è possibile installarli tramite il pacchetto `linux-headers-XXX`, dove `XXX` è la versione del proprio kernel ottenibile attraverso il comando `uname --kernel-release`
- su ***Ubuntu 24.10 Oracular Oriole***, è possibile installarli tramite il pacchetto `linux-headers-XXX`, dove `XXX` è la versione del proprio kernel ottenibile attraverso il comando `uname --kernel-release
- su ***Fedora 41***, è possibile installarli tramite il pacchetto [`kernel-devel`](https://packages.fedoraproject.org/pkgs/kernel/kernel-devel/)
- su ***Arch Linux 2025-02-27***, è possibile installarli tramite il pacchetto [`linux-headers`](https://archlinux.org/packages/core/x86_64/linux-headers/) in `core`

#### Kernel da sorgente

Se si sta usando un proprio kernel compilato da sorgente, è possibile installare i relativi header attraverso `make` con il comando:
```bash
make headers_install
```

Eventualmente è possibile modificarne la posizione di installazione, specificando la variabile `INSTALL_HDR_PATH`:
```bash
make headers_install INSTALL_HDR_PATH="/usr/lib/modules/1.2.3-mykernel"
```

### `FlameGraph`

[`FlameGraph`](https://github.com/brendangregg/FlameGraph) è un insieme di script `awk` e `perl` che non sono preparati downstream da nessuna distribuzione, rendendo quindi necessario scaricarli da sorgente:
```bash
git checkout --depth=1 'https://github.com/brendangregg/FlameGraph.git'
```

## Utilizzo

Per utilizzare `offwaketime`, è prima necessario assicurarsi che il programma che si vuole profilare sia in esecuzione, poi eseguire il tool installato come superuser.

In base a come si è installato il toolkit `bcc`, il profiler `offwaketime` si troverà in directory diverse:
- su ***Debian 12 Bookworm***, in`/bin/offwaketime-bpfcc`
- su ***Ubuntu 24.10 Oracular Oracle***, in `/bin/offwaketime-bpfcc`
- su ***Fedora 41***, in `/usr/share/bcc/tools/offwaketime`
- su ***Arch Linux 2025-02-27***, in `/usr/share/bcc/tools/offwaketime`

Per convenienza, in questa guida viene usato `offwaketime` per indicare l'eseguibile installato:
```bash
offwaketime
```

Allo stesso modo, lo script Perl `flamegraph.pl` si troverà in directory diverse in base a dove si è clonato il repository.

Per convenienza, in questa guida viene usato `flamegraph` per indicare quell'eseguibile:
```
flamegraph
```

### Selezione dell'oggetto del profiling

La profilazione di `offwaketime` può essere impostata per includere o escludere diversi programmi in esecuzione sul proprio sistema operativo.

Se non viene specificato nulla, la profilazione di `offwaketime` si applica a tutto il sistema operativo:
```bash
offwaketime
```

L'opzione `-k` filtra la profilazione a solamente i kernel thread, come ad esempio i thread di `[kworker]`:
```bash
offwaketime -k
```

Viceversa, l'opzione `-u` filtra la profilazione a solamente gli user thread, cioè quelli delle applicazioni avviate in user space:
```bash
offwaketime -u
```

L'opzione `-p` permette di specificare i pid di uno o più processi da includere, escludendo tutto il resto:
```bash
offwaketime -p 150000,150001,150002
```

L'opzione `-t` è più granulare, e permette di specificare i tid di uno o più *thread* da includere, escludendo il resto:
```bash
offwaketime -t 
```

> [!Note]
> È possibile abilitare la visualizzazione del tid dei thread specificando a `ps` le opzioni `-m` e `-L`, e guardando la colonna `LWP`, light-weight process:
> ```bash
> ps -m -L
> ```

### Selezione della durata del profiling

La durata del profiling di `offwaketime` può essere regolata per avere una certa durata, o per terminare quando richiesto dall'utente con `SIGTERM`.

Se non viene specificato nulla, la profilazione di `offwaketime` dura fino alla ricezione di `SIGTERM` (solitamente una pressione di `Ctrl+C`):
```bash
offwaketime
```

È possibile far terminare la profilazione dopo un certo numero di secondi specificandolo come primo argomento:
```bash
offwaketime 2
```

> [!Important]
> Relativamente ai programmi userspace, `offwaketime` è in grado di risolverne i simboli e quindi di visualizzare il relativo stack **solo se i programmi stessi sono ancora in esecuzione** quando la profilazione ha termine.[^symbols]

[^symbols]: https://github.com/iovisor/bcc/issues/1694#issuecomment-384478735

### Selezione formato di output

`offwaketime` può emettere output in due diversi formati, ognuno con diversi usecase.

Se non viene specificato nulla, `offwaketime` emette output in un formato human-friendly utilizzando testo pre-formattato:
```bash
offwaketime
```

Se si specifica l'opzione `-f`, `offwaketime` emette output in un formato machine-friendly, separando le tracce con `;`:
```bash
offwaketime -f
```

### Filtraggio delle tracce per durata delle attese

Il profiling di `offwaketime` può essere regolato per includere solo le tracce relative ad attese che rientrano in un dato intervallo di durata.

Se non viene specificato nulla, la profilazione di `offwaketime` include tutte le tracce di attese dalla durata superiore a 1 microsecondo (µs):
```bash
offwaketime
```

Qualora l'impostazione predefinita restituisse troppe tracce, è possibile incrementare la durata minima delle attese specificando l'opzione `-m` seguita dal numero di microsecondi (µ) desiderato:
```bash
offwaketime -m 10
```

È possibile anche impostare un tetto superiore alla durata delle attese specificando l'opzione `-M` seguita dal numero di microsecondi (µ) desiderato:
```bash
offwaketime -M 1000000
```

Le due possono essere combinate per filtrare un intervallo:
```bash
offwaketime -m 10 -M 1000000
```

### Filtraggio delle tracce per stato del thread

Il profiling di `offwaketime` può essere regolato per includere solo le tracce relative ad attese relative a thread con determinate flag di stato.

Se non viene specificato nulla, la profilazione di `offwaketime` include tracce di tutti i thread:
```bash
offwaketime
```

È possibile filtrare thread relativamente al loro stato specificando l'opzione `--state`, seguita dalla bitmask di i flag di stato che **si richiede siano tutti presenti** sui thread da profilare: 
```bash
offwaketime --state $(( 1 | 2 ))
```

Controintuitivamente, esiste un'eccezione speciale per il valore di `--state` `0`, che se specificato seleziona i task senza flag di stato, ovvero quelli in esecuzione:
```bash
offwaketime --state 0
```

I valori utilizzabili per filtrare i thread in base al loro stato sono:

| Valore  | Costante               | Significato                                                                                                  |
| ------- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| `0`     | `TASK_RUNNING`         | Il thread è in esecuzione                                                                                    |
| `1`     | `TASK_INTERRUPTIBLE`   | Il thread è in attesa e in grado di ricevere segnali[^interruptible]                                         |
| `2`     | `TASK_UNINTERRUPTIBLE` | Il thread è in attesa, ma senza essere in grado di ricevere segnali[^interruptible]                          |
| `256`   | `TASK_WAKEKILL`        | Il thread è in attesa, ma in grado di ricevere solo segnali che lo ucciderebbero[^torvaldsstates]            |
| `4096`  | `TASK_RTLOCK_WAIT`     | Solo in kernel con `PREEMPT_RT`; il thread è in attesa di un real-time lock[^lorertlockwait]                 |
| `4`     | `__TASK_STOPPED`       | Il thread è stato messo in pausa da un segnale `SIGSTOP`[^baeldungstopped]; implica `TASK_WAKEKILL`[^pstate] |
| `8`     | `__TASK_TRACED`        | Il thread sta venendo debuggato, ed è stato messo in pausa dal debugger[^sotraced]                           |
| `32768` | `TASK_FROZEN`          | Il sistema è stato ibernato, ed il thread è in attesa di essere esplicitamente scongelato [^docsfreeze]      |
| `8192`  | `TASK_FREEZABLE`       | Quando il sistema sarà ibernato, questo thread potrà essere congelato e in seguito scongelato[^docsfreeze]   |
| `512`   | `TASK_WAKING`          | Il thread sta venendo risvegliato da un'attesa[^lorewaking]                                                  |
| `1024`  | `TASK_NOLOAD`          | Il thread è escluso dal conteggio della load average[^lorenoload]                                            |

[^pstate]: https://github.com/torvalds/linux/blob/master/include/linux/sched.h
[^interruptible]: https://stackoverflow.com/a/224042
[^baeldungstopped]: https://www.baeldung.com/linux/process-states
[^sotraced]: https://unix.stackexchange.com/a/535271
[^torvaldsstates]: https://yarchive.net/comp/linux/wakekill.html
[^lorewaking]: https://lore.kernel.org/lkml/tip-e9c8431185d6c406887190519f6dbdd112641686@git.kernel.org/
[^lorenoload]: https://lore.kernel.org/lkml/alpine.LFD.2.11.1505112154420.1749@ja.home.ssi.bg/T/
[^lorertlockwait]: https://lore.kernel.org/all/20210815211302.144989915@linutronix.de/
[^docsfreeze]: https://docs.kernel.org/power/freezing-of-tasks.html

### Filtraggio delle tracce per spazio

Talvolta si può essere interessati a solo le tracce relative all'userspace o al kernelspace di un determinato processo.

Se non viene specificato nulla, `offwaketime` include tutto:
```bash
offwaketime
```

Specificando l'opzione `-U`, verranno mostrate solo le tracce relative a frame in userspace:
```bash
offwaketime -U
```

Al contrario, specificando l'opzione `-K`, verranno mostrate solo le tracce relative a frame in kernelspace:
```bash
offwaketime -K
```

Infine, specificando l'opzione `-d`, verranno inclusi entrambi i tipi di traccia, ma saranno separate da una traccia speciale dal nome di `--`:
```bash
offwaketime -d
```

### Limite del numero di tracce

La struttura dati utilizzata internamente da `offwaketime` ha un limite superiore al numero di tracce contenute negli eventi profilati[^bpfstacktrace].

Se non viene specificato nulla, ciascun evento potrà contenere fino a 16384 tracce:
```bash
offwaketime
```

È possibile aumentare o diminuire il numero di tracce specificando l'opzione `--stack-storage-size` seguita dal numero di tracce desiderato:
```bash
offwaketime --stack-storage-size 3
```

[^bpfstacktrace]: https://github.com/iovisor/bcc/blob/master/docs/reference_guide.md#5-bpf_stack_trace

### Creazione di un FlameGraph

Per generare un flame graph vettoriale da una chiamata ad `offwaketime`, è necessario:
1. selezionare l'output machine-friendly su `offwaketime` usando l'opzione `-f`
2. *pipe*-are l'output allo script Perl `flamegraph.pl` precendentemente clonato da GitHub, specificando l'opzione `--color='chain'` per colorare appropriatamente le tracce[^color]
3. *pipe*-are l'output ad un file Scalable Vector Graphics (.svg)
```bash
offwaketime -f | flamegraph --color='chain' | tee "offwaketime.svg" | display
```

[^color]: https://www.brendangregg.com/FlameGraphs/offcpuflamegraphs.html#Chain

## Esempio

Innanzitutto, verifichiamo la versione del kernel attualmente in esecuzione:
```bash
uname -a
```
```
Linux nitro 6.13.4-arch1-1 #1 SMP PREEMPT_DYNAMIC Sat, 22 Feb 2025 00:37:05 +0000 x86_64 GNU/Linux
```

Si vuole effettuare la profilazione di un piccolo programma Rust sincrono che crea un file, vi scrive all'interno, e chiude il relativo file descriptor, aspettando di vedere tracce delle syscall effettuate a tale scopo.

Il programma Rust realizzato è il seguente:
```rust
use std::fs::File;
use std::io::Write;
use std::thread::sleep;
use std::time::Duration;

fn main() {
    let mut file = File::create("example.txt")
        .expect("File creation failed");
    
    let _ = file.write(b"hello world")
        .expect("File write failed");
    
    // unnecessary; explicitly closes the file descriptor for clarity
    drop(file);
    
    // wait indefinitely so that bcc may collect debug symbols
    sleep(Duration::MAX)
}
```

Eseguiamo il programma con un debugger, inserendo un breakpoint all'inizio della funzione `main`, in modo che non venga effettuato nulla prima che `offwaketime` sia in ascolto.

Con il programma in pausa, avviamo un terminale come superutente:
```bash
sudo -i
```

Da lì, usiamo `ps` per identificare il processo del programma che abbiamo avviato:
```bash
ps -m -L -u steffo
```
```
PID   LWP   TTY TIME     CMD
...
22353       - ? 00:00:00 wakedemo
-     22353 -   00:00:00 -
...
```

Osserviamo che ha il process id `22353`, e utilizza un singolo thread con il thread id `22353`.

Possiamo quindi avviare `offwaketime` in modo che monitori il processo per 30 secondi e generi un flamegraph:
```bash
offwaketime 30 -p 22353 -f | flamegraph --color='chain' > /root/wakedemo.svg
```

Ora che `offwaketime` è in ascolto, effettuiamo step di una linea di codice alla volta fino a quando il programma non raggiunge l'ultima riga.

Una volta fatto, senza chiudere il nostro programma[^symbols], aspettiamo che `offwaketime` termini la profilazione.

Alleghiamo poi l'immagine prodotta a questo documento:
```bash
mv /root/wakedemo.svg ~/wakedemo.svg
chown steffo: ~/wakedemo.svg
```

<svg version="1.1" width="1200" height="406" onload="init(evt)" viewBox="0 0 1200 406" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<!-- Flame graph stack visualization. See https://github.com/brendangregg/FlameGraph for latest version, and http://www.brendangregg.com/flamegraphs.html for examples. -->

<!-- NOTES: -->

<defs>

<linearGradient id="background" y1="0" y2="1" x1="0" x2="0" >

<stop stop-color="#eeeeee" offset="5%" />

<stop stop-color="#e0e0ff" offset="95%" />

</linearGradient>

</defs>

<style type="text/css">

text { font-family:Verdana; font-size:12px; fill:rgb(0,0,0); }

#search, #ignorecase { opacity:0.1; cursor:pointer; }

#search:hover, #search.show, #ignorecase:hover, #ignorecase.show { opacity:1; }

#subtitle { text-anchor:middle; font-color:rgb(160,160,160); }

#title { text-anchor:middle; font-size:17px}

#unzoom { cursor:pointer; }

#frames > *:hover { stroke:black; stroke-width:0.5; cursor:pointer; }

.hide { display:none; }

.parent { opacity:0.5; }

</style>

<script type="text/ecmascript">

<![CDATA[

"use strict";

var details, searchbtn, unzoombtn, matchedtxt, svg, searching, currentSearchTerm, ignorecase, ignorecaseBtn;

function init(evt) {

details = document.getElementById("details").firstChild;

searchbtn = document.getElementById("search");

ignorecaseBtn = document.getElementById("ignorecase");

unzoombtn = document.getElementById("unzoom");

matchedtxt = document.getElementById("matched");

svg = document.getElementsByTagName("svg")[0];

searching = 0;

currentSearchTerm = null;

  

// use GET parameters to restore a flamegraphs state.

var params = get_params();

if (params.x && params.y)

zoom(find_group(document.querySelector('[x="' + params.x + '"][y="' + params.y + '"]')));

if (params.s) search(params.s);

}

  

// event listeners

window.addEventListener("click", function(e) {

var target = find_group(e.target);

if (target) {

if (target.nodeName == "a") {

if (e.ctrlKey === false) return;

e.preventDefault();

}

if (target.classList.contains("parent")) unzoom(true);

zoom(target);

if (!document.querySelector('.parent')) {

// we have basically done a clearzoom so clear the url

var params = get_params();

if (params.x) delete params.x;

if (params.y) delete params.y;

history.replaceState(null, null, parse_params(params));

unzoombtn.classList.add("hide");

return;

}

  

// set parameters for zoom state

var el = target.querySelector("rect");

if (el && el.attributes && el.attributes.y && el.attributes._orig_x) {

var params = get_params()

params.x = el.attributes._orig_x.value;

params.y = el.attributes.y.value;

history.replaceState(null, null, parse_params(params));

}

}

else if (e.target.id == "unzoom") clearzoom();

else if (e.target.id == "search") search_prompt();

else if (e.target.id == "ignorecase") toggle_ignorecase();

}, false)

  

// mouse-over for info

// show

window.addEventListener("mouseover", function(e) {

var target = find_group(e.target);

if (target) details.nodeValue = "Function: " + g_to_text(target);

}, false)

  

// clear

window.addEventListener("mouseout", function(e) {

var target = find_group(e.target);

if (target) details.nodeValue = ' ';

}, false)

  

// ctrl-F for search

// ctrl-I to toggle case-sensitive search

window.addEventListener("keydown",function (e) {

if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {

e.preventDefault();

search_prompt();

}

else if (e.ctrlKey && e.keyCode === 73) {

e.preventDefault();

toggle_ignorecase();

}

}, false)

  

// functions

function get_params() {

var params = {};

var paramsarr = window.location.search.substr(1).split('&');

for (var i = 0; i < paramsarr.length; ++i) {

var tmp = paramsarr[i].split("=");

if (!tmp[0] || !tmp[1]) continue;

params[tmp[0]] = decodeURIComponent(tmp[1]);

}

return params;

}

function parse_params(params) {

var uri = "?";

for (var key in params) {

uri += key + '=' + encodeURIComponent(params[key]) + '&';

}

if (uri.slice(-1) == "&")

uri = uri.substring(0, uri.length - 1);

if (uri == '?')

uri = window.location.href.split('?')[0];

return uri;

}

function find_child(node, selector) {

var children = node.querySelectorAll(selector);

if (children.length) return children[0];

}

function find_group(node) {

var parent = node.parentElement;

if (!parent) return;

if (parent.id == "frames") return node;

return find_group(parent);

}

function orig_save(e, attr, val) {

if (e.attributes["_orig_" + attr] != undefined) return;

if (e.attributes[attr] == undefined) return;

if (val == undefined) val = e.attributes[attr].value;

e.setAttribute("_orig_" + attr, val);

}

function orig_load(e, attr) {

if (e.attributes["_orig_"+attr] == undefined) return;

e.attributes[attr].value = e.attributes["_orig_" + attr].value;

e.removeAttribute("_orig_"+attr);

}

function g_to_text(e) {

var text = find_child(e, "title").firstChild.nodeValue;

return (text)

}

function g_to_func(e) {

var func = g_to_text(e);

// if there's any manipulation we want to do to the function

// name before it's searched, do it here before returning.

return (func);

}

function update_text(e) {

var r = find_child(e, "rect");

var t = find_child(e, "text");

var w = parseFloat(r.attributes.width.value) -3;

var txt = find_child(e, "title").textContent.replace(/\([^(]*\)$/,"");

t.attributes.x.value = parseFloat(r.attributes.x.value) + 3;

  

// Smaller than this size won't fit anything

if (w < 2 * 12 * 0.59) {

t.textContent = "";

return;

}

  

t.textContent = txt;

var sl = t.getSubStringLength(0, txt.length);

// check if only whitespace or if we can fit the entire string into width w

if (/^ *$/.test(txt) || sl < w)

return;

  

// this isn't perfect, but gives a good starting point

// and avoids calling getSubStringLength too often

var start = Math.floor((w/sl) * txt.length);

for (var x = start; x > 0; x = x-2) {

if (t.getSubStringLength(0, x + 2) <= w) {

t.textContent = txt.substring(0, x) + "..";

return;

}

}

t.textContent = "";

}

  

// zoom

function zoom_reset(e) {

if (e.attributes != undefined) {

orig_load(e, "x");

orig_load(e, "width");

}

if (e.childNodes == undefined) return;

for (var i = 0, c = e.childNodes; i < c.length; i++) {

zoom_reset(c[i]);

}

}

function zoom_child(e, x, ratio) {

if (e.attributes != undefined) {

if (e.attributes.x != undefined) {

orig_save(e, "x");

e.attributes.x.value = (parseFloat(e.attributes.x.value) - x - 10) * ratio + 10;

if (e.tagName == "text")

e.attributes.x.value = find_child(e.parentNode, "rect[x]").attributes.x.value + 3;

}

if (e.attributes.width != undefined) {

orig_save(e, "width");

e.attributes.width.value = parseFloat(e.attributes.width.value) * ratio;

}

}

  

if (e.childNodes == undefined) return;

for (var i = 0, c = e.childNodes; i < c.length; i++) {

zoom_child(c[i], x - 10, ratio);

}

}

function zoom_parent(e) {

if (e.attributes) {

if (e.attributes.x != undefined) {

orig_save(e, "x");

e.attributes.x.value = 10;

}

if (e.attributes.width != undefined) {

orig_save(e, "width");

e.attributes.width.value = parseInt(svg.width.baseVal.value) - (10 * 2);

}

}

if (e.childNodes == undefined) return;

for (var i = 0, c = e.childNodes; i < c.length; i++) {

zoom_parent(c[i]);

}

}

function zoom(node) {

var attr = find_child(node, "rect").attributes;

var width = parseFloat(attr.width.value);

var xmin = parseFloat(attr.x.value);

var xmax = parseFloat(xmin + width);

var ymin = parseFloat(attr.y.value);

var ratio = (svg.width.baseVal.value - 2 * 10) / width;

  

// XXX: Workaround for JavaScript float issues (fix me)

var fudge = 0.0001;

  

unzoombtn.classList.remove("hide");

  

var el = document.getElementById("frames").children;

for (var i = 0; i < el.length; i++) {

var e = el[i];

var a = find_child(e, "rect").attributes;

var ex = parseFloat(a.x.value);

var ew = parseFloat(a.width.value);

var upstack;

// Is it an ancestor

if (0 == 0) {

upstack = parseFloat(a.y.value) > ymin;

} else {

upstack = parseFloat(a.y.value) < ymin;

}

if (upstack) {

// Direct ancestor

if (ex <= xmin && (ex+ew+fudge) >= xmax) {

e.classList.add("parent");

zoom_parent(e);

update_text(e);

}

// not in current path

else

e.classList.add("hide");

}

// Children maybe

else {

// no common path

if (ex < xmin || ex + fudge >= xmax) {

e.classList.add("hide");

}

else {

zoom_child(e, xmin, ratio);

update_text(e);

}

}

}

search();

}

function unzoom(dont_update_text) {

unzoombtn.classList.add("hide");

var el = document.getElementById("frames").children;

for(var i = 0; i < el.length; i++) {

el[i].classList.remove("parent");

el[i].classList.remove("hide");

zoom_reset(el[i]);

if(!dont_update_text) update_text(el[i]);

}

search();

}

function clearzoom() {

unzoom();

  

// remove zoom state

var params = get_params();

if (params.x) delete params.x;

if (params.y) delete params.y;

history.replaceState(null, null, parse_params(params));

}

  

// search

function toggle_ignorecase() {

ignorecase = !ignorecase;

if (ignorecase) {

ignorecaseBtn.classList.add("show");

} else {

ignorecaseBtn.classList.remove("show");

}

reset_search();

search();

}

function reset_search() {

var el = document.querySelectorAll("#frames rect");

for (var i = 0; i < el.length; i++) {

orig_load(el[i], "fill")

}

var params = get_params();

delete params.s;

history.replaceState(null, null, parse_params(params));

}

function search_prompt() {

if (!searching) {

var term = prompt("Enter a search term (regexp " +

"allowed, eg: ^ext4_)"

+ (ignorecase ? ", ignoring case" : "")

+ "\nPress Ctrl-i to toggle case sensitivity", "");

if (term != null) search(term);

} else {

reset_search();

searching = 0;

currentSearchTerm = null;

searchbtn.classList.remove("show");

searchbtn.firstChild.nodeValue = "Search"

matchedtxt.classList.add("hide");

matchedtxt.firstChild.nodeValue = ""

}

}

function search(term) {

if (term) currentSearchTerm = term;

if (currentSearchTerm === null) return;

  

var re = new RegExp(currentSearchTerm, ignorecase ? 'i' : '');

var el = document.getElementById("frames").children;

var matches = new Object();

var maxwidth = 0;

for (var i = 0; i < el.length; i++) {

var e = el[i];

var func = g_to_func(e);

var rect = find_child(e, "rect");

if (func == null || rect == null)

continue;

  

// Save max width. Only works as we have a root frame

var w = parseFloat(rect.attributes.width.value);

if (w > maxwidth)

maxwidth = w;

  

if (func.match(re)) {

// highlight

var x = parseFloat(rect.attributes.x.value);

orig_save(rect, "fill");

rect.attributes.fill.value = "rgb(230,0,230)";

  

// remember matches

if (matches[x] == undefined) {

matches[x] = w;

} else {

if (w > matches[x]) {

// overwrite with parent

matches[x] = w;

}

}

searching = 1;

}

}

if (!searching)

return;

var params = get_params();

params.s = currentSearchTerm;

history.replaceState(null, null, parse_params(params));

  

searchbtn.classList.add("show");

searchbtn.firstChild.nodeValue = "Reset Search";

  

// calculate percent matched, excluding vertical overlap

var count = 0;

var lastx = -1;

var lastw = 0;

var keys = Array();

for (k in matches) {

if (matches.hasOwnProperty(k))

keys.push(k);

}

// sort the matched frames by their x location

// ascending, then width descending

keys.sort(function(a, b){

return a - b;

});

// Step through frames saving only the biggest bottom-up frames

// thanks to the sort order. This relies on the tree property

// where children are always smaller than their parents.

var fudge = 0.0001; // JavaScript floating point

for (var k in keys) {

var x = parseFloat(keys[k]);

var w = matches[keys[k]];

if (x >= lastx + lastw - fudge) {

count += w;

lastx = x;

lastw = w;

}

}

// display matched percent

matchedtxt.classList.remove("hide");

var pct = 100 * count / maxwidth;

if (pct != 100) pct = pct.toFixed(1)

matchedtxt.firstChild.nodeValue = "Matched: " + pct + "%";

}

]]>

</script>

<rect x="0.0" y="0" width="1200.0" height="406.0" fill="url(#background)" />

<text id="title" x="600.00" y="24" >Flame Graph</text>

<text id="details" x="10.00" y="389" > </text>

<text id="unzoom" x="10.00" y="24" class="hide">Reset Zoom</text>

<text id="search" x="1090.00" y="24" >Search</text>

<text id="ignorecase" x="1174.00" y="24" >ic</text>

<text id="matched" x="1090.00" y="389" > </text>

<g id="frames">

<g >

<title>wakedemo (14,617,328 samples, 100.00%)</title><rect x="10.0" y="341" width="1180.0" height="15.0" fill="rgb(139,139,254)" rx="2" ry="2" />

<text x="13.00" y="351.5" >wakedemo</text>

</g>

<g >

<title>[unknown] (10,205,062 samples, 69.81%)</title><rect x="10.0" y="53" width="823.8" height="15.0" fill="rgb(91,202,202)" rx="2" ry="2" />

<text x="13.00" y="63.5" >[unknown]</text>

</g>

<g >

<title>ptrace_stop (4,412,246 samples, 30.19%)</title><rect x="833.8" y="213" width="356.2" height="15.0" fill="rgb(121,121,239)" rx="2" ry="2" />

<text x="836.81" y="223.5" >ptrace_stop</text>

</g>

<g >

<title>irqentry_exit_to_user_mode (10,205,062 samples, 69.81%)</title><rect x="10.0" y="245" width="823.8" height="15.0" fill="rgb(139,139,254)" rx="2" ry="2" />

<text x="13.00" y="255.5" >irqentry_exit_to_user_mode</text>

</g>

<g >

<title>entry_SYSCALL_64_after_hwframe (10,205,062 samples, 69.81%)</title><rect x="10.0" y="69" width="823.8" height="15.0" fill="rgb(101,212,212)" rx="2" ry="2" />

<text x="13.00" y="79.5" >entry_SYSCALL_64_after_hwframe</text>

</g>

<g >

<title>ptrace_request (4,412,246 samples, 30.19%)</title><rect x="833.8" y="149" width="356.2" height="15.0" fill="rgb(81,194,194)" rx="2" ry="2" />

<text x="836.81" y="159.5" >ptrace_request</text>

</g>

<g >

<title>get_signal (10,205,062 samples, 69.81%)</title><rect x="10.0" y="213" width="823.8" height="15.0" fill="rgb(87,87,211)" rx="2" ry="2" />

<text x="13.00" y="223.5" >get_signal</text>

</g>

<g >

<title>__schedule (4,412,246 samples, 30.19%)</title><rect x="833.8" y="181" width="356.2" height="15.0" fill="rgb(107,107,227)" rx="2" ry="2" />

<text x="836.81" y="191.5" >__schedule</text>

</g>

<g >

<title>arch_ptrace (4,412,246 samples, 30.19%)</title><rect x="833.8" y="133" width="356.2" height="15.0" fill="rgb(75,188,188)" rx="2" ry="2" />

<text x="836.81" y="143.5" >arch_ptrace</text>

</g>

<g >

<title>arch_ptrace (10,205,062 samples, 69.81%)</title><rect x="10.0" y="117" width="823.8" height="15.0" fill="rgb(75,188,188)" rx="2" ry="2" />

<text x="13.00" y="127.5" >arch_ptrace</text>

</g>

<g >

<title>lldb-server (4,412,246 samples, 30.19%)</title><rect x="833.8" y="53" width="356.2" height="15.0" fill="rgb(97,208,208)" rx="2" ry="2" />

<text x="836.81" y="63.5" >lldb-server</text>

</g>

<g >

<title>do_syscall_64 (10,205,062 samples, 69.81%)</title><rect x="10.0" y="85" width="823.8" height="15.0" fill="rgb(90,201,201)" rx="2" ry="2" />

<text x="13.00" y="95.5" >do_syscall_64</text>

</g>

<g >

<title>asm_exc_debug (10,205,062 samples, 69.81%)</title><rect x="10.0" y="277" width="823.8" height="15.0" fill="rgb(125,125,242)" rx="2" ry="2" />

<text x="13.00" y="287.5" >asm_exc_debug</text>

</g>

<g >

<title>lldb-server (10,205,062 samples, 69.81%)</title><rect x="10.0" y="37" width="823.8" height="15.0" fill="rgb(97,208,208)" rx="2" ry="2" />

<text x="13.00" y="47.5" >lldb-server</text>

</g>

<g >

<title>__x64_sys_ptrace (4,412,246 samples, 30.19%)</title><rect x="833.8" y="117" width="356.2" height="15.0" fill="rgb(83,195,195)" rx="2" ry="2" />

<text x="836.81" y="127.5" >__x64_sys_ptrace</text>

</g>

<g >

<title>arch_do_signal_or_restart (4,412,246 samples, 30.19%)</title><rect x="833.8" y="245" width="356.2" height="15.0" fill="rgb(137,137,252)" rx="2" ry="2" />

<text x="836.81" y="255.5" >arch_do_signal_or_restart</text>

</g>

<g >

<title>get_signal (4,412,246 samples, 30.19%)</title><rect x="833.8" y="229" width="356.2" height="15.0" fill="rgb(87,87,211)" rx="2" ry="2" />

<text x="836.81" y="239.5" >get_signal</text>

</g>

<g >

<title>exc_debug_user (10,205,062 samples, 69.81%)</title><rect x="10.0" y="261" width="823.8" height="15.0" fill="rgb(108,108,228)" rx="2" ry="2" />

<text x="13.00" y="271.5" >exc_debug_user</text>

</g>

<g >

<title>__x64_sys_ptrace (10,205,062 samples, 69.81%)</title><rect x="10.0" y="101" width="823.8" height="15.0" fill="rgb(83,195,195)" rx="2" ry="2" />

<text x="13.00" y="111.5" >__x64_sys_ptrace</text>

</g>

<g >

<title>_start (14,617,328 samples, 100.00%)</title><rect x="10.0" y="325" width="1180.0" height="15.0" fill="rgb(128,128,245)" rx="2" ry="2" />

<text x="13.00" y="335.5" >_start</text>

</g>

<g >

<title>ptrace_stop (10,205,062 samples, 69.81%)</title><rect x="10.0" y="197" width="823.8" height="15.0" fill="rgb(121,121,239)" rx="2" ry="2" />

<text x="13.00" y="207.5" >ptrace_stop</text>

</g>

<g >

<title>irqentry_exit_to_user_mode (4,412,246 samples, 30.19%)</title><rect x="833.8" y="261" width="356.2" height="15.0" fill="rgb(139,139,254)" rx="2" ry="2" />

<text x="836.81" y="271.5" >irqentry_exit_to_user_mode</text>

</g>

<g >

<title>-- (4,412,246 samples, 30.19%)</title><rect x="833.8" y="165" width="356.2" height="15.0" fill="rgb(160,160,160)" rx="2" ry="2" />

<text x="836.81" y="175.5" >--</text>

</g>

<g >

<title>all (14,617,328 samples, 100%)</title><rect x="10.0" y="357" width="1180.0" height="15.0" fill="rgb(90,90,213)" rx="2" ry="2" />

<text x="13.00" y="367.5" ></text>

</g>

<g >

<title>std::rt::lang_start::h06309630d8833d25 (14,617,328 samples, 100.00%)</title><rect x="10.0" y="293" width="1180.0" height="15.0" fill="rgb(81,81,206)" rx="2" ry="2" />

<text x="13.00" y="303.5" >std::rt::lang_start::h06309630d8833d25</text>

</g>

<g >

<title>entry_SYSCALL_64_after_hwframe (4,412,246 samples, 30.19%)</title><rect x="833.8" y="85" width="356.2" height="15.0" fill="rgb(101,212,212)" rx="2" ry="2" />

<text x="836.81" y="95.5" >entry_SYSCALL_64_after_hwframe</text>

</g>

<g >

<title>schedule (10,205,062 samples, 69.81%)</title><rect x="10.0" y="181" width="823.8" height="15.0" fill="rgb(139,139,254)" rx="2" ry="2" />

<text x="13.00" y="191.5" >schedule</text>

</g>

<g >

<title>__schedule (10,205,062 samples, 69.81%)</title><rect x="10.0" y="165" width="823.8" height="15.0" fill="rgb(107,107,227)" rx="2" ry="2" />

<text x="13.00" y="175.5" >__schedule</text>

</g>

<g >

<title>__libc_start_main (14,617,328 samples, 100.00%)</title><rect x="10.0" y="309" width="1180.0" height="15.0" fill="rgb(117,117,236)" rx="2" ry="2" />

<text x="13.00" y="319.5" >__libc_start_main</text>

</g>

<g >

<title>schedule (4,412,246 samples, 30.19%)</title><rect x="833.8" y="197" width="356.2" height="15.0" fill="rgb(139,139,254)" rx="2" ry="2" />

<text x="836.81" y="207.5" >schedule</text>

</g>

<g >

<title>ptrace_request (10,205,062 samples, 69.81%)</title><rect x="10.0" y="133" width="823.8" height="15.0" fill="rgb(81,194,194)" rx="2" ry="2" />

<text x="13.00" y="143.5" >ptrace_request</text>

</g>

<g >

<title>asm_exc_int3 (4,412,246 samples, 30.19%)</title><rect x="833.8" y="277" width="356.2" height="15.0" fill="rgb(107,107,227)" rx="2" ry="2" />

<text x="836.81" y="287.5" >asm_exc_int3</text>

</g>

<g >

<title>do_syscall_64 (4,412,246 samples, 30.19%)</title><rect x="833.8" y="101" width="356.2" height="15.0" fill="rgb(90,201,201)" rx="2" ry="2" />

<text x="836.81" y="111.5" >do_syscall_64</text>

</g>

<g >

<title>[unknown] (4,412,246 samples, 30.19%)</title><rect x="833.8" y="69" width="356.2" height="15.0" fill="rgb(91,202,202)" rx="2" ry="2" />

<text x="836.81" y="79.5" >[unknown]</text>

</g>

<g >

<title>-- (10,205,062 samples, 69.81%)</title><rect x="10.0" y="149" width="823.8" height="15.0" fill="rgb(160,160,160)" rx="2" ry="2" />

<text x="13.00" y="159.5" >--</text>

</g>

<g >

<title>arch_do_signal_or_restart (10,205,062 samples, 69.81%)</title><rect x="10.0" y="229" width="823.8" height="15.0" fill="rgb(137,137,252)" rx="2" ry="2" />

<text x="13.00" y="239.5" >arch_do_signal_or_restart</text>

</g>

</g>

</svg>

> [!Note] 
> L'immagine dovrebbe essere interattiva; se non è possibile interagirvi, si consiglia di aprirla in un browser come pagina.

Infine, analizziamo l'immagine.

Guardando la parte blu dal basso verso l'alto, possiamo osservare lo stack del nostro programma nei momenti in cui si è verificata un'attesa.

In ordine:
1. `wakedemo`, la chiamata di avvio al nostro programma
2. `_start`, l'entrypoint del programma
3. `__libc_start_main`, l'inizializzazione di glibc[^libcstart]
4. `std::rt::lang_start::_`, l'entrypoint del runtime di Rust[^rustlangstart] e l'ultima funzione dello stack in user space

Poi, c'è una divisione, che indica che nei momenti di attesa per attività off-CPU lo stack è stato diverso:
1. `asm_exc_debug`, seguito da `exc_debug_user`, era presente 69.81% del tempo; è l'handler della `DEBUG` exception del processore, innescata dal raggiungimento di un breakpoint
2. `asm_exc_int3` era presente 30.19% del tempo; è l'handler della `INT3` exception del processore, innescata anch'essa dal raggiungimento di un breakpoint

Entrambi gli stack poi chiamano entrambi:
1. `irqentry_exit_to_user_mode`, che configura il kernel per delegare la gestione di un interrupt[^irqexit]
2. `arch_do_signal_or_restart`, che verifica che ci sia un segnale da inviare a un processo prima di provare a consegnarlo[^signalrestart]
3. `get_signal`, che controlla quale segnale deve essere inviato[^getsignal], determinando `SIGTRAP`[^dojobctl]
4. `ptrace_stop`, che mette in pausa un processo impostandogli lo stato `TASK_TRACED`[^ptracestop]
5. `schedule`, corrispondente al lavoro dello scheduler[^schedule]
6. `__schedule`,  corrispondente a una iterazione dello scheduler[^uschedule]

Il separatore in grigio `--` denota che lo stack del programma ha termine lì.

Possiamo capire quindi che tutti gli eventi off-CPU che sono avvenuti sono le interruzioni avvenute in corrispondenza al nostro stepping del programma tramite il debugger.

Guardiamo ora cos'ha causato il risveglio del nostro programma; lo stack del processo risvegliante è parte in azzurro in cima al flame graph, con le tracce dei frame elencate dall'alto verso il basso.

Questo significa che, in entrambi i casi, il processo del nostro programma è stato risvegliato dal seguente stack:
1. `lldb-server`, il nostro debugger in user space
2. `[unknown]`, probabilmente una funzione di LLDB che effettua una syscall `ptrace`
3. `entry_SYSCALL_64_after_hwframe`, l'entrypoint in kernel space della syscall
4. `do_syscall_64`, il gestore delle syscall
5. `__x64_sys_ptrace`, il gestore della syscall `ptrace` per l'architettura `x86_64`
6. `arch_ptrace`, il gestore della syscall `ptrace` agnostico all'architettura del processore
7. `ptrace_request`, che elabora la syscall, probabilmente `PTRACE_SINGLESTEP`, rimuovendo lo stato `TASK_TRACED`[^ptracerequest]

Capiamo quindi che la causa del risveglio è stata quindi una richiesta del nostro debugger di far continuare il nostro processo.

[^libcstart]: https://refspecs.linuxfoundation.org/LSB_1.3.0/gLSB/gLSB/baselib---libc-start-main-.html
[^rustlangstart]: https://github.com/rust-lang/rust/blob/2010bba8868fa714bb4b07be463a8923b26d44db/library/std/src/rt.rs#L192-L204
[^irqexit]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/arch/arm64/kernel/entry-common.c#L122
[^signalrestart]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/arch/x86/kernel/signal.c#L333
[^getsignal]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/kernel/signal.c#L2801
[^dojobctl]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/kernel/signal.c#L2670
[^ptracestop]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/kernel/signal.c#L2351
[^schedule]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/kernel/sched/core.c#L6847
[^uschedule]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/kernel/sched/core.c#L6645
[^ptracerequest]: https://github.com/torvalds/linux/blob/48a5eed9ad584315c30ed35204510536235ce402/kernel/ptrace.c#L1011

## Struttura interna

`offwaketime` consiste in:
- uno script [Python](https://www.python.org/) 
	- che fa uso del [package `bcc`](https://github.com/iovisor/bcc/tree/master/src/python/bcc)  
	- per generare e poi compilare un programma [eBPF](https://ebpf.io/)
		- contenente strutture dati per immagazzinare tracce
		- e contenente funzioni che scrivono sulle strutture dati la traccia del frame attuale
	- che usa [kprobe](https://www.kernel.org/doc/html/latest/trace/kprobetrace.html#) per registrare dei callback alle funzioni del programma generato
	- per poi attendere fino al termine del profiling
	- e infine stampare nel formato desiderato i contenuti delle strutture dati del programma eBPF
