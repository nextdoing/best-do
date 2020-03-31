module.exports = {
  // 多页面配置
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
  // 公共资源路径设置
  publicPath: "",
  // 支持svg图标
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" });
  },
  // css相关配置
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: false
  },

  productionSourceMap: false
};
