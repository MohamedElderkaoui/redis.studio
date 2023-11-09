## redis usos/ventajas

[Leer](https://aws.amazon.com/es/redis/) 

## redis server @ linux: setup n config

[Receta](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-22-04) 

## get sw:

```bash
sudo apt update
sudo apt upgrade
sudo apt install redis-server
```

Paquetes sugeridos: **ruby-redis**
Se instalarán los siguientes paquetes NUEVOS: **libjemalloc2 liblzf1 redis-server redis-tools**

## config server:

```bash
sudo file /etc/redis/redis.conf   ## : ascii text : 
```

```bash
# The default is "no". To run under upstart/systemd, you can simply uncomment
# the line below:
#
supervised systemd
```

*reiniciar el servicio y añadirlo al tiempo de arranque.*

```bash
sudo systemctl restart redis-server
sudo systemctl enable redis-server
```

sudo systemctl enable redis-server
Synchronizing state of redis-server.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable redis-server
Created symlink /etc/systemd/system/redis.service → /lib/systemd/system/redis-server.service.
Created symlink /etc/systemd/system/multi-user.target.wants/redis-server.service → /lib/systemd/system/redis-server.service.


# UTILERIA UTILERIA 

- *sudo systemctl status redis-server*
- *sudo systemctl stop redis-server*
- *sudo systemctl start redis-server*
- *sudo systemctl restart redis-server*
- .
- *sudo systemctl enable redis-server*
- *sudo systemctl disable redis-server*

## testing redis:

sudo systemctl status redis

**not root:** `redis-cli`

```bash
ray@silver:~$ redis-cli
127.0.0.1:6379> 
```

## securing redis:

```bash
# requirepas foobared
requirepas abracadabra 
```
**vs**

**`openssl rand 60 | openssl base64 -A`** ...


## redis w node

[tutorial](https://ualmtorres.github.io/howtos/RedisNodeJS/) 
- [ ] [**video**](https://www.youtube.com/watch?v=wOgpcp2MVFE)

## redis en windows sin un susbsitema linux

[link](https://riptutorial.com/redis/example/29962/installing-and-running-redis-server-on-windows)


