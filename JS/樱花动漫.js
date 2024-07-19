var rule = {
     title: '樱花动漫',
     host: 'http://yinghua.us',
     searchUrl: '/vs.html?wd=+**&submit=',
     url:'/fyclass-fypage.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable:0,//是否启用分类筛选,
     headers: {
       'Cookie': 'PHPSESSID=bh5ns8ildeob712kaopfjpvnev; tips=ok; user_id=5878; user_name=776514; group_id=2; group_name=%E9%BB%98%E8%AE%A4%E4%BC%9A%E5%91%98; user_check=847f0e5af4214b585d35b12d10cfc022; user_portrait=%2Fstatic%2Fimages%2Ftouxiang.png',
       'User-Agent': 'MOBILE_UA'
     },
     lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        var MacPlayerConfig={};
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/.m3u8|.mp4/.test(url)) {
            input = url
        } else {
        eval(fetch(HOST + "/static/js/playerconfig.js").replace('var Mac','Mac'));
        var list = MacPlayerConfig.player_list[from].parse;
            input={
                jx:0,
                url:list+url,
                parse:1,
                header: JSON.stringify({
                    'referer': HOST
                })
            }
        }
     `,
     limit: 6,
     class_name:'新旧番剧&欧美动漫',
     class_url:'vt20&vt21',
     double: false,
     推荐: '*',
     一级: '.hl-vod-list li;a&&title;a&&data-original;.hl-lc-1&&Text;a&&href',
     二级:{
            'title':'.h1&&Text;.data:eq(0)&&Text',
            'img':'.hl-item-thumb&&data-original',
            'desc':'.hl-infos-content&&.hl-text-conch&&Text',
            'content':'.hl-content-text&&Text',
            'tabs':'.hl-tabs&&a',
            'lists':'.hl-plays-list:eq(#id)&&li'
         },
     搜索: '.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href'
    }