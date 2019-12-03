import request from '@/utils/request'

export function getList() {
  return request({
    url: '/book/getList.json',
    method: 'post'
  })
}

export function delBook(params) {
  return request({
    url: '/book/deleteBook.json',
    method: 'post',
    params
  })
}
