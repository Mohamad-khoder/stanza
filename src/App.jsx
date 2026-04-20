import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("all");

  const products = [
    { id: 1, name: "أصابع شوكولاتة", cat: "fingers", img: "/images/stanza-finger-choco.jpeg", desc: "غنية وناعمة 🍫" },
    { id: 2, name: "أصابع فراولة", cat: "fingers", img: "/images/IMG_8217.PNG", desc: "منعشة وخفيفة 🍓" },
    { id: 3, name: "أصابع جوز الهند", cat: "fingers", img: "/images/IMG_8216.PNG", desc: "لمسة استوائية 🥥" },

    { id: 4, name: "بافي كورن جبنة", cat: "puffy", img: "/images/IMG_8227.PNG", desc: "نكهة قوية 🧀" },
    { id: 5, name: "بافي كورن كاتشب", cat: "puffy", img: "/images/IMG_8221.PNG", desc: "كلاسيك 🍅" },
    { id: 6, name: "بافي كورن شطة وليمون", cat: "puffy", img: "/images/IMG_8220.PNG", desc: "حار ومنعش 🔥🍋" },

    { id: 7, name: "قطع بسكوت شوكولاتة", cat: "biscuit", img: "/images/IMG_8219.PNG", desc: "غنية بالكاكاو 🍫" },
  ];

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.cat === category);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: #f6f6f6;
        }

        .container {
          display: flex;
        }

        .sidebar {
          width: 220px;
          background: #f2f2f2;
          padding: 30px 20px;
          height: 100vh;
          position: fixed;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .logo {
          color: #e68a5c;
        }

        .sidebar button {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          text-align: right;
        }

        .content {
          margin-left: 220px;
          padding: 40px;
          width: 100%;
        }

        .hero {
          text-align: center;
          font-size: 32px;
        }

        .sub {
          text-align: center;
          color: #777;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .card {
          background: white;
          border-radius: 20px;
          padding: 20px;
          text-align: center;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .card img {
          width: 100%;
          border-radius: 15px;
        }

        .card button {
          margin-top: 10px;
          padding: 10px 20px;
          border: none;
          background: black;
          color: white;
          border-radius: 10px;
          cursor: pointer;
        }

        /* 🔥 Mobile Fix */
        @media (max-width: 768px) {

          .container {
            flex-direction: column;
          }

          .sidebar {
            position: relative;
            width: 100%;
            height: auto;
            flex-direction: row;
            justify-content: space-around;
          }

          .content {
            margin-left: 0;
            padding: 20px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

        }
      `}</style>

      <div className="container">

        {/* Sidebar */}
        <div className="sidebar">
          <h2 className="logo">ستانزا</h2>

          <button onClick={() => setCategory("all")}>كل المنتجات</button>
          <button onClick={() => setCategory("fingers")}>الأصابع</button>
          <button onClick={() => setCategory("puffy")}>بافي كورن</button>
          <button onClick={() => setCategory("biscuit")}>البسكوت</button>
          <button>حولنا</button>
        </div>

        {/* Content */}
        <div className="content">

          <h1 className="hero">قرمشة خفيفة... وطعم فاخر</h1>
          <p className="sub">✨ تجربة مختلفة تبدأ من أول قضمة</p>

          <div className="grid">
            {filtered.map((p) => (
              <div className="card" key={p.id}>
                <img src={p.img} alt="" />
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <button>اطلب الآن</button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}