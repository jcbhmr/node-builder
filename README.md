# node-builder
🐢 Node.js compiled library &amp; binary artifacts released on GitHub

## Development

- https://github.com/nodejs/help/issues/1415
- https://github.com/nodejs/help/issues/818
- https://github.com/nodejs/node/issues/24028
- https://stackoverflow.com/questions/15977901/how-to-build-nodejs-as-a-shared-library-from-source-code

```sh
npm run build
```

right now some files are in Releases folder in Git so that when I start a new Codespace I don't have to wait 2 hours for it to fresh build lol

used libuv.a from https://github.com/BrainCoTech/libuv-prebuild/releases/tag/v1.44.2 for linux x86_64