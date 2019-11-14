import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [
        {
          'id': '@id', // id
          'orderNumber': '@id',  // 订单编号
          'username': '@cname(2)',  // 用户名
          'phone': /^1[385][1-9]\d{8}/,  // 用户名
          'name': '@cname(4)',    // 企业名称
          'submitTime': '@datetime',    // 提交时间
          'effectiveTime': '@datetime',   // 有效期
          'price': '@integer(1, 50000)',   // 订单金额
          'orderType|1': [1, 2], // 订单类型
          'payStatus|1': [1, 2], // 付款状态
          'orderStatus|1': [1, 2, 3, 4, 5, 6, 7, 8], // 订单状态
          'resource|1-10': [
            {
              'subordinate|1': ['科普知识', '学科知识'],
              'sort|1': [
                '航天航空',
                '远古生物',
                '学科知识',
                '古代智慧',
                '自然生命',
                '机械运转',
                '科学人文'],
              'list|1-10': [
                '@cword(2,8)'
              ],
            }],
        }],
    });
    return {
      code: 20000,
      data: items,
      total: 500,
    };
  },
};
