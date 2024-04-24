#!/usr/bin/env node
import { $ } from "execa"
import which from "which"
process.env.DEBUG ||= "execa"

async function setup() {
    if (await which("apt").then(() => true, () => false)) {
        await $({ stdio: "inherit", shell: true })`sudo bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"`
        await $({ stdio: "inherit" })`sudo apt update`
        await $({ stdio: "inherit" })`sudo apt-get install -y python3 g++ make python3-pip`
    }
}

async function generate() {
}

async function build() {
    await $({ stdio: "inherit", cwd: "node", env: {
        CC: "clang-18",
        CXX: "clang++-18"
    } })`./configure --enable-static`
    await $({ stdio: "inherit", cwd: "node" })`make -j4`
}

const scriptName = process.argv[2] ?? fatal("no task")
const script = { setup, generate, build }[scriptName] ?? fatal("no such task")
await script()