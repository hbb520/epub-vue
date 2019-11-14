import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'cardNo': '@id', // 卡号
        'channel': '@cword(2, 4)', // 渠道名称
        'userNumber': '@integer(1, 100)', // 使用人数
        'actualArrival': '@integer(1, 100000)', // 实际到账累计
        'isWithdrawn|1': [true, false], // 是否可提现
        'rebateRatio': '@integer(1, 20)', // 返点比例
        'rebateAmount': '@integer(1, 100000)', // 返点金额
        'cashWithdrawal': '@integer(1, 100000)', // 已提现金额
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
        'expendable': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 应支出
        'expired': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 已支出
        'pendingExpenditure': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 待支出
        'unexpended': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 未支出
      },
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
