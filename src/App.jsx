import { useEffect, useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);

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

  const openProduct = (product) => {
    setSelected(product);
  };

  return (
    <div>

      {/* LOGO */}
      <div className="logo">STANZA</div>

      {/* HERO */}
      <section className="hero">
        <h1 className="reveal">قرمشة خفيفة… وطعم فاخر</h1>
        <p className="reveal">تجربة تبدأ من أول قضمة ✨</p>
      </section>

      {/* ===== أصابع ===== */}
      <section className="section">
        <h2 className="title reveal">ستانزا أصابع الذرة</h2>
        <p className="subtitle reveal">
          خفيفة… لكنها تترك أثر لا يُنسى
        </p>

        <div className="grid">

          <div className="card reveal" onClick={() => openProduct({
            name:"أصابع شوكولاتة",
            img:"/images/IMG_8216.PNG",
            story:"شوكولاتة تذوب ببطء… وقرمشة تبقى",
            details:[
              "12 غرام",
              "9 سم",
              "24 قطعة",
              "6 علب",
              "2.6 كغ"
            ]
          })}>
            <img src="/images/IMG_8216.PNG"/>
            <h3>شوكولاتة</h3>
            <p>غنية وناعمة 🍫</p>
          </div>

          <div className="card reveal" onClick={() => openProduct({
            name:"أصابع فراولة",
            img:"/images/IMG_8217.PNG",
            story:"نكهة تبدأ ناعمة… وتنتهي بإحساس مختلف",
            details:["نفس المواصفات"]
          })}>
            <img src="/images/IMG_8217.PNG"/>
            <h3>فراولة</h3>
            <p>منعشة وخفيفة 🍓</p>
          </div>

          <div className="card reveal" onClick={() => openProduct({
            name:"أصابع جوز الهند",
            img:"/images/IMG_8219.PNG",
            story:"خفيفة بطابع استوائي",
            details:["نفس المواصفات"]
          })}>
            <img src="/images/IMG_8219.PNG"/>
            <h3>جوز الهند</h3>
            <p>لمسة استوائية 🥥</p>
          </div>

        </div>
      </section>

      {/* ===== بافي كورن ===== */}
      <section className="section dark">
        <h2 className="title reveal">ستانزا بافي كورن</h2>
        <p className="subtitle reveal">
          نكهات جريئة… مصممة لتفاجئك
        </p>

        <div className="grid">

          <div className="card reveal" onClick={() => openProduct({
            name:"جبنة",
            img:"/images/IMG_8220.PNG",
            story:"قرمشة خفيفة بطعم واضح",
            details:["25 غرام","12 بالكرتونة","بدون ملونات"]
          })}>
            <img src="/images/IMG_8220.PNG"/>
            <h3>جبنة</h3>
          </div>

          <div className="card reveal" onClick={() => openProduct({
            name:"كاتشب",
            img:"/images/IMG_8221.PNG",
            story:"الطعم المألوف… لكن أفضل"
          })}>
            <img src="/images/IMG_8221.PNG"/>
            <h3>كاتشب</h3>
          </div>

          <div className="card reveal" onClick={() => openProduct({
            name:"شطة وليمون",
            img:"/images/IMG_8227.PNG",
            story:"ضربة حارة بلمسة منعشة"
          })}>
            <img src="/images/IMG_8227.PNG"/>
            <h3>شطة وليمون</h3>
          </div>

        </div>
      </section>

      {/* ===== قطع ===== */}
      <section className="section">
        <h2 className="title reveal">ستانزا قطع الذرة</h2>
        <p className="subtitle reveal">
          تفاصيل صغيرة… بطعم كبير
        </p>

        <div className="grid">
          <div className="card reveal" onClick={() => openProduct({
            name:"قطع شوكولاتة",
            img:"/images/stanza-finger-choco.jpeg",
            story:"كل قطعة تجربة مكثفة",
            details:["45 غرام","12 بالكرتونة","750 غرام"]
          })}>
            <img src="/images/stanza-finger-choco.jpeg"/>
            <h3>شوكولاتة</h3>
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modalBox">
            <img src={selected.img}/>
            <h2>{selected.name}</h2>
            <p className="story">{selected.story}</p>

            {selected.details && (
              <ul>
                {selected.details.map((d,i)=><li key={i}>{d}</li>)}
              </ul>
            )}
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

        body{margin:0;font-family:Inter;}

        .logo{
          position:fixed;
          top:20px;
          left:30px;
          font-weight:500;
        }

        .hero{
          height:70vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
        }

        .section{padding:80px 40px;}
        .dark{background:#111;color:white;}

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:25px;
        }

        .card{
          background:white;
          border-radius:20px;
          padding:15px;
          text-align:center;
          cursor:pointer;
          transition:0.3s;
        }

        .dark .card{background:#1a1a1a;}

        .card:hover{
          transform:translateY(-8px);
        }

        img{width:100%;border-radius:15px;}

        .modal{
          position:fixed;
          top:0;left:0;
          width:100%;height:100%;
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

        .reveal{
          opacity:0;
          transform:translateY(40px);
          transition:0.6s;
        }

        .reveal.active{
          opacity:1;
          transform:translateY(0);
        }
      `}</style>

    </div>
  );
}