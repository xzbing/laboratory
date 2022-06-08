# Ngnix配置开发
为了减少前端部署，前端开发只部署Ngnix，可以不需要部署Tomcat。前端开发需要的服务直接访问公共的服务即可。
## server配置
   server可以配置多个，其中主要属性有
* listen  端口
* server_name 服务名
* location 访问目录
  * root：根访问目录
  * alias 别名的访问目录
  * index 默认访问页面
  * proxy_pass 代理服务地址
``` text
client_max_body_size 200m;  // 下载包最大设置 
server {
	listen       80;
	server_name  localhost;
	location / {
	  root   html;
	  index  index.html index.htm;
  }
	location /akoa {
	  alias  "D:\svn\branches\idtakoa\akoa";
	  index  index.html index.htm;
	  #开启在600s强制清缓存
	  location ~* \.(jpg|jpeg|gif|bmp|png|js|css){
	    expires 600s;
    }
	  ## 当出现405错误时，将采用后面地址进行重新请求
	  error_page 405 =200 http://$host:$server_port$request_uri;
  }
	location /idtAppServiceV6 {
	    proxy_pass http://199.66.68.37:8008/idtAppServiceV6;
	    proxy_http_version 1.1;         #大附件下载走http1.1
	    proxy_set_header Connection ""; #大附件下载走http1.1
	    #对jsp页存在引用basepath时使用,目前一般服务化项目很少开启
	    #proxy_set_header  Host $http_host;  
	    #proxy_set_header  X-Real-IP $remote_addr;  
	    #proxy_set_header       X-Forwarded-For  
	    #$proxy_add_x_forwarded_for;  
	}
}
```
## sysconfig服务配置
通过上面nginx事例设置及`public/sysconfig.js`设置，可以使前端调用的服务为http://199.66.68.37:8008/idtAppServiceV6
``` js
var servicePath = '/idtAppServiceV6';
```
## ngnix 命令(window)
cd到nginx目录
### 开启nginx
start nginx
### 关启nginx
nginx -s stop | nginx -s quit 
### 重载
nginx -s reload
## nginx下载
[x86绿色版](/download/nginx-1.18.0.zip)
## nginx高级配置
### 缓存策辑配置
// 600秒(10分钟)进行重新请求
``` json
 location ~* \.(jpg|jpeg|gif|bmp|png|js|css){
    expires 600s;
  }
  
``` 
### 预压缩配置
``` json
  // http下
  gzip_static on;
  gzip_min_length 10k;
  gzip_buffers 4 16k;
  gzip_comp_level 6;
  gzip_types *;
```
### 静态压缩命令
 压缩当前目录下所有js
 find -type f -name "*.js" -exec gzip {} \;

