/*
* @Author: TomChen
* @Date:   2019-09-03 19:20:11
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-04 20:12:16
*/
//store 的计算属性
export default {
 homeAds(state){
        return state.ads
    },
    homeFloors(state){
    	// console.log("state",state.floors)
        return state.floors
    }   
}