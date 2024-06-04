#!/bin/bash
# Compile using g++
riscv64-unknown-elf-gcc -o "$1.elf" "$1.cc"

exit $?
