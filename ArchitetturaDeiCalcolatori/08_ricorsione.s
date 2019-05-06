# Che bello! Adoro l'assembly!
# Le probabilità che questo programma non funzioni sono altissime.
.global _start

# La sezione .data contiene i dati del programma
.section .data

# La sezione .rodata contiene i dati del programma in sola lettura
.section .rodata

# La sezione .text contiene il testo del programma
.section .text

    # Creo una label _start che funzionerà da entrypoint
    _start: 
        li  a0, 5
        jal	fact
        
    # fact(numero)
    fact:
        