import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [
        {
          'id': '@id', // id
          'incomeAmount': '@integer(1, 10000)',   // 收入金额
          'incomeType|1': [1, 2, 3, 4, 5, 6],   // 收入来源
          'relatedName|1': ['@cname(4)', /^1[385][1-9]\d{8}/],   // 相关人/企业
          'buyTime': '@datetime', // 购买时间
          'status|1': [1, 2], // 状态
        }],
    });
    return {
      code: 20000,
      data: items,
      total: 500,
    };
  },
};
