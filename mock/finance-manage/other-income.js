import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@id', // id
        'name': '@cword(2, 8)',   // 企业名称
        'income': '@integer(1, 100000)',   // 收入
        'createTime': '@datetime',   // 创建时间
        'status|1': [1, 2],   // 状态
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
        'name': '@cword(2, 8)',              //企业名称
        'contacts': '@cword(2, 4)',              //联系人
        'phone': /^1[385][1-9]\d{8}/,              //手机号
        'province': '@province',              //省
        'city': '@city',              //市
        'area': '@county',              //区
        'income': '@integer(1, 100)',              //收入
        'remarks': '@cparagraph(1)',              //备注
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
