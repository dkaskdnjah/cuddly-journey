<template>
	<view class="detail">
		<!-- 轮播区域 -->
		<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="yellow">
			<swiper-item>
				<!-- link 使用欣纬前端启的2.7H5项目地址 -->
				<view class="swiper-item">
					<!-- img 使用node启的 express.static 访问静态资源  -->
					<image :src="detailData.img"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="flex justify-around">
			<view :class="[{active: idx=== index}, 'padding-sm', 'detailOne']" v-for="(item,index) in detailData.list" @click="idx = index">
				<view class="">
					{{item.spec}}
				</view>
				<view class="">
					{{item.weight}}
				</view>
				<view class="">
					{{item.edible}}
				</view>
			</view>
		</view>
		<view class="">
			<view class="padding-sm u-border-bottom">
				￥{{detailData.list[idx].price}}
			</view>
			<view class="padding-sm u-border-bottom">
				{{detailData.list[idx].ahead}}
				{{detailData.list[idx].size}}
				{{detailData.list[idx].edible}}
			</view>
			<view class="padding-sm u-border-bottom">
				标配{{detailData.list[idx].fittings}}
			</view>
		</view>
		
		<view class="bottomBtn padding-tb-sm flex">
			<button @click="handleAdd({allObj: detailData, idx})" class="cu-btn bg-brown btnButton margin-lr-xs">加入购物车</button>
			<button class="cu-btn bg-yellow btnButton margin-lr-xs">立即购买</button>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		onLoad(prop) {
			this.detailData = JSON.parse(prop.detailData);
		},
		data() {
			return {
				idx: 0,
				detailData: null,
			}
		},
		methods: {
			...mapMutations({
				handleAdd: 'cart/SET_ADDCARTLIST'
			}),
		}
	}
</script>

<style lang="scss">
	page{
		padding: 0;
	}
.detail{
	height: calc(100vh - 200upx);
	background-color: white;
	.banner {
		height: 500upx;
		swiper-item{
			height: 500upx;
			image{
				width: 100%;
				height: 500upx;
			}
		}
		
	}
	.detailOne{
		text-align: center;	
	}
	.active{
		border-bottom: 2px solid orange;
	}
	.bottomBtn{
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: white;
		
	}
	.btnButton {
		flex: 1;
	}	
}
</style>
