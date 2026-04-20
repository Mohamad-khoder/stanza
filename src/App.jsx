import { useEffect } from "react";

export default function App() {

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

  return (
    <div className="app">

      {/* LOGO */}
      <div className="logo">STANZA</div>

      {/* HERO */}
      <section className="hero">
        <h1 className="reveal">
          قرمشة خفيفة… وطعم فاخر
        </h1>
        <p className="reveal">
          تجربة تبدأ من أول قضمة… وتبقى في الذاكرة
        </p>
      </section>

      {/* ========= FINGERS ========= */}
      <section className="section">
        <h2 className="title reveal">ستانزا أصابع الذرة</h2>
        <p className="subtitle reveal">
          خفيفة… لكنها تترك أثر لا يُنسى
        </p>

        <div className="grid">

          <div className="card reveal">
            <img src="/images/IMG_8216.PNG" />
            <h3>شوكولاتة</h3>
            <p>غنية وناعمة 🍫</p>
            <p className="story">
              شوكولاتة تذوب ببطء… وقرمشة تبقى
            </p>
            <ul>
              <li>12 غرام</li>
              <li>9 سم</li>
              <li>24 قطعة</li>
              <li>6 علب</li>
            </ul>
          </div>

          <div className="card reveal">
            <img src="/images/IMG_8217.PNG" />
            <h3>فراولة</h3>
            <p>منعشة وخفيفة 🍓</p>
            <p className="story">
              نكهة تبدأ ناعمة… وتنتهي بإحساس مختلف
            </p>
          </div>

          <div className="card reveal">
            <img src="/images/IMG_8219.PNG" />
            <h3>جوز الهند</h3>
            <p>لمسة استوائية 🥥</p>
            <p className="story">
              خفيفة… بطابع استوائي هادئ
            </p>
          </div>

        </div>
      </section>

      {/* ========= PUFFY ========= */}
      <section className="section dark">
        <h2 className="title reveal">ستانزا بافي كورن</h2>
        <p className="subtitle reveal">
          نكهات جريئة… مصممة لتفاجئك
        </p>

        <div className="grid">

          <div className="card reveal">
            <img src="/images/IMG_8220.PNG" />
            <h3>جبنة</h3>
            <p>نكهة قوية 🧀</p>
            <p className="story">
              قرمشة خفيفة… بطعم واضح
            </p>
            <ul>
              <li>25 غرام</li>
              <li>كيس</li>
              <li>12 بالكرتونة</li>
              <li>بدون ملونات</li>
            </ul>
          </div>

          <div className="card reveal">
            <img src="/images/IMG_8221.PNG" />
            <h3>كاتشب</h3>
            <p>كلاسيك 🍅</p>
            <p className="story">
              الطعم المألوف… لكن أفضل
            </p>
          </div>

          <div className="card reveal">
            <img src="/images/IMG_8227.PNG" />
            <h3>شطة وليمون</h3>
            <p>حار ومنعش 🔥🍋</p>
            <p className="story">
              ضربة حارة… بلمسة منعشة
            </p>
          </div>

        </div>
      </section>

      {/* ========= BISCUITS ========= */}
      <section className="section">
        <h2 className="title reveal">ستانزا قطع الذرة</h2>
        <p className="subtitle reveal">
          تفاصيل صغيرة… بطعم كبير
        </p>

        <div className="grid">

          <div className="card reveal">
            <img src="/images/stanza-finger-choco.jpeg" />
            <h3>شوكولاتة</h3>
            <p>غنية بالكاكاو 🍫</p>
            <p className="story">
              كل قطعة… تجربة مكثفة
            </p>
            <ul>
              <li>45 غرام</li>
              <li>12 بالكرتونة</li>
              <li>750 غرام</li>
            </ul>
          </div>

        </div>
      </section>

      {/* STYLE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

        body {
          margin:0;
          font-family: 'Inter', sans-serif;
          background:#fff;
        }

        .logo{
          position:fixed;
          top:20px;
          left:30px;
          font-weight:500;
          font-size:20px;
          letter-spacing:2px;
        }

        .hero{
          height:70vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
        }

        .hero h1{
          font-size:42px;
          font-weight:300;
        }

        .hero p{
          color:#777;
        }

        .section{
          padding:80px 40px;
        }

        .section.dark{
          background:#111;
          color:white;
        }

        .title{
          text-align:center;
          font-size:28px;
          font-weight:400;
        }

        .subtitle{
          text-align:center;
          color:#777;
          margin-bottom:40px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:30px;
        }

        .card{
          background:white;
          border-radius:25px;
          padding:20px;
          text-align:center;
          transition:0.4s;
        }

        .section.dark .card{
          background:#1a1a1a;
        }

        .card:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 40px rgba(0,0,0,0.1);
        }

        img{
          width:100%;
          border-radius:20px;
        }

        .story{
          color:#888;
          font-size:14px;
          margin:10px 0;
        }

        ul{
          padding:0;
          list-style:none;
          font-size:13px;
          color:#555;
        }

        .reveal{
          opacity:0;
          transform:translateY(60px);
          transition:0.8s;
        }

        .reveal.active{
          opacity:1;
          transform:translateY(0);
        }

        @media(max-width:768px){
          .hero h1{font-size:26px;}
          .section{padding:40px 20px;}
        }
      `}</style>
    </div>
  );
}