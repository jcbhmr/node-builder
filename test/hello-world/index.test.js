import { $ } from "execa"
import { resolve } from "node:path"

await $({ stdio: "inherit", cwd: import.meta.dirname, env: {
    CC: "clang-18",
    CXX: "clang++-18"
}, shell: true })`$CXX -I${resolve("node/src")} -I${resolve("node/deps/v8/include")} -pthread main.cpp ${resolve("node/out/Release/obj.target/libnode.a")} ${resolve(import.meta.dirname, "libuv.a")}`