#!/bin/bash
pkill -f "astro [p]review" >/dev/null 2>&1; sleep 1
npx astro build 2>&1 | tail -1
nohup npx astro preview --port 4477 >/tmp/prev.log 2>&1 &
for i in $(seq 1 20); do sleep 1; c=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4477/); [ "$c" = "200" ] && { echo "up 200"; exit 0; }; done
echo "FAILED $c"; tail -5 /tmp/prev.log
