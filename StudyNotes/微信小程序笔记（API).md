# 微信小程序 API

  小程序 开发包中提供了许多可供调用的功能行API

## onsole控制台

console.info/debug/warn/error

## 定时器

setInterval  setTimeout clearInterval clearTimeout

## 基础

### 系统

获取系统信息:有两个api，一个同步的(Sync)，一个异步的。一般调用异步的。

异步一般有三个回

### 更新

UpdateManager可以管理小程序的更新

  ### 小程序

应用事件监听:可以使用api监听小程序应用的各种事件(生命周期)

### 调试

console

### 定时器

## 路由

通过api也可以实现navigator导航路由。

switchTab：这种只能在小程序自带的标签页之间切换。

navigateTo:  这种路由会把要打开的页面直接加入到页面栈中(可以后退回去)

redirectTo: 这种路由会把当前页面移除以后，再把要打开的页面加入进来(退不回来了)

reLaunch: 这种路由，先重启小程序，在把要打开的页面加入页面中

navigateBack: 后退

## 界面

###  交互

Toast:吐司（可隐藏）

Modal:模态框

Loading:加载(隐藏)

ActionSheet:底部菜单

### 导航栏

导航栏一般在json中设置，也可以在api中控制

Text：导航栏标题

color： 导航栏前景色和背景色

loading : 显示和影隐藏loading

### 背景3.26

背景可以在json配置，也可以通过api设置

TextStyle:文字样式

Color：背景颜色

### Tab Bar

tab bar 在json中配置好以后，还可以通过API做其他设置：

TabBar:显示隐藏TabBar

TabBarStyle:设置tabBar样式

TabBarItem：设置tabBar的某个item

ReDot:显示隐藏tabbar item 的红点

Badge：设置移除某个tabbar item的徽章

### 下拉刷新

可以使用API控制开始和结束下拉刷新

start:

stop:

### 滚动

pageScrollTo；可以调整页面的滚动位置

### 动画

小程序支持css3动画

小程序也提供了自己的动画API；

1. 创建动画Animation对象
2. 定义动画
3. 导出动画
4. 组件应用动画

## 网络

小程序要通过网络API和后台服务进行数据交互。

注意：小程序要发起网络请求，要访问的后台服务器的域名必须在小程序管理后台进行配置，不然不让访问。（当然也可以在可发这工具中配置：）

### request请求

小程序发送http request请求调用后台接口，跟后台惊醒数据交互。

```js
wx.request({
	url:
	method:
	data:
	success:
})
```

### upload文件上传

```js
wx.uploadFile({
	url:
	name:
	filePath:
	sucess:
})
```

### download文件下载

```js
wx.downloadFile({
	url:
	success:
})
```

### websocket通信（没讲）

```
wx.connectSocket();
wx.onSocketOpen();
wx.onScoketMessage();
wx.sendSocketMessage();
```



### UDP(数据报文协议)通信（自己研究）

 一种无连接的数据报文传输协议

wx.createUDPScoket();

UDPSocket.bind();

UDPScoket.onMessage();

### 数据缓存

```
wx.setSorage();
wx.getStorage();
wx.remooveStorage();
wx.clearStorage();
```

### 文件

1. 文件保存

    一般下载下来的文件是存储在临时目录，可以把下载下来的文件移动保存到指定的目录（一般就在store目录中）。

2. 产看保存的文件信息

   可以查看文件的大小和保存时间

3. 查看保存的所有文件列表

4. 移除保存文件

5. 打开一个文档

   只能打开一下类型文件；

   | 值   | 说明      | 最低版本 |
   | :--- | :-------- | :------- |
   | doc  | doc 格式  |          |
   | docx | docx 格式 |          |
   | xls  | xls 格式  |          |
   | xlsx | xlsx 格式 |          |
   | ppt  | ppt 格式  |          |
   | pptx | pptx 格式 |          |
   | pdf  | pdf 格式  |          |

6. FileSystemManger

   这个对象可以操作整个文件系统，比如创建删除文件目录，读写文件等等。

### 媒体

