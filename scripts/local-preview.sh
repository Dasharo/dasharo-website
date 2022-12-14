#!/bin/bash

docker run --rm -it -v $PWD:/src -p 1313:1313 -u $(id -u) klakegg/hugo:0.105.0-ext-alpine serve -b $1
