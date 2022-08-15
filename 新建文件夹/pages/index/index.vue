<template>
	<view class="index">
		<view class="cover"></view>
		<view class="content margin">
			<image class="logo" src="/static/logo.png"></image>
			<text class="margin-bottom-xs">张三丰</text>
			<view class="flex grid flex-wrap">
				<view class="text-area flex flex-direction align-center margin-xs" v-for="item in caseList">
					<text :class="['iconfont', item.icon, 'margin-bottom-xs']"></text>
					{{item.name}}
				</view>
			</view>
		</view>
		
		<detail />
	</view>
</template>

<script>
	// import detail from '../../components/detail.vue'
	export default {
		components: {
			// detail,
		},
		data() {
			return {
				title: 'Hello',
				caseList: [{
					name: '我的订单',
					icon: 'icon-dianmingxuanzhong',
				},{
					name: '待收货',
					icon: 'icon-Smile',
				},{
					name: '代付款',
					icon: 'icon-liebiao',
				},{
					name: '会员等级',
					icon: 'icon-zhixing',
				},{
					name: '我的订单',
					icon: 'icon-dianmingxuanzhong',
				},{
					name: '我的订单',
					icon: 'icon-dianmingxuanzhong',
				},{
					name: '我的订单',
					icon: 'icon-dianmingxuanzhong',
				},{
					name: '我的订单',
					icon: 'icon-dianmingxuanzhong',
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.cover{
		background-color: #f6f6f6;
		height: 400upx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		margin-top: -200upx;
	}

	.logo {
		height: 150rpx;
		width: 150rpx;
		border-radius: 50%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10rpx;
		margin-top: -75upx;
	}

	.text-area {
		width: 150upx;
		.iconfont{
			font-size: 40upx;
			color: #8f8f94;
		}
	}
</style>
