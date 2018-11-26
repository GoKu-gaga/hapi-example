- [连接容器](#连接)
- [docker中安装vim](#docker中安装vim)
- [使用 postgresSql](#使用postgresSql)
- [使用 mysql](#使用mysql)

### 连接
```
docker exec -it name bash
```

# docker中安装vim
```
apt-get update
apt-get install vim
```

# 使用postgresSql

```
 docker run -p xxxx:5432 --name yourappname -e POSTGRES_PASSWORD=xxx -e POSTGRES_USER=xxx -d postgres
```

# 使用mysql
``` shell
docker run -p xxxx:3306 --name yourappname -e MYSQL_ROOT_PASSWORD=xxx -d mysql:5.6
```

### 登录mysql
```
mysql -p
```

- 查看数据库编码
  ``` shell
  show variables like '%char%';
  ```

- 修改mysql配置文件/etc/mysql/my.cnf
  ``` shell
  [mysqld]
  character-set-server=utf8 
  [client]
  default-character-set=utf8 
  [mysql]
  default-character-set=utf8
  ```
 