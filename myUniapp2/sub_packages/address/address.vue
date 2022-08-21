<template>
	<view>
		<view class="default margin padding u-border" v-for="(item, index) in addressList">
			<view class="defalutIcon bg-yellow" v-if="item.default">
				默
			</view>
			<view class="flex justify-between">
				<view class="flex align-center">
					<text @click="handleCheckAdress(item)" class="iconfont icon-iccheckboxture margin-right" :class="{'color-yellow': checkId == item.objectId}"></text>
					<view class="">
						<view class="">
							{{item.name}}，{{item.phone}}
						</view>
						<view class="">
							{{item.city}}
							{{item.region}}
							{{item.detail}}
						</view>
					</view>
				</view>
				<text @click="toAddressDetail(item)" class="edit iconfont icon-bianji"></text>
			</view>
			<view class="flex justify-around align-center margin-top">
				<view class="" v-if="!item.default" @click.stop="handleDefault(item)">
					设为默认
				</view>
				<view class="" v-else>
					默认地址
				</view>
				<u-line length="15" direction="col"></u-line>
				<view class="" @click="handleDel(item)">
					删除
				</view>
			</view>
		</view>
		<view @click="toAddressDetail" class="flex align-center justify-center addIcon bg-yellow">
			<u-icon name="plus" color="#fff" size="20"></u-icon>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState({
				addressList: state => state.address.addressList,
				checkId: state => state.address.checkAddressId,
			})
		},
		methods: {
			...mapMutations({
				handleCheckAdress: 'address/SET_CHECKADRESS',
			}),
			...mapActions({
				handleDefault: 'address/updateAddressDefault',
			}),
			...mapActions({
				handleDel: 'address/deleteAddressAct',
			}),
			toAddressDetail(item) {
				uni.navigateTo({
					url: "./address-detail?detailData=" + JSON.stringify(item) 
				})
			},
		}
	}
</script>

<style>
	.edit {
		width: 70upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 50%;
		text-align: center;
		background-color: #E6E6E6;
	}
	.addIcon {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		margin: 0 auto;
	}
	
	.default{
		position: relative;
		overflow: hidden;
	}
	.defalutIcon {
		position: absolute;
		padding-top: 13px;
		top: -40upx;
		right: -40upx;
		width: 80upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 12upx;
		transform: rotate(45deg);
	}
</style>
