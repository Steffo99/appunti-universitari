# Che bello! Adoro l'assembly!
# Questo programma funziona, è verificato!
.global _start

# La sezione .data contiene i dati del programma
.section .data

    # Creo una variabile con etichetta "ciao"
    ciao: .string "0\n\0"

# La sezione .rodata contiene i dati del programma in sola lettura
.section .rodata

# La sezione .text contiene il testo del programma
.section .text

    # Creo una label _start che funzionerà da entrypoint
    _start: 
        li      t1, 10                      # Voglio ripetere il ciclo 10 volte
        li      a7, 64                      # PRINT(stream, indirizzo, numerobytes) è la syscall 64
        li      a0, 0                       # stream è il primo argomento: vogliamo scrivere su stdout (0)
        la      a1, ciao                    # indirizzo è il secondo argomento: partiamo dall'etichetta ciao
        li      a2, 2                       # numerobytes è il terzo argomento: vogliamo stampare 2 bytes
    print:
        ecall                               # PRINT(a0, a1, a2)
        lbu      t0, 0(a1)                  # Carica il byte con il 0
        addi     t0, t0, 1                      # Aggiungici 1
        sb		 t0, 0(a1)                  # Ricaricalo in memoria
        addi     t1, t1, -1                      # Togli 1 dal numero di cicli rimasti
        bne		 t1, zero, print            # Se rimangono dei cicli, torna indietro e falli!
    end:
        li      a7, 93                      # Tutti i programmi terminano chiamando la syscall 93, EXIT()
        ecall                               # EXIT()
