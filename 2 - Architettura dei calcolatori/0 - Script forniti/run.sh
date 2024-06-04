#!/bin/bash
# Sintassi: ./run.sh nomefile
# Non mettete l'estensione!
# Potrebbe esserci bisogno di installare xterm prima
# Se non funziona, installatelo con
# sudo apt install xterm

echo "Cleaning phase"
rm "$1.o"
rm "$1.elf"
echo "Compilation phase"
riscv64-unknown-elf-as -g -o "$1.o" "$1.riscv"
riscv64-unknown-elf-ld -o "$1.elf" "$1.o"
echo "Debugging phase"
xterm -e "qemu-riscv64 -g 1234 \"$1.elf\"" &
xterm -e "riscv64-unknown-elf-gdb --ex=\"target remote localhost:1234\" \"$1.elf\"" &
wait
