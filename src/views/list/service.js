import request from '@/utils/request'

export function getList() {
  return request({
    url: '/book/list',
    method: 'get'
  })
}
