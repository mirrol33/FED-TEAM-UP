// store.js

// JSON 상품 데이터 불러오기
import proData from "../data/goods.json" with { type: "json" };

export default new Vuex.Store({
  state: proData,
  computed: {
    ...mapState(["selectedCategory"]),
    // selectedCategory(){return this.$store.state.selectedCategory}
    ...mapGetter(["filterProducts"])
    // filterProducts(){return this.$store.getters.filterProducts}
  }
  // mutations: {},
  // actions: {},
  // getters: {},
});