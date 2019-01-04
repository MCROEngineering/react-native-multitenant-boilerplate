#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# echo $DIR
DIR=$DIR/..
if [ "$1" != "" ]; then
	tenant=$1
else
	tenant="main"
fi

if [ ! -d "$DIR/tenant_config/$tenant/" ]; then
  # Control will enter here if $DIRECTORY exists.
  echo "#### Tenant specified does not exists ####"
  echo "$DIR/tenant_config/$tenant/"
  exit
fi

# !!! this is very important for setting the right environment variables
if [ "${CONFIGURATION}" == "Dev" ] || [ "${CONFIGURATION}" == "Dev Debug" ]; then
  echo "DEV"
  echo "tenant_config/$tenant/.env.dev" > /tmp/envfile
elif [ "${CONFIGURATION}" == "Staging" ] || [ "${CONFIGURATION}" == "Staging Debug" ]; then
  echo "STAGING"
  echo "tenant_config/$tenant/.env.staging" > /tmp/envfile
elif [ "${CONFIGURATION}" == "Release" ] || [ "${CONFIGURATION}" == "Debug" ]; then
  echo "PROD"
  echo "tenant_config/$tenant/.env.prod" > /tmp/envfile
else
  echo "DEV"
  echo "tenant_config/$tenant/.env.dev" > /tmp/envfile
fi

# copy the right image files to the right icon set
source=$DIR/tenant_config/$tenant/ios/AppIcon.appiconset/*
destination=$DIR/ios/MultiTenant/Images.xcassets/"AppIcon.appiconset"
rm -rf $destination/*
mkdir -p $destination
cp -Rf $source $destination

# copy the right launch screen image files to the right launch image set
sourceL=$DIR/tenant_config/$tenant/ios/LaunchImage.launchimage/*
destinationL=$DIR/ios/MultiTenant/Images.xcassets/"LaunchImage.launchimage"
rm -rf $destinationL/*
mkdir -p $destinationL
cp -Rf $sourceL $destinationL

echo "Pre-build has executed successfully!"
