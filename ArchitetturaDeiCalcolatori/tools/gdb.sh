#!/bin/bash
riscv64-unknown-elf-gdb -e "$1.elf"

exit $?
