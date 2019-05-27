# vue-seed

#### 安装项目
```
yarn install
```

#### 开发环境编译热更新
```
yarn run serve
```

#### 生产环境编译打包
```
yarn run build
```

#### 检查js和scss文件
```
yarn run lint
```

#### 检查js文件
```
yarn run lint:prettier
```

#### 修复js文件
```
yarn run prettier
```

#### 检查scss文件
```
yarn run lint:style
```

#### 执行单元测试
```
yarn run test:unit
```

## 项目目录介绍
- .editorconfig 编辑器的配置文件

- .eslintrc.js 代码检查配置文件

- .gitattributes git属性设置文件

- .gitignore git忽略的文件

- .prettierignore prettier检查格式忽略的文件

- .prettierrc prettier的检查配置文件

- .stylelintrc 样式的检查配置文件

- babel.config.js babel的配置文件

- commitlint.config.js git提交时的检查配置文件

- postcss.config.js css自动补充一些兼容的配置

- vue.config.js vue相关的配置文件

- scripts 一些脚本

- public 公共文件
  + index.html webpack打包时使用此文件作为模板文件
  + favicon.png 图标

- src 项目主文件
  + assets 静态文件存放目录（图片，图标字体，字体文件）
    - font 字体文件
    - images 图片文件
    - style 公共样式文件

  + config 项目的一些配置

  + directives vue自定义指令

  +filters vue管道

  + common
    - utils.js 与业务结合的工具方法
    - tools.js 与业务无关的工具方法

  + components 组件（可复用的公共组件）

  + views 页面

  + App.vue 基础组件

  + main.js 项目入口文件

  + router 路由

  + store vuex

  + services http通信相关文件