1. 图片

   1. 从相册（相机）选择图片

      wx.chooswImage();

   ​        2.预览图片

   ​		wx.previewImage();

   3.  保存图片到相册

   4. 参看图片信息

2. 音频

    audio组件+AudioContent API

3. 视频

    video组件+VideoContent API

4. 录音

    * wx.stopRecord
    * wx.startRecord

5. 相机

    camera+cameraContext

    照相：cameraContext.takePhoto()

    录像:cameraContext.startRecord()  cameraContext.stopRecord()

6. 地图

    map+MapContext

7. 富文本

    editor+EditorContext

### 位置

wx.getLocation()

wx.openLocation()

### 画布

canvas+canvasContext()

### 设备

1. wifi

2. 蓝牙

3. 电量

4. 剪切板

5. 网络

   wx.getNetwoekType()

6. 屏幕

7. 电话

8. 设备方向

9. 扫码

10. 震动

### 开放接口

1. wx.login()

    请求微信账号登录，如果没有登录，就登录。已经登录就不处理。最后返回一个登录凭证code. 这个code 会传递给后台，配合后台做一些数据处理。

2. 小程序跳转

   wx.navigateToMiniprogram()

3. 小程序账号信息

   wx.getAccountInfoSync();

4. 支付

   wx.requestPayment()

5. 授权

   wx.authorize()

6. 设置

   wx.getSetting()

7. 收货地址

   wx.chooseAddress()

8. 卡券

9. 发票

10. 微信运动

### worker

在前端app中，都有一个主线程（UI线程）在负责渲染页面，以及处理页面事件，如果在主线程中做一些其他的耗时操作，那么就会阻塞UI线程，造成页面卡顿，不响应事件。为了解决这个问题，那么就需要吧耗时操作单独放到一个worker工作着线程中去完成。从而阻塞UI线程。

### 用 nodejs开发后台服

1. 商品管理
   1. 查询所有商品
   2. 添加商品
   3. 上传商品图片
   4. 下载商品信息

```js
//1.导入模块express
var express = require("express");
//2.调用一下
var app = express();
// 用数组模拟商品数据库
var arrayList = [
	{"name":"华为","price":"4000","time":"2014"},
	{"name":"小米","price":"3000","tiem":"2015"},
	{"name":"苹果","price":"6000","time":"2016"},
	{"name":"华为笔记本","price":"8000","time":"2017"},
	{"name":"苹果笔记本","price":"10000","time":"2018"}
]
//3.定义获取商品列表的接口
app.get("/server",function(req,resp){
	resp.type("application/json;charset=UTF-8")
	resp.end(JSON.stringify(arrayList))
})
//3.1定义添加商品保存信息
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.post("/server/add", jsonParser , function(req,resp){
	console.info(req.body)
	arrayList.push(req.body)
	resp.type("application/json;charset=UTF-8")
	let result = {code:200,message:"添加成功"}
	resp.end(JSON.stringify(result))

})
//3.2定义文件上传的
var fs = require("fs");
var multer = require("multer");
app.use(multer({dest:"/temp/"}).array("goodsPic"));
var dir = "C:\\Users\\Administrator\\Desktop\server";
app.post("/server/images/uploadfile",function(req,resp){
	console.info(req.files[0])
	var result = {code:400,message:"失败"}
	fs.readFile(req.files[0].path,function(err,data){
		if(err){
			console.log(" read err");
			
		}else{
			let savePath = dir + req.files[0].originalname;
			fs.writeFile(savePath, data,function(err,data){
				if(err){
					console.log(" write err");		
				}else{
					result={code:200,message:"成功" +savePath}
					console.info(result)
				}
				resp.type("application/json;charset=UTF-8")
				resp.end(JSON.stringify(result))
			})
		}
	})
})
//3.3定义文件下载
app.get("/server/download",function(req, resp){
	//相应文件内容
	resp.type("application/json;charset=UTF-8");
	resp.end(JSON.stringify(arrayList));
	console.log(	resp.end(JSON.stringify(arrayList)));
	
});
//4.定义一个接口开启服务器
app.listen(8090,function(){
	console.info("服务器启动成功，端口8090...")
})
```













