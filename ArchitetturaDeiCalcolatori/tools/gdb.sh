#!/bin/bash
echo "target remote localhost:1234" | riscv64-unknown-elf-gdb -e "$1.elf"

exit $?
