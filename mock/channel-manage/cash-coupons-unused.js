import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'cardNo': '@id', // 卡号
        'vipRedemptionCode': '@id', // 会员兑换码
        'secondaryAgent|1': [1, 2, 3], // 二级代理
        'useStatus|1': [1, 2],   // 使用状态
        'status|1': [1, 2],   // 状态

      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};