##
* docker build --tag daab-micro-koa .
* docker run -d --restart unless-stopped --name=daabKoa -v /data/app/js/koa/daab-micro-koa:/daab-micro-koa -v /etc/localtime:/etc/localtime:ro --link mongo:mongo -p 5005:5005 daab-micro-koa
* docker logs daabKoa
* docker exec -it daabKoa pm2 list





