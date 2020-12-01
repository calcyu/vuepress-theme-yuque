## 简介
一款语雀样式风格的Vuepress主题。

## 使用主题
```bash
# 文档网站脚手架
yarn create vuepress-site
# 切换目录
cd docs
# 安装依赖
yarn 
# 安装主题
yarn add -D vuepress-theme-yuque
```

## 修改配置
修改配置文件`src/.vuepress/config.js`
```javascript
// 省略其他配置项...
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: 'vuepress-theme-yuque',
  themeConfig: {
    repo: '',
    editLinks: false,
// 省略其他配置项...
...
```

