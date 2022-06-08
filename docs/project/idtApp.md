# 框架交互方法 idtApp
## idtApp
交互类方法放在顶层页面window下的idtApp中
::: warning 提醒
idtApp仅存在于顶层页面window中，子页面调用时使用parent.window.idtApp.方法名进行调用
:::
## 页面交互类 idtApp.page
页面交互类方法

### openPage
`idtApp.page.openPage(pageInfo, type)`

打开新页面
* 参数：

  * `{Object} pageInfo`：页面信息对象

    * `{String} id`（必须）： 页面id，页面唯一标识

    * `{String} pId`： 父页面id，如果为内部打开必须包含pId
    * `{String} nodeName`（必须）： 页面显示中文名
    * `{String} type`： 类型，用于拓展用
    * `{String} url`： 页面url地址
    * `{String} imgType`： 页面图标
    * `{String} openType`： 页面打开类型，仅内部打开时生效，如果为'drawer'则从右侧以抽屉方式打开，否则以分割形式打开
    * `{String} width`： 页面宽度，仅内部打开时生效，支持百分比（例：'60%'）和px（注：像素仅在抽屉式时生效）
    * `{String} pageType`：页面文件类型，可选值为：
      * `html`（默认）：当前页面为html文件，将以iframe形式加载

      * `vue`: 当前页面为vue文件，将以component组件形式加载
    * `{String} mode`：页面加载模式，可选值为：
      * `url`（默认）：加载`url`

      * `template`: 将`content`中的内容加载到页面中
    * `{String} content`：页面模板，需为可渲染的html代码
  * `{String} type`：页面打开方式，可选值为：
    * `tab` （默认）：在新页面或新选项卡中打开

    * `inner`: 在当前页面中已子页方式打开
* 用法

    打开新页面
* 示例
  * 新选项卡中打开
    ``` js 
    parent.window.idtApp.page.openPage({
      id: 'test',
      nodeName: '测试页面',
      type: '',
      url: './test.html',
      imgType: 'el-icon-edit',
      mode: 'url',
    }, 'tab')
    ```
  * 在`id`为`firstPage`的页面内部抽屉式打开`test`页
    ``` js 
    parent.window.idtApp.page.openPage({
      id: 'test',
      pId: 'firstPage',
      nodeName: '测试页面',
      type: '',
      openType: 'drawer',
      url: './test.html',
      imgType: 'el-icon-edit',
      mode: 'url',
      width: '1200px'
    }, 'inner')
    ```
### closePage
`idtApp.page.closePage(pageInfo)`

关闭指定页面
* 参数：

  *  `{Object} pageInfo`（必须）： 页面信息

* 用法  

    关闭指定页面
* 示例
  * 关闭选项卡中`id`为`test`页面
    ``` js 
    var pageInfo = window.idt_iframePageInfo
    parent.window.idtApp.page.closePage(pageInfo)
    ```
  
### getPageInfo
`idtApp.page.getPageInfo(id)`

获取页面信息
* 参数

  *  `{String} id`： 页面`id`，如果为内部页面需要传入父页面`id`，如果不传默认返回当前激活选项卡页面信息
* 返回
  * `pageInfo` 如果为内部打开，内部页面信息在返回对象的innerPage中
* 用法  

  获取页面对象信息
* 示例
  ``` js 
  var page = parent.window.idtApp.page.getPageInfo('firstPage')
  ```
### changePageName
`idtApp.page.changePageName(info)`

修改页面标题文字
* 参数

  * `{Object} info`（必须）： 页面信息对象

    * `{String} id`（必须）: 页面id，如果为内部打开需传入父页面id

    * `{String} nodeName`: 页面显示名称
    * `{String} imgType`: 更改页面图标
    * `{String} type`: 需更改名称的页面的类型， `tab`：更改当前选项卡页面；`inner`：更改内部页面
* 用法  

  更改页面标题文字
* 示例
  ``` js 
  parent.window.idtApp.page.changePageName({
    id: 'test',
    nodeName: '测试更改',
    imgType: '',
    type: 'tab'
  })
  ```
### updatePageInfo
`idtApp.page.updatePageInfo(info)`

修改页面信息
* 参数

  * `{Object} info`（必须）： 页面信息对象

    * `{String} id`（必须）: 页面id，如果为内部打开需传入父页面id

    * `{Object} page`: 需要修改的页面对象
    * `{String} type`: 需更改的页面的类型， `tab`：更改当前选项卡页面；`inner`：更改内部页面
