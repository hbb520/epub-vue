import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|6': [{
        'id': '@id', // id
        'title': '@cname(2, 8)',   // 标题
        'cover': '../../../static/imgs/book.png', // 封面
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
        'version': '@float(0, 3, 1, 2)',              //版本
        'description': '@cparagraph(3)',              //简介
        'iconUrl': "@image('430x261', '#4A7BF7', 'icon')",              //图标路径
        'detailImgUrl': "@image('430x261', '#4A7BF7', 'img')",              //详情图片路径
        'dayPrice|1': [0, 3, 5, 10],              //价格(天)
        'weekPrice|1': [0, 7, 10, 20, 30],              //价格(周)
        'sorting': '@integer(1, 100)',              //排序
        'isRecommend|1': [1, 2],              //是否推荐
        'isNew|1': [1, 2],              //是否新品
        'isFree|1': [1, 2],              //会员是否免费
        'status|1': [1, 2],              //状态
        'resourceUrl|1': '@url',              //资源(安卓)
        'resourceIOSUrl|1': '@url',              //状态(IOS)
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
