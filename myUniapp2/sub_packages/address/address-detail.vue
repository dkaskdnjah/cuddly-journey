<template>
	<view>
		<form @submit="handleSubmit">
			<map class="myMap"></map>
			
			<view class="cu-form-group margin-top">
				<view class="title">
					<text class="cuIcon-friendfill"></text>
				</view>
				<input name="name" v-model="name" class="text-right" placeholder="请输入昵称"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-mobilefill"></text>
				</view>
				<input v-model="phone"  name="phone" class="text-right" placeholder="请输入号码"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-locationfill"></text>
				</view>
				<picker :range="picker" @change="pickerChange">
					<view class="picker">
						{{region != -1 ?picker[region]:'请选择区域'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-locationfill"></text>
				</view>
				<input v-model="detail" name="detail" class="text-right" placeholder="请输入详细地址"></input>
			</view>
			
			<view class="margin-top">
				<button class="bg-brown" form-type="submit">确定</button>
			</view>
		</form>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				name: '',
				phone: '',
				detail: '',
				region: -1,
				picker: [
					'海珠区',
					'荔湾区',
					'天河区',
				],
				parseData: null
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			})
		},
		created() {
			const detailData = this.$route.query.detailData;
			const parseData = JSON.parse(detailData);
			if (parseData.objectId) {
				this.parseData = parseData;
				const { name, phone, detail, region } = parseData;
				this.name = name;
				this.phone = phone;
				this.detail = detail;
				this.region = this.picker.indexOf(region);
			}
		},
		methods: {
			handleSubmit(ev) {
				let { value } = ev.detail;
				if (!value.name) {
					uni.showToast({
						icon:'none',
						title: '请填写昵称'
					})
					return
				}
				if (!value.phone) {
					uni.showToast({
						icon:'none',
						title: '请填写手机号码'
					})
					return
				}
				if (this.region == -1) {
					uni.showToast({
						icon:'none',
						title: '请选择区域'
					})
					return
				}
				if (!value.detail) {
					uni.showToast({
						icon:'none',
						title: '请填写详细地址'
					})
					return
				}
				const { region, picker, userInfo } = this;
				value.region = picker[region];
				value.city = '重庆市';
				value.default = false;
				value.userId = userInfo.objectId;
				value.objectId = this.parseData?this.parseData.objectId:'';
				this.$store.dispatch("address/addAddressAct", value)
			},
			pickerChange(ev) {
				const { value }  = ev.detail
				this.region = value;
			}
		}
	}
</script>

<style>
.myMap {
	width: 100%;
	height: 400upx;
}
</style>
