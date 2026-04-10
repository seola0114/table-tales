import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, Trophy, Users } from "lucide-react";
import DesignSystemShell from "../../_components/design-system-shell";
import { ComponentPreview } from "../../_components/component-previews";

const componentGuides = {
  "app-bars": {
    label: "App bars / Navigation bars",
    title: "앱 바 가이드",
    description: "상단 내비게이션 바의 구성 요소와 콘텐츠 배치 원칙을 정리합니다.",
    usage: "앱 바는 현재 화면의 위치를 알리고 주요 액션에 빠르게 접근하게 하는 최상위 탐색 레이어입니다. 타이틀, 리딩 아이콘, 트레일링 액션의 세 영역으로 나누고 각 역할을 명확히 분리합니다.",
    rules: ["타이틀은 현재 화면을 설명하는 한 줄 텍스트로 제한합니다.", "리딩 아이콘은 뒤로가기 또는 메뉴 열기 중 하나만 배치합니다.", "트레일링 영역에는 3개 이하의 액션 아이콘만 사용합니다.", "스크롤 시 surface-container 배경으로 전환해 콘텐츠와 분리감을 유지합니다."],
    tokens: ["`surface` + `on-surface`", "`surface-container` (scrolled)", "`primary` (active icon)"],
  },
  buttons: {
    label: "Buttons",
    title: "버튼 가이드",
    description: "Primary, tonal, secondary 버튼의 역할과 상태 기준을 정리합니다.",
    usage: "버튼은 화면 안에서 행동 우선순위를 구분하는 가장 직접적인 장치입니다. 한 화면에서는 primary를 1개만 두고, 나머지는 tonal 또는 secondary로 위계를 분리하는 것을 기본 원칙으로 봅니다.",
    rules: ["Primary는 가장 중요한 전환 액션 한 개에만 사용합니다.", "Tonal은 필터, 보조 액션, 선택 상태처럼 브랜드 강조가 필요하지만 메인 CTA는 아닌 경우에 사용합니다.", "Secondary는 취소, 닫기, 보조 이동처럼 중립 액션에 사용합니다.", "같은 행에 놓일 때는 primary > tonal > secondary 순으로 시각 우선순위를 유지합니다."],
    tokens: ["`primary` + `on-primary`", "`primary-container` + `on-primary-container`", "`surface-container` + `outline` + `on-surface`"],
  },
  "bottom-sheets": {
    label: "Bottom sheets",
    title: "바텀 시트 가이드",
    description: "하단에서 올라오는 시트 컴포넌트의 구성과 콘텐츠 배치 원칙을 정리합니다.",
    usage: "바텀 시트는 현재 컨텍스트를 유지하면서 추가 선택이나 상세 정보를 제공하는 레이어입니다. 전체 화면 전환 없이 보조 흐름을 처리할 때 사용하며, 핸들과 타이틀로 시트의 범위를 명확히 합니다.",
    rules: ["핸들(드래그 인디케이터)은 항상 최상단에 배치해 인터랙션 가능성을 알립니다.", "시트 높이는 콘텐츠 양에 맞게 조정하되 화면의 90%를 넘지 않게 합니다.", "시트 뒤 딤 레이어 탭으로 닫힘을 보장합니다.", "스크롤이 필요한 콘텐츠는 시트 내부에 스크롤 영역을 분리해 구성합니다."],
    tokens: ["`surface-container-high`", "`outline-variant` (handle)", "`on-surface` + `on-surface-variant`"],
  },
  checkboxes: {
    label: "Checkboxes",
    title: "체크박스 가이드",
    description: "다중 선택 상태를 표현하는 체크박스의 상태와 토큰을 정리합니다.",
    usage: "체크박스는 독립적으로 선택·해제할 수 있는 다중 선택 컴포넌트입니다. 플레이어 선택이나 게임 옵션처럼 여러 항목을 동시에 고를 때 적합합니다.",
    rules: ["단일 선택에는 라디오 버튼을 쓰고, 다중 선택에만 체크박스를 사용합니다.", "체크 상태는 primary 색으로 명확히 구분합니다.", "레이블은 체크박스 오른쪽에 배치하고 클릭 영역에 포함시킵니다.", "비활성 상태는 opacity를 낮춰 선택 불가임을 시각적으로 전달합니다."],
    tokens: ["`primary` (checked fill)", "`on-primary` (check icon)", "`outline` (unchecked border)"],
  },
  chips: {
    label: "Chips",
    title: "칩 가이드",
    description: "상태, 데이터, 필터 칩의 톤과 역할을 정리합니다.",
    usage: "칩은 짧은 상태나 범주를 빠르게 인지시키는 용도입니다. 버튼처럼 강하게 행동을 유도하기보다, 정보를 압축해 보여주거나 선택 상태를 가볍게 표시할 때 적합합니다.",
    rules: ["브랜드 강조가 필요한 상태 칩은 primary-container 계열을 사용합니다.", "성공, 경고, 랭크 같은 상태는 support tonal palette를 사용합니다.", "칩 안의 텍스트는 짧고 명확하게 유지합니다.", "필터 칩과 상태 칩을 한 화면에 같이 쓸 때는 목적이 섞이지 않게 그룹을 분리합니다."],
    tokens: ["`primary-container` + `on-primary-container`", "`success` tonal palette", "`warning` tonal palette"],
  },
  "radio-buttons": {
    label: "Radio buttons",
    title: "라디오 버튼 가이드",
    description: "단일 선택 상태를 표현하는 라디오 버튼의 사용 원칙을 정리합니다.",
    usage: "라디오 버튼은 그룹 안에서 하나만 선택할 수 있는 단일 선택 컴포넌트입니다. 승/패, 게임 결과 같은 상호 배타적인 옵션을 선택할 때 사용합니다.",
    rules: ["반드시 그룹으로 묶어 사용하며 독립 배치는 지양합니다.", "선택 상태는 primary 색의 내부 원으로 명확히 표시합니다.", "옵션이 2개뿐이라면 스위치나 세그먼트 컨트롤을 우선 검토합니다.", "레이블을 라디오 오른쪽에 배치하고 전체 행을 클릭 영역으로 처리합니다."],
    tokens: ["`primary` (selected indicator)", "`outline` (unselected border)", "`on-surface` (label)"],
  },
  dialogs: {
    label: "Dialogs / Alerts",
    title: "다이얼로그 가이드",
    description: "사용자 확인이 필요한 다이얼로그와 알럿의 구성 원칙을 정리합니다.",
    usage: "다이얼로그는 사용자의 의도적인 확인이 필요한 흐름 차단 레이어입니다. 기록 삭제, 로그아웃처럼 되돌리기 어려운 액션에만 사용하고, 단순 알림은 스낵바로 대체합니다.",
    rules: ["타이틀은 액션의 결과를 직접적으로 설명하는 한 문장으로 작성합니다.", "Destructive 액션(삭제, 초기화)은 버튼에 error 컬러를 사용합니다.", "항상 취소(dismiss) 옵션을 제공해 사용자가 빠져나올 수 있게 합니다.", "다이얼로그 뒤 딤 레이어는 탭 시 닫힘으로 처리합니다."],
    tokens: ["`surface-container-high`", "`error` (destructive action)", "`on-surface` + `on-surface-variant`"],
  },
  dividers: {
    label: "Dividers",
    title: "디바이더 가이드",
    description: "콘텐츠를 시각적으로 분리하는 디바이더의 사용 기준을 정리합니다.",
    usage: "디바이더는 관련 없는 콘텐츠 그룹 사이를 명확히 나누는 시각적 구분선입니다. 디바이더 없이도 간격으로 충분히 분리될 때는 사용을 자제하고, 꼭 필요한 경우에만 씁니다.",
    rules: ["같은 영역 안의 항목 구분에는 outline-variant(더 약한 보더)를 사용합니다.", "섹션 레벨의 구분에는 outline을 사용합니다.", "디바이더에 레이블(텍스트)을 추가할 때는 on-surface-variant 색으로 처리합니다.", "수직 디바이더는 인라인 요소 사이 짧은 구분선으로만 사용합니다."],
    tokens: ["`outline-variant` (inset divider)", "`outline` (section divider)", "`on-surface-variant` (label)"],
  },
  lists: {
    label: "Lists",
    title: "리스트 가이드",
    description: "항목 목록을 구성하는 리스트 컴포넌트의 레이아웃과 토큰을 정리합니다.",
    usage: "리스트는 동일한 유형의 정보를 일관된 형식으로 나열하는 컴포넌트입니다. 게임 기록, 플레이어 목록처럼 반복되는 데이터를 보여줄 때 항목 간 간격과 정렬을 통일합니다.",
    rules: ["리스트 항목의 높이와 내부 정렬은 모든 항목에서 동일하게 유지합니다.", "리딩 요소(아이콘, 아바타)는 각 행의 왼쪽에 고정합니다.", "트레일링 요소(메타, 아이콘)는 오른쪽에 정렬합니다.", "선택 상태 항목은 primary-container 배경으로 강조합니다."],
    tokens: ["`surface-container` (list bg)", "`primary-container` (selected)", "`on-surface` + `on-surface-variant`"],
  },
  menus: {
    label: "Menus",
    title: "메뉴 가이드",
    description: "컨텍스트 메뉴와 드롭다운의 구성 원칙을 정리합니다.",
    usage: "메뉴는 현재 컨텍스트에 맞는 보조 액션을 제공하는 임시 레이어입니다. 주요 액션은 버튼으로 노출하고, 부차적인 옵션을 담아두는 용도로 사용합니다.",
    rules: ["메뉴 항목은 7개 이하로 유지해 스캔하기 쉽게 합니다.", "Destructive 항목(삭제, 초기화)은 항상 맨 아래에 배치하고 error 컬러를 사용합니다.", "아이콘은 선택 사항이며, 쓸 경우 모든 항목에 일관되게 적용합니다.", "메뉴 외부 탭 시 즉시 닫힘으로 처리합니다."],
    tokens: ["`surface-container-highest`", "`error` (destructive item)", "`on-surface` + `on-surface-variant`"],
  },
  "nav-tabs": {
    label: "Navigation bars / Tab Bar",
    title: "탭 바 가이드",
    description: "하단 탭 내비게이션의 구성 요소와 활성 상태 표현을 정리합니다.",
    usage: "탭 바는 앱의 최상위 화면 간 이동을 담당합니다. 3~5개의 주요 목적지를 아이콘과 레이블로 나타내고, 현재 위치를 active 상태로 명확히 구분합니다.",
    rules: ["탭은 3개 이상 5개 이하로 구성합니다.", "활성 탭은 primary 컬러와 indicator pill로 구분합니다.", "레이블은 항상 표시하며 아이콘만 단독으로 쓰지 않습니다.", "탭 간 이동은 스택이 초기화되는 루트 탐색으로 처리합니다."],
    tokens: ["`surface-container` (bar bg)", "`primary` (active indicator)", "`on-surface-variant` (inactive icon)"],
  },
  pickers: {
    label: "Pickers",
    title: "피커 가이드",
    description: "날짜, 시간, 옵션 선택을 위한 피커 컴포넌트의 사용 기준을 정리합니다.",
    usage: "피커는 스크롤이나 선택 인터랙션으로 값을 고르는 컴포넌트입니다. 게임 날짜나 참여 인원처럼 범위가 정해진 값을 선택할 때 텍스트 입력보다 정확하고 빠릅니다.",
    rules: ["피커는 바텀 시트나 모달 안에 배치해 현재 흐름을 방해하지 않게 합니다.", "선택된 항목은 시각적으로 가장 뚜렷하게 표시합니다.", "스크롤 피커는 위아래 항목을 흐리게 처리해 현재 선택 위치를 알립니다.", "확인 버튼을 명시적으로 제공해 선택 완료를 명확히 합니다."],
    tokens: ["`primary` (selected value)", "`surface-container-high`", "`on-surface-variant` (unselected)"],
  },
  "progress-bar": {
    label: "Progress bar",
    title: "프로그레스 바 가이드",
    description: "진행 상태를 시각적으로 표현하는 프로그레스 바의 사용 원칙을 정리합니다.",
    usage: "프로그레스 바는 작업 완료율이나 목표 달성 정도를 한눈에 보여주는 인디케이터입니다. 게임 세션 진행, 통계 비율 표시처럼 수치가 직관적으로 전달되어야 하는 곳에 사용합니다.",
    rules: ["값이 없거나 불확실한 경우 인디터미네이트(애니메이션) 형태를 씁니다.", "컬러는 진행 맥락에 맞게 primary, success, warning을 구분해 사용합니다.", "레이블이나 퍼센트 수치를 바 오른쪽 또는 아래에 병기합니다.", "배경 트랙은 surface-container, 프로그레스는 primary 또는 support 컬러로 처리합니다."],
    tokens: ["`primary` (progress fill)", "`success` / `warning` (state-based)", "`surface-container` (track)"],
  },
  sliders: {
    label: "Sliders",
    title: "슬라이더 가이드",
    description: "연속적인 값 조정을 위한 슬라이더의 구성과 토큰을 정리합니다.",
    usage: "슬라이더는 정해진 범위 안에서 연속적인 값을 선택할 때 사용합니다. 게임 난이도나 점수 범위처럼 정확한 숫자보다 상대적인 위치 감각이 중요한 입력에 적합합니다.",
    rules: ["현재 값은 thumb 위 툴팁이나 별도 레이블로 표시합니다.", "최솟값·최댓값 레이블을 양 끝에 두어 범위를 명확히 합니다.", "트랙의 채워진 부분과 빈 부분의 대비를 충분히 유지합니다.", "드래그 영역을 충분히 크게 설정해 터치 조작을 쉽게 합니다."],
    tokens: ["`primary` (track fill + thumb)", "`surface-container` (track bg)", "`on-surface` (value label)"],
  },
  snackbars: {
    label: "Snackbars",
    title: "스낵바 가이드",
    description: "짧은 피드백 메시지를 전달하는 스낵바의 사용 기준을 정리합니다.",
    usage: "스낵바는 사용자 액션의 결과를 비침습적으로 알리는 피드백 레이어입니다. 기록 저장 완료, 삭제 완료처럼 별도 확인이 필요 없는 결과를 짧게 전달할 때 사용합니다.",
    rules: ["메시지는 1~2줄을 넘지 않게 짧게 작성합니다.", "액션 버튼이 필요하면 최대 1개만 추가합니다(예: 실행 취소).", "스낵바는 3~5초 후 자동으로 사라지게 처리합니다.", "화면 하단 중앙 또는 좌하단에 배치하고 탭 바 위에 올립니다."],
    tokens: ["`inverse-surface` (bg)", "`inverse-on-surface` (text)", "`primary-fixed-dim` (action)"],
  },
  "star-rating": {
    label: "Star rating",
    title: "스타 레이팅 가이드",
    description: "게임 경험을 별점으로 표현하는 레이팅 컴포넌트의 사용 원칙을 정리합니다.",
    usage: "스타 레이팅은 게임 경험을 직관적으로 수치화하는 입력 컴포넌트입니다. 기록 완료 후 게임 만족도를 표현하거나, 검색 결과에서 인기도를 보여줄 때 사용합니다.",
    rules: ["별점은 5개를 기본으로 하며 0.5단계 단위도 허용합니다.", "채워진 별은 warning(노란) 컬러를 사용해 시각적으로 즉시 인식되게 합니다.", "읽기 전용 상태에서는 소수점 값을 반 별로 표시합니다.", "입력 모드에서는 탭한 별까지 즉시 채워지는 인터랙션을 제공합니다."],
    tokens: ["`warning` #FFBF47 (filled star)", "`surface-container` (empty star)", "`on-surface-variant` (count label)"],
  },
  switches: {
    label: "Switch / Toggles",
    title: "스위치 가이드",
    description: "온/오프 상태를 전환하는 스위치 컴포넌트의 사용 기준을 정리합니다.",
    usage: "스위치는 즉각적으로 효과가 적용되는 이진 설정을 제어합니다. 알림 on/off, 다크모드처럼 저장 없이 즉시 반영되는 토글에 적합하며, 확인이 필요한 전환에는 체크박스를 사용합니다.",
    rules: ["스위치 변경은 즉시 반영되며 별도 저장 액션이 필요하지 않아야 합니다.", "on 상태는 primary 컬러 트랙으로 명확히 표현합니다.", "레이블은 스위치 왼쪽에 배치하고 상태 텍스트를 추가하지 않습니다.", "비활성 상태는 opacity를 낮춰 조작 불가임을 전달합니다."],
    tokens: ["`primary` (on track)", "`surface-container-highest` (off track)", "`on-primary` (thumb)"],
  },
  "text-fields": {
    label: "Text Fields",
    title: "텍스트 필드 가이드",
    description: "텍스트 입력을 위한 필드 컴포넌트의 상태와 토큰을 정리합니다.",
    usage: "텍스트 필드는 사용자가 직접 값을 입력하는 컴포넌트입니다. 게임 이름, 메모, 검색어 입력처럼 자유 형식의 데이터를 받을 때 사용하며, 선택지가 있는 경우 피커나 메뉴를 우선 검토합니다.",
    rules: ["플레이스홀더는 입력 예시나 힌트만 담고, 레이블을 대체하지 않습니다.", "포커스 상태는 primary 컬러 보더로 명확히 구분합니다.", "에러 상태는 error 컬러 보더와 하단 도움말 텍스트로 안내합니다.", "입력 완료(success) 상태는 success 컬러 아이콘으로 확인을 제공합니다."],
    tokens: ["`primary` (focused border)", "`error` (error border + helper)", "`on-surface-variant` (placeholder)"],
  },
  cards: {
    label: "Cards",
    title: "카드 가이드",
    description: "surface 단계별 카드와 강조 카드의 역할을 정리합니다.",
    usage: "카드는 정보 덩어리를 나누는 기본 레이어입니다. surface 단계가 올라갈수록 더 중요하고 더 앞으로 떠 있는 정보라는 인상을 주기 때문에, 카드 간 위계는 색과 그림자보다 먼저 surface token으로 결정합니다.",
    rules: ["일반 정보 카드는 surface-container를 기본으로 사용합니다.", "강조 카드나 핵심 요약 패널은 surface-container-high 또는 highest를 사용합니다.", "카드 안에서는 제목과 본문 대비를 on-surface / on-surface-variant로 분리합니다.", "같은 섹션 안에서 카드 단계가 너무 많아지지 않게 2단계 이내로 제한합니다."],
    tokens: ["`surface-container` + `outline-variant`", "`surface-container-high` + `outline`", "`on-surface` / `on-surface-variant`"],
  },
  "stat-cards": {
    label: "Stat Cards",
    title: "스탯 카드 가이드",
    description: "숫자 중심 카드에서 아이콘, 컬러, 보조 정보 사용 원칙을 정리합니다.",
    usage: "스탯 카드는 핵심 수치를 빠르게 읽게 만드는 카드입니다. 숫자를 가장 먼저 읽고, 그 다음 라벨과 보조 설명을 따라가게 만드는 것이 중요하므로 정보 순서와 대비가 일반 카드보다 더 명확해야 합니다.",
    rules: ["값은 가장 큰 시각 우선순위를 가져야 하며 한 카드에 하나의 핵심 숫자만 둡니다.", "아이콘 색은 support 색 또는 tertiary 같은 보조 강조 컬러로 제한합니다.", "보조 설명은 한 줄 안팎으로 짧게 유지합니다.", "여러 개를 나열할 때는 카드 간 크기와 내부 정렬을 동일하게 맞춥니다."],
    tokens: ["`surface-container-high` + `outline`", "`warning` / `tertiary` support accent", "`on-surface` + `on-surface-variant`"],
  },
} as const;

