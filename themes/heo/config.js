const CONFIG = {
    HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
    HEO_LOADING_COVER: true, // 页面加载的遮罩动画
  
    HEO_HOME_BANNER_ENABLE: true,
  
    HEO_SITE_CREATE_TIME: '2025-01-06', // 建站日期，用于计算网站运行的第几天
  
    // 首页顶部通知条滚动内容，如不需要可以留空 []
    HEO_NOTICE_BAR: [
      { title: 'Holii 👋🏼', url: '' },
      { title: 'Soy Iris, este es mi espacio personal', url: '' },
      { title: 'Me apasiona el conocimiento y el desarrollo de nuevas tecnologías', url: '' },
      { title: 'Devota de la diversidad artrópoda, amante del código y el arcano arte matemático 🕷️✨', url: '' },
      { title: 'Nerd de ❤️', url: '' }
    ],
  
    // 英雄区左右侧组件颠倒位置
    HEO_HERO_REVERSE: false,
    // 博客主体区左右侧组件颠倒位置
    HEO_HERO_BODY_REVERSE: false,
  
    // 英雄区(首页顶部大卡)
    HEO_HERO_TITLE_1: 'Bienvenidos a',
    HEO_HERO_TITLE_2: 'mis apuntes',
    HEO_HERO_TITLE_3: 'BYIRISS.COM',
    HEO_HERO_TITLE_4: 'No te puedes perder',
    HEO_HERO_TITLE_5: 'La selección de apuntes de Lola',
    HEO_HERO_TITLE_LINK: '',
    // 英雄区遮罩文字
    HEO_HERO_COVER_TITLE: '¡Estudiemos algo hoy!',
  
    // 英雄区显示三个置顶分类
    HEO_HERO_CATEGORY_1: { title: 'Mis Favoritos', url: '/tag/Favoritos' },
    HEO_HERO_CATEGORY_2: { title: 'Populares', url: '/tag/Populares' },
    HEO_HERO_CATEGORY_3: { title: 'Apuntes Útiles', url: '/tag/Utiles' },
  
    // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
    HEO_HERO_RECOMMEND_POST_TAG: 'Recomendado',
    HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
    //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片
  
    // 右侧个人资料卡牌欢迎语，点击可自动切换
    HEO_INFOCARD_GREETINGS: [
      '¡Saludos matemagos!',
      '¡Aprendamos Juntos!'
    ],
  
    // 个人资料底部按钮
    HEO_INFO_CARD_URL1: '/about',
    HEO_INFO_CARD_ICON1: 'fas fa-user',
    HEO_INFO_CARD_URL2: 'https://github.com/irisdev06',
    HEO_INFO_CARD_ICON2: 'fab fa-github',
    HEO_INFO_CARD_URL3: '/about',
    HEO_INFO_CARD_TEXT3: 'Sobre mi',
  
    // 用户技能图标
    HEO_GROUP_ICONS: [
      {
        title_1: 'Pyton',
        img_1: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
        color_1: '#989bf8',
        title_2: 'Pandas',
        img_2: 'https://www.kaosmedia.com.co/images/byiris/pandas.svg',
        color_2: '#ffffff'
      },
      {
        title_1: 'Matplotlib',
        img_1: 'https://www.kaosmedia.com.co/images/byiris/Created_with_Matplotlib-logo.svg',
        color_1: '#57b6e6',
        title_2: 'Seaborn',
        img_2: 'https://www.kaosmedia.com.co/images/byiris/logo-seaborn.svg',
        color_2: '#4082c3'
      },
      {
        title_1: 'Ploty',
        img_1: 'https://www.kaosmedia.com.co/images/byiris/68747470733a2f2f706c6f746c792e636f6d2f616c6c5f7374617469632f696d616765732f69636f6e2d646173682e706e67.png',
        color_1: '#ffffff',
        title_2: 'numpy',
        img_2: 'https://www.kaosmedia.com.co/images/byiris/numpy.svg',
        color_2: '#ffffff'
      }
    ],
  
    HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
    HEO_SOCIAL_CARD_TITLE_1: '¿Ya conoces',
    HEO_SOCIAL_CARD_TITLE_2: 'KaosMedia?',
    HEO_SOCIAL_CARD_TITLE_3: 'Visitanos ahora',
    HEO_SOCIAL_CARD_URL: 'https://www.kaosmedia.com.co/',
  
    // 底部统计面板文案
    HEO_POST_COUNT_TITLE: 'Cantidad de Apuntes:',
    HEO_SITE_TIME_TITLE: 'Días en línea del sitio:',
    HEO_SITE_VISIT_TITLE: 'Número de visitas:',
    HEO_SITE_VISITOR_TITLE: 'Número de visitantes:',
  
    // *****  以下配置无效，只是预留开发 ****
    // 菜单配置
    HEO_MENU_INDEX: true, // 显示首页
    HEO_MENU_CATEGORY: true, // 显示分类
    HEO_MENU_TAG: true, // 显示标签
    HEO_MENU_ARCHIVE: true, // 显示归档
    HEO_MENU_SEARCH: true, // 显示搜索
  
    HEO_POST_LIST_COVER: true, // 列表显示文章封面
    HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大
  
    HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
    HEO_POST_LIST_SUMMARY: true, // 文章摘要
    HEO_POST_LIST_PREVIEW: false, // 读取文章预览
    HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错
  
    HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
    HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
    HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐
  
    HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
    HEO_WIDGET_ANALYTICS: false, // 显示统计卡
    HEO_WIDGET_TO_TOP: true,
    HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
    HEO_WIDGET_DARK_MODE: true, // 夜间模式
    HEO_WIDGET_TOC: true // 移动端悬浮目录
  }
  export default CONFIG
