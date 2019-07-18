#!/bin/bash
cd ./backend
yarn
yarn lint
cd ../frontend/
yarn
yarn lint
