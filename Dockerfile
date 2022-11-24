FROM node:latest
MAINTAINER Seok Joon Lee <seokjoon@ilark.co.kr>

RUN npm install -g pm2

# CMD ["pm2-runtime", "/daab-micro-koa/src"]
CMD ["pm2-runtime", "/daab-micro-koa/ecosystem.config.cjs"]

EXPOSE 5005
