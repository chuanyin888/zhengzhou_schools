const middleSchools = [
  ["郑州市外国语", "中原区", "以语言特色和综合能力展示为重点，适合关注表达、视野和学习节奏匹配度的家庭。", ["家长关注高", "外语特色", "综合发展"]],
  ["桐柏一中", "中原区", "整体氛围稳健，常被家长纳入中原区重点对比名单，适合看重校风与基础夯实的家庭。", ["中原热门", "校风稳定", "基础扎实"]],
  ["73中", "中原区", "关注度持续在线，家长常把它放在片区升学路线里一起比较，适合重视学习管理的家庭。", ["片区热门", "学习管理", "升学对比"]],
  ["莲湖外国语", "中原区", "名字辨识度高，家长多关注语言环境、课堂状态与升学衔接的匹配情况。", ["外语方向", "课堂氛围", "衔接关注"]],
  ["西流湖外国语", "中原区", "更适合想了解新区成长型学校的家庭，常见咨询点是师资、班型和成长速度。", ["成长型学校", "新区关注", "班型咨询"]],
  ["19中", "中原区", "传统口碑型学校，适合希望在稳定教学与通勤便利之间做平衡的家庭。", ["传统口碑", "稳定教学", "通勤友好"]],
  ["80中", "中原区", "在择校咨询中常被放进同区组合比较，家长重点会问作业节奏和班级管理。", ["同区对比", "班级管理", "学习节奏"]],
  ["65中", "中原区", "适合希望先锁定中原区选择面的家庭，常规咨询聚焦学风、校内活动与接送便利。", ["学风关注", "校内活动", "接送便利"]],
  ["四中", "二七区", "辨识度和热度都很高，很多家长会优先咨询培养风格、竞争氛围和适配学生类型。", ["头部关注", "培养风格", "竞争氛围"]],
  ["四中南", "二七区", "四中体系内的热门关注项，适合想进一步比较校区差异、课程节奏与管理方式的家庭。", ["校区比较", "课程节奏", "体系延伸"]],
  ["东分", "二七区", "常被家长纳入目标清单，咨询重点多集中在升学路径、班型设置和校园氛围。", ["目标清单", "班型设置", "升学路径"]],
  ["57中", "二七区", "在二七区内有较高讨论度，适合重视稳步提升和管理细致度的家庭。", ["二七热门", "稳步提升", "管理细致"]],
  ["82中", "二七区", "适合和周边学校一起做组合评估，咨询时常见问题包括成绩梯度与家校沟通节奏。", ["组合评估", "成绩梯度", "家校沟通"]],
  ["省实验", "金水区", "家长关注度极高，常见咨询方向包括整体定位、学习强度和适合的学生风格。", ["强关注", "整体定位", "学习强度"]],
  ["8中", "金水区", "在金水区择校讨论里热度长期稳定，适合关注校风、管理和成长路径的家庭。", ["金水热门", "校风管理", "成长路径"]],
  ["7中", "金水区", "常被家长列为重点比较对象，适合看重教学节奏与学习习惯培养的家庭。", ["重点比较", "教学节奏", "习惯培养"]],
  ["47中", "金水区", "关注度高，很多咨询会聚焦年级管理、课程压力和综合活动资源。", ["讨论度高", "课程压力", "活动资源"]],
  ["二实验", "金水区", "家长常把它纳入金水区热门名单，咨询更偏向班型、作息与学习氛围。", ["热门名单", "班型关注", "学习氛围"]],
  ["四中迎宾", "惠济区", "惠济区内热度较高，适合先了解新校区气质、家长口碑和成长预期。", ["惠济关注", "新校区气质", "家长口碑"]],
  ["四中附属", "惠济区", "四中体系延伸选择之一，咨询重点常放在管理风格和后续成长空间。", ["体系学校", "管理风格", "成长空间"]],
  ["四中实验", "惠济区", "更适合想了解实验型资源与教学安排的家庭，家长常咨询课程特色。", ["实验特色", "课程安排", "资源关注"]],
  ["惠济区外国语", "惠济区", "对外语特色有偏好的家庭常会重点关注它，适合问清课程亮点与学生适配度。", ["外语特色", "课程亮点", "适配度"]],
  ["东区外国语", "郑东新区", "东区家长高频关注学校之一，适合想比较新区学校质感、课堂风格和活动资源。", ["东区高频", "课堂风格", "活动资源"]],
  ["96中", "郑东新区", "常出现在郑东新区择校对比中，家长重点常问作业负担、班额和校园管理。", ["新区对比", "作业负担", "校园管理"]],
  ["春华", "郑东新区", "适合重视成长环境和校园体验的家庭，咨询时常会关注教学成熟度。", ["成长环境", "校园体验", "成熟度关注"]],
  ["文苑", "郑东新区", "名字辨识度较高，家长常想了解学校氛围、特色活动和升学衔接。", ["氛围关注", "特色活动", "升学衔接"]],
  ["54中", "郑东新区", "适合纳入片区选择一起看，咨询重点通常放在师资稳定性与学习节奏。", ["片区选择", "师资稳定", "学习节奏"]],
  ["管外", "管城区", "在管城区内是家长经常咨询的对象，适合重点了解外语特色和班级管理。", ["管城热门", "外语方向", "班级管理"]],
  ["管回", "管城区", "有稳定关注度，家长多从校风、管理和通勤安排角度来做判断。", ["稳定关注", "校风管理", "通勤安排"]],
  ["经开区外国语", "经开区", "经开区热门度较高，适合关注外语特色、片区成长性和家校沟通效率的家庭。", ["经开热门", "外语特色", "家校沟通"]]
];

