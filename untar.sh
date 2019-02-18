#!/usr/bin/env bash
set -x

cd /home/travis/web_portfolio &&
tar -zxvf project.tgz  -C . && \
tar -zxvf traefik.tgz  -C . && \
chmod 600 ./traefik/acme.json && \
docker-compose up -d