#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# echo $DIR
DIR=$DIR/..
if [ "$1" != "" ]; then
	tenant=$1
else
    # default tenant if none is specified
	tenant="main"
fi

if [ ! -d "$DIR/tenant_config/$tenant/" ]; then
  # Check if $DIRECTORY exists and throw exeption if it doesn't .
  echo "#### Specified Tenant does not exists ####"
  exit
fi

# copy the right image files to the
source=$DIR/tenant_config/$tenant/android/res/
destination=$DIR/android/app/src/main/res/

rm -rf $destination/*

cp -Rf $source $destination

echo "Pre-build has executed successfully!"
