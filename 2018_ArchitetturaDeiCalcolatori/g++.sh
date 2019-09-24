#!/bin/bash
# Compile using g++
riscv64-unknown-elf-g++ -o "$1.elf" "$1.cc"

exit $?