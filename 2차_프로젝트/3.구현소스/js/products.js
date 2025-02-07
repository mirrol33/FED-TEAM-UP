// products.js
const proComponent = {
  template: `
  <div class="products-wrap">
    <span class="select-cate">전체</span>
    <h2>PRODUCTS</h2>
    <!-- 카테고리 목록 -->
    <div class="categories">
      <button @click="selectCategory(null, '전체')">전체</button>
      <button @click="selectCategory('의류', '의류')">의류</button>
      <button @click="selectCategory('악세서리', '악세서리')">악세서리</button>
      <button @click="selectCategory('인형', '인형')">인형</button>
      <button @click="selectCategory('피규어', '피규어')">피규어</button>
      <button @click="selectCategory('기타', '기타')">기타</button>
    </div>
    <div class="product-list">
      <!-- 상품 리스트 -->
      <div class="product-box" v-for="p in filterProducts" :key="p.id">
        <a href="#none" :class="p.inventory==0?'soldout':''">
          <img :src="'./images/products/'+ p.id +'.png'" :alt="p.name" />
          <h3>{{ p.name }}</h3>
          <p>{{ p.simple }}</p>
          <span 
            class="price" 
            :style="{ 
              textDecoration: discountRate(p) > 0 ? 'line-through' : 'none', 
              color: discountRate(p) > 0 ? '#aaa' : '#000' 
            }"
          >
            판매가: {{ formatPrice(p.price) }}원
          </span>
          <span 
            class="sale" 
            :style="{ display: discountRate(p) > 0 ? 'inline' : 'none' }"
          >
            할인가: {{ formatPrice(p.sale) }}원
          </span>
          <span 
            class="persent" 
            :style="{ display: discountRate(p) > 0 ? 'inline' : 'none' }"
          >
            {{ discountRate(p) }}%
          </span>
          <span class="inventory"> 재고수량: {{p.inventory}} </span>
          <button 
            :disabled="p.inventory == 0" 
            :class="{ 'disabled': p.inventory == 0 }"
            @click="p.inventory > 0 && openSide(addToCart(p))"
          >ADD TO CART</button>
        </a>
      </div>
    </div>
    <!-- 장바구니 -->
    <aside class="cart-list-aside">
      <a href="#none" class="cart-toggle-btn" @click="toggleSide()"><i class="fa-solid fa-arrow-right"></i></a>
      <h3>장바구니 목록</h3>
      <div class="inner">
        <div class="list">
          <ul v-if="cart.length > 0">
            <li v-for="i in cart" :key="i.id">
              <div class="thumbnail">
                <img :src="'./images/products/' + i.id + '.png'" :alt="i.name" />
              </div>
              <div class="info">
                <h4>{{ i.name }}</h4>
                <p
                :style="{ 
                  textDecoration: discountRate(i) > 0 ? 'line-through' : 'none', 
                  color: discountRate(i) > 0 ? '#aaa' : '#000' 
                }">
                판매가 : {{ formatPrice(i.price) }} 원</p>
                <p class="sale" 
                :style="{ display: discountRate(i) > 0 ? 'inline' : 'none' 
                }">
                할인가 : {{ formatPrice(i.sale) }} 원</p>
                <div class="qt">
                  <button @click="decreaseQt(i.id)">-</button>
                  <span>{{ i.quantity }}</span>
                  <button @click="increaseQt(i.id)">+</button>
                </div>
              </div>
              <button class="del-btn" @click="removeFromCart(i.id)">X</button>
            </li>
          </ul>
          <p v-else class="empty-message">장바구니가 비어 있습니다.</p>
          </div>
          </div>
          <div class="total-price">
            <p>총 결제 금액: {{ formatPrice(totalPrice) }} 원</p>
            <button class="order-btn" type="button">주문하기</button>
          </div>
    </aside>
  </div>
  `,
  computed: {
    // Vuex에서 state 가져오기
    // selectedCategory(){return this.$store.state.selectedCategory}
    // cart(){return this.$store.state.cart}
    ...Vuex.mapState(["selectedCategory", "cart"]),

    // Vuex에서 Getter 사용
    // filterProducts(){return this.$store.getters.filterProducts}
    // totalPrice(){return this.$store.getters.totalPrice}
    ...Vuex.mapGetters(["filterProducts", "totalPrice"]),
  },
  methods: {
    // Vuex의 Mutation 사용
    ...Vuex.mapMutations(["setCategory", "addToCart", "removeFromCart", "decreaseQt", "increaseQt"]),

    selectCategory(cate, text) {
      this.setCategory(cate);
      document.querySelector(".select-cate").textContent = text;
    },

    // 할인율 계산
    discountRate(product) {
      return product.price > product.sale
        ? Math.round(((product.price - product.sale) / product.price) * 100)
        : 0;
    },

    // 숫자에 콤마 추가
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    // 장바구니 팝업창 열기
    openSide() {
      if (!$(".cart-list-aside").hasClass("open")) {
        $(".cart-list-aside").addClass("open");
      }
    },
    // 장바구니 팝업창 토글버튼
    toggleSide() {
      if (!$(".cart-list-aside").hasClass("open")) {
        $(".cart-list-aside").addClass("open");
      } else {
        $(".cart-list-aside").removeClass("open");
      }
    },
  },
  action() {
    this.$store.dispatch("fetchProducts"); // 상품 데이터 불러오기
  },
};

// proComponent 내보내기
export default proComponent;
