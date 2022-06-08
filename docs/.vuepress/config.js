module.exports = {
  title: '个人航天柯姬',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  description: '道阻且长，行则将至',
  // port: '80',
  themeConfig: {
    //sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: 'JS',
        items: [
          { text: '学习笔记', link: '/js/' },
        ],
      },
      // {
      //   text: '项目开发',
      //   items: [
      //     { text: '全局api', link: '/project/api' },
      //     { text: '框架交互（idtApp）', link: '/project/idtApp'},
      //     { text: 'ngnix配置', link: '/project/ngnix' },
      //     { text: 'Jenkins项目应用', link: '/project/jenkins' },
      //   ],
      // },
      // {
      //   text: '移动开发',
      //   items: [
      //     { text: '开始教程', link: '/project/mobile/platform.md' },
      //     { text: '列表配置', link: '/project/mobile/grid.md' },
      //     { text: '表单配置', link: '/project/mobile/form.md'},
      //     { text: 'charles抓包工具使用', link: '/project/mobile/charles.md'}
      //   ],
      // },
      // {
      //   text: '版本更新日志',
      //   items: [
      //     { text: '版本更新日志', link: '/versionLog/' }
      //   ],
      // },
      {
        text: '学习站点',
        items: [
          { text: 'Vue', link: 'https://cn.vuejs.org/index.html' },
          { text: 'ElementUI', link: 'https://element.eleme.cn/' },
          { text: 'TypeScript', link: 'https://www.tslang.cn/docs/home.html' },
          { text: 'ES6', link: 'https://es6.ruanyifeng.com/' },
          { text: 'VuePress', link: 'https://www.vuepress.cn' },
        ],
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 3,
    smoothScroll: true,
    logo: '/top_logo.png',
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-footnote'));
      md.use(require('markdown-it-katex'));
    },
  },
  extraWatchFiles: ['../project/module', '../project/notice', ''],
};