const primarySchools = [
  ["伊河路总校", "中原区", "经典老牌小学代表之一，家长普遍关注教学基本功、学习氛围与口碑稳定性。", ["老牌关注", "口碑稳定", "基础能力"]],
  ["互助路总校", "中原区", "辨识度高，适合想优先了解传统热门小学整体节奏的家庭。", ["传统热门", "整体节奏", "家长高频问"]],
  ["淮河路小学", "中原区", "常被放在中原区小学对比清单里，适合关注课堂状态与作业节奏的家庭。", ["中原对比", "课堂状态", "作业节奏"]],
  ["建设路第二小学", "中原区", "适合先从校风、通勤和家校配合角度做筛选，再决定是否深入咨询。", ["校风筛选", "通勤友好", "家校配合"]],
  ["伏牛路总校", "中原区", "家长常问整体管理、班级秩序和孩子日常学习习惯培养情况。", ["管理关注", "班级秩序", "习惯培养"]],
  ["郑州市实验小学", "中原区", "关注度高，适合想了解综合素质活动与基础教学平衡的家庭。", ["综合素养", "基础教学", "高关注度"]],
  ["锦艺小学", "中原区", "更适合重视成长氛围与接送便利度的家庭，常见咨询偏向实际体验。", ["成长氛围", "接送便利", "体验感"]],
  ["郑上路小学", "中原区", "适合和周边学校一起看，家长常咨询班额、活动和作息安排。", ["周边对比", "班额关注", "作息安排"]],
  ["文化路第一小学", "金水区", "金水区家长熟悉度很高，适合优先咨询校风、作业量和综合展示机会。", ["金水高频", "校风关注", "展示机会"]],
  ["省实验小学", "金水区", "热度一直很高，家长多从教学节奏、家校协同和成长路径切入。", ["持续热门", "家校协同", "成长路径"]],
  ["纬五路第二小学", "金水区", "适合希望在传统口碑与日常管理之间做平衡的家庭。", ["传统口碑", "日常管理", "平衡选择"]],
  ["纬五路第一小学", "金水区", "家长经常拿来和同区学校对比，关注课堂效率和基础能力培养。", ["同区对比", "课堂效率", "基础培养"]],
  ["农科路小学", "金水区", "很多家长会重点关注活动丰富度、表达能力培养和校园氛围。", ["活动丰富", "表达培养", "校园氛围"]],
  ["文化绿城小学", "金水区", "适合咨询新老家长口碑、接送便利和整体就读体验。", ["就读体验", "口碑咨询", "接送便利"]],
  ["东风路小学", "金水区", "常见咨询集中在学习习惯、班级管理和片区就学便利性。", ["学习习惯", "班级管理", "片区便利"]],
  ["惠济实验小学", "惠济区", "惠济区热门小学代表之一，适合先了解成长型学校的环境与节奏。", ["惠济热门", "成长环境", "学习节奏"]],
  ["新城路小学", "惠济区", "适合关注新区学校成长空间、校园秩序和家长反馈的家庭。", ["新区成长", "校园秩序", "家长反馈"]],
  ["四中实验小学", "惠济区", "名称辨识度高，家长多会关注课程组织与后续衔接体验。", ["课程组织", "衔接体验", "辨识度高"]],
  ["东外小", "郑东新区", "东区家长常问的热门小学之一，适合关注表达能力、外语氛围与活动体验。", ["东区热门", "外语氛围", "活动体验"]],
  ["春华小学", "郑东新区", "适合关注校园气质和成长环境的家庭，常见问题集中在学习节奏。", ["校园气质", "成长环境", "学习节奏"]],
  ["聚源路总校", "郑东新区", "辨识度很高，家长通常会重点咨询教学方式和整体口碑。", ["高辨识度", "教学方式", "整体口碑"]],
  ["蒲公英小学", "郑东新区", "更适合想看校园活力、表达训练和综合成长氛围的家庭。", ["校园活力", "表达训练", "综合成长"]],
  ["昆丽河小学", "郑东新区", "常被纳入新区小学横向对比，咨询点多围绕课堂节奏和实际体验。", ["新区对比", "课堂节奏", "实际体验"]],
  ["康平小学", "郑东新区", "适合先了解家校沟通、班级秩序和校园活动配置。", ["家校沟通", "班级秩序", "活动配置"]],
  ["陇西小学", "二七区", "二七区家长熟悉度较高，适合关注基础能力训练与管理节奏。", ["二七高频", "基础训练", "管理节奏"]],
  ["汝河路小学", "二七区", "常被纳入老牌小学对比，咨询重点是校风、作业节奏与家庭配合。", ["老牌对比", "校风", "家庭配合"]],
  ["政通路小学", "二七区", "适合关注日常管理和学习习惯养成的家庭。", ["日常管理", "习惯养成", "家长常问"]],
  ["幸福路小学", "二七区", "家长常关注学校氛围、师生互动和接送便利。", ["学校氛围", "师生互动", "接送便利"]],
  ["长江东路小学", "二七区", "适合纳入片区内综合比较，重点问清班级设置和作息安排。", ["片区比较", "班级设置", "作息安排"]],
  ["春晖小学", "二七区", "更适合先从校内体验和学习节奏角度做筛选。", ["校内体验", "学习节奏", "筛选型学校"]],
  ["经开外国语小学", "经开区", "经开区内热度较高，适合关注外语表达、课程氛围和成长性。", ["经开热门", "外语表达", "成长性"]],
  ["朝凤路小学", "经开区", "常见咨询围绕作业节奏、管理方式和通勤便利展开。", ["作业节奏", "管理方式", "通勤便利"]],
  ["六一小学", "经开区", "适合优先看孩子适配度，家长常问活动组织与基础教学平衡。", ["适配度", "活动组织", "基础教学"]],
  ["蝶湖小学", "经开区", "新区气质明显，适合关注校园环境与家校反馈。", ["新区气质", "校园环境", "家校反馈"]],
  ["滨河小学", "经开区", "经开区常见备选之一，家长会问成长速度与学校氛围。", ["常见备选", "成长速度", "学校氛围"]],
  ["管外小", "管城区", "管城区家长经常咨询的学校之一，适合关注语言特色与课堂氛围。", ["管城高频", "语言特色", "课堂氛围"]],
  ["创新街小学", "管城区", "传统关注度较高，适合重点了解校风、管理和家庭配合。", ["传统关注", "校风管理", "家庭配合"]],
  ["牧歌小学", "管城区", "适合先看校园体验、班级管理和通勤便利。", ["校园体验", "班级管理", "通勤便利"]],
  ["东关小学", "管城区", "常见咨询点包括基础教学、校内秩序和家校互动。", ["基础教学", "校内秩序", "家校互动"]],
  ["工人第二新村小学", "管城区", "适合纳入片区择校清单，咨询方向常集中在管理与学习节奏。", ["片区清单", "管理关注", "学习节奏"]]
];

