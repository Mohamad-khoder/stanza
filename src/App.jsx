```javascript
import { useState, useEffect, useRef } from "react";

export default function App() {

  // ✅ كشف الموبايل (احترافي)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* صفحة المنتج */
  if (selectedProduct) {
    return (
      <div style={pageStyle}>
        <button style={backBtn} onClick={() => setSelectedProduct(null)}>
          ← رجوع
        </button>

        <div style={{
          ...productLayout,
          flexDirection: isMobile ? "column" : "row"
        }}>
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
      {!isMobile && (
        <div style={sidebar}>
          <img src="/images/31d9d2c5-0399-41a2-9d9f-7e86173ab916.png" style={logo} />
          <p style={menu}>الأصابع</p>
          <p style={menu}>بافي كورن</p>
          <p style={menu}>البسكوت</p>

          <p style={{ ...menu, marginTop: "30px" }} onClick={() => setPage("about")}>
            حولنا
          </p>
        </div>
      )}

      {/* Content */}
      <div style={{
        ...content,
        padding: isMobile ? "20px" : "50px"
      }}>
        <Fade>
          <h1 style={{
            ...mainTitle,
            fontSize: isMobile ? "26px" : "42px"
          }}>
            قرمشة خفيفة... وطعم فاخر
          </h1>

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
    if (ref.current) obs.observe(ref.current);
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

/* Styles */

const container = { display: "flex", fontFamily: "-apple-system", background: "#fafafa" };

const sidebar = { width: "220px", padding: "30px", background: "#f3f3f3" };

const content = { flex: 1 };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "20px",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const img = { width: "100%", borderRadius: "15px", marginBottom: "10px" };

const menu = { marginBottom: "12px", cursor: "pointer", color: "#444" };

const mainTitle = { fontWeight: "300" };

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

const pageStyle = { padding: "30px" };

const productLayout = {
  display: "flex",
  gap: "30px",
  alignItems: "center"
};

const productImg = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "20px"
};

const specBox = {
  background: "#f5f5f7",
  padding: "20px",
  borderRadius: "15px",
  marginTop: "20px"
};

const logo = { width: "120px", marginBottom: "40px" };
const backBtn = { marginBottom: "20px", cursor: "pointer" };
```
