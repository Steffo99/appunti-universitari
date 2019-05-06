#!/bin/bash
# RISC-V Tools installer for Arch Linux, Manjaro, ...
# By Stefano Pigozzi
pacman -S autoconf automake libtool curl libmpc gmp libusb gawk base-devel bison flex texinfo gperf libtool patchutils bc lib32-zlib dtc pkgconf expat glib2 git
git clone https://github.com/riscv/riscv-tools.git --recursive
cd riscv-tools
export RISCV="$(pwd)/build"
./build.sh
echo "\033[1;32mCompilazione completata."
echo "File binari disponibili in ${RISCV}"
echo "Se vuoi, puoi aggiungerli al \$PATH."