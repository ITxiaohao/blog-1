(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{334:function(t,E,_){"use strict";_.r(E);var v=_(2),s=Object(v.a)({},function(){var t=this,E=t.$createElement,_=t._self._c||E;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("最近拿到了 TrustAsia 签发的 SSL 证书，在 Nginx 的环境下上了证书。猛然间发现："),_("strong",[t._v("友链界面没有绿锁")]),t._v("。走了不少弯路解决了问题，特此记录下。")])]),t._v(" "),_("h3",{attrs:{id:"_1-问题再现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题再现","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 问题再现")]),t._v(" "),_("p",[t._v("在首页等其他页面，页面地址栏前是有绿锁的。但是，一旦进入了友链界面，发现绿锁消失了，取而代之的是，一个感叹号。情况如下面这张图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/SSL%E8%BF%9E%E6%8E%A5%E5%B9%B6%E9%9D%9E%E5%AE%8C%E5%85%A8%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3/1.png",alt:""}})]),t._v(" "),_("p",[t._v("然后，进入其他页面，之前的绿锁也变成了感叹号。")]),t._v(" "),_("h3",{attrs:{id:"_2-问题排查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-问题排查","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 问题排查")]),t._v(" "),_("p",[t._v("最开始没有仔细观察感叹号的信息，以为是 SSL 证书没有上到位。仔细检查了 Nginx 的配置之后，确定了证书配置是没有错误的。")]),t._v(" "),_("p",[t._v("然后，又开始怀疑是不是没有让"),_("code",[t._v("http")]),t._v("强制跳转"),_("code",[t._v("https")]),t._v("。毕竟 Nginx 的配置是个大难题，但发现不论怎么强制跳转，均是有感叹号出现，遂排除。")]),t._v(" "),_("p",[t._v("最后，鬼使神差的看了信息："),_("code",[t._v("您与此网站的链接并非完全安全")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("显然，"),_("code",[t._v("SSL")]),t._v("证书配置和强制跳转"),_("code",[t._v("https")]),t._v("配置都是正确的。错误应该是："),_("strong",[t._v("访问了"),_("code",[t._v("http")]),t._v("的静态资源")]),t._v("。")])]),t._v(" "),_("h3",{attrs:{id:"_3-解决"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 解决")]),t._v(" "),_("p",[t._v("打开控制台，直接"),_("code",[t._v("Ctrl + F")]),t._v("搜索"),_("code",[t._v("http")]),t._v("。发现一张友链的头像地址，是"),_("code",[t._v("http")]),t._v("资源。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/SSL%E8%BF%9E%E6%8E%A5%E5%B9%B6%E9%9D%9E%E5%AE%8C%E5%85%A8%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3/2.png",alt:""}})]),t._v(" "),_("p",[t._v("在数据库将资源替换成"),_("code",[t._v("https")]),t._v("资源即可，期待的绿锁又回来了。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/SSL%E8%BF%9E%E6%8E%A5%E5%B9%B6%E9%9D%9E%E5%AE%8C%E5%85%A8%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3/3.png",alt:""}})])])},[],!1,null,null,null);E.default=s.exports}}]);