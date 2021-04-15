#!/bin/sh

grunt build
gulp

rm -rfv dist/fonts
cp -rv bower_components/bootstrap/fonts dist

