import Head from "next/head";
import ArticlesSection from "./components/ArticlesSection";
import AsideCollapseMenu from "./components/AsideCollapseMenu";
import ChartSection from "./components/ChartSection";
import VerticalScrollSection from "./components/VerticalScrollSection";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>KANECODE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dashboard">
        <AsideCollapseMenu />
        <div className="dashboard__container">
          <nav className="dashboard__nav">
            <div className="nav__search-bar">
              <img
                className="search-bar__img"
                src="/search.svg"
                alt="search-ico"
              />
              <input
                className="search-bar__input"
                placeholder="Buscar..."
                type="text"
                name="search"
              />
            </div>
            <div className="nav">
              <div className="nav__icons">
                <img src="/help.svg" alt="ico1" />
                <img src="/notify.svg" alt="ico2" />
                <img src="/msg.svg" alt="ico3" />
              </div>
              <div className="nav__profile">
                <img src="/Ellipse 5.png" alt="avatar" />
                <span>Liliana Mora</span>
                <img src="/arrow.svg" alt="" />
              </div>
            </div>
          </nav>
          <div className="dashboard__content">
            <header className="content__header">
              <div>
                <h2 className="content__h2">
                  ¡Hola Liliana, asi van tus programas!
                </h2>
                <h1 className="content__h1">Vista general</h1>
              </div>
              <div>
                <p className="content__p--bold content__p--red">
                  Curso de fotografiá de alimentos
                </p>
                <p className="content__p--regular ">
                  Calificar actividad del modulo 2
                </p>
              </div>
            </header>
            <section className="content__section--main">
              <div className="section__stats--main">
                <div>
                  <p className="content__p--semibold">08</p>
                  <span className="section__p--regular section__p--sm section__p--center">
                    cursos activos
                  </span>
                </div>
                <div>
                  <p className="content__p--semibold">123</p>
                  <span className="section__p--regular section__p--sm section__p--center">
                    nuevas oportunidades
                  </span>
                </div>
                <div>
                  <p className="content__p--semibold">45</p>
                  <span className="section__p--regular section__p--sm section__p--center">
                    estudiantes registrados
                  </span>
                </div>
                <div>
                  <p className="content__p--semibold">20</p>
                  <span className="section__p--regular section__p--sm section__p--center">
                    certificaciones entregadas
                  </span>
                </div>
              </div>
              <hr />
              <div className="section__stats--secondary">
                <span className="section__p--regular section__p--lg">
                  Tus estudiantes
                </span>
                <img src="/avatar.png" alt="avatarstudents" />
              </div>
            </section>
            <div className="content__section--group">
              <section className="content__section--secondary">
                <div className="section--division section--align--center">
                  <h3>Ganancias reportadas:</h3>
                  <select
                    className="content__select"
                    name="range-time"
                    id="range-select"
                  >
                    <option selected="true" value="">
                      Últimos 6 meses
                    </option>
                  </select>
                </div>
                <div className="section--division">
                  <div className="section--total section--align--start">
                    <p className="content__p--semibold">$ 5863</p>
                    <span className="content__span--bold">
                      Ganancias totales
                    </span>
                  </div>
                  <ChartSection />
                </div>
                <VerticalScrollSection />
              </section>
              <ArticlesSection />
            </div>
            <section className="content__section--footer">
              <h3 className="content__h3 content__h3--lg">
                Conoce como crear...
              </h3>
              <div className="section--footer">
                <img className="footer--img" src="/Group 3191.png" alt="" />
                <div className="footer--info">
                  <h4 className="content__h4">Embudos de conversion</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis facilis quisquam, enim nam reiciendis quas nemo
                    voluptatibus molestias nulla optio illum aliquid accusantium
                    aperiam corrupti inventore reprehenderit esse ipsam quo?
                  </p>
                  <button>Iniciar ahora</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
