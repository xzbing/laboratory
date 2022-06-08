# Charles的安装、破解、配置和基本使用

## 安装与破解

### 安装

下载安装包，[windows 64位](/download/charles-proxy-4.6.1-win64.msi)
下载完之后，一路进行傻瓜安装即可。

### 破解

激活码
Registered Name:  https://zhile.io 

License Key: 48891cf209c6d32bf4

打开Charles客户端
选择顶部导航栏help下Register Charles，输入上面的激活码即可
![激活](./assets/Charles-1.jpg)

Charles整体的详细介绍可通过<https://blog.csdn.net/weixin_43563705/article/details/107475759>了解

## 配置与使用

1.抓取电脑本地请求

下面由于勾选了如下选项，抓取到了电脑本地发送的请求，展示了强求相关域名；
![抓取](./assets/Charles-2.jpg)

下图中，有些请求是锁的标志，有的不是，有锁的标志是因为没有允许，需要先允许再重新请求相关请求，就可以正常查看了；做如下操作，允许某个请求：

![激活](./assets/Charles-3.jpg)

可以看到请求栏有很多很多的锁标志，这时一个一个打开太过繁琐，工作量很大，此时可以做相关设置允许所有：

![解锁](./assets/Charles-4.jpg)

![解锁](./assets/Charles-5.jpg)

![解锁](./assets/Charles-6.jpg)

如上操作之后，可以正常获取网络请求；

2.抓取移动APP的请求
查看Charles端口

![代理](./assets/Charles-7.jpg)

查看电脑IP打开cmd，进入dos窗口，输入ipconfig查看电脑IP

![IP](./assets/Charles-8.jpg)

已经知道电脑IP和Charles端口，那么可以在手机WiFi处做如下配置：

![配置](./assets/Charles-9.jpg)

确认之后，查看Charles页面是否有如下提示，如有提示，表示连接成功了，注意点击allow允许：

![连接](./assets/Charles-10.jpg)


如上配置成功，可以成功抓取移动端请求了

在手机上随意打开一个应用，看到如上请求，选中任意请求，右边可以看到常用的概要，请求和响应数据；
![查看](./assets/Charles-11.jpg)