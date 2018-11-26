const Hapi = require('hapi')
require('env2')('./.env')
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger')
// 引入 hapi-pagination 插件配置
const pluginHapiPagination = require('./plugins/hapi-pagination')
// 引入 hapi-auth-jwt2 插件配置
const hapiAuthJWT2 = require('hapi-auth-jwt2')
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')

const pluginHapiGood = require('./plugins/hapi-good')

const config = require('./config')
const routesTests = require('./routes/tests')
const routesUsers = require('./routes/users')

const server = Hapi.server({
  port: config.port,
  host: config.host
})

server.realm.modifiers.route.prefix = '/v1'

server.route([
  ...routesTests,
  ...routesUsers
])

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
    // 使用 hapi-pagination
    pluginHapiPagination,
    hapiAuthJWT2,
    pluginHapiGood
  ])

  pluginHapiAuthJWT2(server)

  try {
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (err) {
    console.log(err)
  }
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
