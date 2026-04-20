import { useState } from "react";

const products = [
  {
    id: 1,
    category: "fingers",
    name: "أصابع شوكولاتة",
    desc: "غنية وناعمة 🍫",
    story: "شوكولاتة… تذوب ببطء… وتترك قرمشة لا تُنسى.",
    details: [
      "الوزن: 12 غرام",
      "الطول: 9 سم",
      "24 قطعة بالعلبة",
      "6 علب بالكرتونة",
      "وزن الكرتونة: 2.6 كغ",
    ],
    img: "/images/IMG_8216.PNG",
  },
  {
    id: 2,
    category: "fingers",
    name: "أصابع فراولة",
    desc: "منعشة وخفيفة 🍓",
    story: "نكهة لطيفة… بإحساس مختلف… تبدأ من أول قضمة.",
    details: ["نفس مواصفات الشوكولاتة"],
    img: "/images/IMG_8217.PNG",
  },
  {
    id: 3,
    category: "fingers",
    name: "أصابع جوز الهند",
    desc: "لمسة استوائية 🥥",
    story: "خفيفة… بطابع استوائي… وقرمشة ناعمة.",
    details: ["نفس المواصفات"],
    img: "/images/IMG_8219.PNG",
  },
  {
    id: 4,
    category: "puffy",
    name: "بافي كورن جبنة",
    desc: "نكهة قوية 🧀",
    story: "قرمشة خفيفة… بطعم واضح… يعبي الجو متعة.",
    details: ["25 غرام", "كيس", "12 بالكرتونة", "خفيف بدون ملونات"],
    img: "/images/IMG_8220.PNG",
  },
  {
    id: 5,
    category: "puffy",
    name: "بافي كورن كاتشب",
    desc: "كلاسيك 🍅",
    story: "الطعم المألوف… لكن بطريقة أفضل.",
    img: "/images/IMG_8221.PNG",
  },
  {
    id: 6,
    category: "puffy",
    name: "بافي كورن شطة وليمون",
    desc: "حار ومنعش 🔥🍋",
    story: "ضربة حارة… بلمسة منعشة.",
    img: "/images/IMG_8227.PNG",
  },
  {
    id: 7,
    category: "biscuits",
    name: "قطع بسكوت شوكولاتة",
    desc: "غنية بالكاكاو 🍫",
    story: "تفاصيل صغيرة… بطعم كبير.",
    details: ["45 غرام", "12 بالكرتونة", "750 غرام كرتونة"],
    img: "/images/stanza-finger-choco.jpeg",
  },
];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="app">

      {/* زر القائمة */}
      <div className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${openMenu ? "open" : ""}`}>
        <h2 className="logo">STANZA</h2>

        <p onClick={() => setFilter("all")}>كل المنتجات</p>
        <p onClick={() => setFilter("fingers")}>الأصابع</p>
        <p onClick={() => setFilter("puffy")}>بافي كورن</p>
        <p onClick={() => setFilter("biscuits")}>البسكوت</p>
        <p>حولنا</p>
      </div>

      {/* المحتوى */}
      <div className="content">

        <h1 className="title">
          قرمشة خفيفة… وطعم فاخر
        </h1>

        <p className="subtitle">
          تجربة مختلفة تبدأ من أول قضمة ✨
        </p>

        <div className="grid">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="card"
              onClick={() => setSelected(p)}
            >
              <img src={p.img} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <button>اطلب الآن</button>
            </div>
          ))}
        </div>
      </div>

      {/* مودال التفاصيل */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-box">
            <img src={selected.img} />
            <h2>{selected.name}</h2>
            <p className="story">{selected.story}</p>

            {selected.details && (
              <ul>
                {selected.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <style>{`
        body {margin:0;font-family:sans-serif;}
        .app {display:flex;}

        .menu-btn {
          position:fixed;
          top:20px;
          left:20px;
          font-size:28px;
          cursor:pointer;
          z-index:1000;
        }

        .sidebar {
          width:220px;
          background:#f5f5f5;
          padding:30px;
          position:fixed;
          height:100%;
          transform:translateX(-100%);
          transition:0.3s;
        }

        .sidebar.open {transform:translateX(0);}

        .sidebar p {cursor:pointer;margin:10px 0;}

        .content {
          margin:auto;
          padding:40px;
          max-width:1000px;
        }

        .title {text-align:center;font-size:32px;}
        .subtitle {text-align:center;color:#777;}

        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
          margin-top:40px;
        }

        .card {
          background:white;
          padding:20px;
          border-radius:20px;
          text-align:center;
          cursor:pointer;
          transition:0.3s;
        }

        .card:hover {
          transform:translateY(-10px);
          box-shadow:0 10px 30px rgba(0,0,0,0.1);
        }

        .card img {
          width:100%;
          border-radius:15px;
        }

        button {
          background:black;
          color:white;
          border:none;
          padding:10px 20px;
          border-radius:10px;
          margin-top:10px;
        }

        .modal {
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.5);
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .modal-box {
          background:white;
          padding:30px;
          border-radius:20px;
          max-width:400px;
          text-align:center;
        }

        .modal img {width:100%;border-radius:15px;}

        .story {
          margin:15px 0;
          color:#555;
        }
      `}</style>
    </div>
  );
}