import Mock from 'mockjs';



export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'data': '@datetime', // 日期
        'hardwareBigScreenIncome': '@integer(1, 10000)', // 硬件大屏收入
        'resourceAllocationIncome': '@integer(1, 10000)', // 大屏资源配置收入
        'vipRedemptionCodeIncome': '@integer(1, 10000)', // 会员兑换码收入
        'vipCashCouponsIncome': '@integer(1, 10000)', // 会员现金券收入
        'buyVipIncome': '@integer(1, 10000)', // 购买会员收入
        'rechargeIncome': '@integer(1, 10000)',   // 充值收入
        'otherIncome': '@integer(1, 10000)',   // 其他收入
      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  },
  incomeList: () => {
    const items = {
      'timeData': new Array(7).fill(1).map((val, ind) => {
        let timer = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * ind);
        return {
          label: timer.getFullYear() + '/' + (timer.getMonth() + 1) + '/' +
              timer.getDate(),
          value: Mock.mock('@integer(1, 10000)'),
        };
      }),
      'sameRatioData': [
        {
          label: '硬件大屏收入',
          maxValue: 10000,
          value: Mock.mock('@integer(1, 10000)')
        },
        {
          label: '大屏资源配置收入',
          maxValue: 10000,
          value: Mock.mock('@integer(1, 10000)')
        },
        {
          label: '会员兑换码收入',
          maxValue: 10000,
          value: Mock.mock('@integer(1, 10000)')
        },
        {
          label: '会员现金券收入',
          maxValue: 10000,
          value: Mock.mock('@integer(1, 10000)')
        },
        {
          label: '购买会员收入',
          maxValue: 10000,
          value: Mock.mock('@integer(1, 10000)')
        },
        {
          label: '充值收入',
          maxValue: 10000,
          value: Mock.mock('@integer(1, 10000)')
        },
        {
          label: '其他收入',
          maxValue: 10000,
          value: Mock.mock('@integer(1, 10000)')
        }
      ]
    };
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
