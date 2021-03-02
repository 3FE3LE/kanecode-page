import Head from "next/head";

// Components
import Navbar from "./components/Navbar";
import ChartSection from "./components/ChartSection";
import TooltipCustom from "./components/TooltipCustom";
import ArticlesSection from "./components/ArticlesSection";
import AsideCollapseMenu from "./components/AsideCollapseMenu";
import VerticalScrollSection from "./components/VerticalScrollSection";

export default function Dashboard() {
  const date = new Date();

  var months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const month = date.getMonth();
  const day = date.getDay();

  return (
    <>
      <Head>
        <title>Prendo - Home</title>
        <link rel="icon" href="/P.svg" />
      </Head>
      <main className="dashboard">
        <AsideCollapseMenu />
        <div className="dashboard__container">
          <Navbar />
          <div className="dashboard__content">
            <header className="content__header">
              <div>
                <h2 className="content__h2">
                  ¡Hola Liliana, asi van tus programas!
                </h2>
                <h1 className="content__h1">Vista general</h1>
              </div>
              <div className="header__calendar">
                <div className="header__calendar--date">
                  <p>{day}</p>
                  <span>{months[month]}</span>
                </div>
                <div className="header__calendar--details">
                  <p className="content__p--bold content__p--red">
                    Curso de fotografiá de alimentos
                  </p>
                  <p className="content__p--regular ">
                    Calificar actividad del modulo 2
                  </p>
                </div>
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
                <TooltipCustom
                  placement="left"
                  title={
                    <div className="stats__tooltip">
                      <p className="chart--data">
                        <div className="data--new"></div>
                        <strong>14</strong> Activos
                      </p>
                      <p className="chart--data">
                        <div className="data--recurrent"></div>
                        <strong>22</strong> Inactivos
                      </p>
                    </div>
                  }
                >
                  <img src="/avatar.png" alt="avatarstudents" />
                </TooltipCustom>
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