* 用法  

  修改页面信息
* 示例
  ``` js 
  // 将id为test的页面的uuid置空
  parent.window.idtApp.page.updatePageInfo({
    id: 'test',
    page: {
      uuid: ''
    }
    type: 'tab'
  })
  ```

### reloadPage
`idtApp.page.reloadPage(id)`

重新加载页面
* 参数

  *  `{String} id`（必须）： 页面id
* 用法  

  重新加载页面
* 示例
  ``` js 
  parent.window.idtApp.page.reloadPage('test')
  ```
## 主页交互类 idtApp.main
主页交互类方法，主要控制框架封装的组件
### openDialog
`idtApp.main.openDialog(dialogInfo)`

打开Dialog
* 参数：

  * `{Object} dialogInfo`：弹窗信息对象

    * `{String} id`（必须）： 弹窗内页面id，页面唯一标识
  
    * `{String} url`（必须）：页面url
    * `{Object} data`：用于存放私有数据
    * `{Object} options`：dialog配置信息，参见vue ant design 的 a-modal api
      * `{String} title`：标题，如果为`''`则不显示顶部标题栏

      * `{String} icon`：标题前图标
      * `{String} size`：大小，可选值`fullscreen`、`large`、`normal`、`small`亦可使用`width`指定宽度
      * `{String} width`：宽度， 默认：`520px`
      * `{String} height`：固定高度
      * `{Boolean} centered`：垂直居中默认：`false`，为保持统一风格，非特殊页面请勿使用
      * `{Boolean} mask`：是否显示遮罩层，`true`（显示） 或 `false`（隐藏），默认：`true`
      * `{Boolean} maskClosable`：点击遮罩层是否允许关闭弹窗，`true`（允许） 或 `false`（不允许），默认：`true`
      * `{Object} maskStyle`：遮罩层自定义样式，默认：`{}`
      * `{Object} dialogStyle`：弹窗自定义样式，默认：`{}`
      * `{Boolean} closable`：是否显示右上角的关闭按钮，默认：`true`
      * `{Boolean} keyboard`：是否支持键盘 esc 关闭，默认：`true`
      * `{String} okText`：确认按钮文字，默认：`确定`
      * `{String} okType`：确认按钮类型，默认：`primary`
      * `{String} cancelText`：取消按钮文字，默认：`取消`
      * `{String|slot} footer`：底部内容，当不需要默认底部按钮时，可以设为 `null`

    * `{function} validate`：校验方法，点击确定按钮时触发，`function (vue) { return true }` vue为dialog页面中的vueApp，此方法必须返回`true`（继续执行）或 `false`（终止执行），此方法多用于`form`校验
    * `{function} ok`：点击确定按钮回调方法，`function (vueApp) { }` vueApp为dialog页面中的vueApp
    * `{function} cancel`：点击遮罩层或右上角叉或取消按钮的回调方法，`function (vueApp) { }` vueApp为dialog页面中的vueApp
    * `{function} handleCloseDialog`：调用closeDialog方法的钩子，`function (vueApp) { }`
    * `{function} beforeDestroy`：dialog销毁前回调方法，`function () { }` 多用于手动触发closeDialog()方法关闭dialog场景
    
* 用法  
    打开Dialog弹窗
::: tip 提示
框架Dialog为系统全局弹窗，内嵌iframe，需要传递的信息可自行在参数 `data` 中定义，在iframe页面中通过 `getDialogInfo` 方法可以获取并使用
:::
* 示例
  ``` js 
  parent.window.idtApp.main.openDialog({
    id: 'testDialog',
    url: './test.html',
    data: {}, // 用于存放私有数据
    options: { // 参见vue ant design 的 a-modal api
      title: '测试Dialog',
      icon: 'el-icon-edit',
      size: 'normal', // 弹窗大小 可选值fullscreen、large、normal、small亦可使用width指定宽度
      width: '60%', // 弹窗宽度
      height: '70vh', // 弹窗固定高度
      // 已下为可选属性默认值
      mask: true,
      maskClosable: true,
      maskStyle: {},
      okText: '确定',
      okType: 'primary',
      cancelText: '取消',
      // footer: null // 如果不需要footer可传null
    },
    validate: function (vueApp) {
      return true
    },
    ok: function (vueApp) {
      console.log(vueApp)
    },
    cancel: function (vueApp) {
      console.log('cancel')
    },
    handleCloseDialog: function () {
      console.log('handleCloseDialog')
    },
    beforeDestroy: function () {
      console.log('beforeDestroy')
    }
  })
  ```

