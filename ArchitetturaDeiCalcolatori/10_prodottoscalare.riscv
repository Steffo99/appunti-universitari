# Che bello! Adoro l'assembly!
# As usual non ho modo di testarlo
# Provarlo a casa?
.global _start

# La sezione .data contiene i dati del programma
.section .data

    primo: .word 1, 2, 3, 4, 5
    secondo: .word 1, 2, 3, 4, 5

# La sezione .rodata contiene i dati del programma in sola lettura
.section .rodata

# La sezione .text contiene il testo del programma
.section .text

    # s0: primo[s0]
    # s1: secondo[s0]
    # s2: monomio
    # s3: somma
    # s4: indice
    # s5: dimensione array

    _start:
        li s2, 0
        li s3, 0
        li s4, 0
        li s5, 5

    somma:
        # Non sono sicuro che questa sintassi sia valida
        lw s0, primo(s4)
        lw s1, secondo(s4)
        mulw s2, s1, s0
        add s3, s3, s2
        addi s4, s4, 4
        addi s5, s5, -1
        bne somma, s5, zero

    _end:
        li a7, 93
        ecall