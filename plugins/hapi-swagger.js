const inert = require('inert')
const vision = require('vision')
const pkg = require('package')
const hapiSwagger = require('hapi-swagger')

module.exports = [
  inert,
  vision,
  {
    plugin: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: pkg.version
      },
      // 定义接口以 tags 属性定义为分组
      grouping: 'tags',
      tags: [
        { name: 'tests', description: '测试相关' },
        { name: 'goods', description: '商品相关' },
        { name: 'orders', description: '订单相关' },
        { name: 'users', description: '用户相关' },
        { name: 'carts', description: '购物车相关' }
      ]
    }
  }
]
