# La sintassi di un make file è
# target: prerequisito prerequisito prerequisito ...
# 	comando_da_eseguire
# 	comando_da_eseguire
# 	...
#
# Dove target è il nome del file che verrà creato come risultato,
# prerequisito sono i file che se cambiati daranno un risultato diverso
# e comando_da_eseguire dei comandi /bin/sh che verranno eseguiti per generare il file risultato

# Rigenera l'intero progetto: dipende da main.o e banana.o, che verranno automaticamente rigenerati se i loro prerequisiti sono stati cambiati dalla loro ultima generazione
project: main.o banana.o
	g++ -o project main.o banana.o

# Se main.cpp è cambiato, rigenera main.o con g++ nel caso sia richiesto da un qualche target
main.o: main.cpp
	g++ -c main.cpp

# Se banana.cpp o banana.h sono stati cambiati, rigenera banana.o nel caso sia richiesto da un qualche target 
banana.o: banana.cpp banana.h
	g++ -c banana.cpp
	g++ -c banana.h
	echo "Banana!"

# Possiamo definire variabili proprio come in sh
FLAG = -Wall
projectbandiera: main.o banana.o
	g++ $(FLAG) -o projectbandiera main.o banana.o

# E' anche possibile che i comandi siano impliciti:
dipendenza.o: dipendenza.h  # Il .cpp e i comandi per trasformarlo in file oggetto non sono necessari

# I .PHONY target sono target che non sono propriamente file, ma azioni che possono essere eseguite sulla directory del progetto.

.PHONY: clean

# E' possibile includere sotto-makefile con la direttiva include
include AltroMakefile

clean:
	rm -f *.o
