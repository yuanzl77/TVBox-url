var rule = {
     title: '嗷呜动漫',
     host: 'https://www.moefun.net',
     模板:'短视2',
     searchUrl: '/search/**----------fypage---.html',
     url:'/show/fyclass/page/fypage.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA',
     },
     play_parse: true,
     lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
        }
    `,
     limit: 6,
     class_name:'新番&番剧&剧场版',
     class_url:'NCCCCS-&uCCCCS-&VCCCCS-',
     double: false, // 推荐内容是否双层定位
     推荐: '*',
     一级: '.public-list-exp;a&&title;img&&data-src;.ft2&&Text;a&&href',
     二级:{
           "title":".slide-info-title&&Text;#qiAnDao_1&&Text",
           "img":".detail-pic&&data-original",
           "desc":".this-text&&Text;.this-text a:eq(0)&&Text",
           "content":".player-content&&Text",
           "tabs":".anthology-tab&&.swiper-wrapper&&a",
           "lists":".anthology-list-play:eq(#id) li"
          },
     搜索: '.public-list-box;.thumb-txt&&Text;.public-list-exp&&img&&data-src;.public-list-prb&&Text;a&&href'
    }
