const hapiPagination = require('hapi-pagination')

const options = {
  query: {
    page: {
      name: 'page',
      default: 1
    },
    limit: {
      name: 'limit',
      default: 25
    },
    pagination: {
      name: 'pagination',
      default: true
    },
    invalid: 'defaults'
  },
  meta: {
    name: 'meta',
    count: {
      active: true,
      name: 'count'
    },
    totalCount: {
      active: true,
      name: 'total_count'
    },
    pageCount: {
      active: true,
      name: 'page_count'
    },
    hasNext: {
      active: true,
      name: 'has_next'
    },
    hasPrevious: {
      active: true,
      name: 'has_previous'
    },
    self: {
      active: false,
      name: 'self'
    },
    previous: {
      active: false,
      name: 'previous'
    },
    next: {
      active: false,
      name: 'next'
    },
    first: {
      active: false,
      name: 'first'
    },
    last: {
      active: false,
      name: 'last'
    },
    page: {
      active: false
      // name == default.query.page.name
    },
    limit: {
      active: false
      // name == default.query.limit.name
    }
  },
  results: {
    name: 'results'
  },
  reply: {
    paginate: 'paginate'
  },
  routes: {
    include: [
      '/v1/goods',
      '/v1/orders',
      '/v1/carts/{cart_id}/goods'
    ],
    exclude: []
  }
}

module.exports = {
  plugin: hapiPagination,
  options
}
