# 列表配置开发
该部分仅针对于平台提供的通用列表进行开发配置。
## 列表样式/行级样式设置
  对列表的行进行自定义样式设置
* 参数
  + `{Object} row` 当前行对象{字段名(大写):值}
  + `{number} rowIndex`  当前行数
* 返回值：
  + `{Object/string}` 样式对象或样式字符串
* 用法:<br/>
``` js
if (row['LWDW'] === '市委') {
  return {'backgroundColor':'red'} 
  // return 'background-color:red'
}
```
## 格式化设置(列)
  主要针对列表中某列的值根据需求进行变化。
* 参数
  + `{string} cellValue ` 
  + `{Object} row` 当前行对象{字段名(大写):值}
  + `{Object} column` 当前列信息对象
* 返回值：
  + `{string}` 单元格的值
  
* 用法1:<br/>
  
``` js 
// 普通字符串转换
if (row.BT === '替换标题') { return row.BT.replace('替换', '**') }
```
* 用法2 : 转换为指定标签并绑定事件<br/>
  ::: tip 注意
  事件绑定为`onclick`，且应绑定再第一层元素上，绑定方法接收两个参数：`row`（行数据）, `event`（事件）。若希望元素跟随主题颜色，将标签`class`设置为与`elementUI`一致的`class`。
  :::
``` js 
// 转换为idt-icon图标组件
if (row.BT === 'cs') 
return '<idt-icon onclick="clickHandler" icon="idt-icon-oa-chuchashenpi" class="el-button--text"></idt-icon>'

// 转换为el-button
if (row.BT === 'cs')
return '<el-button onclick="clickHandler" class="mytxt" size="mini"><i class="el-icon-share"></i>按钮</el-button>'
```
<!-- if(cellValue === '1'){
  return '正确'
}else{
 return "<a href='http://www.baidu.com?uuid="+row.UUID+"'>"+cellValue+"</a>"
} -->
## 列样式设置(列)
  根据业务需要对列的样式进行设置
* 参数
  + `{string} cellValue ` 
  + `{Object} row` 当前行对象{字段名(大写):值}
  + `{Object} column` 当前列信息对象
* 返回值：
+ `{Object/string}` 样式对象或样式字符串
``` js
if (row.BT === 'cs')
return {'color': 'red' }
else 
return {'color': 'blue' }
```
