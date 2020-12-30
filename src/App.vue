<template>
	<div id="app">
		<h1>Male</h1>
		<div v-for="item in males">{{item}}</div>
		<h1>Female</h1>
		<div v-for="item in females">{{item}}</div>
	</div>
</template>

<script>
import Axios from 'axios';
import { BASEURL } from './common/config.js';
import Util from './common/utils.js';
export default {
	name: 'app',
	components: {
		
	},
	data() {
		return {
			males: [],
			females: []
		};
	},
	mounted: function() {
		var api = BASEURL + 'owners';
		Axios.get(api)
			.then(res => {
				for (let a of res.data) {
					// 判断是不是有宠物
					if (a.pets != null && a.pets.length!=0) {
						for (let pet of a.pets) {
							// 是不是猫
							if (pet.type == 'Cat') {
								// 按性别分类
								if (a.gender == 'Male') {
									this.males.push(pet.name);
								} else {
									this.females.push(pet.name);
								}
							}
						}
					}
				}
				this.males = Util.sortReindeer(this.males)
				this.females = Util.sortReindeer(this.females)
			})
			.catch(error => {
				console.log(error);
			});
	},
	comments: {}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
