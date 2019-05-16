#!/bin/bash
xterm -e "qemu-riscv64 -g 1234 \"$1.elf\"" &
xterm -e "riscv64-unknown-elf-gdb --ex=\"target remote localhost:1234\" \"$1.elf\"" &

exit $?
