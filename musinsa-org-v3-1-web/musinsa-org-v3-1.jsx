import { useState } from "react";

const cLevelData = {
  biz: [
    { code: "CCO", title: "최고커머스책임자", name: "최재영", career: "前 쿠팡 시니어디렉터(가전·럭셔리뷰티), 삼성전자, 아모레퍼시픽", scope: "플랫폼 커머스 = MD·영업·입점브랜드관리·광고솔루션·파트너성장·운영·오프라인커머스", src: "전자신문 2022.08 / 머니S 2026.01", color: "#dc2626" },
    { code: "CBO", title: "최고브랜드책임자", name: "최운식", career: "前 이랜드월드 대표(뉴발란스 1조·스파오), 2025.01 무신사 합류", scope: "자체+유통 브랜드 전체 = 무신사스탠다드·오드타입·디스커스·트레이딩 DT브랜드·워즈코퍼레이션", src: "전자신문 2025.01 / 더벨 2025.12 / ZDNet 2025.01", color: "#ea580c" },
    { code: "CGO", title: "최고글로벌책임자", name: "박준영", career: "글로벌 사업본부 총괄", scope: "글로벌스토어·무신사JAPAN·상하이오프라인·해외물류·K패션수출", src: "디지털투데이 2025.12", color: "#0891b2" },
    { code: "CTO", title: "최고기술책임자", name: "전준희", career: "前 구글·유튜브·우버, 이스트소프트 공동창업", scope: "테크전체(CBP·PBO·EF·Data&AI)·29CM테크·페이먼츠테크 지원", src: "musinsacareers 인터뷰 / 머니S 2026.01", color: "#7c3aed" },
    { code: "CDeO", title: "최고디테일책임자", name: "조만호 (겸임)", career: "무신사 창업자·총괄대표", scope: "브랜드·상품 디테일 총괄, 콘텐츠·미디어(추정)", src: "헤럴드경제 2025.12", color: "#be185d" },
  ],
  support: [
    { code: "CFO", title: "최고재무책임자", name: "최영준", career: "기존 등기이사·경영 전반 참여", scope: "경영기획·FP&A·재무", src: "헤럴드경제 2025.12", color: "#2563eb" },
    { code: "CLO", title: "최고법무책임자", name: "이재환", career: "", scope: "법무", src: "EBN 2025.12", color: "#4f46e5" },
    { code: "CPRO", title: "최고홍보책임자", name: "이승진", career: "", scope: "PR·홍보", src: "EBN 2025.12", color: "#0d9488" },
    { code: "CHRO", title: "최고인사책임자", name: "조남성 (겸임)", career: "前 LG전자·퀄컴·쿠팡·SK온 HR 총괄, 2024 무신사 합류", scope: "인사·채용·총무·시설", src: "머니S 2026.01", color: "#1d4ed8" },
  ],
};

