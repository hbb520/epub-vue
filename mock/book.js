import Mock from 'mockjs';

export default {
  detail: () => {
    const items = Mock.mock({
      'items': {
        'id': '@id', // id
        'title': '@cword(2, 8)',  //标题
        // 'url': '../../../static/books/TeaWar.epub',       // 路径
        'url': '../../../static/books/113933.epub',       // 路径
        // 'url': '../../../static/books/dpcq.epub',       // 路径
        // 'url': '../../../static/imgs/book.png',       // 路径
      }
    });
    return {
      code: 20000,
      data: items,
      total: 500
    };
  }
};
