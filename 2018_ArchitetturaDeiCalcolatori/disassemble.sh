#!/bin/bash
riscv64-unknown-elf-objdump "$1.elf"

exit $?
