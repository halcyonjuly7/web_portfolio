#!/usr/bin/env bash
set -x

cd /home/travis/web_portfolio &&
tar -zxvf project.tgz  -C . && \
docker-compose up -d