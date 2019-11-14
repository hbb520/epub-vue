import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'title': '@cparagraph(1)',   // 标题
        'sortParent': '@integer(1,2)',   // 分类(大类)
        'sort': '@integer(1, 7)',   // 分类(小类)
        'version': '@float(0, 3, 1, 2)', // 版本
        'icon': "@image('80x80', '#4A7BF7', 'icon')",  // 图标
        'sorting': '@increment',  // 排序
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
        'sortParent': '@integer(1, 2)',              //分类
        'sort': '@integer(1, 7)',              //分类
        'version': '@float(0, 3, 1, 2)',              //版本
        'description': '@cparagraph(3)',              //简介
        'iconUrl': "@image('430x261', '#4A7BF7', 'icon')",              //图标路径
        'detailImgUrl': "@image('430x261', '#4A7BF7', 'img')",              //详情图片路径
        'dayPrice|1': [0, 70],              //价格(天)
        'weekPrice|1': [0, 700],              //价格(周)
        'sorting': '@integer(1, 100)',              //排序
        'status|1': [1, 2],              //状态
        'resource|1-10': ['@integer(1, 10)'],              //资源
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  },
  resourceList: () => {
    const items = [
      {
        label: '地球的结构',
        value: 1
      },
      {
        label: '太阳的结构',
        value: 2
      },
      {
        label: '月球的结构',
        value: 3
      },
      {
        label: '火星的结构',
        value: 4
      },
      {
        label: '金星的结构',
        value: 5
      },
      {
        label: '木星的结构',
        value: 6
      },
      {
        label: '全球卫星导航结构',
        value: 7
      },
      {
        label: '海王星的构造',
        value: 8
      },
      {
        label: '土星的结构',
        value: 9
      },
      {
        label: '“神州”飞船的构造',
        value: 10
      },
    ];
    return {
      code: 20000,
      data: items,
      total: 500
    };
  },
};
