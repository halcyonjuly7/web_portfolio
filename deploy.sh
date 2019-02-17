#!/usr/bin/env bash
set -x

tar -czf project.tgz project && \
scp project.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s ' < ./untar.sh