var rule = {
    title:'耐看点播',
    host:'https://nkdyw.us',
    模板:'mxpro',
    searchUrl:'/nk/**----------fypage---.html',
    detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
    url:'/show/fyclass--------fypage---.html',
    filterable:0,//是否启用分类筛选,
    headers: {
       'User-Agent': 'MOBILE_UA',
       'Cookie': 'mx_style=white; PHPSESSID=kg0gdqp1bfsktjjc15phrffe5t; mac_history_mxpro=%5B%7B%22vod_name%22%3A%22%E7%B4%AB%E5%B7%9D%C2%B7%E5%85%89%E6%98%8E%E4%B8%89%E6%9D%B0%22%2C%22vod_url%22%3A%22https%3A%2F%2Fnkdyw.us%2Fplay%2F177615-7-1.html%22%2C%22vod_part%22%3A%22%E7%AC%AC01%E9%9B%86%22%7D%5D; showBtn=true; guard=85e65e713rWD'
     },
    tab_rename:{'排序':'LR',},
    /*
    lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        var MacPlayerConfig={};
        eval(fetch(HOST + "/static/js/playerconfig.js").replace('var Mac','Mac'));
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        } else if (html.encrypt == '3') {
            url = base64Decode(url);
        }
        if (/.m3u8|.mp4/.test(url)) {
            input = url
        } else {
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
     `,*/
    二级: {
           'title': 'h1&&Text;.module-info-tag&&a:eq(2)&&Text',
           'img': '.lazyload&&data-original',
           'desc': '.module-info-item:eq(4)&&Text;.module-info-tag&&a:eq(0)&&Text;.module-info-tag&&a:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(1)&&Text;',
           'content': '.module-info-introduction&&Text',
           'tabs': '.module-tab-item',
           'lists': '.module-play-list:eq(#id) a'
         },
    搜索:'.module-item;img&&alt;.lazyload&&data-original;.module-item-note&&Text;a&&href'
}
