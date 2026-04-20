```javascript
import { useState, useEffect, useRef } from "react";

export default function App() {

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

            <a href={`https://wa.me/201555662867?text=طلب ${selectedProduct.title}`} target="_blank">
              <button style={btn}>اطلب الآن</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (page === "about") {
    return (
      <div style={pageStyle}>
        <button style={backBtn} onClick={() => setPage("home")}>
          ← رجوع
        </button>

        <div style={{ maxWidth: "700px" }}>
          <h1 style={title}>STANZA… أكثر من مجرد سناك</h1>
          <p style={descBig}>نحن لا نصنع منتجاً فقط… نحن نصنع لحظة.</p>
          <p style={desc}>في STANZA نؤمن أن أبسط الأشياء ممكن تكون الأفضل…</p>
          <p style={desc}>كل منتج نصممه بعناية ليكون مناسب لكل وقت</p>
          <p style={desc}>هدفنا؟ نوصل لمرحلة تخلي المنتج يحكي عن حاله</p>
          <p style={descBig}>STANZA… جرّبها مرة، وبتصير عادة.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      fontFamily: "-apple-system",
      background: "#fafafa"
    }}>
      
      {!isMobile && (
        <div style={sidebar}>
          <img src="/images/31d9d2c5-0399-41a2-9d9f-7e86173ab916.png" style={logo} />
          <p style={menu}>الأصابع</p>
          <p style={menu}>بافي كورن</p>
          <p style={menu}>البسكوت</p>
          <p style={{ ...menu, marginTop: "30px" }} onClick={() => setPage("about")}>حولنا</p>
        </div>
      )}

      <div style={{
        flex: 1,
        width: "100%",
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

        <Section title="أصابع ستانزا" subtitle="خفيفة… لكنها تترك أثر" items={fingers} setSelectedProduct={setSelectedProduct} />
        <Section title="بافي كورن" subtitle="نكهات جريئة" items={puffy} setSelectedProduct={setSelectedProduct} />
        <Section title="قطع البسكوت" subtitle="تفاصيل صغيرة" items={biscuit} setSelectedProduct={setSelectedProduct} />

      </div>
    </div>
  );
}

/* باقي الكود نفسو بدون تعديل */
```
