#!/bin/sh

SOURCE_BRANCH=`git rev-parse --abbrev-ref HEAD`
DEST_BRANCH=gh-pages

echo $SOURCE_BRANCH
git checkout $DEST_BRANCH
git reset --hard $SOURCE_BRANCH
bower install
git add --force bower_components
git commit -m "add bower components"
git push origin $DEST_BRANCH --force

git checkout $SOURCE_BRANCH