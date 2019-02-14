#!/usr/bin/env bash
set -x

cd /root/web_portfolio
tar -zxvf package.tgz -C . && \
docker-compose up -d