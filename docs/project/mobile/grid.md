# 列表配置
## 全局配置
### styleType 列表样式
* 类型：string
* 值取自枚举类型：{"newCommonList","vacationList"}
* 默认值："newCommonList"
### keys 列表所需要显示的字段
* 类型：数组
* 默认值：[]
* 说明：该字段如果不配置字段，将从dispatcher接口中的elementList中取数据。
### topKeys 列表头部显示字段
* 类型：数组
* 默认值：[]
* 说明：如果不配置当前字段，将从keys数组中取第一个元素填入本数组。
``` js
   "topKeys":["BT","BLLX"]

   "topKeys":["BT"]
```

### mutableKeys 列表中间部分显示字段
* 类型：数组
* 默认值：[]
* 说明：如果不配置当前字段，将从keys数组中取除第一个和最后一个元素外的其他元素进行填充。
``` json
   "mutableKeys":["BT","BLLX"],
   
   "mutableKeys":["BT"],
```
### bottomKeys 列表底部部分显示字段
* 类型：数组
* 默认值：[]
* 说明：如果不配置当前字段，将从keys数组中取最后一个元素进行填充。
``` json
   "bottomKeys":["BT","BLLX"],
   
   "bottomKeys":["BT"],
```
### bottomDefault 底部默认显示样式
* 说明：底部不显示字段，但需要显示固定文字作为占位显示时配置。如：显示【查看详情】等

``` json
"bottomDefault":{
    "value":"查看详情",
    "fontStyle": {
          "color":"#666",
          "fontSize":14
        }
  },
```

### noDetail 是否需要进入详情
* 类型：bool
* 默认：false
* 说明：noDetail值为true时，列表点击事件屏蔽，不能点击进入详情


### detailScreenType 详情页样式
* 类型：string
* 值取自枚举类型：{"normal","news"}
* 默认值："normal"


### contentDirection 中间部分字段排列方向
* 类型：string
* 值取自枚举类型：{"vertical","horizontal"}
* 默认值："horizontal"


### columns 字段配置
* 类型：object
* 说明：columns中的内容是以配置文件中【keys】的字段为key，以{}为值的键值对，对象中包含诸多配置，后面会有专门讲述。
* 默认值：{
        "default":{"fontStyle":{"color":"#666","fontSize":14}}
    }


## columns中对象配置
### fontStyle 文字样式配置
* 类型：object
* 说明：fontStyle是用来设置Text组件所用，对象中包含Text设置所需要的所有配置。
* 默认值：{}
``` style
    {"color":"#666","fontSize":14,"padding":10,"textAlign":"center"}
```

### icon、iconColor、iconSize 文字前图标配置
* icon:为显示svg的名字，此处svg只涉及app内置svg
* iconColor:svg显示颜色。
* iconSize:svg大小
``` js
    "icon":"部门",
    "iconColor":"#ff00ff",
    "iconSize":16
```
### target 标题前的标签配置
* 类型：string
* 说明：标签显示内容对应的字段名，如果显示默认值可以直接配置targetValue，targetStyle在columns中配置，系统会自动读取写入targetStyle。
* bgColorMap: 标题前标签背景颜色配置，key使用标题显示值，value是颜色值
``` json
      "isTitle": true,
      "target": "QXJLX",
      "targetValue": "",
      "targetStyle": {},
```

``` json
 "BT":{
      "isTitle":true,
      "target":"JJCD"
 },
 "JJCD":{
       "bgColorMap":{
           "无":"#1d953f",
           "平急":"#f36c21",
           "加急":"#f15a22",
           "特急":"#ef4136",
           "特提":"#ed1941"
       },
       "fontStyle": {
            "color": "#fff",
            "fontSize": 12
       },
       "style":{
            "backgroundColor":"#39b8ef"
       }
 },
```
### timeFormat 日期字段格式化输出
* 类型：string
* 说明：当显示字段对应值为时间戳是配置此字段，如"yyyy-MM-dd"

### joinKeys 拼接显示字段
* 类型： 数组
* 说明： 当某个显示字段需要拼接是，需要配置此字段。比如：显示会议时间：会议开始时间-会议结束时间。
``` json
    "starTime"：{
        "joinKeys":["endTime"],
        "join":"-"
    }
```
### join 拼接符
* 类型： string
* 说明： 当拼接某些字符串时需要的连接符，比如："-"，":"等,默认":"。
### flag 标志配置
    目前用途是配置标题前已读未读标识，日后可以扩展其他
#### key
    flag判断字段
#### conditionSign
    flag判断标识，比如"="，">"，"<"等
#### conditionValue
    flag判断对比值
    
``` json
      "isTitle": true,
      "flag": {
            "key": "WD_FLAG",
            "conditionSign": "=",
            "conditionValue": "N"
      },
      //读取WD_FLAG 的值，当WD_FLAG的值等于N时显示未读标识
```
### label 字段值前的标题 
* 类型：string
* 说明：如果需要显示标题，配置此字段，默认拼接符："："，如需要其他拼接符，需要额外配置join字段
``` json
    "label":"截止日期",
    "join":"-",
    
    //拼接结果为：截止日期-XXXXX
```

## 按钮配置
### buttonGroup

``` json
"buttonGroup": {
    "buttonName": "新增请休假",
    "type": "add",
    "buttons": [],
    "show": true,
    "backgroundColor": "#2E94FD",
    "viewStyle": {
      "top": "90%"
    },
    "groupStyle": {
      "paddingHorizontal": 30,
      "paddingVertical": 10
    },
    "nameStyle": {
      "marginLeft": 10,
      "fontSize": 17
    },
    "buttonIcon": "list_add",
    "buttonIconSize": 22,
    "buttonIconColor": "#fff"
  }
```
