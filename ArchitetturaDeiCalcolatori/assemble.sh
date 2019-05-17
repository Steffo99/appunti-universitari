#!/bin/bash
# Assemble RISV-V assembly (.s) files
riscv64-unknown-elf-as -g -o "$1.o" "$1.riscv"
# Link RISC-V object (.o) files
riscv64-unknown-elf-ld -o "$1.elf" "$1.o"

exit $?
