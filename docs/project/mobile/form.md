# 表单配置
## 全局配置
### hookConfig 钩子函数设置
hookConfig配置钩子函数，主要包含以下5种钩子函数：
afterInitForm,beforeSaveForm,afterSaveForm,beforeWorkflow,afterWorkflow
分别在form表单初始化完成后，保存表单数据前，保单保存数据后，调用workflow前，调用workflow后。
在此配置的是需要执行的函数名。预置函数待续。。。
### groupBars 显示分组配置
* 类型：数组
* 默认值：[]
* 说明：需要显示的分组，值取自['form_title','basic_info','leader_opinion','bivariatetable_show']。

### 分组样式配置
#### groupConfig 每个组显示设置
* 说明：分组显示中每个分组显示的内容配置。

##### default 默认设置
* 类型：Object
* 说明：分组内容默认设置，包括是否必填，是否可修改，样式等

##### keys 显示字段名设置
* 类型：数组
* 说明：需要显示的字段
#### groupBar 每个分组的分组头的设置
* 说明：分组的header配置，包含样式，title等
### 示例：
``` json
{
  "hookConfig": {
    "afterInitForm": "",
    "beforeSaveForm": "",
    "afterSaveForm": "",
    "beforeWorkflow": "",
    "afterWorkflow": ""
  },
  "groupBars":["form_title","basic_info"],
 
  "basic_info":{
    
    "groupConfig": {
      "default":{
        "writable":false,
        "contentPosition":"right",
        "method": {
        						"willStart": "前置操作",
        						"didFinish": "改变后的操作",
        						"onVerify": {
        							"name": "定义的校验函数名",
        							"checkMessage": "校验失败提示语"
        						}
        					}
      },
      "keys": ["发文字号","拟稿人","拟稿电话","拟稿部门","拟稿日期","复核人","紧急程度","密级",
        "公开属性","是否需要解读","不予公开理由","文种","主送机关","抄送机关","拟稿意见"]
      
    }
  },
  "leader_opinion":{
    "title":"领导意见",
    "default": {
      "contentPosition": "right",
      "rightNameStyle": {},
      "rightTimeStyle": {}
    }
  }
}
```
