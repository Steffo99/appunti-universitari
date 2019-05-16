#!/bin/bash
riscv64-unknown-elf-gdb --ex="target remote localhost:1234"

exit $?
