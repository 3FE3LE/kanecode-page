import { Tooltip } from "@material-ui/core";
import Head from "next/head";

export default function Dashboard() {
  const dataChart = [
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
  ];

  const monthlyRewards = [
    {
      month: "Octubre",
      reward: "$629.75",
    },
    {
      month: "Noviembre",
      reward: "$270.18",
    },
    {
      month: "Diciembre",
      reward: "$485.35",
    },
    {
      month: "Enero",
      reward: "$482.53",
    },
    {
      month: "Febrero",
      reward: "$323.61",
    },
    {
      month: "Marzo",
      reward: "$704.15",
    },
  ];

  return (
    <>
      <Head>
        <title>KANECODE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dashboard">
        <aside className="dashboard__aside">
          <h1>Prendo</h1>
          <ul>
            <li>Vista general</li>
            <li>Programas y cursos</li>
            <li>Diseña tu sitio</li>
            <li>Estudiantes / Clientes</li>
            <li>Marketing y Ventas</li>
            <li>Analítica y reporte</li>
          </ul>
          <ul>
            <li>Configuración</li>
          </ul>
        </aside>
        <div className="dashboard__container">
          <nav className="dashboard__nav">
            <input type="text" name="search" />
            <div className="nav">
              <div className="nav__icons">
                <img src="/help.svg" alt="ico1" />
                <img src="/notify.svg" alt="ico2" />
                <img src="/msg.svg" alt="ico3" />
              </div>
              <div className="nav__profile">
                <img src="/Ellipse 5.png" alt="avatar" />
                <span>Liliana Mora</span>
                <img src="/arrow.svg" alt=""/>
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
                  <div className="section--chart">
                    {dataChart.map((item) => (
                      <Tooltip
                        placement="left"
                        interactive
                        title={
                          <>
                            <span className="chart--data">{item.news} Nuevos</span>
                            <span className="chart--data">{item.recurrents} recurrentes</span>
                          </>
                        }
                        children={<div className="chart--space"></div>}
                      ></Tooltip>
                    ))}
                  </div>
                </div>
                <div className="section--division section--vertical--scroll">
                  {monthlyRewards.map((item) => (
                    <div key={item.month}>
                      <span>{item.month}</span>
                      <p>{item.reward}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="content__section--articles">
                <article>
                  <div>
                    <img src="/Image 171.png" alt="" />
                  </div>
                  <span>Tus cursos</span>
                </article>
                <article>
                  <div>
                    <img src="/Image 153.png" alt="" />
                  </div>
                  <span>Personaliza tus sitios</span>
                </article>
                <article>
                  <div>
                    <img src="/Image 155.png" alt="" />
                  </div>
                  <span>Crea un campaña</span>
                </article>
                <article>
                  <div>
                    <img src="/muneca.png" alt="" />
                  </div>
                  <span>Conoce a tus clientes</span>
                </article>
              </section>
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
