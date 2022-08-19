<template>
	<view>
		<view class="bg-fff flex padding-sm" v-for="(item, index) in cartList" :key="item.id">
			<view class="">
				<text class="iconfont icon-iccheckboxture" :class="{'color-yellow': item.check}"
					@click="handleCheck(index)"></text>
				<image class="imgLogin margin-lr-sm" src="../../static/logo.png" mode="widthFix"></image>
			</view>
			<view class="cartRight">
				<view class="flex justify-between">
					<view class=""> 
						{{item.name}}
						<view class="margin-tb-xs">
							{{item.french}}
						</view>
					</view>
					<text @click="editCart(item)" class="edit iconfont icon-bianji"></text>
				</view>
				<view class="flex justify-between">
					￥{{item.price}}
					<view class="">
						{{item.spec}} x {{item.num}}
					</view>
				</view>
			</view>
		</view>

		<u-overlay :show="show" @click="show = false">
			<view class="overlayContent bg-fff margin" @click.stop v-if="show">
				<view class="padding">
					<view class="flex">
						<image class="imgLogin margin-right-sm" src="../../static/logo.png" mode="widthFix"></image>
						<view class="">
							{{editData.name}}
							<view class="margin-tb-xs">
								{{editData.french}}
							</view>
							<view class="margin-tb-xs">
								￥{{specData.price}}
							</view>
						</view>
					</view>
					<view class="flex justify-between padding-tb u-border-bottom">
						规格选择
						<view class="flex handleshowDraw" @click="drawShow = !drawShow">
							{{specData.spec}}  - {{specData.edible}}
							<u-icon name="arrow-down" color="#ccc" size="18"></u-icon>
							
							<view class="drawStyle bg-fff" v-if="drawShow">
								<view @click.stop="specHandle(item)" class="padding-xs u-border-bottom" v-for="(item, index) in editData.list">
									{{item.spec}}
								</view>
							</view>
						</view>
					</view>
					<view class="flex justify-between align-center padding-top">
						数量选择
						<u-number-box v-model="num"></u-number-box>
					</view>
				</view>
				<view class="">
					<button @click="show = false" type="default" class="myBtn cu-btn bg-brown">取消</button>
					<button @click="handleSubmit" type="default" class="myBtn cu-btn bg-yellow">确定</button>
				</view>
			</view>
		</u-overlay>

		<view class="flex fixed bg-fff justify-between">
			<view class="padding">
				<text class="iconfont icon-iccheckboxture" :class="{'color-yellow': allCheck}"></text>
				<text class="margin-left-xs margin-right-lg" @click="handleAllCheck(allCheck)">全选</text>
				共计: {{allPrice}}
			</view>
			<view class="padding color-fff bg-yellow">
				立即结算
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				show: false, // 编辑弹窗
				drawShow: false, // 磅数选择弹窗
				editData: null, // 编辑数据
				specData: null, // 磅选中数据
				num: 1, // 数量
			}
		},
		computed: {
			...mapState({
				cartList: state => state.cart.cartList
			}),
			allCheck() {
				if (this.cartList && this.cartList.length) {
					return this.cartList.filter(v => v.check).length === this.cartList.length;
				}

			},
			allPrice () {
				let allPrice = 0;
				if (this.cartList && this.cartList.length) {
					this.cartList.forEach(item => {
						if(item.check) {
							allPrice += Number(item.price) * item.num;
						}
					})
				}
				return allPrice
			}
		},
		mounted() {},
		methods: {
			...mapMutations({
				handleCheck: 'cart/SET_CARTCHECK',
				handleAllCheck: 'cart/SET_CARTAllCHECK',
			}),
			editCart(obj) {
				this.show = true;
				this.editData = obj;
				this.num = obj.num;
				this.specData = obj.list.find(v=> v.id == obj.id); 
				console.log(this.specData);
			},
			specHandle(obj) {
				this.drawShow = false;
				this.specData = obj;
			},
			handleSubmit() {
				this.show = false;
				this.$store.commit("cart/SET_CARTLIST", {currentCart: this.editData, num: this.num, specData: this.specData})
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding-bottom: 100upx;
	}

	.imgLogin {
		width: 150upx;
		vertical-align: middle;
	}

	.cartRight {
		width: 68%;
	}

	.edit {
		width: 70upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 50%;
		text-align: center;
		background-color: #E6E6E6;
	}

	.icon-iccheckboxture {
		color: #E7E7E7;
	}
	
	.overlayContent {
		width: 700upx;
		margin: auto;
	}
	.myBtn {
		width: 50%;
		border-radius: 0;
	}
	
	.handleshowDraw {
		position: relative;
	}
	.drawStyle {
		position: absolute;
		right: 0;
		top: 50upx;
		box-shadow: 0 0 10upx 2upx rgba(0,0,0,0.2);
		width: 200upx;
		z-index: 1;
		view:hover{
			background-color: #E6E6E6;
		}
	}
</style>