const schoolData = [
  ...middleSchools.map(([name, district, summary, tags]) => ({ name, district, stage: "初中", summary, tags })),
  ...primarySchools.map(([name, district, summary, tags]) => ({ name, district, stage: "小学", summary, tags }))
];

const stageFilter = document.querySelector("#stage-filter");
const districtFilter = document.querySelector("#district-filter");
const keywordInput = document.querySelector("#keyword-input");
const schoolGrid = document.querySelector("#school-grid");
const summaryText = document.querySelector("#result-summary");
const heroStats = document.querySelector("#hero-stats");
const template = document.querySelector("#school-card-template");

const districts = [...new Set(schoolData.map((item) => item.district))];

districts.forEach((district) => {
  const option = document.createElement("option");
  option.value = district;
  option.textContent = district;
  districtFilter.append(option);
});

function renderHeroStats() {
  const stages = [...new Set(schoolData.map((item) => item.stage))];
  const stats = [
    { value: schoolData.length, label: "学校数量" },
    { value: districts.length, label: "覆盖区域" },
    { value: stages.length, label: "学段分类" }
  ];

  heroStats.innerHTML = stats
    .map(
      (item) => `
        <div class="hero-stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join("");
}

function getFilteredSchools() {
  const stageValue = stageFilter.value;
  const districtValue = districtFilter.value;
  const keywordValue = keywordInput.value.trim().toLowerCase();

  return schoolData.filter((school) => {
    const stageMatch = stageValue === "all" || school.stage === stageValue;
    const districtMatch = districtValue === "all" || school.district === districtValue;
    const keywordMatch =
      keywordValue === "" ||
      school.name.toLowerCase().includes(keywordValue) ||
      school.district.toLowerCase().includes(keywordValue) ||
      school.tags.some((tag) => tag.toLowerCase().includes(keywordValue));

    return stageMatch && districtMatch && keywordMatch;
  });
}

function showToast(message) {
  window.alert(message);
}

function createCard(school) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".school-card");
  const name = fragment.querySelector(".school-name");
  const stage = fragment.querySelector(".stage-badge");
  const district = fragment.querySelector(".district-pill");
  const summary = fragment.querySelector(".school-summary");
  const tags = fragment.querySelector(".tag-row");
  const toggle = fragment.querySelector(".consult-toggle");
  const menu = fragment.querySelector(".consult-menu");
  const consultForm = fragment.querySelector(".consult-form");

  name.textContent = school.name;
  stage.textContent = school.stage;
  district.textContent = school.district;
  summary.textContent = school.summary;

  school.tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;
    tags.append(tag);
  });

  toggle.addEventListener("click", () => {
    const isHidden = menu.hasAttribute("hidden");
    document.querySelectorAll(".consult-menu").forEach((panel) => panel.setAttribute("hidden", ""));
    document.querySelectorAll(".consult-toggle").forEach((button) => {
      button.textContent = "展开咨询选项";
    });

    if (isHidden) {
      menu.removeAttribute("hidden");
      toggle.textContent = "收起咨询选项";
    }
  });

  fragment.querySelectorAll(".consult-actions button").forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.textContent.trim();
      showToast(`你点击了「${school.name} - ${label}」。后续可以把这里接成微信、电话或在线表单。`);
    });
  });

  consultForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(consultForm);
    const parentName = formData.get("parent") || "家长";
    showToast(`${parentName}，已记录你对「${school.name}」的咨询意向。这是演示版提示，后续可接入真实提交接口。`);
    consultForm.reset();
  });

  return card;
}

function renderSchools() {
  const schools = getFilteredSchools();
  schoolGrid.innerHTML = "";

  if (!schools.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = "<strong>没有找到匹配学校</strong><p>你可以换个区域、学段，或者直接搜索学校名称。</p>";
    schoolGrid.append(empty);
    summaryText.textContent = "当前没有匹配结果";
    return;
  }

  const fragment = document.createDocumentFragment();
  schools.forEach((school) => {
    fragment.append(createCard(school));
  });
  schoolGrid.append(fragment);
  summaryText.textContent = `当前展示 ${schools.length} 所学校，可继续筛选或直接展开下方咨询菜单。`;
}

[stageFilter, districtFilter].forEach((element) => {
  element.addEventListener("change", renderSchools);
});

keywordInput.addEventListener("input", renderSchools);

renderHeroStats();
renderSchools();
