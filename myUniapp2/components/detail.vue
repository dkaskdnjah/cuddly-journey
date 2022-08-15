<template>
	<!-- 组件 不能使用小程序生命周期并且不能路由跳转
	（这是鼠标右击components目录-新建组件创建的 与右击pages目录下创建页面不同）
	 -->
	<view>
		测试公共组件啊
	</view>
</template>

<script>
	export default {
		name:"detail",
		data() {
			return {
				
			};
		},
		// 不执行
		onLoad() {
			
		},
	}
</script>

<style>

</style>
