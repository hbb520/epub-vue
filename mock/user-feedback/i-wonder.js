import Mock from 'mockjs';

export default {
  list: () => {
    const items = Mock.mock({
      'items|10': [{
        'id': '@increment', // id
        'name': "@cword(2,10)",   // 知识名称
        'problem': "@cword(5,10)", // 问题
        'submitter': /^1[385][1-9]\d{8}/,  //提交人
        'submitTime': '@datetime', // 提交时间
        'problemStatus|1': [1, 2], // 问题状态
        'replyContent|0-2': [
          {
            'data': Mock.Random.cparagraph(2),
            'time': '@datetime'
          }
        ], // 回复
      }]
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
