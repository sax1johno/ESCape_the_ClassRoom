To build the recast-navigation-js, you'll need to first install emscripten using the emsdk library.  

First install emsdk from the emsdk folder.
```
cd ./emsdk && ./emsdk install latest && ./emsdk activate latest && source ./emsdk_env.sh
```

Install CMake and its dependencies.

```
apt-get install cmake
```

Then run yarn install and yarn build

```
YARN_IGNORE_NODE=1 yarn install && yarn build
```

Once recast is built you can run it from the recast-navigation-js directory.