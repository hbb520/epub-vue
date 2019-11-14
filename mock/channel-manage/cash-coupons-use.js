import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'cardNo': '@id', // 卡号
        'vipRedemptionCode': '@id', // 会员兑换码
        'secondaryAgent|1': [1, 2, 3], // 二级代理
        'username': /^1[385][1-9]\d{8}/, // 用户名
        'useStatus|1': [1, 2], // 使用状态
        'useTime': '@datetime', // 使用时间
        'vipType|1': [1, 2, 3, 4, 5, 6, 7, 8, 9], // 会员类型
        'payType|1': [1, 2, 3], // 支付平台
        'payableAmounts': '@integer(1, 100000)', // 应付金额
        'actualArrival': '@integer(1, 100000)', // 实际到账
        'status|1': [1, 2],   // 状态
        'withdrawalTime': '@datetime', // 提现时间
      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
