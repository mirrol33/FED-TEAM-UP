// store.js

// JSON 상품 데이터 불러오기
import proData from "../data/goods.json" with { type: "json" };

export default new Vuex.Store({
  state: proData,
  // mutations: {},
  // actions: {},
  // getters: {},
});