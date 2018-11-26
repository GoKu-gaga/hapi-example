# Sequlize Guide

### [详细文档]( http://docs.sequelizejs.com/manual/tutorial/migrations.html)

## 初始化

``` bash
./node_modules/.bin/sequelize init
```

## 创建数据库
``` bash
./node_modules/.bin/sequelize db:create
```

## 创建models
`./node_modules/.bin/sequelize model:generate`

例子：

``` bash
  ./node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```
> 生成 models 文件会自动生成 对应 migrations 的文件

## 数据迁移

- 生成迁移文件
``` 
./node_modules/.bin/sequelize migration:create --name xxx
```

- 执行迁移 `./node_modules/.bin/sequelize db:migrate`

- 执行迁移指定文件 `./node_modules/.bin/sequelize db:migrate --models-path xxxx`

- 撤销迁移
```
./node_modules/.bin/sequelize db:migrate:undo
```
  - 撤销全部 ``` ./node_modules/.bin/sequelize db:migrate:undo:all ```
  - 撤销指定文件 ``` ./node_modules/.bin/sequelize db:migrate:undo --name xxx ```

## 数据填充

- 生成填充文件
```
./node_modules/.bin/sequelize seed:create --name xxx
```

- 执行填充
  - 全部执行 `./node_modules/.bin/sequelize db:seed:all`
  - 指定执行 `./node_modules/.bin/sequelize db:seed --seed xxx`