import proData from "../data/goods.json" with { type: "json" };

export default new Vuex.Store({
  state: {
    // 로그인 클래스
    loginCls: "",
    products: proData,
    selectedCategory: null,
    cart: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategory(state, category) {
      state.selectedCategory = category;
    },
    // 장바구니 상품 담기
    addToCart(state, product) {
      const itemInCart = state.cart.find((item) => item.id === product.id);      
        product.inventory -= 1; // 재고 감소
        if (itemInCart) {
          itemInCart.quantity += 1;
        } else {
          state.cart.push({ ...product, quantity: 1 });
        }
    },
    // 장바구니 상품 삭제
    removeFromCart(state, productId) {
      const cartIndex = state.cart.findIndex((item) => item.id === productId);

      if (cartIndex !== -1) {
        const cartItem = state.cart[cartIndex];
        const storeProduct = state.products.find((p) => p.id === productId);

        if (storeProduct) {
          storeProduct.inventory += cartItem.quantity; // 재고 복원
        }

        state.cart.splice(cartIndex, 1); // 장바구니에서 삭제
      }
    },
    increaseQt(state, productId){
      const item = state.cart.find((item) => item.id === productId);
      const product = state.products.find((p) => p.id === productId);
      if(item && product && product.inventory > 0){
        item.quantity += 1;
        product.inventory -= 1;
      } else {
        alert("상품재고가 없습니다!");
      }
    },
    decreaseQt(state, productId){
      const item = state.cart.find((item) => item.id === productId);
      const product = state.products.find((p) => p.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        product.inventory += 1;
      }
    },    
  },
  getters: {
    filterProducts: (state) => {
      if (!state.selectedCategory) return state.products;
      return state.products.filter((product) =>
        Array.isArray(product.cate) ? product.cate.includes(state.selectedCategory) : product.cate === state.selectedCategory
      );
    },
    totalPrice: (state) => {
      return state.cart.reduce((sum, item) => sum + item.sale * item.quantity, 0);
    },
  },
});
