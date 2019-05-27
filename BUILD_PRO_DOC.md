# vue中使用.js文件代替.vue

1. 安装

   vue-class-component

   vue-property-decorator

   @babel/plugin-proposal-class-properties

   @babel/plugin-proposal-decorators

   @babel/plugin-syntax-dynamic-import

   html-loader

2. 修改 babel.config.js 文件

```javascript
module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ]
  ]
};
```

3. 添加 vue.config.js 文件

```javascript
const path = require('path')

// __dirname当前文件所在目录路径
const resolve = dir => path.join(__dirname, dir)
// 项目的基本路径(打包后放到服务器上的地址):是否为production模式，是的话打包时比如可以打包到域名的admin下
// 可以按如下写，如果时开发模式，写/就可以
const BASE_URL = process.env.NODE_ENV === 'production' ? '/admin' : '/'

module.exports = {
  publicPath: BASE_URL,
  // 柯里化配置webpack
  chainWebpack: (config) => {
    // 给路径配置别名（必须使用绝对路径，所以引用node中的path模块）
    // @/api相当于***/***/src/api
    config.resolve.alias.set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('vue$', 'vue/dist/vue.js')
      // html Loader
    config.module
    .rule('html')
    .test(/\.html$/)
    .use('html-loader')
      .loader('html-loader')
      .end()
  },
  productionSourceMap: false, // 打包时不生成.map文件
  // devServer: {
  //   proxy: 'http://localhost:3000' // 把任何未知请求都代理到这个url来满足跨域的需求
  // }
}

```

问题：安装html-loader和使用之后会导致模板public/index.html中的图片路径报错

解决方法：配置html-loader时添加这个loader接管的范围.include.add(resolve('src')).end()，因为public/index.html中的图片路径语法是模板语法，默认了匹配了html,然后用了html-loader,然后他就按照html来解析，然后ejs的语法就原样输出了



# 配置eslint和prettier

1. 安装

   prettier

   check-prettier

   eslint-config-prettier

   eslint-plugin-prettier

2. 在package.json文件中添加要检查的文件

   ```JSON
   "checkFiles": [
    "src/**/*.js*",
    "src/**/*.scss",
    "scripts/**/*.js"
     ],
   ```

3. 添加scripts命令

   ```JSON
   "lint:prettier": "check-prettier lint",
   "prettier": "node ./scripts/prettier.js",
   ```

4. 添加.prettierrc和.prettierignore文件

5. 添加prettier相关的配置逻辑
   详情请看目录下的scripts文件夹，prettier.js和getPrettierFiles.js

6. .eslintrc.js文件修改

   ```json
   extends: [
     ...
     'prettier',
     'plugin:prettier/recommended'
   ],
   rules: {
     'prettier/prettier': 'error',
     ...
   }
   ```

##### prettier常用配置项

```javascript
module.exports = { 
    "printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80 
    "tabWidth": 2, //一个tab代表几个空格数，默认为80  
    "useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减   
    "singleQuote": false, //字符串是否使用单引号，默认为false，使用双引号   
    "semi": true, //行位是否使用分号，默认为true   
    "trailingComma": "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"   
    "bracketSpacing": true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar } 
    "parser": "babylon" //代码的解析引擎，默认为babylon，与babel相同。 
}
```



# 配置stylelint

1. 安装

   stylelint

   stylelint-config-standard

   stylelint-scss

   stylelint-webpack-plugin

2. 添加scripts命令

   ```JSON
   "lint:style": "stylelint src/**/*.scss --syntax scss",
   ```

3. 添加.stylelintrc文件



# 配置commitlint

1. 安装

   husky

   @commitlint/cli

   @commitlint/config-angular

2. 添加scripts命令

   ```JSON
   "commitmsg": "commitlint --color --edit"，
   
   "husky": {
     "hooks": {
       "pre-commit": "yarn lint",
       "commit-msg": "commitlint --color --edit"
     }
   },
   ```

3. 添加commitlint.config.js文件