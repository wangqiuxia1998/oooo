import Vue from 'vue';
export default {
	state:{
		tableDa:[]
	},
	getters:{
		tableData:function(state){
			return state.tableDa;
		}
	},
	mutations:{
		tableD:function(state,value){
			state.tableDa = value;
		}
	},
	actions:{
		findAllArt:(context)=>{
			return new Promise((resolve,reject)=>{
				Vue.http.get("https://www.apiopen.top/journalismApi").then(function(resp){
					if(resp.status == 200){
						context.commit('tableD',resp.data.data.dy);
					}
					resolve()
				},function(resp){
					reject()
				})
			});
		}
	}
}