# Jenkins项目应用
本内容主要对项目工程的初始化、项目版本升级、项目打包的说明配置。
## 项目初始化
   在项目开发前，需要使用jenkins进行对项目代码的初始化。初始化时需要指定需要使用的平台版本，服务版本、SVN地址等。
``` bash
sh /root/scripts/App_build_Init_idtApp.sh -n App_idtApp -v idtApp -N idtApp  -B V6_1 -P 1.1.2 -S 1.1.2 -J 1.1.2 -u 1 -c 1 
#参数-l idtdlxc 为AK专用版本库  
sh /root/scripts/App_build_Init_idtApp.sh -n App_idtApp -v idtApp -N idtApp  -B V6_1 -P 1.1.2 -S 1.1.2 -J 1.1.2 -u 1 -c 1 -l idtdlxc
```
* n  App_项目名称,主要用于docker应用启动名。
* v 28上的分支名
* N 应用名(默认都是idtApp)
* B V6_1 办公(V6_1)或政务(V6_2)
* P 平台版本(页面级) 
* S 平台服务版本(后端服务)
* J 平台jsp版本
* u 更新到为最新(1/0)
* c 是否提交到版本库(1/0)
* l idtdlxc(大连AK专用版本库)

## 项目更新
在平台发版后，如果项目需要升级平台版本，使用jenkins能同步指定版本的项目代码等。
``` bash
sh /root/scripts/App_build_Update.sh  -n App_idtApp -v idtApp -N idtApp  -B V6_1 -P 1.1.2 -S 1.1.2 -J 1.1.2 -u 1 -c 1 
#参数-l idtdlxc 为AK专用版本库  
sh /root/scripts/App_build_Update.sh  -n App_idtApp -v idtApp -N idtApp  -B V6_1 -P 1.1.2 -S 1.1.2 -J 1.1.2 -u 1 -c 1 -l idtdlxc
```
* n  App_项目名称,主要用于docker应用启动名。
* v 28上的分支名
* N 应用名(默认都是idtApp)
* B V6_1 办公(V6_1)或政务(V6_2)
* P 平台版本(页面级) 
* S 平台服务版本(后端服务)
* J 平台jsp版本
* u 更新到为最新(1/0)
* c 是否提交到版本库(1/0)
* l idtdlxc(大连AK专用版本库)
## 前台项目打包
浏览器默认对静态资源文件(js,css,image等)有缓存功能，导致在服务器修改静态资源文件时，浏览器默认使用缓存内的文件而不下载远程服务器静态资源文件，所以客户端修改代码时不能生效。因此需要对前台项目进行打包发布。
  
``` bash
sh /root/scripts/fisbuild.sh -n idtApp -r https://199.66.68.28:8443/svn/idtCenter/branches/idtdevoa/idtdevoa
```
* n 打包的名称
* r 前台应用的svn地址
  ::: warning 注意
  * 由于打包需要node支持，所以在新建任务时，需要选中"构建环境-->Provide Node & npm bin/ folder to PATH -->node13.14.0"
  * svn地址不能使用应用的SVN地址，应使用前台应用的svn地址
  * 前台应用的根目录下必须有fis-conf-demo.js文件
  * 包内不包括前台应用的procedure文件夹及下面文件。
  * 打包成功后，会输出下载地址。
  * 打包后强烈要求在测试环境下测试后再上线。
  :::
  

