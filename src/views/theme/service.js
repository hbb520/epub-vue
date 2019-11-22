import request from '@/utils/request'

export function getDetail(params) {
  return request({
    url: '/book/detail',
    method: 'get',
    params
  })
}
