import request from '@/utils/request'

export function getUrl(params, token) {
  return request({
    url: 'http://ysy.crtvup.com.cn:50012/api/experiment/experimentUrl',
    method: 'post',
    data: params,
    headers: {
      'x-access-token': token
    },
  })
}

export function addErrorRecord(params, token) {
  return request({
    url: 'http://ysy.crtvup.com.cn:50012/api/experiment/experimentUrlLog',
    method: 'post',
    data: params,
    headers: {
      'x-access-token': token
    },
  })
}
