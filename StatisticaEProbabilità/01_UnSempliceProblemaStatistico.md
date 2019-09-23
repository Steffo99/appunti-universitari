# Un'introduzione a R

> ![](https://i.imgur.com/1CBjvkf.jpg)

## Caricare file su R

Innanzitutto, carichiamo il file `.csv` su R con la funzione `read.csv2(filename)`:

```r
# Numeri con il punto, separato da virgola
X = read.csv("01_Dati.csv")
# Numeri con la virgola, separato da punto e virgola
X = read.csv2("01_Dati.csv")
``` 

In questo modo, avremo creato una nuova tabella chiamata `X` con all'interno tutti i valori.

## Stampare testo

Possiamo stampare testo con la funzione `cat(string)`:

```r
cat("Hello world!")
```

Tutti gli argomenti saranno automaticamente concatenati e convertiti appropriatamente in stringhe:

```r
cat("2+5=", 2+5);
```

## Operazioni sulle colonne

Possiamo selezionare una colonna con l'operatore `$`:

```r
# Seleziona la colonna A della tabella X
X$A
```

Aggiungiamo una nuova colonna contenente la differenza tra ogni valore di X$A e X$B:

```r
X$D = X$A - X$B
```

## Riassunto di una tabella

Possiamo visualizzare velocemente informazioni su una tabella con la funzione `summary(table)`:

```r
summary(X)
```

## Deviazione standard

Possiamo calcolare la deviazione standard su una colonna con la funzione `SD(column)`:

```r
# Trova lo scarto quadratico medio/deviazione standard dei valori nella colonna A di X
SD(X$A)

# Trova lo scarto quadratico medio/deviazione standard dei valori nella colonna B di X
SD(X$B)

# Trova lo scarto quadratico medio/deviazione standard dei valori della differenza di X
SD(X$D)
```

## Generazione di `.pdf`

Possiamo generare un `.pdf` con tutti i dati del workspace con la funzione `pdf(filename)`:

```r
pdf("01_Risultato.pdf")
```

## Creazione di grafici

TODO: funzioni `hist()`, `boxplot()`, `t.test()`