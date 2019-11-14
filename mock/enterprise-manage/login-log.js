import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'username': '@cname(2)',   // 用户名
        'name': '@cname(4)',   // 企业名称
        'loginTime': '@datetime',   // 登录时间
        'ipAddress': '@ip',   // IP地址
        'address': '@county(true)',   // 地址
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
        'name': '@cword(4,8)',                  //企业名称
        'contacts': '@cname()',              //联系人姓名
        'phone': /^1[385][1-9]\d{8}/,                 //手机号
        'province|1': [1, 2, 3],              //省
        'city|1': [11, 12, 13],                  //市
        'area|1': [111, 112, 113],                  //区
        'address': '@county(true)',               //地址
        'account': '@word(6, 12)',               //账号
        'password': '@word(8, 16)',              //密码
        'confirmPassword': '@word(8, 16)',       //确认密码
        'backstageAccount': '@word(6, 12)',      //账号(后台)
        'backstagePassword': '@word(8, 16)',     //密码(后台)
        'backstageConfirmPassword': '@word(8, 16)',     //确认密码(后台)
        'startTime': '@datetime',             //开始时间
        'effectiveTime': '@datetime',         // 有效期
        'accountPrice': '@integer(1, 100)',         // 账号价格
        'empowerTime': '@integer(1, 7)',         // 授权时间
        'empowerNumber': '@integer(1, 100)',         // 授权人数
        'resourceNumber': '@integer(1, 100)',         // 每天最多借阅资源数量
        'status|1': [1, 2],                    // 状态
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  },
  resource: () => {
    const items = Mock.mock({
      'items': {
        'id': '@id', // id
        'name': '@cword(4,8)',                  //企业名称
        'username': '@cname(2)',   // 用户名
        'contacts': '@cname()',              //联系人姓名
        'effectiveTime': '@datetime',         // 有效期
        'accountPrice': '@integer(1, 100)',    // 账号价格
        'configure|1-2': [{                   // 配置
          'time': '@datetime',                  //时间
          'resourceList|1-20': [
            '@cword(4, 8)',
          ]                // 资源
        }]
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
