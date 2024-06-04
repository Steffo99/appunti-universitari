#!/bin/bash
riscv64-unknown-elf-gprof "$1.elf"

exit $?
