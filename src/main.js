// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRooter from 'vue-rooter';

Vue.use(VueRooter);

// 导入pages 下的home.vue
import Home form './pages/Home';
import Detail form './pages/Detail';

Vue.config.productionTip = false

// 定义路由配置
const routes = [
	{
		path : '/',
		component : Home
	},
	{
		path : '/detail',
		component : Detail
	}
];

// 创建路由实例 
const router  = new VueRooter({
	routes
});

// 创建Vue 实例
new Vue({
	el : "#app",
	data(){
		return {
			transitionName : "slide"
		}
	},
	router, // 路由,
	watch : {
		// 监视路由  参数要目标的路由和当前页面的路由
		const toDepth = to.path.substring(0, to.path.length-2).split('/').length  
        // 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'  
        const fromDepth     = from.path.substring(0, from.path.length-2).split('/').length  
        this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'  
        // 根据路由深度，来判断是该从右侧进入还是该从左侧进入  
        
	}
});

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
