import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'title': '@cparagraph(1)',   // 标题
        'suit': '@integer(1, 2)',   // 套装
        'version': '@float(0, 3, 1, 2)', // 版本
        'uploadTime': '@datetime', // 上传时间
        'status|1': [1, 2], // 状态
      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  },
  detail: () => {
    const items = Mock.mock({
      'items': {
        'title': '@cparagraph(1)',              //主标题
        'viceTitle': '@cparagraph(1)',              //副标题
        'suit': '@integer(1, 2)',              //套装
        'version': '@float(0, 3, 1, 2)',              //版本
        'description': '@cparagraph(3)',              //简介
        'iconUrl': "@image('430x261', '#4A7BF7', 'icon')",              //图标路径
        'detailImgUrl': "@image('430x261', '#4A7BF7', 'img')",              //详情图片路径
        'status|1': [1, 2],              //状态
        'addressList|1': [
          {
            name: '@cparagraph(1)',
            link: '@url'
          },
          {
            name: '@cparagraph(1)',
            link: '@url'
          }
        ],              //地址列表
        'bookList|1': [
          {
            name: '@cparagraph(1)',
            resourceUrl: '@url',
            resourceIOSUrl: '@url'
          },
          {
            name: '@cparagraph(1)',
            resourceUrl: '@url',
            resourceIOSUrl: '@url'
          }
        ]              //图书列表
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