const orgData = {
  subs: [
    {
      name: "무신사 (본체)",
      headcount: "~1,836명",
      color: "#0f172a",
      divisions: [
        {
          name: "Tech 부문",
          cLevel: "CTO", cName: "전준희", confidence: "confirmed",
          icon: "⚙️", desc: "Tribe/Squad + Group 매트릭스 · OCMP 전략",
          teams: [
            { name: "CBP (Core Business Platform)", roles: ["고객(Customer)", "상품카탈로그(Catalog)", "파트너어드민(Partner)", "광고(Ads Platform)", "검색/개인화/추천"] },
            { name: "PBO (Platform Business Operation)", roles: ["물류·배송·서플라이체인", "주문·세일·클레임·프라이싱"] },
            { name: "EF (Engineering Foundation)", roles: ["DevOps/AX/FinOps", "SRE", "DBA", "IT Service", "보안(네트워크·접근제어·Audit)"] },
            { name: "Frontend Engineering Group", roles: ["프론트엔드개발그룹(기능조직)", "각 Squad 분산 배치"] },
            { name: "Backend Engineering Group", roles: ["Core Catalog·Partner·Personalization·Ranking", "Search Platform·글로벌·세일·주문·클레임"] },
            { name: "Data & AI", roles: ["데이터분석실(Product Analysis)", "Data Intelligence(BA)", "Data Science(추천)", "Data/ML Engineering·MLOps"] },
            { name: "Product Management", roles: ["Core Customer·Partner Growth·Home & Discovery", "O4O·유즈드·주문/배송/클레임", "검색/개인화/추천·PBO PM·Core AI PM"] },
            { name: "Product Design · QA · TPM", roles: ["Product Designer(O4O·SCM Hub)", "QA/Quality Engineer", "TPM·PM(Tech Staff)"] },
          ],
        },
        {
          name: "커머스 (MD·영업·입점브랜드관리)",
          cLevel: "CCO", cName: "최재영", confidence: "confirmed",
          icon: "🛒", desc: "무신사스토어 브랜드 영업·상품 관리 총괄",
          teams: [
            { name: "MD", roles: ["Footwear MD(Buying·Planning)", "IP Business MD", "트렌드상품&IP기획 MD", "키즈 MD·Lead"] },
            { name: "On-Site Marketing", roles: ["Global Platform", "Sports Category"] },
            { name: "파트너 성장 지원", roles: ["파트너성장지원팀(교육·마케팅·콘텐츠)"] },
            { name: "커머스 PM", roles: ["커머스 PM", "Growth PM", "Trend&IP PM"] },
          ],
        },
        {
          name: "광고사업 (Ad Business)",
          cLevel: "CCO", cName: "최재영", confidence: "strong",
          icon: "📊", desc: "고도화된 광고·마케팅 솔루션 (머니S 확인)",
          teams: [
            { name: "광고사업", roles: ["광고사업 AE", "AD Business Assistant"] },
          ],
        },
        {
          name: "운영본부 (CX·선제대응·CS)",
          cLevel: "CCO", cName: "최재영", confidence: "strong",
          icon: "📋", desc: "고객/파트너 여정 리스크 매니지먼트",
          teams: [
            { name: "운영", roles: ["Operations Planning(Sr.)", "선제대응팀(CX Risk)", "CX(컨택센터)", "운영3팀 글로벌CS"] },
          ],
        },
        {
          name: "오프라인 커머스 (O4O)",
          cLevel: "CCO", cName: "최재영", confidence: "strong",
          icon: "🏬", desc: "오프라인 매장·VMD·팝업·뷰티오프라인",
          teams: [
            { name: "VMD", roles: ["패션 VMD", "뷰티 VMD"] },
            { name: "오프라인 뷰티", roles: ["뷰티 MD(색조·스킨케어)", "뷰티 영업 관리"] },
            { name: "오프라인 기획", roles: ["팝업 기획", "인테리어 디자인 설계"] },
          ],
        },
        {
          name: "마케팅 (Brand·Growth)",
          cLevel: "CCO", cName: "최재영", confidence: "strong",
          icon: "📣", desc: "플랫폼 마케팅 (PR은 CPRO 이승진 별도)",
          teams: [
            { name: "Brand Marketing", roles: ["브랜드마케팅1팀+"] },
            { name: "Growth Marketing", roles: ["Growth Marketer(옴니채널)"] },
          ],
        },
        {
          name: "무신사 스탠다드",
          cLevel: "CBO", cName: "최운식", confidence: "confirmed",
          icon: "👕", desc: "2025년 거래액 4,700억 · 매장 40+ · 2026년 1조 목표",
          teams: [
            { name: "무신사 스탠다드", roles: ["상품기획MD(맨즈·재고·온라인·워크웨어·언더웨어)", "Fashion Design(Graphic·Footwear)", "소싱/생산관리(글로벌·데님·키즈)", "Brand Marketing(글로벌·오프라인)", "VMD(머천다이징·비주얼)", "ISP Design·Retail Operation"] },
          ],
        },
        {
          name: "PB 브랜드 (오드타입·디스커스 등)",
          cLevel: "CBO", cName: "최운식", confidence: "confirmed",
          icon: "🧴", desc: "뷰티 PB + 캐주얼 PB + 29CM 이구어퍼스트로피",
          teams: [
            { name: "PB 브랜드", roles: ["오드타입(뷰티)", "디스커스 애슬레틱", "이구어퍼스트로피(29CM)", "Fashion Design·기획MD·Sales MD"] },
          ],
        },
        {
          name: "🔴 트레이딩 브랜드 (2026.04 편입)",
          cLevel: "CBO", cName: "최운식", confidence: "confirmed",
          icon: "📦", desc: "DT(유통) 사업 = 브랜드 부문에서 관할 (전자신문·ZDNet 확인)",
          teams: [
            { name: "트레이딩 브랜드", roles: ["JanSport·Dickies·Champion·Y-3·Noah·Marine Serre 등 10여개", "100% 고용 승계 확정 → CBO 산하 브랜드 조직 편입"] },
          ],
        },
        {
          name: "글로벌",
          cLevel: "CGO", cName: "박준영", confidence: "confirmed",
          icon: "🌏", desc: "글로벌스토어·해외물류·해외법인",
          teams: [
            { name: "글로벌 운영", roles: ["Global Platform Logistics", "Global Trade Logistics", "파트너&글로벌 운영"] },
            { name: "글로벌 스토어", roles: ["글로벌스토어(일본 거래액 2배↑)", "상하이 오프라인(안푸루·무탠다드 원그로브점 등)"] },
          ],
        },
        {
          name: "콘텐츠·미디어",
          cLevel: "CDeO", cName: "조만호", confidence: "inferred",
          icon: "🎬", desc: "미디어본부(매거진+무신사TV) · 촬영·모션",
          teams: [
            { name: "콘텐츠 제작", roles: ["Motiongrapher", "Photographer Assistant", "오프라인 스토어 SNS 운영"] },
            { name: "미디어", roles: ["무신사 매거진", "무신사TV", "K-커넥트(팬덤 콘텐츠)"] },
          ],
        },
        {
          name: "재무",
          cLevel: "CFO", cName: "최영준", confidence: "confirmed",
          icon: "💰", desc: "",
          teams: [{ name: "재무", roles: ["경영기획", "FP&A(경영지원·Logistics)"] }],
        },
        {
          name: "법무",
          cLevel: "CLO", cName: "이재환", confidence: "confirmed",
          icon: "⚖️", desc: "",
          teams: [{ name: "법무", roles: ["사내 변호사"] }],
        },
        {
          name: "홍보·PR",
          cLevel: "CPRO", cName: "이승진", confidence: "confirmed",
          icon: "📰", desc: "",
          teams: [{ name: "PR", roles: ["PR Manager"] }],
        },
        {
          name: "인사·총무",
          cLevel: "CHRO", cName: "조남성", confidence: "confirmed",
          icon: "👥", desc: "",
          teams: [
            { name: "인사", roles: ["Tech Recruiter", "Recruiting Coordinator", "S&OP"] },
            { name: "총무·시설", roles: ["General Affairs Mgr", "Property Mgr(Sr.)", "EHS", "Executive Assistant"] },
          ],
        },
      ],
    },
    {
      name: "29CM",
      headcount: "별도 사업부",
      color: "#1e3a5f",
      divisions: [
        {
          name: "Product & Engineering",
          cLevel: "CTO", cName: "전준희", confidence: "confirmed",
          icon: "⚙️", desc: "테크는 CTO 산하 통합 지원 (musinsacareers 확인)",
          teams: [
            { name: "Product", roles: ["PM(Commerce Core·전시)", "Product Designer×2", "UX Researcher"] },
            { name: "Engineering", roles: ["Backend(커머스코어)", "Frontend(고객경험·Discovery)"] },
          ],
        },
        {
          name: "Commerce & Marketing",
          cLevel: "CCO", cName: "최재영", confidence: "strong",
          icon: "🛒", desc: "커머스·MD·마케팅",
          teams: [
            { name: "MD", roles: ["Retail·Offline Retail MD", "Footwear AMD", "글로벌 사업 MD", "주방·푸드·키친&퍼니처 MD"] },
            { name: "오프라인", roles: ["이구홈 성수(62만명)", "이구홈 더현대 서울"] },
            { name: "마케팅", roles: ["Brand Planner", "Commerce/Growth Marketing Mgr", "Content Planner Lead"] },
          ],
        },
      ],
    },
    {
      name: "무신사페이먼츠",
      headcount: "별도 자회사",
      color: "#0f3460",
      divisions: [
        {
          name: "Engineering & Product",
          cLevel: "CTO", cName: "전준희", confidence: "confirmed",
          icon: "💳", desc: "일부 테크 조직이 CTO 산하에서 지원",
          teams: [
            { name: "Engineering", roles: ["Backend(결제·선불·정산)", "EM(정산)", "DevOps", "DBA", "Data Engineer"] },
            { name: "Product & Compliance", roles: ["PM", "Compliance Lead", "Info Security Mgr", "Security Engineer"] },
          ],
        },
      ],
    },
    {
      name: "무신사로지스틱스",
      headcount: "별도 자회사",
      color: "#533483",
      divisions: [
        {
          name: "물류 운영",
          cLevel: "—", cName: "별도 경영", confidence: "confirmed",
          icon: "📦", desc: "",
          teams: [{ name: "운영", roles: ["Business Analyst", "HRM", "Logistics PM", "엑소텍 스카이팟(자동화)"] }],
        },
      ],
    },
    {
      name: "무신사 리테일서비스",
      headcount: "별도 자회사 (오프라인 Crew)",
      color: "#7c3aed",
      divisions: [
        {
          name: "오프라인 스토어 운영",
          cLevel: "CBO", cName: "최운식", confidence: "strong",
          icon: "🏪", desc: "무신사스탠다드 매장 운영 → CBO 산하",
          teams: [{ name: "스토어", roles: ["무신사스탠다드 40+", "무신사스토어", "무신사킥스", "무신사걸스(타임스퀘어)", "Crew 교육·관리"] }],
        },
      ],
    },
    {
      name: "무신사 JAPAN",
      headcount: "일본법인",
      color: "#dc2626",
      divisions: [
        {
          name: "일본 법인",
          cLevel: "CGO", cName: "박준영", confidence: "confirmed",
          icon: "🇯🇵", desc: "",
          teams: [{ name: "운영", roles: ["Accountant", "Logistics Support", "대표: 이케다 마이크(2025.11~)"] }],
        },
      ],
    },
    {
      name: "워즈코퍼레이션",
      headcount: "자회사 (의류 제조)",
      color: "#92400e",
      divisions: [
        {
          name: "브랜드 전개",
          cLevel: "CBO", cName: "최운식", confidence: "strong",
          icon: "🧥", desc: "브랜드 사업 → CBO 산하",
          teams: [{ name: "브랜드", roles: ["예일(Yale)", "피지컬에듀케이션디파트먼트", "팀코믹스", "래리클락", "혼다"] }],
        },
      ],
    },
  ],
  tradingMapping: {
    title: "무신사 트레이딩 → 본체 합병 매핑 (2026.04)",
    confirmed: "100% 고용 승계 · 10여개 브랜드 → CBO 최운식 산하 브랜드 조직 편입 (더벨·ZDNet 확인)",
    items: [
      { from: "플랫폼디자인팀 (최현균)", to: "CBO 최운식 산하 편입 → 그러나 본체에 대응 조직 없음", risk: "high-opportunity", note: "카페24 공식몰 = 본체 자체 플랫폼(React/MSA)과 완전 다른 영역. CBO 산하에서 '브랜드 공식몰 전문 유닛'으로 독립 포지셔닝 가능" },
      { from: "촬영팀", to: "CDeO 조만호 산하 콘텐츠·미디어", risk: "high-risk", note: "본체 무신사스튜디오(동대문/한남) 이미 운영. 중복 명확" },
      { from: "VMD팀", to: "CCO 최재영 산하 오프라인커머스 VMD", risk: "medium", note: "본체 VMD 다수 채용중. 배치처 있으나 경쟁" },
      { from: "브랜드1·2본부 (MD/운영)", to: "CBO 최운식 산하 브랜드별 MD 조직", risk: "low", note: "'10여개 브랜드 운영은 무신사 브랜드 조직 편입' 공식 발표. 가장 안정" },
      { from: "경영지원/운영지원", to: "조남성 대표 산하 (CFO 최영준 / CHRO 조남성)", risk: "high-risk", note: "C레벨 9명 체제 완비. 중복 정리 1순위" },
    ],
  },
};

