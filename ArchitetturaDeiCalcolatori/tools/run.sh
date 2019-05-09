#!/bin/bash
# Run the program
qemu-riscv64 "$1.elf"

exit $?
