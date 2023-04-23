import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from 'vuepress'
import { webpackBundler } from "@vuepress/bundler-webpack"
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'


export default defineUserConfig({
  dest: "dist",
  // base:"/huangjin/", //base后配置仓库地址

  /*plugins:[],  */
  lang: 'zh-CN',
  title: "学而时习之-不亦说乎~",
  description: "Just playing around",
  /* 需要被注入到当前页面的 HTML <head> 中的标签 */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    /* 百度统计 all */
    ['script', {}, `
    var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?41cd09aa7844a19c12b3370eb0e2f9d9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
  `],
    /* 微信访问统计 */
    // ['script', { 'src': "https://res.wx.qq.com/open/js/jweixin-1.6.0.js" }]

  ],

  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "沈路威",
    authorAvatar: "/logo.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    /* 最后更新时间戳 */
    lastUpdated: true,
    lastUpdatedText: "最后更新",
    /* 评论 */
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'UQWKqskm8RIbNaRnoVq0bVSw-gzGzoHsz', // your appId
        appKey: 'hcSTShCWosnraWi843lDr50e', // your appKey
        placeholder: '填写邮箱可以收到回复提醒哦！',
        hideComments: true, // 全局隐藏评论，默认 false
        visitor: false,// 阅读量统计
        notify: true
      },
    },
    /* xicon-content */
    // 返回顶部
    plugins: [
      backToTopPlugin(),
    ],

    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        // {
        //   text: "Vue",
        //   children: ["Vue"],
        // },
        // {
        //   text: "Node",
        //   children: ["Node"],
        // },
        // {
        //   text: "八股文",
        //   children: ["Baguwen"],
        // },
        {
          text: "study",
          children: ["study"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Bug", link: "/docs/Bug" },
      { text: "分类", link: "/tags/css/1/" },
      { text: "学习", link: "/docs/theme-reco/study" },
      {
        text: "求职",
        children: [
          { text: "个人简历", link: "/docs/about" },
          { text: "求职广场", link: "/blogs/category1/job/" },
        ],
      },
    ],


  }),
});
