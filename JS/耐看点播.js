var rule = {
	title:'耐看点播',
	host:'https://nkdyw.us',
	url:'/show/fyclass--------fypage---.html',
	filterable:0,//是否启用分类筛选,
	headers: {
       'User-Agent': 'MOBILE_UA',
       'Cookie': 'mx_style=white; showBtn=true; PHPSESSID=kg0gdqp1bfsktjjc15phrffe5t'
     },
	tab_rename:{'排序':'LR',},
	class_name:'电影&剧集&综艺&动画',
	class_url:'1&2&3&4',
	推荐:'*',
	一级:'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	searchUrl:'/nk/**----------fypage---.html',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	二级: {
			"title": "h1&&Text;.module-info-tag&&Text",
			"img": ".lazyload&&data-original",
			"desc": ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text",
			"content": ".module-info-introduction&&Text",
			"tabs": ".module-tab-item",
			"lists": ".module-play-list:eq(#id) a"
		},
	搜索:'.module-item;img&&alt;.lazyload&&data-original;.module-item-note&&Text;a&&href'
}