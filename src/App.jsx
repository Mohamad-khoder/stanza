import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    category: "fingers",
    name: "أصابع شوكولاتة",
    desc: "غنية وناعمة 🍫",
    story: "شوكولاتة… تذوب ببطء… وتترك قرمشة لا تُنسى.",
    details: ["12 غرام", "9 سم", "24 قطعة", "6 علب", "2.6 كغ"],
    img: "/images/IMG_8216.PNG",
  },
  {
    id: 2,
    category: "fingers",
    name: "أصابع فراولة",
    desc: "منعشة وخفيفة 🍓",
    story: "نكهة لطيفة… بإحساس مختلف… تبدأ من أول قضمة.",
    img: "/images/IMG_8217.PNG",
  },
  {
    id: 3,
    category: "fingers",
    name: "أصابع جوز الهند",
    desc: "لمسة استوائية 🥥",
    story: "خفيفة… بطابع استوائي… وقرمشة ناعمة.",
    img: "/images/IMG_8219.PNG",
  },
  {
    id: 4,
    category: "puffy",
    name: "بافي كورن جبنة",
    desc: "نكهة قوية 🧀",
    story: "قرمشة خفيفة… بطعم واضح… يعبي الجو متعة.",
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
    img: "/images/stanza-finger-choco.jpeg",
  },
];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [menu, setMenu] = useState(false);

  // scroll animation
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="app">

      {/* زر القائمة */}
      <div className="menu" onClick={() => setMenu(!menu)}>☰</div>

      {/* sidebar */}
      <div className={`sidebar ${menu ? "open" : ""}`}>
        <h2>STANZA</h2>
        <p onClick={() => setFilter("all")}>كل المنتجات</p>
        <p onClick={() => setFilter("fingers")}>الأصابع</p>
        <p onClick={() => setFilter("puffy")}>بافي كورن</p>
        <p onClick={() => setFilter("biscuits")}>البسكوت</p>
      </div>

      {/* HERO */}
      <section className="hero">
        <h1 className="reveal">قرمشة خفيفة… وطعم فاخر</h1>
        <p className="reveal">تجربة تبدأ من أول قضمة ✨</p>
      </section>

      {/* PRODUCTS */}
      <section className="grid">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="card reveal"
            onClick={() => setSelected(p)}
          >
            <div className="imgWrap">
              <img src={p.img} />
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modalBox">
            <img src={selected.img} />
            <h2>{selected.name}</h2>
            <p>{selected.story}</p>
          </div>
        </div>
      )}

      <style>{`
        body{margin:0;font-family:sans-serif;background:#fff}

        .menu{
          position:fixed;
          top:20px;
          left:20px;
          font-size:28px;
          cursor:pointer;
          z-index:1000;
        }

        .sidebar{
          position:fixed;
          width:220px;
          height:100%;
          background:#f5f5f5;
          padding:30px;
          transform:translateX(-100%);
          transition:0.4s;
        }

        .sidebar.open{
          transform:translateX(0);
        }

        .hero{
          height:60vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
        }

        .hero h1{
          font-size:40px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:30px;
          padding:40px;
        }

        .card{
          background:#fff;
          border-radius:25px;
          padding:20px;
          text-align:center;
          transition:0.4s;
          transform:perspective(1000px);
        }

        .card:hover{
          transform:scale(1.05) rotateX(3deg);
          box-shadow:0 20px 40px rgba(0,0,0,0.1);
        }

        .imgWrap{
          overflow:hidden;
          border-radius:20px;
        }

        img{
          width:100%;
          transition:0.4s;
        }

        .card:hover img{
          transform:scale(1.1);
        }

        /* reveal animation */
        .reveal{
          opacity:0;
          transform:translateY(60px);
          transition:0.8s;
        }

        .reveal.active{
          opacity:1;
          transform:translateY(0);
        }

        .modal{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.6);
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .modalBox{
          background:white;
          padding:30px;
          border-radius:20px;
          max-width:400px;
          text-align:center;
        }

        @media(max-width:768px){
          .hero h1{font-size:26px;}
          .grid{padding:20px;}
        }
      `}</style>
    </div>
  );
}