import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@increment', // id
        'contacts': '@cname', // 联系人
        'phone': /^1[385][1-9]\d{8}/, // 手机号
        'email': /^1[385][1-9]\d{8}/, // 邮箱
        'idea': '@cword(2,3)', // 消息
        'submitTime': '@datetime', // 提交时间
        'remarks|0-1': '@cword(2,3)', // 提交时间
      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
