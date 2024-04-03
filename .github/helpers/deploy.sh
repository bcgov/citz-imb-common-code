#!/bin/bash

# Use DeploymentConfigs to deploy the application to OpenShift.

if [ -z "$VAULT_ENVIRONMENT" ]
then
    oc process -f /home/runner/work/citz-imb-common-code/citz-imb-common-code/openshift/templates/"$DC_TEMPLATE" --namespace=$NAMESPACE \
        -p LICENSE_PLATE="$LICENSE_PLATE" \
        -p IMAGE_TAG=$IMAGE_TAG \
        -p ENVIRONMENT=$ENVIRONMENT | \
        oc apply -f -
else
    oc process -f /home/runner/work/citz-imb-common-code/citz-imb-common-code/openshift/templates/"$DC_TEMPLATE" --namespace=$NAMESPACE \
        -p LICENSE_PLATE="$LICENSE_PLATE" \
        -p IMAGE_TAG=$IMAGE_TAG \
        -p VAULT_ENVIRONMENT=$VAULT_ENVIRONMENT \
        -p ENVIRONMENT=$ENVIRONMENT | \
        oc apply -f -
fi

