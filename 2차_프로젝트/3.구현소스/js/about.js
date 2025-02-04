// about.js
const aboutComp = {
  template: `
    <div class="about-wrap">
      <h2>ABOUT</h2>
      <h3>THE CHARACTERS</h3>
      <ul class="card-wrap">
        <!-- 카드 리스트 영역 -->
        <li v-for="(v, i) in charData" :key="i" class="card-box">
          <div class="card actor">
            <img :src="'./images/about/card_actor_' + v.id + '.jpg'" :alt="v.actor.name" />
            <span>
              <p><b>{{ v.actor.name }} ({{ v.actor.name_en }})</b></p>
              <p>{{ v.name_en }} Voice actor</p>
              <p>{{ v.actor.txt }}</p>
            </span>
          </div>
          <div class="card char">
            <img :src="'./images/about/card_char_' + v.id + '.jpg'" :alt="v.name" />
            <span>
              <p><b>{{ v.name }} ({{ v.name_en }})</b></p>
              <p>{{ v.txt }}</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      charData: [
        {
          id: "1",
          name: "칼 프레드릭슨",
          name_en: "Carl Fredricksen",
          txt: "영화의 주인공으로, 아내 엘리를 잃은 후 꿈을 이루기 위해 집에 풍선을 달아 남아메리카로 여행을 떠나는 은퇴한 노인.",
          actor: {
            name: "에드워드 애스너",
            name_en: "Edward Asner",
            txt: "미국 성우 겸 배우로, 칼의 연륜과 감정을 섬세하게 표현했습니다.",
          },
        },
        {
          id: "2",
          name: "러셀",
          name_en: "Russell",
          txt: "밝고 호기심 많은 8살 보이스카우트 단원으로, 칼의 모험에 우연히 동참하게 되는 소년.",
          actor: {
            name: "조던 나가이",
            name_en: "Jordan Nagai",
            txt: "어린 나이에도 불구하고 러셀의 활기와 순수함을 잘 전달했습니다.",
          },
        },
        {
          id: "3",
          name: "더그",
          name_en: "Dug",
          txt: "특별한 목줄을 통해 사람의 말을 할 수 있는 유쾌한 개. 충성스럽고 순수한 성격으로 칼과 러셀의 친구가 됩니다.",
          actor: {
            name: "밥 피터슨",
            name_en: "Bob Peterson",
            txt: "영화의 각본가이자 더그의 목소리를 담당하며 캐릭터에 생명을 불어넣었습니다.",
          },
        },
        {
          id: "4",
          name: "찰스 먼츠",
          name_en: "Charles Muntz",
          txt: "칼이 어린 시절부터 동경하던 탐험가. 그러나 영화 후반부에는 그의 진짜 모습이 드러납니다.",
          actor: {
            name: "크리스토퍼 플러머",
            name_en: "Christopher Plummer",
            txt: "찰스의 카리스마와 어두운 면을 훌륭히 표현했습니다.",
          },
        },
        {
          id: "5",
          name: "알파 팩",
          name_en: "Alpha Pack",
          txt: "찰스 먼츠의 충성스러운 개들로 구성된 무리입니다. 개들 모두 목줄을 통해 사람 말을 할 수 있으며, 리더격인 알파(Alpha)는 공격적인 성격을 가지고 있습니다.",
          actor: {
            name: "밥 피터슨",
            name_en: "Bob Peterson",
            txt: "영화의 각본가이자 더그의 목소리를 담당하며 캐릭터에 생명을 불어넣었습니다.",
          },
        },
        {
          id: "6",
          name: "엘리 프레드릭슨",
          name_en: "Ellie Fredricksen",
          txt: "칼의 사랑스러운 아내로, 두 사람은 어린 시절부터 함께하며 모험을 꿈꿔왔습니다. 엘리는 칼의 삶에 깊은 영향을 준 인물로, 그녀와의 추억은 칼의 모험을 떠나게 된 중요한 동기입니다.",
          actor: {
            name: "엘리사 나이트",
            name_en: "Elissa Knight",
            txt: "엘리의 성인역에 성우겸 영화의 제작진으로, 엘리의 따뜻하고 희망적인 성격을 섬세하게 표현했습니다.",
          },
        },
      ],
    };
  },
};

// aboutComp 내보내기
export default aboutComp;
