import { useState, useEffect, useRef } from "react";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState("home");

  /* صفحة المنتج */
  if (selectedProduct) {
    return (
      <div style={pageStyle}>
        <button style={backBtn} onClick={() => setSelectedProduct(null)}>
          ← رجوع
        </button>

        <div style={productLayout}>
          <img src={selectedProduct.img} style={productImg} />

          <div>
            <h1 style={title}>{selectedProduct.title}</h1>

            <p style={descBig}>{selectedProduct.story}</p>

            <div style={specBox}>
              {selectedProduct.specs.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>

            <a
              href={`https://wa.me/201555662867?text=طلب ${selectedProduct.title}`}
              target="_blank"
            >
              <button style={btn}>اطلب الآن</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* صفحة حولنا */
  if (page === "about") {
    return (
      <div style={pageStyle}>
        <button style={backBtn} onClick={() => setPage("home")}>
          ← رجوع
        </button>

        <div style={{ maxWidth: "700px" }}>
          <h1 style={title}>STANZA… أكثر من مجرد سناك</h1>

          <p style={descBig}>
            نحن لا نصنع منتجاً فقط…  
            نحن نصنع لحظة.
          </p>

          <p style={desc}>
            في STANZA نؤمن أن أبسط الأشياء ممكن تكون الأفضل…  
            قرمشة خفيفة، طعم غني، وتجربة تبدأ من أول قضمة.
          </p>

          <p style={desc}>
            كل منتج نصممه بعناية ليكون مناسب لكل وقت:  
            مع القهوة، في الطريق، أو حتى كاستراحة صغيرة خلال يومك.
          </p>

          <p style={desc}>
            هدفنا؟  
            نوصل لمرحلة تخلي المنتج نفسه يحكي عن حاله… بدون تعقيد.
          </p>

          <p style={descBig}>
            STANZA… جرّبها مرة، وبتصير عادة.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={container}>
      {/* Sidebar */}
      <div style={sidebar}>
        <img
          src="/images/31d9d2c5-0399-41a2-9d9f-7e86173ab916.png"
          style={logo}
        />

        <p style={menu}>الأصابع</p>
        <p style={menu}>بافي كورن</p>
        <p style={menu}>البسكوت</p>

        <p style={{ ...menu, marginTop: "30px" }} onClick={() => setPage("about")}>
          حولنا
        </p>
      </div>

      {/* Content */}
      <div style={content}>
        <Fade>
          <h1 style={mainTitle}>قرمشة خفيفة... وطعم فاخر</h1>
          <p style={subTitle}>تجربة مختلفة تبدأ من أول قضمة ✨</p>
        </Fade>

        <Section title="أصابع ستانزا" subtitle="خفيفة… لكنها تترك أثر لا يُنسى" items={fingers} setSelectedProduct={setSelectedProduct} />

        <Section title="بافي كورن" subtitle="نكهات جريئة… مصممة لتُفاجئك" items={puffy} setSelectedProduct={setSelectedProduct} />

        <Section title="قطع البسكوت" subtitle="تفاصيل صغيرة… بطعم كبير" items={biscuit} setSelectedProduct={setSelectedProduct} />
      </div>
    </div>
  );
}

/* Section */
function Section({ title, subtitle, items, setSelectedProduct }) {
  return (
    <div style={{ marginTop: "80px" }}>
      <Fade>
        <h2 style={sectionTitle}>{title}</h2>
        <p style={sectionSub}>{subtitle}</p>
      </Fade>

      <div style={grid}>
        {items.map((item, i) => (
          <Fade key={i}>
            <div
              style={card}
              onClick={() => setSelectedProduct(item)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={item.img} style={img} />

              <h3 style={cardTitle}>{item.title}</h3>

              <p style={cardDesc}>{item.desc}</p>
              <p style={cardStory}>{item.storyShort}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

/* Animation */
function Fade({ children }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true));
    obs.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(30px)",
        transition: "0.7s",
      }}
    >
      {children}
    </div>
  );
}

/* البيانات */

const fingers = [
  {
    title: "أصابع شوكولاتة",
    desc: "غنية وناعمة 🍫",
    storyShort: "شوكولاتة تذوب… وقرمشة تبقى.",
    img: "/images/stanza-finger-choco.jpeg",
    story: "مزيج متوازن بين القرمشة الخفيفة وحشوة الشوكولاتة الغنية التي تذوب بسلاسة مع كل قضمة.",
    specs: [
      "📦 وزن القطعة: 12 غرام",
      "📏 الطول: 9 سم",
      "🔢 عدد القطع: 24",
      "📦 بالكرتونة: 6 علب",
      "⚖️ وزن الكرتونة: 2.6 كغ"
    ]
  },
  {
    title: "أصابع فراولة",
    desc: "منعشة وخفيفة 🍓",
    storyShort: "نكهة لطيفة… بإحساس مختلف.",
    img: "/images/IMG_8217.PNG",
    story: "نكهة فراولة ناعمة ومنعشة، بتوازن مثالي مع القرمشة الخفيفة لتجربة أخف وأكثر انتعاشاً.",
    specs: [
      "📦 وزن القطعة: 12 غرام",
      "📏 الطول: 9 سم",
      "🔢 عدد القطع: 24",
      "📦 بالكرتونة: 6 علب",
      "⚖️ وزن الكرتونة: 2.6 كغ"
    ]
  },
  {
    title: "أصابع جوز الهند",
    desc: "لمسة استوائية 🥥",
    storyShort: "خفيفة… بطابع استوائي.",
    img: "/images/IMG_8216.PNG",
    story: "طعم جوز الهند الطبيعي يعطي إحساس استوائي خفيف ومميز مع كل قضمة.",
    specs: [
      "📦 وزن القطعة: 12 غرام",
      "📏 الطول: 9 سم",
      "🔢 عدد القطع: 24",
      "📦 بالكرتونة: 6 علب",
      "⚖️ وزن الكرتونة: 2.6 كغ"
    ]
  }
];

const puffy = [
  {
    title: "بافي كورن جبنة",
    desc: "نكهة قوية 🧀",
    storyShort: "قرمشة خفيفة… بطعم واضح.",
    img: "/images/IMG_8227.PNG",
    story: "بافي كورن خفيف ومقرمش بنكهة جبنة غنية، بدون أي ملونات صناعية.",
    specs: [
      "📦 الوزن: 25 غرام",
      "📦 التعبئة: كيس",
      "🔢 بالكرتونة: 12",
      "⚖️ وزن الكرتونة: 450 غ",
      "✔️ بدون ملونات صناعية"
    ]
  },
  {
    title: "بافي كورن كاتشب",
    desc: "طعم كلاسيكي 🍅",
    storyShort: "المألوف… لكن أفضل.",
    img: "/images/IMG_8221.PNG",
    story: "نكهة الكاتشب المتوازنة تعطي طعماً مألوفاً لكن بقرمشة أخف.",
    specs: [
      "📦 الوزن: 25 غرام",
      "📦 التعبئة: كيس",
      "🔢 بالكرتونة: 12",
      "⚖️ وزن الكرتونة: 450 غ"
    ]
  },
  {
    title: "بافي كورن شطة وليمون",
    desc: "حار ومنعش 🔥🍋",
    storyShort: "ضربة حارة… بلمسة منعشة.",
    img: "/images/IMG_8220.PNG",
    story: "مزيج جريء من الشطة والليمون يعطي إحساس قوي ومختلف.",
    specs: [
      "📦 الوزن: 25 غرام",
      "📦 التعبئة: كيس",
      "🔢 بالكرتونة: 12",
      "⚖️ وزن الكرتونة: 450 غ"
    ]
  }
];

const biscuit = [
  {
    title: "قطع بسكوت شوكولاتة",
    desc: "غنية بالكاكاو 🍫",
    storyShort: "قطع صغيرة… بطعم كبير.",
    img: "/images/IMG_8219.PNG",
    story: "بسكوت غني بالكاكاو مع طعم شوكولاتة واضح ومميز.",
    specs: [
      "📦 الوزن: 45 غرام",
      "🍫 الحشوة: شوكولاتة",
      "🔢 بالكرتونة: 12",
      "⚖️ وزن الكرتونة: 750 غ",
      "✔️ غنية بالكاكاو"
    ]
  }
];

/* Styles */

const container = { display: "flex", fontFamily: "-apple-system", background: "#fafafa" };
const sidebar = { width: "220px", padding: "30px", background: "#f3f3f3" };
const content = { flex: 1, padding: "50px" };

const grid = { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "30px" };

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "0.2s",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const img = { width: "100%", borderRadius: "15px", marginBottom: "10px" };

const menu = { marginBottom: "12px", cursor: "pointer", color: "#444" };

const mainTitle = { fontSize: "42px", fontWeight: "300" };
const subTitle = { color: "#777", marginBottom: "40px" };

const sectionTitle = { fontSize: "28px", fontWeight: "300" };
const sectionSub = { color: "#777", marginBottom: "20px" };

const cardTitle = { fontSize: "18px" };
const cardDesc = { color: "#777" };
const cardStory = { color: "#999", fontSize: "13px" };

const title = { fontSize: "40px", fontWeight: "300" };
const desc = { color: "#666", marginBottom: "10px" };
const descBig = { color: "#444", fontSize: "18px", marginBottom: "20px" };

const btn = {
  marginTop: "20px",
  padding: "12px 25px",
  background: "#000",
  color: "#fff",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer"
};

const pageStyle = { padding: "50px" };
const productLayout = { display: "flex", gap: "50px", alignItems: "center" };
const productImg = { width: "400px", borderRadius: "20px" };

const specBox = {
  background: "#f5f5f7",
  padding: "20px",
  borderRadius: "15px",
  marginTop: "20px"
};

const logo = { width: "120px", marginBottom: "40px" };
const backBtn = { marginBottom: "20px", cursor: "pointer" };