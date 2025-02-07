import proData from "../data/goods.json" with { type: "json" };

export default new Vuex.Store({
  state: {
    // 로그인 클래스
    loginCls: sessionStorage.getItem("login-user") ? "login" : "",
    products: proData,
    selectedCategory: null,
    cart: [],
  },
  mutations: {
    setLogin(state) {
      state.loginCls = "login"; // 로그인 상태 변경
    },
    setLogout(state) {
      state.loginCls = ""; // 로그아웃 상태 변경
    },
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
    // 장바구니 상품 수량 증가
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
    // 장바구니 상품 수량 감소
    decreaseQt(state, productId){
      const item = state.cart.find((item) => item.id === productId);
      const product = state.products.find((p) => p.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        product.inventory += 1;
      }
    },
  },
  // 상품 카테고리별 필터처리
  getters: {
    filterProducts: (state) => {
      if (!state.selectedCategory) return state.products;
      return state.products.filter((product) =>
        Array.isArray(product.cate) ? product.cate.includes(state.selectedCategory) : product.cate === state.selectedCategory
      );
    },
    // 장바구니 담긴 상품 총 가격
    totalPrice: (state) => {
      return state.cart.reduce((sum, item) => sum + item.sale * item.quantity, 0);
    },
  },
});
