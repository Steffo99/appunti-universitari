#!/bin/bash
riscv64-unknown-elf-readelf "$1.elf" -a

exit $?