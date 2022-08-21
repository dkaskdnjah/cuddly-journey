<template>
	<view>
		<view class="padding flex justify-between" @click="handleAddress">
			<view class="" v-if="checkAddressData">
				<view class="">
					{{checkAddressData.name}}，{{checkAddressData.phone}}
				</view>
				<view class="">
					{{checkAddressData.city}}
					{{checkAddressData.region}}
					{{checkAddressData.detail}}
				</view>
			</view>
			<view class="" v-else>
				请选择地址
			</view>

			<u-icon name="arrow-right" size="20"></u-icon>
		</view>

		<view class="padding">
			配送信息
		</view>

		<view class="padding flex justify-between">
			<u-datetime-picker :show="showDate" @cancel="showDate = false" @confirm="showDate = false" mode="date"></u-datetime-picker>
			<view class="" @click="showDate = true">
				请选择配送日期
			</view>
			
			<u-datetime-picker :show="showTime" @cancel="showTime = false" @confirm="showTime = false" mode="time"></u-datetime-picker>
			
			<view class="" @click="showTime = true">
				请选择配送时间
			</view>
		</view>

		<view class="bg-fff flex padding-sm" v-for="(item, index) in getcheckGoodList" :key="item.objectId">
			<view class="">
				<image class="imgLogin margin-lr-sm" src="http://lc-B0CeFVGF.cn-n1.lcfile.com/1qjq4zMqlMgRbEVrlKIvOij9NkpKQGMU/logo.png" mode="widthFix"></image>
			</view>
			<view class="cartRight">
				<view class="flex justify-between">
					<view class="">
						{{item.name}}
						<view class="margin-tb-xs">
							{{item.french}}
						</view>
					</view>
				</view>
				<view class="flex justify-between">
					￥{{item.price}}
					<view class="">
						x {{item.num}}
					</view>
				</view>
			</view>
		</view>

		<view class="fixed align-center padding flex justify-between">
			{{allPrice}}
			<view class="">
				<button class="cu-btn bg-brown">立即支付</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				cartList: [],
				showDate: false,
				showTime: false,
			}
		},
		computed: {
			...mapGetters({
				checkAddressData: 'address/getCheckAddress',
			}),
			getcheckGoodList() {
				const {
					cartList
				} = this.$store.state.cart;
				return cartList.filter(v => v.check);
			},
			allPrice() {
				let allPrice = 0;
				this.getcheckGoodList.forEach(item => {
					allPrice += Number(item.price) * item.num;
				})
				return allPrice
			}
		},
		methods: {
			handleAddress() {
				uni.navigateTo({
					url: '../address/address'
				})
			},
		}
	}
</script>

<style>
	page {
		background-color: white;
	}

	.imgLogin {
		width: 150upx;
		vertical-align: middle;
	}

	.cartRight {
		width: 68%;
	}
</style>
