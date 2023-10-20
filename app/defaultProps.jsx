import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/admin',
        // name: 'Dashboard',  // 管理页
        // icon: <CrownFilled />,
        // access: 'canAdmin',
        // component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: 'Level 1 Page',  // 一级页面
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            // component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: 'Level 2 Page',  // 二级页面
            icon: <CrownFilled />,
            // component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: 'Level 3 Page',  // 三级页面
            icon: <CrownFilled />,
            // component: './Welcome',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design',
      desc: 'Hangzhous well-known UI design language', 
      url: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: 'Alibaba Groups next-generation data visualization solution',  // 蚂蚁集团全新一代数据可视化解决方案
      url: 'https://antv.vision/',
      target: '_blank',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: 'Professional UI component library',  // 专业级 UI 组件库
      url: 'https://procomponents.ant.design/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: 'Plugin-based enterprise-level front-end application framework.',  // 插件化的企业级前端应用框架
      url: 'https://umijs.org/zh-CN/docs',
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: 'Possibly the most comprehensive micro-front-end solution youve seen 🧐',  // 可能是你见过最完善的微前端解决方案🧐
      url: 'https://qiankun.umijs.org/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: 'Yuque',
      desc: 'Knowledge creation and sharing tool',  // 知识创作与分享工具
      url: 'https://www.yuque.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen',
      desc: 'Sketch toolkit',  // Sketch 工具集
      url: 'https://kitchen.alipay.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: 'Dumi',
      desc: 'A documentation tool born for component development scenarios',  // 为组件开发场景而生的文档工具
      url: 'https://d.umijs.org/zh-CN',
    },
  ],
};