type GuideKey = keyof typeof componentGuides;
const slugOrder = Object.keys(componentGuides) as GuideKey[];

export function generateStaticParams() {
  return slugOrder.map((slug) => ({ slug }));
}

export default async function ComponentGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = componentGuides[slug as GuideKey];
  if (!guide) return null;

  const currentIndex = slugOrder.indexOf(slug as GuideKey);
  const prevSlug = currentIndex > 0 ? slugOrder[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugOrder.length - 1 ? slugOrder[currentIndex + 1] : null;
  const prevGuide = prevSlug ? componentGuides[prevSlug] : null;
  const nextGuide = nextSlug ? componentGuides[nextSlug] : null;

  return (
    <DesignSystemShell activeTab="component-guide" activeComponentSlug={slug}>
      <section className="space-y-8 px-6 lg:px-10">

        {/* 1. Title */}
        <section className="glass-card-strong overflow-hidden rounded-[32px] border border-white/[0.12] px-6 py-8 lg:px-10 lg:py-12">
          <Link href="/design-system/components" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/55 hover:text-[#A78BFA]">
            <ArrowLeft size={14} />
            Components로 돌아가기
          </Link>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C3B2FF]">{guide.label}</p>
          <h1 className="mt-3 text-[40px] font-bold leading-[1.2] tracking-[-0.05em] text-white sm:text-[56px]">{guide.title}</h1>
          <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-white/58">{guide.description}</p>
        </section>

        {/* 2. Preview — first */}
        <section className="glass-card p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Preview</p>
          <div className="relative mt-5 rounded-[24px] border border-white/10 bg-[#141425] p-5">
            <ComponentPreview slug={slug} />
          </div>
        </section>

        {/* 3. Usage */}
        <section className="glass-card p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Usage Principle</p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">{guide.usage}</p>
        </section>

        {/* 4. Rules */}
        <section className="glass-card p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Rules</p>
          <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-white/60">
            {guide.rules.map((rule) => (
              <li key={rule} className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3">
                {rule}
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Tokens */}
        <section className="glass-card p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">Recommended Tokens</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {guide.tokens.map((token) => (
              <div key={token} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                <p className="text-[14px] font-semibold text-white">{token}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Prev / Next */}
        <section className="glass-card p-6">
          <div className="flex items-center justify-between gap-4">
            {prevGuide && prevSlug ? (
              <Link
                href={`/design-system/components/${prevSlug}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-[14px] font-semibold text-white/70 transition-all duration-200 hover:border-[#8B5CF6]/35 hover:bg-[#24163F] hover:text-[#E9DDFF]"
              >
                <ArrowLeft size={14} />
                {prevGuide.label}
              </Link>
            ) : <div />}
            {nextGuide && nextSlug ? (
              <Link
                href={`/design-system/components/${nextSlug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#24163F] px-5 py-3 text-[14px] font-semibold text-[#E9DDFF] transition-all duration-200 hover:bg-[#2e1a50]"
              >
                {nextGuide.label}
                <ArrowRight size={14} />
              </Link>
            ) : <div />}
          </div>
        </section>

      </section>
    </DesignSystemShell>
  );
}
