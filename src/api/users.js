import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/users/list',
    method: 'get',
    params
  })
}
export function getDetail(params) {
  return request({
    url: '/users/detail',
    method: 'get',
    params
  })
}
