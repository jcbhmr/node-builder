#!/usr/bin/env bash
set -e
if [[ -n $DEBUG ]]; then set -x; fi

sudo bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"

sudo apt update
sudo apt-get install python3 g++ make python3-pip
