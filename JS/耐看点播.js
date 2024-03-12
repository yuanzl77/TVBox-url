muban.mxpro.二级.img = '.lazyload&&data-original';
var rule = {
	title:'耐看点播',
	模板:'mxpro',
	host:'https://nkdyw.us',
	url:'/show/fyclass--------fypage---.html',
	filterable:0,//是否启用分类筛选,
	class_parse:'li.swiper-slide.navbar-item;span&&Text;a&&href;/(\\d+).html',
	cate_exclude:'福利',
	一级:'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	searchUrl:'/nk/**----------fypage---.html',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	搜索:'.module-item;img&&alt;.lazyload&&data-original;.module-item-note&&Text;a&&href',
}