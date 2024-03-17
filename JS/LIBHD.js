var rule = {
     title: 'LIBHD',
     host: 'https://www.libhd.com',
     模板:'短视2',
     searchUrl: '/vodsearch/**-------------.html',
     url: '/vodshow/fyclass--------fypage---.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA',
     },
     class_name:'电影&剧集&动漫&综艺',
     class_url:'1&2&4&3',
     play_parse: true,
     tab_exclude:'网盘|云盘|SN|FX|LZ',
     lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        var next = html.link_next;
        if (/BTOL-HW|kuaizi/.test(from)) {
            input = {
                jx: 0,
                url: 'https://play.speechless.pw/bf/aiku/?url=' +url,
                parse: 1
            }
        } else {
            var paurl = request(HOST + '/static/player/' + from + '.js').match(/ src="(.*?)'/)[1];
            if (/https/.test(paurl)) {
                var purl = paurl + url + '&next=' + next + '&title=';
                input = {
                    jx: 0,
                    url: purl,
                    parse: 1
                }
            }
        }
     `,
     sniffer:1,
     isVideo:"http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
     isVideo:`js:
     log(input);
     if(/m3u8/.test(input)){
     input = true
     }else{
     input = false
     }
     `,
     limit: 6,
     推荐: '*',
     double: true, // 推荐内容是否双层定位
     一级: '.public-list-exp;a&&title;img&&data-src;.ft2&&Text;a&&href',
     搜索: '.public-list-box;.thumb-txt&&Text;.public-list-exp&&img&&data-src;.public-list-prb&&Text;a&&href',
    }