const cLevelColors = { CCO: "#dc2626", CBO: "#ea580c", CGO: "#0891b2", CTO: "#7c3aed", CDeO: "#be185d", CFO: "#2563eb", CLO: "#4f46e5", CPRO: "#0d9488", CHRO: "#1d4ed8", "—": "#94a3b8" };
const confBadge = { confirmed: { bg: "#dcfce7", color: "#166534", label: "확인" }, strong: { bg: "#dbeafe", color: "#1e40af", label: "확실" }, inferred: { bg: "#fef3c7", color: "#92400e", label: "추정" } };
const riskStyles = { "high-risk": { bg: "#fef2f2", border: "#ef4444", text: "#dc2626", label: "위험" }, medium: { bg: "#fffbeb", border: "#f59e0b", text: "#d97706", label: "주의" }, low: { bg: "#f0fdf4", border: "#22c55e", text: "#16a34a", label: "안정" }, "high-opportunity": { bg: "#eff6ff", border: "#3b82f6", text: "#2563eb", label: "기회" } };

function CTag({ code, name, conf }) {
  const c = cLevelColors[code] || "#94a3b8";
  const cb = confBadge[conf];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
      <span style={{ padding: "1px 8px", borderRadius: 10, fontSize: 10, fontWeight: 700, background: c + "12", color: c, border: `1px solid ${c}30`, whiteSpace: "nowrap" }}>{code} {name}</span>
      {cb && <span style={{ padding: "0px 5px", borderRadius: 6, fontSize: 8, fontWeight: 600, background: cb.bg, color: cb.color }}>{cb.label}</span>}
    </span>
  );
}

