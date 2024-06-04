# Compressione

_Comprimere_ un file significa **ridurne le dimensioni** senza modificarne il significato.

## Categorie

### Compressione lossless

Nella _compressione lossless_, i dati possono essere decompressi riottenendo una copia identica dell'originale.

> Immaginiamo un file che contiene solo le lettere `a, b, c, d, e, f`.
>
> Le lettere compaiono con questa frequenza:
> |a|b|c|d|e|f|
> |45%|13%|12%|16%|9%|5%|
>
> Possiamo codificare le lettere nel seguente modo:
> |a|b|c|d|e|f|
> |`0b0`|`0b100`|`0b101`|`0b111`|`0b1100`|`0b1101`|
>
> Scrivere `abacadae` richiederebbe 64 bits con la codifica ASCII estesa, ma in questo modo riusciamo a scriverlo con soli 17 bits!

Le codifiche di un file compresso devono rispettare la proprietà del _Codice a prefisso_, che dice che **nessun codice deve essere il prefisso di un altro codice**; altrimenti, si avrebbero ambiguità nella decodifica.

> a = `1`
> b = `11`
>
> `111` è `ab`, `ba` oppure `aaa`?

Creiamo allora un _albero di decodifica_: un **albero binario** che, leggendo uno ad uno i bit codificati, ci permette di arrivare al **valore del codice presente sulle foglie** dell'albero.

Gli alberi di decodifica sono sempre **completi**.

> Un albero di decodifica incompleto sarebbe non ottimizzato!

#### Esempi

- .png
- .flac
- .zip
- ...

### Compressione lossy

Nella _compressione lossy_, alcuni dati [solitamente](http://needsmorejpeg.com/) irrilevanti vengono perduti: non si può, dunque, ricostruire l'originale.

#### Esempi

- .jpeg
- .mp3
- ...
