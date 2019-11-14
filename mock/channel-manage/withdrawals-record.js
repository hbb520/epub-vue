import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'seriaNumber': '@id', // 序号
        'withdrawalTime': '@datetime',   // 提现时间
        'withdrawalAmount': '@integer(1, 100000)',   // 提现金额
        'status|1': [1, 2, 3],   // 状态
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
        'username': '@cword(2, 4)',              //用户名
        'phone': /^1[385][1-9]\d{8}/,              //手机号
        'withdrawalAmount': '@integer(1, 100000)', // 提现金额
        'transferAccountRecord': '@image(\'120x160\', \'#4A7BF7\', \'icon\')',              //转账记录
        'status|1': [1, 2, 3],              //状态
        'totalAmount': '@integer(1, 100000)', // 提现总金额
      },
    });
    return {
      code: 20000,
      data: items,
      total: 500,
    };
  },
  withdrawalList: () => {
    const items = Mock.mock({
      'items|10': [
        {
          'id': '@id', // id
          'cardNo': '@id',              //科学号
          'vipCode': '@guid',              //会员兑换码
          'username': '@cword(2, 4)',              //用户名
          'userStatus|1': [1, 2],              //使用状态
          'userTime': '@datetime',              //使用时间
          'vipType|1': [1, 2, 3],              //会员类型
          'payType|1': [1, 2, 3],              //支付方式
          'payableAmount': '@integer(1, 100000)',              //应付金额
          'actualAmount': '@integer(1, 100000)',              //实际到账
          'rebateRatio': '@integer(1, 10)',              //返点比例
          'rebateAmount': '@integer(1, 10)',              //返点金额
        }],
    });
    return {
      code: 20000,
      data: items,
      total: 500,
    };
  },
};
