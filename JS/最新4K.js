// 永久网址：https://www.3840.ee
var rule = {
    title:'最新4K - LR',
    host:'https://www.1080.ee',
    url:'/vodtype/fyclass-fypage.html',
    searchUrl:'/vodsearch/**-------------.html',
    detailUrl:'/detail/fyid.html', //非必填,二级详情拼接链接
    filterable:0,//是否启用分类筛选,
    headers: {
       'User-Agent': 'MOBILE_UA',
       'Cookie': 'PHPSESSID=2nikgr4fo54pgi2dmblfvmau8a; _funcdn_token=6cacd3d87c20ef734f9075566d77eabb810878accffe85b09c4af5847c4fdea6'
     },
    tab_exclude:'夸克网盘|百度云盘|UC网盘',
    tab_rename:{'BD播放':'LR','HD5播放':'LR2','AI播放':'LR3','HD播放':'LR4','HD2播放':'LR5','HD6播放':'LR6',},
    class_name:'电影&剧集&动画&综艺',
    class_url:'1&2&3&20',
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        var next = html.link_next;
        var id = html.id;
        var nid = html.nid;
        var paurl = request(HOST + "/static/player/" + from + ".js").match(/ src="(.*?)'/)[1];
        if (/https/.test(paurl)) {
            var purl = paurl + url + "&next=" + next + "&id=" + id + "&nid=" + nid;
            input = {
                jx: 0,
                url: request(purl).match(/var .* = '(.*?)'/)[1],
                parse: 0
            }
        }
    `,
    推荐:'*',
    一级:'.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级:{
            'title':'.h1&&Text;.data:eq(0)&&Text',
            'img':'.lazyload&&data-original',
            'desc':'.hidden-xs&&Text;;;.data:eq(1)&&Text;.data:eq(4)&&Text',
            'content':'.detail-content&&Text',
            'tabs':'.stui-vodlist__head h3',
            'lists':'.stui-content__playlist:eq(#id) li'
         },
    搜索:'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href'
}
