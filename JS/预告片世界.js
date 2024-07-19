var rule = {
     title: '预告片世界 - LR',
     host: 'https://m.6huo.com',
     homeUrl: 'https://m.6huo.com/?view=list&nowplaying=1',
     searchUrl: '/?view=list&keyword=**&page=fypage',
     url:'/?view=list&fyclass&page=fypage',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA'
     },
     play_parse: false,
     lazy: '',
     limit: 6,
     class_name:'即将上映&最新预告 - LR',
     class_url:'later=1&',
     double: true, // 推荐内容是否双层定位
     推荐: '*',
     一级: '.col2-item;.col2-item-title&&Text;img&&src;.col2-item-info&&Text;a&&href',
     二级:{
           'title':'.movie-title&&Text',
           'img':'.lazyload&&data-original',
           'desc':'.tbody;td:eq(11);td:eq(7);td:eq(21);td:eq(17)',
           'content':'.player-detail p&&Text',
           'tabs':'.col2-item-title',
           'lists':'.col2-wrapper:eq(#id) a'
         },
     搜索: '*'
    }
