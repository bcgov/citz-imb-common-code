#!/bin/bash

# Use DeploymentConfigs to deploy the application to OpenShift.

oc process -f /home/runner/work/citz-imb-common-code/citz-imb-common-code/openshift/templates/"$DC_TEMPLATE" --namespace=$NAMESPACE \
    -p LICENSE_PLATE="$LICENSE_PLATE" \
    -p IMAGE_TAG=$IMAGE_TAG \
    -p ENVIRONMENT=$ENVIRONMENT \
    -p ARTIFACT_PULL_SECRET=$ARTIFACT_PULL_SECRET | \
    oc apply -f -
