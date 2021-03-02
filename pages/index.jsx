import Head from "next/head";

// Components
import MainForm from "./components/MainForm";

// third libraries
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prendo - Login</title>
        <link rel="icon" href="/P.svg" />
        {/* <div>
          Iconos diseñados por{" "}
          <a
            href="https://www.flaticon.es/autores/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.es/" title="Flaticon">
            www.flaticon.es
          </a>
        </div> */}
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
          <MainForm />
        </div>
      </main>
    </>
  );
}
