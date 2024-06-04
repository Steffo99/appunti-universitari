# Definisci delle costanti
.equ _SYS_EXIT, 93  # Syscall exit
.equ _SYS_WRITE, 64  # Syscall write

# Inizio del programma
.global _start

# Variabili statichie inizializzate a 0
.section .bss

# Dati modificabili
.section .data

# Dati in sola lettura
.section .rodata
	msg: .string "Hello mondo!\n"

# Testo del programma
.section .text
	_start:
		# Chiamata a WRITE(stream, primocarattere, lunghezza)
		li a0, 0			# Print to stdout
		la a1, msg			# Stampa il messaggio in msg
		li a2, 13			# Stampa 13 caratteri dopo msg
		li a7, _SYS_WRITE	# Seleziona la syscall WRITE
		ecall

		li a7, _SYS_EXIT
		ecall
