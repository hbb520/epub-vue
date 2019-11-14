import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|11': [{
        id: '@id',
        title: '@cparagraph',
        'status|1': ['published', 'draft', 'deleted'],
        author: 'name',
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)',
        number: '@word(10,13)',
        username: '@integer(10000000000,90000000000)',
        phone: '@integer(10000000000,90000000000)',
        accumulated_recharge: '@integer(0,100000)',   //累计充值
        member_source: '@integer(1,3)', //会员来源
        user_source: '@cword(4)',//用户来源
        status: '@integer(1,3)', //状态
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
      'items':{
        id: '@id',
        title: '@cparagraph',
        'status|1': ['published', 'draft', 'deleted'],
        author: 'name',
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)',
        number: '@cword(10,13)',
        username: '@integer(10000000000,90000000000)',
        phone: '@integer(10000000000,90000000000)',
        accumulated_recharge: '@integer(0,100000)',   //累计充值
        member_source: '@integer(1,3)', //会员来源
        user_source: '@cword(4)',//用户来源
        status: '@integer(1,3)', //状态
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
