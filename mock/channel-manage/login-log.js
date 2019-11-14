import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'username': '@cname(2)',   // 用户名
        'channelName': '@cname(2)',   // 渠道名称
        'sortName': '@cname(2)',   // 分类
        'loginTime': '@cname(2)',   // 登录时间
        'ipAddress': '@ip',   // IP地址
        'address': '@county(true)',   // 地址
      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  },
};
