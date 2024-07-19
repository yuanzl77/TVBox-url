var rule = {
     title: 'wo4k - LR',
     host: 'https://www.wo4k.com',
     searchUrl: '/wosearch/**----------fypage---.html',
     url:'/pianku/fyclass--------fypage---.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'Mozilla/5.0 (compatible) AppleWebKit/534.21 (KHTML, like Gecko) Chrome/11.0.682.0 Safari/534.21'
     },
     play_parse: false,
     lazy:'',
     limit: 6,
     class_name:'电影&剧集',
     class_url:'1&2',
     double: true,
     推荐: `js:
        pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
        var d = [];
        var html = request(input);
        var list = pdfa(html, 'body&&.module-item');
        list.forEach(it => {
            d.push({
                title: pdfh(it, 'a&&title'),
                desc: pdfh(it, '.video-class&&Text') + '分 / ' + pdfh(it, '.module-item-text&&Text'),
                pic_url: pd(it, '.lazy&&data-src'),
                url: pd(it, 'a&&href')
            });
        })
        setResult(d);
    `,
     一级: `js:
       pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
        var d = [];
        if (MY_CATE !== '1' && MY_CATE !== '2') {
            let turl = (MY_PAGE === 1)? 'index' : 'index_'+ MY_PAGE;
            input = HOST + MY_CATE + turl + '.html';
        }
        var html = request(input);
        var list = pdfa(html, 'body&&.module-item');
        list.forEach(it => {
            d.push({
                title: pdfh(it, 'a&&title'),
                desc: pdfh(it, '.video-class&&Text') + '分 / ' + pdfh(it, '.module-item-text&&Text'),
                pic_url: pdfh(it, '.lazy&&data-src'),
                url: pd(it, 'a&&href')
            });
        })
        setResult(d);
     `,
     二级: {
              'title': 'h1&&Text',
              'img': '.lazyload&&data-src',
              'desc': '.module-info-item-content:eq(8)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-tag-link:eq(3)&&Text;.module-info-tag-link:eq(4)&&Text',
              'content': '.vod_content&&Text',
              tabs:'js:TABS = ["磁力 - LR"]',
              lists:`js:
              log(TABS);
              pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
              LISTS = [];
              var dd=[];
              TABS.forEach(function(tab) {
                  if (/磁力/.test(tab)) {
                     var d = pdfa(html, '.copy');
                     d = d.map(function(it) {
                     var title = pdfh(it, 'a&&title');
                     log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
                     var burl = pd(it, 'a&&data-clipboard-text');
                     log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
                     return title + '$' + burl
                  });
                  LISTS.push(d)
                }
             });
             `,
          },
     搜索: '.module-search-item;h3&&Text;.lazy&&data-src;.video-class&&Text;a&&href'
    }
