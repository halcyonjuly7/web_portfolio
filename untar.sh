#!/usr/bin/env bash
set -x

cd /home/travis/web_portfolio
tar -zxvf package.tgz -C . && \
docker-compose up -d