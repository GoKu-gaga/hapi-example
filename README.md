# hapi-example
基于 [Hapi](https://hapijs.com) + [Sequelize](http://docs.sequelizejs.com/) + [mysql](https://www.mysql.com/) / [postgresSql](https://www.postgresql.org/) 的后台程序

## 项目目录
```
|--config                  // 配置目录
     |--config.js          // 数据库连接的配置
     |-- index.js          // 
|--migrations              // 数据迁移的目录
|--models                  // 数据库 model
     |--index.js           // model 入口与连接
     |--goods.js           // 商品表
     |--...
|--plugins                 // hapi 插件目录
     |--hapi-auth-jwt2.js  // hapi-auth-jwt2 插件配置
     |--hapi-good.js       // hapi-good 插件配置
     |--hapi-pagination.js // hapi-pagination 插件配置
     |--hapi-swagger.js    // hapi-swigger 插件配置
|--routes                  // 路由目录
|--seeders                 // 数据填充的目录
|--utils                   // 工具类目录
     |--router-helper.js   // 路由的一些公共配置模块
```
## 安装nodejs

- 推荐[nvm](https://github.com/creationix/nvm)（windows 可安装 [nvm-windows](https://github.com/coreybutler/nvm-windows)） 来管理node版本
  - 通过 ``` nvm install <version> ``` 来安装指定版本的node
- [直接安装](https://nodejs.org/en/)

## 安装依赖
```
npm i
```

## 开发
- 运行
  ``` shell
  npm run dev
  ```
- 运行成功后可在 http://127.0.0.1:3000/v1/documentation 查看文档

## 使用的Hapi插件

- swagger文档插件 [hapi-swagger](https://github.com/glennjones/hapi-swagger)
- 分页插件 [hapi-pagination](https://github.com/fknop/hapi-pagination)
- 用户验证 [hapi-auth-jwt2](https://github.com/dwyl/hapi-auth-jwt2)

## 使用 docker 运行数据库
- [docker-guide](./docker-guide.md)

## 使用 sequelize 做数据库表迁移及数据填充
- [sequelize-guide](./sequelize-guide.md)