### getDialogInfo
`idtApp.main.getDialogInfo(id)`

根据id获取打开的Dialog信息 
* 参数：

  * `{String} id`：已经打开的dialog的id

* 用法    

    根据id获取打开的Dialog信息 
* 示例
  ``` js 
  var dialogInfo = parent.window.idtApp.main.getDialogInfo('testDialog')
  ```

### closeDialog
`idtApp.main.closeDialog(id)`

根据id关闭已打开Dialog 
* 参数：

  * `{String} id`：已经打开的dialog的id

* 用法    

    根据id关闭已打开Dialog 
* 示例
  ``` js 
  parent.window.idtApp.main.closeDialog('testDialog')
  ```

### closeDialogAll
`idtApp.main.closeDialogAll()`

关闭所有已打开的Dialog
* 用法    

    关闭所有已打开的Dialog
* 示例
  ``` js 
  parent.window.idtApp.main.closeDialogAll()
  ```
### openNotification
`idtApp.main.openNotification(info)`

打开Notification
* 参数：

  * `{Object} info`：提醒信息对象

    * `{String} id`（必须）： 弹窗内页面id，页面唯一标识
  
    * `{String} url`（必须）：页面url
    * `{Object} options`：配置信息
      * `{String} title`：标题，如果为`''`则不显示顶部标题栏

      * `{String} icon`：标题前图标
      * `{String} type`：风格类型，可选值`primary`、`success`、`info`、`warning`、`danger`
      * `{String} width`：宽度，默认：`380px`
      * `{String} height`：高度，默认：`260px`
      * `{Object} wrapStyle`：弹窗自定义样式，可用于设置背景色、偏移等
    
* 用法  
    打开Notification弹窗，多用于系统主动推送信息
::: tip 提示
框架Notification为系统全局弹窗，内嵌iframe，区别于el-notification，此弹窗需指定内部页面，且目前只在页面右下角弹出显示，可用于承载复杂页面。
:::
* 示例
  ``` js 
  parent.window.idtApp.main.openNotification({
    id: 'testNotification',
    url: './test.html',
    options: {
      title: '测试Notification',
      icon: '',
      type: '',
      width: '380px', // 弹窗宽度
      height: '200px', // 弹窗固定高度
      wrapStyle: {'margin-bottom': '10px', 'margin-right': '10px'} // 偏移10px
    }
  })
  ```

### closeNotification
`idtApp.main.closeNotification()`

关闭已打开的Notification

* 用法    

    关闭已打开的Notification
* 示例
  ``` js 
  parent.window.idtApp.main.closeNotification()
  ```

### openViewer
`idtApp.main.openViewer(images, options)`

打开图片查看器预览图片
* 参数：

  * `{Array} images`：图片信息列表，图片信息对象属性如下：

    * `{String} title`：图片标题文字
  
    * `{String} url`（必须）：图片url
  * `{Object} options`：图片查看器配置项设置

    **`options`** 配置项
      | 参数             | 说明                                   | 类型           | 可选值              | 默认值   |
      | ---------------- | -------------------------------------- | -------------- | ------------------- | -------- |
      | backdrop         | 显示背景，`static`为单击时不会关闭     | Boolean/String | true/false/'static' | 'static' |
      | button           | 右上角关闭按钮                         | Boolean        | —                   | true     |
      | initialViewIndex | 图像的初始索引                         | Nummber        | —                   | 0        |
      | navbar           | 显示缩略图导航                         | Boolean        | —                   | true     |
      | title            | 显示当前图片的标题 (alt属性及图片大小) | Boolean        | —                   | true     |
      | toolbar          | 显示工具栏                             | Boolean        | —                   | true     |
      | tooltip          | 显示缩放百分比                         | Boolean        | —                   | true     |
      | movable          | 图片是否可移动                         | Boolean        | —                   | true     |
      | rotatable        | 图片是否可旋转                         | Boolean        | —                   | true     |
      | scalable         | 图片是否可翻转                         | Boolean        | —                   | true     |
      | transition       | 使用 CSS3 过度                         | Boolean        | —                   | true     |
      | fullscreen       | 播放时是否全屏                         | Boolean        | —                   | true     |
      | keyboard         | 是否支持键盘                           | Boolean        | —                   | true     |
      | interval         | 播放间隔，单位为毫秒                   | Nummber        | —                   | 5000     |
      | zoomRatio        | 鼠标滚动时的缩放比例                   | Nummber        | —                   | 0.1      |
      | minZoomRatio     | 最小缩放比例                           | Nummber        | —                   | 0.01     |
      | maxZoomRatio     | 最大缩放比例                           | Nummber        | —                   | 100      |
      | zIndex           | 设置图片查看器的 z-index               | Nummber        | —                   | 2015     |
      | maxZoomRatio     | 最大缩放比例                           | Nummber        | —                   | 100      |
      
