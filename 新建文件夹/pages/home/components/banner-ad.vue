<template>
	<view>
		<web-view :src="webSrc"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webSrc: '',
			}
		},
		methods: {
			
		},
		onLoad(options) {
			this.webSrc = options.link;
		}
	}
</script>

<style>

</style>
