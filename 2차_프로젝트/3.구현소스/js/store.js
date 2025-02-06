// store.js

// JSON 상품 데이터 불러오기
import proData from "../data/goods.json" with { type: "json" };

// store.js
export default new Vuex.Store({
  state: {
    products: proData,
    selectedCategory: null,
    cart: [], // 장바구니 배열 추가
    
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategory(state, category) {
      state.selectedCategory = category;
    },
    addToCart(state, product) {
      // console.log(state, product);
      const itemInCart = state.cart.find((item) => item.id === product.id);

      if (product.inventory > 0) {
        product.inventory -= 1;
        console.log('카트상품재고:',product,product.inventory);
        if(product.inventory == 0){
          // 해당 상품의 클래스 추가
          console.log('카트상품id:',product.id);
        }
      }

      // if (itemInCart) {
      //   if (product.inventory > 0) // 상품재고 있을때
      //     if(itemInCart.quantity >= product.inventory){
      //       alert("선택하신 상품의 재고가 부족합니다!");
      //       console.log('카트상품수량:',itemInCart.quantity);
      //     } else {
      //       itemInCart.quantity += 1;
      //     }
      // } else {
      //   state.cart.push({...product, quantity: 1});
      // }
    },
    removeFromCart(state, product) {
      // console.log(state, product, product.id);
      state.cart = state.cart.filter((item) => item.id !== product);
    },
  },
  getters: {
    filterProducts: (state) => {
      if (!state.selectedCategory) return state.products;
      return state.products.filter((product) => {
        return Array.isArray(product.cate) ? product.cate.includes(state.selectedCategory) : product.cate === state.selectedCategory;
      });
    },
    totalPrice: (state) => {
      return state.cart.reduce((sum, item) => sum + item.sale, 0);
    },
  },
});