* 用法  

    打开图片查看器预览图片

* 示例
  ``` js 
  var images = [
    { title: '图片1', url: './images/1.jpg' },
    { title: '图片2', url: './images/2.jpg' },
    { title: '图片3', url: './images/3.jpg' },
  ]
  var options = {
    initialViewIndex: 0,
    fullscreen: false
  }
  window.parent.idtApp.main.openViewer(images, options)
  ```

### toggleSidebar
`idtApp.main.toggleSidebar(boolean)`

切换左侧导航栏状态
* 参数：

  * `{Boolean} boolean`：侧边栏折叠状态，true：展开， false：折叠

* 用法    

    切换左侧导航栏状态
* 示例
  ``` js 
  parent.window.idtApp.main.toggleSidebar(false)
  ```

## 主页自定义 idtApp.header

主页自定义顶部右侧按钮和用户头像下拉按钮
### customHeaderMenu
`idtApp.header.customHeaderMenu(headerMenu)`

设置自定义按钮
* 参数：

  * `{Object} headerMenu`：自定义按钮对象
    * `{Object/Array} topMenu`：自定义顶部按钮对象集合，使用对象更容易获取内部元素进而对其进行更改
    * `{Array} dropMenu`：自定义顶部用户头像下拉按钮对象集合
  
  按钮对象属性如下：
  |属性|说明|类型|可选值|默认值|
  |--- |--- |--- | --- |--- |
  | id | 按钮id | String | - | 无 |
  | text | 按钮中文名称 | String | - | 无 |
  | icon | icon图标 | String | - | 无 |
  | badge | 显示徽标 | Object | - | 无 |
  | link | 跳转地址 | String | - | 无 |
  | target | 打开方式 | String | '_self'/'_blank' | 无 |
  | style | 自定义样式 | Object | - | 无 |
  | onclick | 点击事件 | Function | - | 无 |
  徽标对象`badge`属性如下：
  |属性|说明|类型|默认值|
  |--- |--- |--- | --- |
  | count | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 | number / string | 无 |
  | dot | 不展示数字，只有一个小红点 | boolean | false |
  | offset | 设置状态点的位置偏移，格式为 [x, y] | [number/string, number/string] | 无 |
  | overflowCount | 展示封顶的数字值 | number | 99 |
  | showZero | 当数值为 0 时，是否展示 Badge | boolean | false |
  | numberStyle | 设置状态点的css样式，自定义大小、颜色等 | object | '' |
  | title | 设置鼠标放在状态点上时显示的文字 | string | `count` |
* 用法    

    主页自定义顶部右侧按钮和用户头像下拉按钮
::: tip 注意
  所有自定义按钮均需配置`id`，可以通过`sysconfig.js`中的`idtAppConfig.menuConfig`配置对应此`id`的按钮是否显示；    
  header对象的所有属性均可修改并实时响应，例如徽标数值可通过示例中的方法变更显示数值。
