import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|11': [{
        id: '@id',
        username: '@word(4,10)',    //用户名
        nickname: '@cword(2,3)',     //昵称
        phone: /^1[385][1-9]\d{8}/, //手机号
        role_type: '@integer(1,3)', //角色
        status: '@integer(1,3)',    //状态
        create_time: '@datetime',   //添加时间
        password: '@word(4,10)',    //密码
        number:'@integer(0,3000000000)',    //数量
        ip:'220.231.210.22',    //ip
        location: '@cword(8,15)',     //地址
        price:"298",                  //价格
        price2:"29",                  //价格
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
        id: '@id',
        username: '@word(4,10)',    //用户名
        nickname: '@cword(2,3)',     //昵称
        phone: /^1[385][1-9]\d{8}/, //手机号
        role_type: '@integer(1,3)', //角色
        status: '@integer(1,3)',    //状态
        create_time: '@datetime',   //添加时间
        password: '@word(4,10)',    //密码
        number:'@integer(0,3000000000)',    //数量
        ip:'220.231.210.22',    //ip
        location: '@cword(8,15)',     //地址
        price:"298",                  //价格
        price2:"29",                  //价格
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
