# node-builder

GOAL: release a libnode.a and associate *.h files via github releases so that downstream embedders can just wget or curl or download the compiled .a files and use those instead of waiting for node to build for 2 hours lol

## Development

- https://github.com/nodejs/help/issues/1415
- https://github.com/nodejs/help/issues/818
- https://github.com/nodejs/node/issues/24028
- https://stackoverflow.com/questions/15977901/how-to-build-nodejs-as-a-shared-library-from-source-code

more

- https://github.com/orgs/nodejs/discussions/35796
- https://github.com/branchseer/libnode
- https://github.com/nodejs/node/blob/main/test/embedding/embedtest.cc

```sh
npm run build
```

right now some files are in Releases folder in Git so that when I start a new Codespace I don't have to wait 2 hours for it to fresh build lol
