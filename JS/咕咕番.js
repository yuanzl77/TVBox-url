var rule = {
     title: '咕咕番',
     host: 'https://www.gugufan.com',
     模板:'短视2',
     searchUrl: '/index.php/vod/search/wd/**.html',
     url:'/index.php/api/vod#type=fyclass&page=fypage',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA',
       'Cookie': 'PHPSESSID=fa32urmgd2slnh8f4k8rgrebci; ecPopup=1; user_id=167674; user_name=zhulr77; group_id=2; group_name=%E8%90%8C%E6%96%B0; user_check=8dd17f0db0477d573f6a48b6469ee8c8; user_portrait=%2Fstatic%2Fimages%2Ftouxiang.png'
     },
     class_name:'连载新番&完结动画&动漫电影&特摄动画',
     class_url:'6&7&21&23',
     play_parse: true,
     lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        var MacPlayerConfig={};
        eval(fetch(HOST + "/static/js/playerconfig.js").replace('var Mac','Mac'));
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
     `,
     limit: 6,
     推荐: '.public-list-exp;a&&title;img&&data-src;.ft2&&Text;a&&href',
     double: false, // 推荐内容是否双层定位
     一级:`js:
        let body = input.split("#")[1];
        let t = Math.round(new Date / 1e3).toString();
        let key = md5("DS" + t + "DCC147D11943AF75");
        let url = input.split("#")[0];
        body = body + "&time=" + t + "&key=" + key;
        print(body);
        fetch_params.body = body;
        let html = post(url, fetch_params);
        let data = JSON.parse(html);
        VODS = data.list.map(function(it) {
            it.vod_pic = it.vod_pic.replace(/mac/, "https");
            return it
        });
    `,
     搜索: '.public-list-box;.thumb-txt&&Text;.public-list-exp&&img&&data-src;.public-list-prb&&Text;a&&href'
    }