:::
* 示例
  ``` js 
  var header = {
      topMenu: {
        helperDoc: {
          id: 'helperDoc',
          text: '帮助文档',
          icon: 'idt-icon-jiaohu',
          link: 'http://xxxx/akoa/application/',
          target: '_self',
          onclick: function () {
            console.log('click')
          }
        },
        messageAlert: {
          id: 'messageAlert',
          text: '',
          tip: '新消息',
          icon: 'bell',
          badge: { // 徽标设置
            // dot: false, // 是否为红点儿，默认为false
            // overflowCount: 10, // 溢出上限，默认为99，溢出显示99+
            count: 0, // 显示数值
            offset: ['5px', '-5px'], // 偏移控制
            numberStyle: {'height': '18px', 'line-height': '18px', 'min-width': '18px', 'padding': '0 4px'} // 自定义样式，可任意改变大小、颜色等
          },
          link: '',
          target: '_self',
          style: {'padding': '0 16px'},
          onclick: function () {
            console.log('click')
          }
        }
      },
      dropMenu: [{
        id: 'userSetting',
        text: '个人设置',
        icon: 'user',
        link: '',
        target: '_blank',
        onclick: function (event) {
          event.preventDefault(); // 阻止<a>标签默认行为，不跟据link进行页面跳转
          window.idtApp.page.openPage({
            id: '47c2c48a5cbe130d015cc3377e9e0abd',
            pId: '',
            nodeName: '个人设置',
            type: '',
            url: './components/userset/usersettings.html',
            imgType: 'user',
          }, 'tab').then(function() {})
        }
      },{
        id: 'changePassword'
        text: '修改密码',
        icon: 'edit',
        link: '',
        target: '_blank',
        onclick: function (event) {
          event.preventDefault();
          idtApp.main.openDialog({
            id: 'modifyPassword',
            url: serverPath + 'application/components/userset/password.html',
            options: {
              title: '修改密码',
              icon: 'edit',
              height: '400px', // 弹窗固定高度
              maskClosable: true,
            },
            validate:function(vdom){
              var flag = vdom.data.vm.formDataRuleFun()
              return flag
            },
            ok: function(vdom) {
              
            }
          })
        }
      }]
    }
    window.idtApp.header.customHeaderMenu(header)

    // 此处为更新消息提醒徽标示例代码
    setInterval(() => {
      header.topMenu.messageAlert.badge.count ++
    }, 3000)
  ```

## 用户相关 idtApp.user
用户相关
### getInfo
`idtApp.user.getInfo()`

* 用法    

    获取用户信息
* 示例
  ``` js 
  parent.window.idtApp.user.getInfo()
  ```
### reloadTopAvatar
`idtApp.user.reloadTopAvatar()`

* 用法    

    更新系统顶部头像，用户变更头像后需主动调用
* 示例
  ``` js 
  parent.window.idtApp.user.reloadTopAvatar()
  ```
## 工具类 idtApp.util
工具类

### bindWatch
`idtApp.util.bindWatch`

绑定监听对象中指定属性的变化
* 参数：

  * `{Object} obj`：监听对象
  * `{String} key`：监听对象中的指定属性
  * `{Function} fn`：属性值变化回掉方法
* 用法    

    绑定监听对象中指定属性的变化, 暂不支持深度监听
* 示例
  ``` js 
  var page = {
    active: true
  }
  parent.window.idtApp.util.bindWatch(page, 'active', function (newValue, oldValue) {
    console.log([newValue, oldValue]) // 输出[false, true]
  })
  page.active = false // 绑定监听后重新赋值触发回掉
  ```

## 数据持久化 idtApp.db
数据持久化本地LocalStorage

### set
`idtApp.db.set(data)`

本地LocalStorage存储数据
* 参数：

  * `{Object} data`：数据对象
    * `{String} dbName`：本地数据库名称，默认为 `sys`
    * `{String} path`（必须）：存储路径
    * `{String} value`（必须）：值
    * `{Boolean} user`：是否存于当前用户下，默认为 `true`
  
* 用法    

    本地LocalStorage存储数据
* 示例
  ``` js 
  parent.window.idtApp.db.set({
    dbName: 'sys',
    path: 'test',
    value: 'Value',
    user: true
  })
  ```

### get
`idtApp.db.get(data)`

本地LocalStorage获取数据
* 参数：

  * `{Object} data`：数据对象
    * `{String} dbName`：本地数据库名称，默认为 `sys`
    * `{String} path`（必须）：存储路径
    * `{String} defaultValue`（必须）：如果没有获取到值时使用的默认值
    * `{Boolean} user`：是否存于当前用户下，默认为 `true`
  
* 用法    

    本地LocalStorage获取数据
* 示例
  ``` js 
  parent.window.idtApp.db.get({
    dbName: 'sys',
    path: 'test',
    defaultValue: 'testValue',
    user: true
  })
  ```
