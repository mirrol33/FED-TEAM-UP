// products.js
const proComponent = {
  template: `
  <div class="products-wrap">
    <span> {{selectedCategory}} </span>
    <h2>PRODUCTS</h2>
    <!-- 카테고리 목록 -->
    <div class="categories">
      <button @click="selectCategory(null)">전체</button>
      <button @click="selectCategory('의류')">의류</button>
      <button @click="selectCategory('악세서리')">악세서리</button>
      <button @click="selectCategory('인형')">인형</button>
      <button @click="selectCategory('피규어')">피규어</button>
      <button @click="selectCategory('기타')">기타</button>
    </div>
    <div class="product-list">
      <!-- 상품 리스트 -->
      <div class="product-box" v-for="p in filteredProducts" :key="p.id">
        <a href="#none">
          <img :src="'./images/products/'+ p.id +'.png'" :alt="p.name" />
          <h3>{{ p.name }}</h3>
          <p>{{ p.simple }}</p>
          <span class="price">판매가: {{ p.price }}원</span>
          <span class="sale">할인가: {{ p.sale }}원</span>
        </a>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // 상품 데이터
      products: [
        { id: "1", cate: "인형", name: "Dug Plush Up Medium 12", price: 50000, sale:10000, simple: "상품 설명글1" },
        { id: "2", cate: ["인형","피규어"], name: "Up Deluxe Figure Play Set", price: 20000, sale:10000, simple: "상품 설명글2" },
        { id: "3", cate: ["피규어","기타"], name: "LEGO Up House 43217 Disney100", price: 30000, sale:10000, simple: "상품 설명글3" },
        { id: "4", cate: "의류", name: "Up Fashion T-Shirt for Kids", price: 20000, sale:10000, simple: "상품 설명글4" },
        { id: "5", cate: "악세서리", name: "Up ''Adventure Is Out There'' Necklace", price: 40000, sale:10000, simple: "상품 설명글5" },
        { id: "6", cate: "기타", name: "Grape Soda Water Bottle with Straw Up", price: 20000, sale:10000, simple: "상품 설명글6" },
        { id: "7", cate: "악세서리", name: "Carl Fredricksen and Ellie Charm by Pandora", price: 10000, sale:10000, simple: "상품 설명글7" },
        { id: "8", cate: "악세서리", name: "Carl Fredricksen and Ellie Charm by Pandora", price: 20000, sale:10000, simple: "상품 설명글8" },
        { id: "9", cate: "악세서리", name: "Carl Fredricksen and Ellie Charm by Pandora", price: 10000, sale:10000, simple: "상품 설명글9" },
        { id: "10", cate: "기타", name: "Up ''Adventure Awaits'' Canvas Artwork by Michelle St.Laurent", price: 20000, sale:10000, simple: "상품 설명글10" },
        { id: "11", cate: "의류", name: "Up Fashion T-Shirt for Kids", price: 10000, sale:10000, simple: "상품 설명글11" },
        { id: "12", cate: "악세서리", name: "Up House Bracelet", price: 20000, sale:10000, simple: "상품 설명글12" },
        { id: "13", cate: ["악세서리","의류"], name: "Up Basket Tote", price: 30000, sale:10000, simple: "상품 설명글13" },
        { id: "14", cate: "기타", name: "Up It Takes Two Gallery Wrapped Canvas by Tom Matousek", price: 20000, sale:10000, simple: "상품 설명글14" },
        { id: "15", cate: "기타", name: "Up It Takes Two Gallery Wrapped Canvas by Tom Matousek", price: 40000, sale:10000, simple: "상품 설명글15" },
        { id: "16", cate: "악세서리", name: "Up House MagicBand+", price: 50000, sale:10000, simple: "상품 설명글16" },
        { id: "17", cate: "악세서리", name: "Up House Earrings by Rebecca Hook", price: 20000, sale:10000, simple: "상품 설명글17" },
        { id: "18", cate: "기타", name: "Up Journey to Paradise Falls Giclée on Canvas by Tim Rogerson", price: 20000, sale:10000, simple: "상품 설명글18" },
        { id: "19", cate: "기타", name: "Up Disney Gift Card", price: 10000, sale:10000, simple: "상품 설명글19" },
        { id: "20", cate: "피규어", name: "Up Levitating House Figure by Grand Jester Studios", price: 30000, sale:10000, simple: "상품 설명글20" },
      ],
      // 선택된 카테고리
      selectedCategory: null,
    };
  },
  methods: {
    // 카테고리 선택 시 실행
    selectCategory(cate) {
      this.selectedCategory = cate;
    },
  },
  computed: {
    // 선택된 카테고리의 상품 목록 필터링
    filteredProducts() {
      if (!this.selectedCategory) return this.products;
      return this.products.filter((product) => {
        // cate가 배열인 경우 포함 여부 확인
        if (Array.isArray(product.cate)) {
          return product.cate.includes(this.selectedCategory);
        }
        // cate가 단일 문자열인 경우 비교
        return product.cate === this.selectedCategory;
      });
    },
  },
};

// proComponent 내보내기
export default proComponent;
