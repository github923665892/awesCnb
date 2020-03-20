## 简介

干巴巴写一个博客园皮肤不是一件容易的事. 因为你无法像用前端框架写代码那样在本地调试你的 js, 所以我用空闲时间写了这个小项目.

1. 你可以使用它创建自己的博客园皮肤.最后打包生成的 js 文件,供你自己使用.

2. 你可以安装这个项目中的皮肤在你的博客园.这不是一个简单的博客园皮肤,而是一个合集.安装之后,你可以快速切换其他皮肤.

3. 你可以使用它创建一个博客园皮肤.并将它贡献给项目,园友就能够切换到你的皮肤了.

## 安装

1.你的博客首页 -> 管理 -> 设置  

2.设置博客默认皮肤为 **Custom**  

3.复制如下 css 粘贴到 **页面定制 CSS**

```css
:root{--sk-size:60px;--sk-color:#ffb3cc}
#loading{position:fixed;top:0;left:0;right:0;height:100vh;display:flex;justify-content:center;align-items:center;background-image:url(https://guangzan.gitee.io/awescnb/assets/images/background/cell.gif);z-index:99999}
.sk-fold{width:var(--sk-size);height:var(--sk-size);position:relative;transform:rotateZ(45deg)}
.sk-fold-cube{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}
.sk-fold-cube:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--sk-color);animation:sk-fold 2.4s infinite linear both;transform-origin:100% 100%}
.sk-fold-cube:nth-child(2){transform:scale(1.1) rotateZ(90deg)}
.sk-fold-cube:nth-child(4){transform:scale(1.1) rotateZ(180deg)}
.sk-fold-cube:nth-child(3){transform:scale(1.1) rotateZ(270deg)}
.sk-fold-cube:nth-child(2):before{animation-delay:.3s}
.sk-fold-cube:nth-child(4):before{animation-delay:.6s}
.sk-fold-cube:nth-child(3):before{animation-delay:.9s}
@keyframes sk-fold{
0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}
25%,75%{transform:perspective(140px) rotateX(0);opacity:1}
100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}
```

4.<input type="checkbox" checked="checked" /> 禁用默认 css 样式  

5.复制如下 js 粘贴到 **博客侧边栏公告（支持 HTML 代码） （支持 JS 代码）** 没开通 js 权限请先开通.

```js
  <script src="https://guangzan.gitee.io/awescnb2.0/index.js"></script>
  <script>$.awesCnb({
               // 在这里写入配置
               // 什么都不写代表使用默认配置
          });
  </script>
```

6.复制如下 html 粘贴到 **页首 HTML**.

```html
<div id="loading">
  <div class="sk-fold">
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
  </div>
</div>
```

7.保存.

## 目录

这里只简单的罗列基本的项目目录,让你清楚它是怎么运行的.如果你有问题或建议欢迎交流.

```
├─config  webpack配置
└─src
    │  main.js 项目入口
    ├─assets 静态文件
    ├─constants 常量
    │      default.js  默认配置
    │      elements.js 博客园常用标签class\id
    │      env.js 环境变量
    │
    ├─plugins 公共插件
    │
    ├─templates 博客园的html
    │
    └─themes
        ├─awescnb 其他皮肤继承的 class
        │  │  index.js
        │
        └─reacg 新增的皮肤
            │  index.js
```

## 创建新的皮肤

首先你需要将[项目](https://gitee.com/guangzan/awescnb2.0) clone 到本地 `git clone https://gitee.com/guangzan/awescnb2.0.git`.

1. 在 themes 文件夹下创建一个新文件夹,比如 demo.
2. 在 demo 文件夹中创建 index.js.
3. 在 demo 文件夹中创建 index.css. 皮肤样式
4. 在 demo/index.js 中粘贴以下代码.

```js
import './index.css' // 引入创建好的 样式文件
import AwesCnb from '@/themes/awescnb' // 引入公共的类

class Demo extends AwesCnb {
    constructor() {
        super()
        super.init() // 初始化父类的插件
        this.init()
    }

    init() {
        this.hideLoading()
    }
    // to do something
}

new Demo()
```

&nbsp;&nbsp;用它来创建一个博客园主题,只需要继承 class(awescnb). 就可以继承包括但不限于下面这些插件.或者不继承单独使用你需要的插件.
即使你继承了所有插件, 它们也能在博客园设置页面快速开启和关闭.

-   头部进度条
-   看板娘(3D 模型)
-   音乐播放器
-   主题色
-   自定义背景图片或颜色
-   华丽的点击特效
-   自定义网站图标和标题
-   ...

5. 打开`config / webpack.base.js`并进行以下更改：

```js
entry:{
    index: './src/main.js',
    reacg: './src/themes/reacg/index.js',
+   demo: './src/themes/reacg/demo.js',
},
```

6. 运行命令

-   `npm i` 安装项目依赖
-   `npm start` 进行本地开发

templates 文件夹用于存储博客园的 HTML,使用 `HtmlWebpackPlugin` 将制定的 html 注入 index.html。
运行`npm start`将在本地启动博客园首页。如果您想启动其他页面，请更改 `config/webpack.dev.js`.

```js
new HtmlWebpackPlugin({
    filename: 'index.html',
-   template: 'src/templates/index.html',
+   template: 'src/templates/post.html', // Or other pages
    inject: 'body',
}),
```

-   `npm run build` 打包

项目打包会生成两个 js 文件在 dist 文件夹下.

-   theme.js, 你可以把它放到你的博客中自己使用.
-   index.js, 这个文件是用来根据用户所选的主题加载对应的 theme.js.

> 如果你想只用 theme.js, 你需要在 themes/awescnb/indexjs 中加入以下代码.

```js
import userOptions from '@/assets/js/merge'
window.userOptions = userOptions
window.opts = userOptions
```

这样你就能单独使用打包好的 themejs 文件.

## 在博客园安装这个皮肤



## 贡献

1. Fork 主仓库到自己账号成为副本仓库
2. 在副本仓库完成代码贡献（添加、删除、修改代码等等）
3. 将副本修改的内容给主仓库提交 PR ( Pull Requests )
4. 审核你提交的代码，并决定是否合并

## 计划

**调整**

-   merge.js √
-   在入口引入 merge √
-   themejs 从 mergejs 导入用户选项 x
-   组织目录 √
-   Window.useroptions √
-   调整 plugins 位置 √
-   根据 env 加载 http 文件 x
-   eslint √
-   prettier √
-   stylelint x
-   babel √
-   autoprefixer √
-   postcss-import √
-   cssnano √
-   sourcemap
-   bug 打包多出一个 js
-   可单独打包一个 themejs

**通用备选插件**

-   自定义 body 背景图片\背景色透明度 √
-   图片灯箱 √
-   代码行号
-   代码高亮
-   文章目录
-   文章底部签名
-   弹幕
-   返回顶部

**class awescnb**

-   NProgress √
-   组织常用 css √
-   live2d √
-   点击特效 √
-   背景包括颜色和图像 √
-   主题颜色 √
-   favicon 和网站标题 √
-   音乐播放器 √
-   隐藏 loading √
-   在开发环境中导入 cnblog.common.css √
-   显示评论列表的用户头像

**reacg**

-   自定义二维码
-   icons √
-   footer √
-   移动端菜单 √
-   图标 √

## 联系

-   QQ：923665892
-   QQ 群：541802647
-   微信：wx923665892

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".
