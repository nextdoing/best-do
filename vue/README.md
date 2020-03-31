# vue3多页面应用

官方脚手架配置改动

```javascript
pages: {
    home: {
      // page 的入口
      entry: "src/platform/index/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Home Page"
    },
    about: {
      // page 的入口
      entry: "src/platform/about/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "about.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "About Page"
    }
  },
```

各平台模块拥有自己独立的入口文件、路由文件、数据状态文件、页面文件，组件、公共类等代码层面的逻辑可以共享使用，但是数据无法共享，因为在不同的平台跳转会导致页面刷新，内存数据重载！如果要共享内存数据，则多系统的配置在路由上做区分，不做代码层面的分割。