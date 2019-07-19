#!/bin/bash
cd ./backend
yarn
yarn lint
yarn impregnate
cd ../frontend/
yarn
yarn lint