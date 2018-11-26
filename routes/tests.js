const Joi = require('joi')
const JWT = require('jsonwebtoken')

const config = require('../config')

const {
  jwtHeaderDefine
} = require('../utils/router-helper')

const GROUP_NAME = 'tests'

module.exports = [
  {
    method: 'GET',
    path: '/',
    options: {
      tags: ['api', GROUP_NAME],
      description: '测试 /',
      auth: false
    },
    handler: (request, h) => {
      return 'Hello, world!'
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    options: {
      tags: ['api', GROUP_NAME],
      description: '测试参数',
      auth: false
    },
    handler: (request, h) => {
      return 'Hello, ' + encodeURIComponent(request.params.name) + '!'
    }
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/createJWT/{userId}`,
    options: {
      tags: ['api', GROUP_NAME],
      description: '用于测试的用户 JWT 签发',
      auth: false,
      validate: {
        params: {
          userId: Joi.string()
        }
      }
    },
    handler: async (request, h) => {
      const generateJWT = (jwtInfo) => {
        const payload = {
          userId: jwtInfo.userId,
          exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
        }
        return JWT.sign(payload, config.jwtSecret)
      }
      return generateJWT({
        userId: request.params.userId
      })
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/checkJWT`,
    options: {
      tags: ['api', GROUP_NAME],
      description: '用于测试的用户 JWT 验证',
      validate: {
        ...jwtHeaderDefine
      }
    },
    handler: async (request, h) => {
      const response = h.response({
        text: 'Vaild Token!'
      })
      response.header('Authorization', request.headers.authorization)
      return response
    }
  }
]
