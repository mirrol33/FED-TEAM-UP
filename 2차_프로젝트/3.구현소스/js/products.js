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
        <a href="#none">
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
        </a>
      </div>
    </div>
  </div>
  `,
  computed: {
    // Vuex에서 상태(state) 가져오기
    // selectedCategory(){return this.$store.state.selectedCategory}
    ...Vuex.mapState(["selectedCategory"]),
    
    // Vuex에서 Getter 사용
    // filterProducts(){return this.$store.getters.filterProducts}
    ...Vuex.mapGetters(["filterProducts"])

  },
  methods: {
    // Vuex의 Mutation 사용
    // setCategory(cate){this.$store.commit("setCategory", cate)}
    ...Vuex.mapMutations(["setCategory"]),
    
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
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts"); // 상품 데이터 불러오기
  }
};

// proComponent 내보내기
export default proComponent;
