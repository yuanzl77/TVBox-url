var rule = {
     title: '喵物次元',
     host: 'https://catw.moe',
     模板:'短视2',
     searchUrl: '/index.php/vod/search/wd/**.html',
     url:'/index.php/api/vod#type=fyclass&page=fypage',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA',
       'Cookie': 'PHPSESSID=2ulqcjbt1tqfmheg5g880pr6in'
     },
     play_parse: true,
     lazy: '',
     limit: 6,
     tab_rename:{'喵物次元':'LR',},
     class_name:'TV动画&剧场版&特摄剧',
     class_url:'1&2&20',
     double: false, // 推荐内容是否双层定位
     推荐: '.public-list-exp;a&&title;img&&data-src;.ft2&&Text;a&&href',
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
