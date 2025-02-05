// store.js

// JSON 상품 데이터 불러오기
import proData from "../data/goods.json" with { type: "json" };

// store.js
export default new Vuex.Store({
  state: {
    products: proData,
    selectedCategory: null
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategory(state, category) {
      state.selectedCategory = category;
    }
  },
  getters: {
    filterProducts: (state) => {
      if (!state.selectedCategory) return state.products;
      return state.products.filter((product) => {
        return Array.isArray(product.cate)
          ? product.cate.includes(state.selectedCategory)
          : product.cate === state.selectedCategory;
      });
    }
  }
});


// export default new Vuex.Store({
//   state: proData,
//   computed: {
//     ...mapState(["selectedCategory"]),
//     // selectedCategory(){return this.$store.state.selectedCategory}

//     ...mapGetter(["filterProducts"])
//     // filterProducts(){return this.$store.getters.filterProducts}
//   }
//   // mutations: {},
//   // actions: {},
//   // getters: {},
// });