var rule = {
     title: 'ELFUN',
     host: 'https://www.lffun.com',
     模板:'短视2',
     searchUrl: '/vodsearch/**-------------/',
     url:'/index.php/api/vod#type=fyclass&page=fypage',
     detailUrl:'/voddetail/fyid.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA'
     },
     play_parse: true,
     lazy: '',
     limit: 6,
     class_name:'番剧&剧场&特摄剧',
     class_url:'34&35&36',
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
     二级: {
         "title": "h1&&Text;.hl-ma0&&Text",
         "img": ".module-item-pic&&img&&data-src",
         "desc": ".slide-info-remarks&&Text;.gen-search-form&&li:eq(4)&&Text;.gen-search-form&&li:eq(5)&&Text;.gen-search-form&&li:eq(2)&&Text;.gen-search-form&&li:eq(3)&&Text",
          "content": "#height_limit&&Text",
          "tabs": ".anthology-tab&&a",
          "lists": ".anthology-list-box:eq(#id)&&li"
     },
     搜索: '.public-list-box;.public-list-exp&&title;.public-list-exp&&img&&data-src;.public-list-prb&&Text;a&&href'
    }