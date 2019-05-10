#!/bin/bash
# Run the program
qemu-riscv64 -g 1234 "$1.elf"

exit $?
