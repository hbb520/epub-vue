import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'cardNo': '@id', // 卡号
        'totalPrice': '@integer(1, 100000)', // 总价
        'userNumber': '@integer(1, 100)', // 使用人数
        'actualArrival': '@integer(1, 100000)', // 实际到账
        'rebateRatio': '@integer(1, 20)', // 返点比例
        'rebateAmount': '@integer(1, 100000)', // 返点金额
        'cashWithdrawal': '@integer(1, 100000)', // 已提现金额
        'balance': '@integer(0, 100000)', // 余额
        'withdrawalTime': '@datetime', // 提现时间
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
        'id': '@id', // id
        'username': '@cword(2, 4)',              //用户名
        'phone': /^1[385][1-9]\d{8}/,              //手机号
        'withdrawalAmount': '@integer(1, 100000)', // 提现金额
        'cumulativeIncome': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 累计收入
        'withdraw': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 已提现
        'pendingReview': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 待审核
        'balance': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 余额
      },
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  },
  withdrawalList: () => {
    const items = Mock.mock({
      'items|10': [
        {
          'id': '@id', // id
          'cardNo': '@id',              //卡号
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
