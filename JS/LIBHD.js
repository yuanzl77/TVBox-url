var rule = {
     title: 'LIBHD',
     host: 'https://www.libhd.com',
     模板:'短视2',
     searchUrl: '/vodsearch/**-------------.html',
     url: '/vodshow/fyclass--------fypage---.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA',
       'Cookie': 'ecPopup=1; DS_Records=%7Blog%3A%5B%7B%22name%22%3A%22%E5%A5%BD%E4%B9%85%E6%B2%A1%E5%81%9A%22%2C%22url%22%3A%22%2Fvodsearch%2F%25E5%25A5%25BD%25E4%25B9%2585%25E6%25B2%25A1%25E5%2581%259A-------------.html%22%7D%5D%7D; PHPSESSID=2dv8ul3m993onuvvai2d3g03l5'
     },
     class_name:'电影&剧集&动漫&综艺',
     class_url:'1&2&4&3',
     play_parse: true,
     tab_exclude:'夸克网盘|百度云盘|UC网盘|SN|FX',
     lazy: '',
     limit: 6,
     推荐: '*',
     double: true, // 推荐内容是否双层定位
     一级: '.public-list-exp;a&&title;img&&data-src;.ft2&&Text;a&&href',
     搜索: '.public-list-box;.thumb-txt&&Text;.public-list-exp&&img&&data-src;.public-list-prb&&Text;a&&href',
    }