import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'orderNumber': '@id', // 订单号
        'transactionNumber': '@id', // 交易流水号
        'orderContent': '@cword(2, 6)', // 订单内容
        'orderType|1': [1, 2], // 订单类型
        'payableAmount|1': [{
          'type|1': [1, 2],
          'price': '@integer(1, 10000)'
        }], // 应付金额
        'cardCoupon|1': [1, 2], // 卡券
        'amountType|1': [{
          'type|1': [1, 2],
          'price': '@integer(1, 10000)'
        }], // 消费属性
        'payAmount|1': [{
          'type|1': [1, 2],
          'price': '@integer(1, 10000)'
        }], // 实付金额
        'paidAmount|1': [{
          'type|1': [1, 2],
          'price': '@integer(1, 10000)'
        }], // 实收金额
        'payType|1': [1, 2, 3], // 支付方式
        'createTime': '@datetime', // 创建时间
        'payTime': '@datetime', // 付款时间
        'carryOutTime': '@datetime', // 完成时间
      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
