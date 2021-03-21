#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "" &&
git remote add origin git@github.com:znzaznz/monery-website.git &&
git push -u origin master -f
cd ..