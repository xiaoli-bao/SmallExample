===================多页面状态管理================
实现步骤：

1、在components中自定义一个Test.vue组件

2、在Test组件中使用counter变量

3、在App.vue中导入、注册、使用组件Test

4、运行发现无法 显示Test组件中的counter数据信息

5、此时需要使用vuex来实现状态的管理（变量数据的共享）

       1)、首先需要在项目中安装 vuex 插件
       
           cnpm|npm install  vuex --save
           
       2)、 在main.js中导入插件并使用
       
            //导入vuex
			import Vuex from 'vuex'
			
			//使用vuex
			Vue.use(Vuex)
			
			//创建对象
			const  store = new Vuex.Store({
				 state:{
				 	  counter:10
				 }
			}) 
			
			//将store对象挂载到vm实例上
			new Vue({
			  el: '#app',
			  router,
			  components: { App },
			  store, //挂载到vue实例中，到时候就可以通过$store进行查找
			  template: '<App/>'
			})
			
		
		注意！在开发中不推荐这样使用，因为目前将所有的vuex的封装操作都是定义在main.js中，会比较臃肿和庞大，所以必须要进行分离。
		
		具体做法如下：
		
		a\在src目录下创建一个vuex 或者   store 的目录
		
		        src
		           ----vuex|store
		           
		              ----index.js  文件
		              
		b\将main.js中定义的vuex信息，移植到index.js文件中。
		              	
                //必须首先导入vue，因为Vuex依赖了Vue
				import Vue  from 'vue'
				//导入vuex
				import Vuex from 'vuex'
				//使用vuex
				Vue.use(Vuex)
				
				//创建对象
				const  store = new Vuex.Store({
					 state:{
					 	  counter:10
					 }
				})
				//对外提供store对象
				export default store

        c\在main.js中引入index.js,并将store对象挂载到vm实例中
        
            //导入独立定义的vuex操作的文件
            import store  from './store'
            
            //将store对象挂载到vm实例上
			new Vue({
			  el: '#app',
			  router,
			  components: { App },
			  store, //挂载到vue实例中，到时候就可以通过$store进行查找
			  template: '<App/>'
			})