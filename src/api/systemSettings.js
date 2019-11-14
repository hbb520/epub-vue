import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/systemSettings/list',
    method: 'get',
    params
  })
}
export function getDetail(params) {
  return request({
    url: '/systemSettings/detail',
    method: 'get',
    params
  })
}
