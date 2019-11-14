import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items': {
        'id': '@id', // id
        'totalIncome': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 总收入
        'alreadyAccounted': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 已到账
        'unAlreadyAccounted': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 未到账收入
        'paid': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 已支付(代理返点)
        'unpaid': {
          'value': '@integer(1, 100000)',
          'todayValue': '@integer(1, 100)',
        }, // 未支付(代理返点)
        'rechargeIncome': {               // 充值收入
          'amount': '@integer(1, 100000)',
          'list': [
            {
              'applePaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'appleIncome': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'wechatPaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'aliPaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
            }],
        },
        'vipIncome': {               // 会员收入
          'amount': '@integer(1, 100000)',
          'list': [
            {
              'type|1': '全额购买',  // 类型
              'applePaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'appleIncome': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'wechatPaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'aliPaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
            },
            {
              'type': '优惠券购买',  // 类型
              'applePaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'appleIncome': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'wechatPaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'aliPaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
            },
          ],
        },
        'vipCodeIncome': {               // 会员兑换码收入
          'amount': '@integer(1, 100000)',
          'list': [
            {
              'paid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'unPaid': '@integer(1, 10000)',
            }],
        },
        'vipCashCouponIncome': {               // 会员现金券收入
          'amount': '@integer(1, 100000)',
          'list': [
            {
              'paid': '@integer(1, 10000)',
              'unPaid': '@integer(1, 10000)',
              'payableAmounts': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'paidAmounts': '@integer(1, 10000)',
              'toBePaidAmounts': '@integer(1, 10000)',
              'unPaidAmounts': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
            }],
        },
        'hardwareBigScreenIncome': {               // 硬件大屏收入
          'amount': '@integer(1, 100000)',
          'list': [
            {
              'paid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
              'unPaid': '@integer(1, 10000)',
            }],
        },
        'bigScreenResourceAllocationIncome': {               // 大屏资源配置收入
          'amount': '@integer(1, 100000)',
          'list': [
            {
              'paid': '@integer(1, 10000)',
              'unPaid': '@integer(1, 10000)' + '|' + '@integer(-100, 100)',
            }],
        },
        'otherIncome': {               // 其他收入
          'amount': '@integer(1, 100000)',
          'list': [
            {
              'paid': '@integer(1, 10000)',
              'unPaid': '@integer(1, 10000)',
            }],
        },
      },
    });
    return {
      code: 20000,
      data: items,
      total: 500,
    };
  },
};
