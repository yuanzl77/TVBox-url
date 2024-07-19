var rule = {
    title:'耐看点播',
    host:'https://nkvlog.com',
    模板:'mxpro',
    searchUrl:'/nk/**----------fypage---.html',
    detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
    url:'/show/fyclass--------fypage---.html',
    filterable:0,//是否启用分类筛选,
    headers: {
       'User-Agent': 'MOBILE_UA',
       'Cookie': 'mx_style=white; showBtn=true; PHPSESSID=f1nl4r0m5lt3agnac82jfbmrj8; guard=8152a9d2Dtc4171961779198'
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