#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "test" ]]; then
  echo 'DEPLOY ABORTED. Please deploy to production from "master" branch only';
  exit 1;
fi

rm -rf .cache
rm -rf out/
npm ci
npm run export
