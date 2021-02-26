import Head from "next/head";

// third libraries
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KANECODE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="main__carousel">
          <Carousel
            isSelected={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            stopOnHover={true}
            showStatus={false}
          >
            <div>
              <img src="Foto.png" alt="" />
            </div>
            <div>
              <img src="Foto1.png" alt="" />
            </div>
            <div>
              <img src="Foto2.png" alt="" />
            </div>
            <div>
              <img src="Foto3.png" alt="" />
            </div>
          </Carousel>
        </div>
        <div className="main__form">
          <form className="form" action="">
            <h1 className="form__h1 form__h1--left">Iniciar sesión</h1>
            <p className="form__p form__p--left">
              Selecciona como deseas ingresar a la plataforma
            </p>
            <div className="form__buttonGroup">
              <button className="form__button--md form__button--facebook"></button>
              <button className="form__button--md form__button--google"></button>
              <button className="form__button--md form__button--linkedIn"></button>
            </div>
            <label className="form__label" htmlFor="email">
              <span className="form__span--sm form__span--gray label__span">Correo electrónico</span>
              <input
                className="form__input"
                type="text"
                placeholder="Correo electrónico"
              />
            </label>
            <label className="form__label" htmlFor="password">
              <span className="form__span--sm form__span--gray label__span">Contraseña</span>
              <input
                className="form__input"
                type={"password"}
                placeholder="Contraseña"
              />
            </label>
            <span className="form__span form__span--purple form__span--right">
              <a>¿Olvidaste tu contraseña?</a>
            </span>
            <button className="form__button--lg form__button--blue">
              Iniciar sesión
            </button>
            <span className="form__span">
              ¿Aún no tienes cuenta? <a className="form__a--blue">Regístrate</a>
            </span>
          </form>
        </div>
      </main>
    </div>
  );
}