function Division({ div, isLast }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: isLast ? 0 : 5 }}>
      <div onClick={() => setOpen(!open)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 10px", background: open ? "#f8fafc" : "#fff", borderRadius: 8, cursor: "pointer", border: "1px solid #e2e8f0", flexWrap: "wrap" }}>
        <span style={{ fontSize: 14 }}>{div.icon}</span>
        <span style={{ fontWeight: 600, fontSize: 12, color: "#1e293b" }}>{div.name}</span>
        <CTag code={div.cLevel} name={div.cName} conf={div.confidence} />
        <span style={{ flex: 1 }} />
        {div.desc && <span style={{ fontSize: 9, color: "#94a3b8", maxWidth: 200, textAlign: "right" }}>{div.desc}</span>}
        <span style={{ fontSize: 10, color: "#94a3b8", transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.15s" }}>▶</span>
      </div>
      {open && (
        <div style={{ paddingLeft: 12, paddingTop: 5 }}>
          {div.teams.map((team, ti) => (
            <div key={ti} style={{ marginBottom: ti < div.teams.length - 1 ? 6 : 0 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#475569", marginBottom: 2, paddingLeft: 4 }}>{team.name}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 3, paddingLeft: 4 }}>
                {team.roles.map((r, ri) => (
                  <span key={ri} style={{ padding: "2px 7px", background: r.includes("편입") || r.includes("승계") ? "#fef2f2" : "#f1f5f9", borderRadius: 10, fontSize: 10, color: r.includes("편입") || r.includes("승계") ? "#dc2626" : "#64748b", lineHeight: 1.5 }}>{r}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Subsidiary({ sub }) {
  const [open, setOpen] = useState(sub.name === "무신사 (본체)");
  return (
    <div style={{ marginBottom: 10 }}>
      <div onClick={() => setOpen(!open)} style={{ padding: "10px 14px", background: sub.color, borderRadius: open ? "10px 10px 0 0" : 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{sub.name}</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginLeft: 8 }}>{sub.headcount}</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>{sub.divisions.length}개 조직 {open ? "▼" : "▶"}</span>
      </div>
      {open && (
        <div style={{ padding: 8, background: "#fff", border: `1px solid ${sub.color}18`, borderTop: "none", borderRadius: "0 0 10px 10px" }}>
          {sub.divisions.map((d, i) => <Division key={i} div={d} isLast={i === sub.divisions.length - 1} />)}
        </div>
      )}
    </div>
  );
}

function CLeadership() {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ marginBottom: 14, background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", overflow: "hidden" }}>
      <div onClick={() => setOpen(!open)} style={{ padding: "10px 14px", cursor: "pointer", background: "#f8fafc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#0f172a" }}>🏛️ C-Level 책임 경영 체제 (2026.01~)</h3>
        <span style={{ fontSize: 11, color: "#94a3b8" }}>{open ? "▼" : "▶"}</span>
      </div>
      {open && (
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
            {[
              { name: "조만호", role: "대표 · 비즈니스 총괄", sub: "CDeO 겸임 · 창업자", c: "#dc2626" },
              { name: "조남성", role: "대표 · 사업지원 총괄", sub: "CHRO 겸임 · 前 LG전자·쿠팡·SK온 HR", c: "#2563eb" },
            ].map((ceo, i) => (
              <div key={i} style={{ flex: "1 1 180px", padding: 8, borderRadius: 8, background: ceo.c + "08", border: `1px solid ${ceo.c}25` }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: ceo.c }}>{ceo.name}</div>
                <div style={{ fontSize: 10, color: "#475569" }}>{ceo.role}</div>
                <div style={{ fontSize: 9, color: "#94a3b8" }}>{ceo.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#dc2626", marginBottom: 4 }}>▼ 비즈니스 (조만호 대표)</div>
          {cLevelData.biz.map((c, i) => (
            <div key={i} style={{ padding: "5px 8px", marginBottom: 3, background: c.color + "06", borderRadius: 6, border: `1px solid ${c.color}15` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <span style={{ fontWeight: 800, fontSize: 11, color: c.color, minWidth: 36 }}>{c.code}</span>
                <span style={{ fontWeight: 700, fontSize: 11, color: "#1e293b" }}>{c.name}</span>
                <span style={{ fontSize: 9, color: "#94a3b8" }}>{c.career}</span>
              </div>
              <div style={{ fontSize: 9, color: "#64748b", paddingLeft: 42, marginTop: 1 }}>관할: {c.scope}</div>
              <div style={{ fontSize: 8, color: "#94a3b8", paddingLeft: 42 }}>출처: {c.src}</div>
            </div>
          ))}
          <div style={{ fontSize: 10, fontWeight: 700, color: "#2563eb", marginBottom: 4, marginTop: 10 }}>▼ 사업지원 (조남성 대표)</div>
          {cLevelData.support.map((c, i) => (
            <div key={i} style={{ padding: "5px 8px", marginBottom: 3, background: c.color + "06", borderRadius: 6, border: `1px solid ${c.color}15` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <span style={{ fontWeight: 800, fontSize: 11, color: c.color, minWidth: 36 }}>{c.code}</span>
                <span style={{ fontWeight: 700, fontSize: 11, color: "#1e293b" }}>{c.name}</span>
                <span style={{ fontSize: 9, color: "#94a3b8" }}>{c.career}</span>
              </div>
              <div style={{ fontSize: 9, color: "#64748b", paddingLeft: 42, marginTop: 1 }}>관할: {c.scope}</div>
              <div style={{ fontSize: 8, color: "#94a3b8", paddingLeft: 42 }}>출처: {c.src}</div>
            </div>
          ))}
          <div style={{ marginTop: 8, padding: "5px 8px", background: "#f1f5f9", borderRadius: 6, fontSize: 9, color: "#64748b", lineHeight: 1.5 }}>
            ※ 박준모 前대표 → 고문 · 1년 단위 성과 기반 · C레벨 전원 남성 (블로터 2025.12.22)<br />
            ※ 신뢰도: <span style={{ background: "#dcfce7", padding: "0 4px", borderRadius: 4, color: "#166534" }}>확인</span> 기사/공고 직접확인 · <span style={{ background: "#dbeafe", padding: "0 4px", borderRadius: 4, color: "#1e40af" }}>확실</span> 복수정황 · <span style={{ background: "#fef3c7", padding: "0 4px", borderRadius: 4, color: "#92400e" }}>추정</span> 추론
          </div>
        </div>
      )}
    </div>
  );
}

function MappingSection() {
  const m = orgData.tradingMapping;
  const [open, setOpen] = useState(true);
  return (
    <div style={{ marginTop: 16, background: "#1e293b", borderRadius: 12, overflow: "hidden" }}>
      <div onClick={() => setOpen(!open)} style={{ padding: "10px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: "#fbbf24", fontSize: 13, fontWeight: 700, margin: 0 }}>⚠️ {m.title}</h3>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>{open ? "▼" : "▶"}</span>
      </div>
      {open && (
        <div style={{ padding: "0 12px 12px" }}>
          <div style={{ padding: "5px 8px", background: "rgba(34,197,94,0.1)", borderRadius: 6, marginBottom: 8, fontSize: 10, color: "#4ade80" }}>✅ {m.confirmed}</div>
          {m.items.map((item, i) => {
            const rc = riskStyles[item.risk];
            return (
              <div key={i} style={{ marginBottom: i < m.items.length - 1 ? 6 : 0, padding: 8, background: "rgba(255,255,255,0.05)", borderRadius: 8, borderLeft: `3px solid ${rc.border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 8, fontWeight: 700, padding: "1px 6px", borderRadius: 6, background: rc.bg, color: rc.text }}>{rc.label}</span>
                  <span style={{ color: "#e2e8f0", fontSize: 11, fontWeight: 600 }}>{item.from}</span>
                </div>
                <div style={{ color: "#94a3b8", fontSize: 10, paddingLeft: 4 }}>→ <span style={{ color: "#cbd5e1" }}>{item.to}</span></div>
                <div style={{ color: "#64748b", fontSize: 9, paddingLeft: 4, marginTop: 2 }}>{item.note}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function MusinsaOrgV3() {
  const [filter, setFilter] = useState("ALL");
  const allCodes = ["ALL", ...cLevelData.biz.map(c => c.code), ...cLevelData.support.map(c => c.code)];
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 14, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <h1 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", margin: 0 }}>무신사 그룹 가상 조직도 v3.1</h1>
        <p style={{ fontSize: 9, color: "#94a3b8", margin: "3px 0 0" }}>채용공고 148건 + 뉴스 20건+ 종합 · C레벨 전원 이름·경력·관할·출처 반영</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 8 }}>
          {[{ n: "9", l: "C-Level" }, { n: "~1,836", l: "본체 인원" }, { n: "8", l: "자회사" }, { n: "148+", l: "분석 공고" }].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#1e293b" }}>{s.n}</div>
              <div style={{ fontSize: 9, color: "#94a3b8" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <CLeadership />
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", marginBottom: 4 }}>C-Level 필터</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {allCodes.map(code => (
            <button key={code} onClick={() => setFilter(code)} style={{ padding: "2px 9px", borderRadius: 10, fontSize: 10, fontWeight: filter === code ? 700 : 500, border: `1px solid ${filter === code ? (cLevelColors[code] || "#0f172a") + "60" : "#e2e8f0"}`, background: filter === code ? (cLevelColors[code] || "#0f172a") + "12" : "#fff", color: filter === code ? (cLevelColors[code] || "#0f172a") : "#94a3b8", cursor: "pointer" }}>
              {code === "ALL" ? "전체" : code}
            </button>
          ))}
        </div>
      </div>
      {orgData.subs.map((sub, si) => {
        const filtered = { ...sub, divisions: sub.divisions.filter(d => filter === "ALL" || d.cLevel === filter) };
        if (filtered.divisions.length === 0) return null;
        return <Subsidiary key={si} sub={filtered} />;
      })}
      <MappingSection />
      <div style={{ marginTop: 10, padding: 8, background: "#fff", borderRadius: 8, border: "1px solid #e2e8f0" }}>
        <p style={{ fontSize: 8, color: "#94a3b8", margin: 0, lineHeight: 1.5 }}>
          <strong>소스:</strong> musinsacareers.com 활성공고 148건 · 머니S 2026.01.07 "C레벨 어벤져스" · 블로터 2025.12.22 · 전자신문 2022.08(CCO) · 전자신문 2025.01(CBO) · 한국경제 2025.01(CBO 최운식 경력) · 더벨 2025.12.21(CBO→트레이딩) · ZDNet 2025.12.16 · EBN/디지털데일리 2025.12.12(인사공시) · musinsacareers CTO 인터뷰
        </p>
      </div>
    </div>
  );
}
