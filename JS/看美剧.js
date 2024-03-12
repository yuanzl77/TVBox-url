var rule = {
    title:'看美剧',
    host:'https://www.kmeiju.cc',
    url:'/fyclass/page/fypage',
    filterable:0,//是否启用分类筛选,
    searchUrl:'/page/fypage?s=**',
    searchable:1,
    quickSearch:1,
    headers:{
        'User-Agent':'UC_UA',
    },
    timeout:5000,
    tab_rename:{'在线观看':'LR',},
    class_name:'电影&剧集&动画&记录',//静态分类名称拼接
    class_url:'movie_kmeiju&tv_kmeiju&fan_kmeiju&record',//静态分类标识拼接
    // class_parse: '.navlist li:gt(0):lt(7);a&&Text;a&&href;.*/(\\w+)',
    play_parse:true,
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
        } else if (/line3|line5/.test(from)) {
            var ifrwy = request(url, {
                headers: {
                    "User-Agent": MOBILE_UA,
                    "Referer": HOST
                }
            });
            let code = ifrwy.match(/var url = '(.*?)'/)[1].split('').reverse().join('');
            let temp = '';
            for (let i = 0x0; i < code.length; i = i + 0x2) {
                temp += String.fromCharCode(parseInt(code[i] + code[i + 0x1], 0x10))
            }
            input=temp.substring(0x0, (temp.length - 0x7) / 0x2) + temp.substring((temp.length - 0x7) / 0x2 + 0x7);
        } else{
            input
        }
    `,
    limit:5,
    推荐:'*',
    double:true, // 推荐内容是否双层定位
    一级:'.bt_img li;.lazy&&alt;.thumb.lazy&&data-original;.jidi span&&Text;a&&href',
    二级:{
        "title":"h1&&Text;.moviedteail_list&&li:eq(0)&&Text",
        "img":".dyimg.fl img&&src",
        "desc":".moviedteail_list&&li:eq(9)&&Text;;;.moviedteail_list&&li:eq(7)&&Text;.moviedteail_list&&li:eq(5)&&Text",
        "content":".yp_context&&p:eq(0)&&Text",
        "tabs":".ypxingq_t:eq(1) span",
        "lists":".paly_list_btn:eq(#id) a"
    },
    搜索:'*',
}
