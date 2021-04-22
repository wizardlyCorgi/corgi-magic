module.exports = {
  // 按需引入element
  //  :"presets": [["es2015", { "modules": false }]],直接按照element官网来会报一个打包错误!!!
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', { modules: false }]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
