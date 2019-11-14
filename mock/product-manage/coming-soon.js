import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'title': '@cparagraph(1)',   // 标题
        'sort': '@integer(1, 7)',   // 分类
        'icon': "@image('80x80', '#4A7BF7', 'icon')",  // 图标
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
        'sort': '@integer(1, 7)',              //分类
        'iconUrl': "@image('430x261', '#4A7BF7', 'icon')",              //图标路径
        'status|1': [1, 2]              //状态
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
