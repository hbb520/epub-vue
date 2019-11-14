import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [
        {
          'id': '@id', // id
          'name': '@cword(4,8)',                  //企业名称
          'phone': /^1[385][1-9]\d{8}/,                 //手机号
          'resourceNumber': '@integer(1, 100)',                 //总资源数目
          'userNumber': '@integer(1, 1000)',                 //用户数量
          'browseNumber': '@integer(1, 1000000)',                 //总浏览量
          'downloadNumber': '@integer(1, 100000)',                 //总下载量
        }],
    });
    return {
      code: 20000,
      data: items,
      total: 500,
    };
  }
};
