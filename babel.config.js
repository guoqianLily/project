module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk",
        "postcss-pxtorem": {
          "rootValue": 16,
          "propList": ["*"]
        }
      }
      
    ]
  ]
}

